// ========================================
// RGAA Audit — Application Frontend
// ========================================

(function () {
  'use strict';

  // --- State ---
  let currentPage = 'dashboard';
  let reportData = null;
  let scanSSE = null;

  // --- DOM Refs ---
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const liveRegion = $('#live-region');

  // --- Init ---
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupTheme();
    setupNavigation();
    setupMobileMenu();
    loadConfig();
    navigateFromHash();
    window.addEventListener('hashchange', navigateFromHash);
  }

  // ========== THEME ==========
  function setupTheme() {
    const saved = localStorage.getItem('rgaa-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeButton(saved);
    $('#theme-toggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('rgaa-theme', next);
      updateThemeButton(next);
    });
  }

  function updateThemeButton(theme) {
    const btn = $('#theme-toggle');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre');
  }

  // ========== NAVIGATION ==========
  function setupNavigation() {
    $$('[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        window.location.hash = page;
      });
    });
  }

  function navigateFromHash() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    showPage(hash);
  }

  function showPage(page) {
    currentPage = page;
    // Hide all pages
    $$('.page').forEach(p => { p.style.display = 'none'; p.classList.remove('active'); });
    // Show target
    const target = $(`#page-${page}`);
    if (target) {
      target.style.display = 'block';
      target.classList.add('active');
    }
    // Update nav
    $$('.nav-item a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });
    // Close mobile menu
    closeMobileMenu();
    // Load page data
    loadPageData(page);
    // Announce page change
    announce(`Page ${page} affichée`);
  }

  function loadPageData(page) {
    switch (page) {
      case 'dashboard': loadDashboard(); break;
      case 'results': loadResults(); break;
      case 'fixes': loadFixes(); break;
      case 'legal': loadLegalDocs(); break;
      case 'checklist': loadChecklist(); break;
    }
  }

  // ========== MOBILE MENU ==========
  function setupMobileMenu() {
    $('#menu-toggle').addEventListener('click', () => {
      const sidebar = $('#sidebar');
      const overlay = $('#sidebar-overlay');
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) closeMobileMenu();
      else {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        $('#menu-toggle').setAttribute('aria-expanded', 'true');
      }
    });
    $('#sidebar-overlay').addEventListener('click', closeMobileMenu);
  }

  function closeMobileMenu() {
    $('#sidebar').classList.remove('open');
    $('#sidebar-overlay').classList.remove('open');
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
  }

  // ========== ANNOUNCE (ARIA) ==========
  function announce(text) {
    liveRegion.textContent = text;
  }

  // ========== TOAST ==========
  function toast(message, type = 'info') {
    const container = $('#toast-container');
    const div = document.createElement('div');
    div.className = `toast toast-${type}`;
    div.textContent = message;
    div.setAttribute('role', 'status');
    container.appendChild(div);
    setTimeout(() => { div.remove(); }, 4000);
  }

  // ========== API ==========
  async function api(url, options = {}) {
    try {
      const res = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
        body: options.body ? JSON.stringify(options.body) : undefined
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      toast(`Erreur : ${e.message}`, 'error');
      throw e;
    }
  }

  // ========== CONFIG ==========
  async function loadConfig() {
    try {
      const cfg = await api('/api/config');
      if ($('#start-url')) {
        $('#start-url').value = cfg.startUrl || '';
        $('#max-pages').value = cfg.maxPages || 30;
        $('#same-origin').value = String(cfg.sameOriginOnly !== false);
        if (cfg.organisation) {
          $('#org-nom').value = cfg.organisation.nom || '';
          $('#org-site').value = cfg.organisation.siteNom || '';
          $('#org-email').value = cfg.organisation.email || '';
          $('#org-adresse').value = cfg.organisation.adresse || '';
        }
        window.RgaaI18n?.refresh();
      }
      // Setup form handler
      const form = $('#audit-form');
      if (form && !form.dataset.bound) {
        form.dataset.bound = 'true';
        form.addEventListener('submit', handleScan);
      }
    } catch { /* ignore on first load */ }
  }

  // ========== DASHBOARD ==========
  async function loadDashboard() {
    try {
      const results = await api('/api/results');
      if (!results || !results.pages || results.pages.length === 0) return;
      // Try to load report data too
      try {
        reportData = await api('/api/report');
      } catch {
        // Report may not exist yet, compute basic stats from results
        reportData = null;
      }
      renderDashboard(results);
    } catch { /* no results yet */ }
  }

  function renderDashboard(results) {
    const container = $('#dashboard-content');
    const pages = results.pages;
    const totalViolations = pages.reduce((s, p) => s + p.violations.length, 0);
    const uniqueRules = new Set(pages.flatMap(p => p.violations.map(v => v.id))).size;
    const pagesWithIssues = pages.filter(p => p.violations.length > 0).length;

    let html = '';

    // Stat cards
    html += '<div class="card-grid">';
    html += statCard(pages.length, 'Pages analysées');
    html += statCard(totalViolations, 'Violations totales');
    html += statCard(uniqueRules, 'Règles en échec');
    html += statCard(pagesWithIssues, 'Pages avec problèmes');
    html += '</div>';

    if (reportData) {
      // Gauge
      const impactedCriteria = Object.keys(reportData.byTheme || {}).length;
      const total = reportData.totalCriteres || 106;
      const failedThemes = reportData.rows ? new Set(reportData.rows.flatMap(r => r.rgaa)).size : 0;
      const passRate = Math.max(0, Math.min(100, ((1 - failedThemes / total) * 100))).toFixed(1);

      html += '<div class="card-grid" style="grid-template-columns: 1fr 2fr">';
      html += `<div class="card gauge-container">
        <h3 class="card-title">Conformité estimée</h3>
        ${renderGauge(parseFloat(passRate))}
        <p class="text-sm text-muted mt-md">Basé sur les tests automatiques uniquement</p>
      </div>`;

      // Bar chart by theme
      html += `<div class="card">
        <h3 class="card-title">Violations par thématique RGAA</h3>
        <div class="bar-chart mt-md">${renderThemeChart(reportData)}</div>
      </div>`;
      html += '</div>';

      // Impact breakdown
      if (reportData.byImpact) {
        html += '<div class="card mt-lg">';
        html += '<h3 class="card-title">Répartition par impact</h3>';
        html += '<div class="card-grid" style="margin-top:1rem">';
        for (const [impact, count] of Object.entries(reportData.byImpact)) {
          html += `<div class="stat-card card" style="padding:1rem">
            <span class="badge badge-${impact}">${impact}</span>
            <div class="stat-value" style="margin-top:0.5rem">${count}</div>
          </div>`;
        }
        html += '</div></div>';
      }

      // Regressions warning
      if (reportData.regressions && reportData.regressions.length > 0) {
        html += `<div class="alert alert-error mt-lg">
          <strong>⚠️ ${reportData.regressions.length} régression(s) détectée(s)</strong> par rapport à la baseline.
        </div>`;
      }
    }

    html += `<div class="mt-lg text-sm text-muted">
      <p>Dernière analyse : ${results.date ? new Date(results.date).toLocaleString(document.documentElement.lang === 'en' ? 'en-GB' : 'fr-FR') : 'N/A'}</p>
      <p>Site : ${escHtml(results.startUrl || '')}</p>
    </div>`;

    container.innerHTML = html;
  }

  function statCard(value, label) {
    return `<div class="card stat-card">
      <div class="stat-value">${value}</div>
      <div class="stat-label">${label}</div>
    </div>`;
  }

  function renderGauge(percent) {
    const r = 70;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (percent / 100) * circumference;
    const color = percent >= 75 ? '#18753C' : percent >= 50 ? '#B34000' : '#CE0500';
    return `<svg class="gauge-svg" viewBox="0 0 180 180" role="img" aria-label="Conformité : ${percent}%">
      <circle class="gauge-track" cx="90" cy="90" r="${r}"/>
      <circle class="gauge-fill" cx="90" cy="90" r="${r}"
        stroke="${color}"
        stroke-dasharray="${circumference}"
        stroke-dashoffset="${offset}"
        transform="rotate(-90 90 90)"/>
      <text class="gauge-text" x="90" y="85" text-anchor="middle">${percent}%</text>
      <text class="gauge-label" x="90" y="108" text-anchor="middle">conformité</text>
    </svg>`;
  }

  function renderThemeChart(data) {
    if (!data.themes || !data.byTheme) return '';
    const maxViolations = Math.max(1, ...Object.values(data.byTheme).map(t => t.violations));
    let html = '';
    for (const theme of data.themes) {
      const t = data.byTheme[theme.id] || { violations: 0 };
      const pct = (t.violations / maxViolations * 100).toFixed(0);
      const cls = t.violations > 5 ? 'high' : t.violations > 2 ? 'medium' : 'low';
      html += `<div class="bar-row">
        <div class="bar-label" title="${theme.nom}">${theme.nom}</div>
        <div class="bar-track"><div class="bar-fill ${cls}" style="width:${pct}%"></div></div>
        <div class="bar-value">${t.violations}</div>
      </div>`;
    }
    return html;
  }

  // ========== SCAN ==========
  async function handleScan(e) {
    e.preventDefault();
    const url = $('#start-url').value.trim();
    if (!url) { toast('Veuillez entrer une URL', 'error'); return; }

    const config = {
      startUrl: url,
      maxPages: parseInt($('#max-pages').value) || 30,
      sameOriginOnly: $('#same-origin').value === 'true',
      axeTags: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
      failOnImpact: ['critical', 'serious'],
      maxAllowedFailures: 0,
      organisation: {
        nom: $('#org-nom').value,
        siteNom: $('#org-site').value,
        email: $('#org-email').value,
        adresse: $('#org-adresse').value
      }
    };

    // Show progress
    $('#scan-progress').style.display = 'block';
    $('#btn-scan').disabled = true;
    $('#scan-status').textContent = 'Scan en cours…';
    $('#scan-log').innerHTML = '';
    $('#scan-progress-bar').style.width = '0%';
    announce('Scan en cours');

    // Start SSE listener
    if (scanSSE) scanSSE.close();
    scanSSE = new EventSource('/api/scan/status');
    scanSSE.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      handleScanMessage(msg, config.maxPages);
    };
    scanSSE.onerror = () => {
      scanSSE.close();
      scanSSE = null;
    };

    // Trigger scan
    try {
      await api('/api/scan', { method: 'POST', body: config });
    } catch (e) {
      $('#btn-scan').disabled = false;
      $('#scan-status').textContent = 'Erreur au lancement';
      toast('Erreur lors du lancement du scan', 'error');
    }
  }

  function handleScanMessage(msg, maxPages) {
    const log = $('#scan-log');
    const progressBar = $('#scan-progress-bar');
    const progressText = $('#scan-progress-text');

    switch (msg.type) {
      case 'connected':
        if (msg.data?.scanning) addLogEntry(log, 'Connecté au scan en cours…', 'success');
        break;
      case 'status':
        addLogEntry(log, msg.data);
        progressText.textContent = msg.data;
        break;
      case 'scanning':
        addLogEntry(log, `Scan de : ${msg.data.url}`);
        const pct = (msg.data.current / (maxPages || 30) * 100).toFixed(0);
        progressBar.style.width = `${pct}%`;
        progressBar.setAttribute('aria-valuenow', pct);
        progressText.textContent = `Page ${msg.data.current}/${maxPages || 30} : ${msg.data.url}`;
        break;
      case 'page_done':
        addLogEntry(log, `[Page ${msg.data.id}] ${msg.data.url} → ${msg.data.violations} violation(s)`,
          msg.data.violations > 0 ? 'warn' : 'success');
        break;
      case 'warn':
        addLogEntry(log, `[Attention] ${msg.data}`, 'warn');
        break;
      case 'error':
        addLogEntry(log, `[Erreur] ${msg.data}`, 'error');
        toast(`Erreur de scan : ${msg.data}`, 'error');
        break;
      case 'done':
        addLogEntry(log, `[Succès] Scan terminé : ${msg.data.totalPages} pages analysées`, 'success');
        progressBar.style.width = '100%';
        progressBar.setAttribute('aria-valuenow', '100');
        progressText.textContent = `Terminé : ${msg.data.totalPages} pages analysées`;
        toast('Scan terminé avec succès', 'success');
        announce('Scan terminé');
        break;
      case 'finished':
        $('#btn-scan').disabled = false;
        $('#scan-status').textContent = 'Scan terminé';
        if (scanSSE) { scanSSE.close(); scanSSE = null; }
        // Reload dashboard data
        loadDashboard();
        break;
    }
    // Auto-scroll log
    log.scrollTop = log.scrollHeight;
  }

  function addLogEntry(container, text, cls = '') {
    const entry = document.createElement('div');
    entry.className = `scan-log-entry ${cls}`;
    entry.textContent = `[${new Date().toLocaleTimeString(document.documentElement.lang === 'en' ? 'en-GB' : 'fr-FR')}] ${text}`;
    container.appendChild(entry);
  }

  // ========== RESULTS ==========
  async function loadResults() {
    const container = $('#results-content');
    try {
      reportData = await api('/api/report');
      renderResults(container, reportData);
    } catch {
      // No report available
    }
  }

  function renderResults(container, data) {
    if (!data || !data.rows || data.rows.length === 0) {
      container.innerHTML = `<div class="empty-state">
        <div class="empty-icon" aria-hidden="true">📊</div>
        <p>Aucune violation détectée ou pas de résultats.</p>
      </div>`;
      return;
    }

    let html = '';

    // Summary
    html += `<div class="card mb-lg">
      <div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));gap:1rem">`;
    html += miniStat(data.totalPages, 'Pages');
    html += miniStat(data.rows.length, 'Violations');
    html += miniStat(data.failing, 'Bloquantes');
    html += miniStat(data.regressions?.length || 0, 'Régressions');
    html += '</div></div>';

    // Filters
    html += '<div class="filters" role="group" aria-label="Filtrer par impact">';
    html += '<span class="text-sm" style="font-weight:600">Filtrer :</span>';
    html += '<button class="filter-btn active" data-filter="all">Tous</button>';
    for (const impact of ['critical', 'serious', 'moderate', 'minor']) {
      const count = data.byImpact?.[impact] || 0;
      if (count > 0) {
        html += `<button class="filter-btn" data-filter="${impact}">${impact} (${count})</button>`;
      }
    }
    html += '</div>';

    // Tabs: par critère / par page
    html += `<div class="tabs" role="tablist">
      <button class="tab-btn active" role="tab" aria-selected="true" data-tab="by-criteria">Par critère RGAA</button>
      <button class="tab-btn" role="tab" aria-selected="false" data-tab="by-page">Par page</button>
    </div>`;

    // Tab 1: by criteria
    html += '<div class="tab-panel active" id="tab-by-criteria">';
    html += renderResultsTable(data.rows);
    html += '</div>';

    // Tab 2: by page
    html += '<div class="tab-panel" id="tab-by-page">';
    html += renderResultsByPage(data);
    html += '</div>';

    // Export buttons
    html += `<div class="mt-lg" style="display:flex;gap:1rem;flex-wrap:wrap">
      <button class="btn btn-secondary btn-sm" id="btn-export-json">Export JSON</button>
      <button class="btn btn-secondary btn-sm" id="btn-generate-fixes">Générer les corrections IA</button>
    </div>`;

    container.innerHTML = html;

    // Setup filter buttons
    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterResults(btn.dataset.filter);
      });
    });

    // Setup tabs
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        $(`#tab-${btn.dataset.tab}`).classList.add('active');
      });
    });

    // Export JSON
    const btnExport = $('#btn-export-json');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'rgaa-audit-report.json';
        a.click();
        toast('Export JSON téléchargé', 'success');
      });
    }

    // Generate fixes
    const btnFixes = $('#btn-generate-fixes');
    if (btnFixes) {
      btnFixes.addEventListener('click', async () => {
        btnFixes.disabled = true;
        btnFixes.textContent = 'Génération en cours…';
        try {
          await api('/api/fix', { method: 'POST', body: {} });
          toast('Prompts de correction générés', 'success');
          btnFixes.textContent = 'Corrections générées';
        } catch {
          btnFixes.textContent = 'Générer les corrections IA';
          btnFixes.disabled = false;
        }
      });
    }
  }

  function renderResultsTable(rows) {
    let html = '<div class="table-container"><table>';
    html += '<caption class="sr-only">Violations d\'accessibilité détectées</caption>';
    html += `<thead><tr>
      <th scope="col">Impact</th>
      <th scope="col">Règle axe</th>
      <th scope="col">Critères RGAA</th>
      <th scope="col">Occ.</th>
      <th scope="col">Page</th>
    </tr></thead><tbody>`;

    for (const r of rows) {
      html += `<tr class="result-row" data-impact="${r.impact}">
        <td><span class="badge badge-${r.impact}">${r.impact}</span></td>
        <td><a href="${escAttr(r.url)}" target="_blank" rel="noopener">${escHtml(r.rule)}</a><br><span class="text-sm text-muted">${escHtml(r.help)}</span></td>
        <td>${r.rgaa.join(', ')}</td>
        <td>${r.count}</td>
        <td class="text-sm" style="max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${escAttr(r.page)}">${escHtml(r.page)}</td>
      </tr>`;
      if (r.sample) {
        html += `<tr class="result-row" data-impact="${r.impact}" style="display:none"><td colspan="5"><div class="code-block">${escHtml(r.sample.slice(0, 500))}</div></td></tr>`;
      }
    }
    html += '</tbody></table></div>';
    return html;
  }

  function renderResultsByPage(data) {
    if (!data.rows) return '';
    const byPage = {};
    for (const r of data.rows) {
      if (!byPage[r.page]) byPage[r.page] = [];
      byPage[r.page].push(r);
    }

    let html = '';
    for (const [page, rows] of Object.entries(byPage)) {
      html += `<div class="card mb-md">
        <h4 class="card-title text-sm">${escHtml(page)}</h4>
        <p class="text-sm text-muted mb-md">${rows.length} violation(s)</p>`;
      for (const r of rows) {
        html += `<div style="display:flex;gap:0.5rem;align-items:center;padding:0.25rem 0;border-bottom:1px solid var(--border-color)">
          <span class="badge badge-${r.impact}">${r.impact}</span>
          <span class="text-sm"><strong>${escHtml(r.rule)}</strong> — ${escHtml(r.help)}</span>
          <span class="text-sm text-muted">(${r.rgaa.join(', ')})</span>
        </div>`;
      }
      html += '</div>';
    }
    return html;
  }

  function filterResults(impact) {
    $$('.result-row').forEach(row => {
      if (impact === 'all' || row.dataset.impact === impact) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
    announce(`Filtre appliqué : ${impact === 'all' ? 'tous' : impact}`);
  }

  function miniStat(value, label) {
    return `<div style="text-align:center"><div style="font-size:1.5rem;font-weight:800;color:var(--blue-france)">${value}</div><div class="text-sm text-muted">${label}</div></div>`;
  }

  // ========== FIXES ==========
  async function loadFixes() {
    const container = $('#fixes-content');
    try {
      let prompts = await api('/api/fix/prompts');
      const responses = await api('/api/fix/responses');

      if (!prompts || prompts.length === 0) {
        // Check if results exist to generate prompts automatically
        const results = await api('/api/results');
        if (results && results.pages && results.pages.some(p => p.violations && p.violations.length > 0)) {
          container.innerHTML = `<div class="loading-overlay"><div class="spinner"></div><span>Génération automatique des prompts IA en cours…</span></div>`;
          await api('/api/fix', { method: 'POST', body: {} });
          prompts = await api('/api/fix/prompts');
        }
      }

      if (!prompts || prompts.length === 0) {
        container.innerHTML = `<div class="empty-state">
          <p style="font-size:1.1rem;font-weight:600">Aucune violation détectée ou aucun audit réalisé.</p>
          <p class="text-sm text-muted mb-lg">Lancez un audit pour générer des prompts de correction ciblés et des patchs de code.</p>
          <a href="#audit" class="btn btn-primary" data-page="audit">Lancer un audit</a>
        </div>`;
        return;
      }

      const globalPrompt = prompts.find(p => p.isGlobal || p.file === 'global-prompt.md');
      const pagePrompts = prompts.filter(p => !p.isGlobal && p.file !== 'global-prompt.md');

      let html = `<div class="card mb-lg" style="background:linear-gradient(135deg, rgba(0,0,145,0.2) 0%, rgba(24,117,60,0.15) 100%);border:1px solid var(--blue-france)">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem">
          <div>
            <span class="pill-badge highlight" style="margin-bottom:0.5rem">Recommandé</span>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-primary);margin-bottom:0.25rem">
              Prompt Unique Global pour tout le site
            </h3>
            <p class="text-sm text-muted">
              Un seul prompt complet synthétisant l'ensemble des règles RGAA en échec, prêt pour Cursor, Claude, ChatGPT ou vos développeurs.
            </p>
          </div>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
            ${globalPrompt ? `<button class="btn btn-primary copy-btn" data-content="prompt-global-prompt-md" style="font-size:1rem;padding:0.65rem 1.5rem">📋 Copier le Prompt Global</button>` : ''}
            <button class="btn btn-autofix open-autofix-btn" style="font-size:0.95rem;padding:0.65rem 1.25rem">⚡ Débloquer l'Auto-Patch IA</button>
          </div>
        </div>
      </div>`;

      // 1. Affichage du Prompt Global en premier plan
      if (globalPrompt) {
        html += `<div class="card prompt-card mb-xl" style="border:2px solid var(--blue-france)">
          <div class="card-title flex-between" style="border-bottom:1px solid var(--border-color);padding-bottom:0.75rem;margin-bottom:0.75rem">
            <div>
              <strong style="font-size:1.1rem;color:var(--blue-france)">Prompt Maître Global (Toutes les pages & règles)</strong>
            </div>
            <div style="display:flex;gap:0.5rem">
              <button class="btn btn-sm btn-secondary copy-btn" data-content="prompt-global-prompt-md">📋 Copier</button>
            </div>
          </div>
          <div style="margin-top:0.75rem">
            <div class="code-block prompt-content" id="prompt-global-prompt-md" style="max-height:350px;overflow-y:auto;background:var(--bg-secondary)">${escHtml(globalPrompt.content)}</div>
          </div>
        </div>`;
      }

      // 2. Prompts par page dans un accordéon
      if (pagePrompts.length > 0) {
        html += `<details class="mt-xl" style="border-top:1px solid var(--border-color);padding-top:1.5rem">
          <summary class="btn btn-secondary btn-sm" style="cursor:pointer;display:inline-flex;list-style:none;margin-bottom:1.5rem">
            📂 Voir les ${pagePrompts.length} prompts individuels détaillés par page (optionnel)
          </summary>
          <div class="mt-md">`;

        for (const p of pagePrompts) {
          const response = responses.find(r => r.file === p.file);
          const promptId = `prompt-${p.file.replace(/\./g, '-')}`;

          html += `<div class="card prompt-card mb-lg">
            <div class="card-title flex-between" style="border-bottom:1px solid var(--border-color);padding-bottom:0.75rem;margin-bottom:0.75rem">
              <div>
                <strong style="font-size:1rem">Page : ${escHtml(p.file)}</strong>
              </div>
              <div style="display:flex;gap:0.5rem">
                <button class="btn btn-sm btn-secondary copy-btn" data-content="${promptId}">📋 Copier</button>
                <button class="btn btn-sm btn-autofix open-autofix-btn">⚡ Corriger</button>
              </div>
            </div>
            <div style="margin-top:0.5rem">
              <div class="code-block prompt-content" id="${promptId}" style="max-height:220px;overflow-y:auto;background:var(--bg-secondary)">${escHtml(p.content)}</div>
            </div>`;

          if (response) {
            html += `<div class="mt-md" style="padding:1rem;background:rgba(24,117,60,0.08);border-left:4px solid #18753C;border-radius:var(--radius-sm)">
              <strong style="color:var(--green-success);display:block;margin-bottom:0.5rem">✓ Solution IA :</strong>
              <div class="doc-preview" style="background:transparent;border:none;padding:0;font-size:0.9rem">${escHtml(response.content)}</div>
            </div>`;
          }
          html += '</div>';
        }

        html += `</div></details>`;
      }

      container.innerHTML = html;

      // Copy buttons
      container.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.content;
          const el = $(`#${id}`);
          if (el) {
            navigator.clipboard.writeText(el.textContent).then(() => {
              toast('Prompt copié dans le presse-papiers !', 'success');
            });
          }
        });
      });

      // Commercial modal buttons
      container.querySelectorAll('.open-autofix-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          openAutofixModal();
        });
      });

    } catch (e) {
      container.innerHTML = `<div class="alert alert-error">Erreur lors du chargement des prompts : ${e.message}</div>`;
    }
  }

  function openAutofixModal() {
    const modal = $('#autofix-modal');
    if (modal) {
      modal.classList.add('open');
      const closeBtn = $('#modal-autofix-close');
      if (closeBtn && !closeBtn.dataset.bound) {
        closeBtn.dataset.bound = 'true';
        closeBtn.addEventListener('click', () => modal.classList.remove('open'));
        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.remove('open');
        });
      }
    }
  }

  // ========== LEGAL ==========
  async function loadLegalDocs() {
    const container = $('#legal-docs');
    try {
      const docs = await api('/api/legal/documents');
      if (docs && docs.length > 0) renderLegalDocs(container, docs);
    } catch { /* no docs */ }

    // Generate button
    const btn = $('#btn-generate-legal');
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = 'true';
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        btn.textContent = 'Génération en cours…';
        try {
          await api('/api/legal', { method: 'POST', body: {} });
          const docs = await api('/api/legal/documents');
          renderLegalDocs(container, docs);
          toast('Documents légaux générés', 'success');
        } catch { /* error handled in api() */ }
        btn.disabled = false;
        btn.textContent = 'Générer les documents légaux';
      });
    }
  }

  function renderLegalDocs(container, docs) {
    let html = '';
    const titles = {
      'mention-conformite.md': 'Mention de conformité',
      'declaration-accessibilite.md': 'Déclaration d\'accessibilité',
      'schema-pluriannuel.md': 'Schéma pluriannuel'
    };

    for (const doc of docs) {
      const title = titles[doc.file] || doc.file;
      html += `<div class="card mb-lg">
        <h3 class="card-title">${title}</h3>
        <div class="doc-actions mt-md">
          <button class="btn btn-sm btn-secondary download-doc" data-filename="${doc.file}" data-content="${btoa(unescape(encodeURIComponent(doc.content)))}">Télécharger (.md)</button>
          <button class="btn btn-sm btn-secondary copy-doc" data-content-id="doc-${doc.file.replace(/\./g, '-')}">Copier le texte</button>
        </div>
        <div class="doc-preview" id="doc-${doc.file.replace(/\./g, '-')}">${escHtml(doc.content)}</div>
      </div>`;
    }
    container.innerHTML = html;

    // Download handlers
    container.querySelectorAll('.download-doc').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = decodeURIComponent(escape(atob(btn.dataset.content)));
        const blob = new Blob([content], { type: 'text/markdown' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = btn.dataset.filename;
        a.click();
        toast('Document téléchargé', 'success');
      });
    });

    // Copy handlers
    container.querySelectorAll('.copy-doc').forEach(btn => {
      btn.addEventListener('click', () => {
        const el = $(`#${btn.dataset.contentId}`);
        if (el) {
          navigator.clipboard.writeText(el.textContent).then(() => {
            toast('Copié dans le presse-papiers', 'success');
          });
        }
      });
    });
  }

  // ========== CHECKLIST ==========
  async function loadChecklist() {
    const container = $('#checklist-content');
    try {
      const data = await api('/api/checklist');
      renderChecklist(container, data);
    } catch { /* error */ }
  }

  function renderChecklist(container, data) {
    const md = data.markdown;
    const state = data.state || {};
    // Parse markdown checklist
    const sections = [];
    let currentSection = null;
    for (const line of md.split('\n')) {
      const sectionMatch = line.match(/^##\s+(.+)/);
      if (sectionMatch) {
        currentSection = { title: sectionMatch[1], items: [] };
        sections.push(currentSection);
        continue;
      }
      const itemMatch = line.match(/^- \[[ x]\] (.+)/);
      if (itemMatch && currentSection) {
        const id = `check-${sections.length}-${currentSection.items.length}`;
        currentSection.items.push({ id, text: itemMatch[1], checked: !!state[id] });
      }
    }

    let html = '';
    let totalItems = 0;
    let checkedItems = 0;

    for (const section of sections) {
      const sectionChecked = section.items.filter(i => i.checked).length;
      totalItems += section.items.length;
      checkedItems += sectionChecked;

      html += `<div class="checklist-section card mb-lg">
        <h3>${escHtml(section.title)}</h3>
        <div class="checklist-progress">${sectionChecked}/${section.items.length} — ${section.items.length > 0 ? Math.round(sectionChecked / section.items.length * 100) : 0}%</div>
        <div class="progress-bar mb-md">
          <div class="progress-fill ${sectionChecked === section.items.length && section.items.length > 0 ? 'success' : ''}" style="width:${section.items.length > 0 ? (sectionChecked / section.items.length * 100) : 0}%"></div>
        </div>`;

      for (const item of section.items) {
        html += `<div class="checklist-item ${item.checked ? 'checked' : ''}">
          <input type="checkbox" id="${item.id}" ${item.checked ? 'checked' : ''} class="checklist-cb">
          <label for="${item.id}">${escHtml(item.text)}</label>
        </div>`;
      }
      html += '</div>';
    }

    // Overall progress
    const overallPct = totalItems > 0 ? Math.round(checkedItems / totalItems * 100) : 0;
    const header = `<div class="card mb-lg" style="text-align:center">
      <h3>Progression globale</h3>
      <div class="stat-value">${overallPct}%</div>
      <div class="text-sm text-muted">${checkedItems}/${totalItems} tests effectués</div>
      <div class="progress-bar mt-md">
        <div class="progress-fill ${overallPct === 100 ? 'success' : overallPct > 50 ? '' : 'warning'}" style="width:${overallPct}%"></div>
      </div>
    </div>`;

    container.innerHTML = header + html;

    // Checkbox handlers
    container.querySelectorAll('.checklist-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        const newState = {};
        container.querySelectorAll('.checklist-cb').forEach(c => {
          if (c.checked) newState[c.id] = true;
        });
        // Save state
        api('/api/checklist', { method: 'PUT', body: newState }).then(() => {
          // Re-render to update progress
          const updatedData = { markdown: data.markdown, state: newState };
          renderChecklist(container, updatedData);
          toast('Progression sauvegardée', 'info');
        });
      });
    });
  }

  // ========== UTILS ==========
  function escHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function escAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

})();
