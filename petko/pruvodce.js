// Průvodce po Vídni pro Peťka: mapa, GPS, hlas, stromeček s ozdobami a finále v Schönbrunnu.
(() => {
  const css = `
  #tour { position: fixed; inset: 0; z-index: 900; background: var(--night); display: flex; flex-direction: column; }
  #tour .mapwrap { flex: 1; min-height: 140px; position: relative; }
  #tmap { position: absolute; inset: 0; background: var(--night-2); }
  #tour .tbar { position: absolute; z-index: 500; top: 0; left: 0; right: 0; display: flex; gap: 8px; align-items: center; padding: calc(env(safe-area-inset-top, 0px) + 10px) max(12px, env(safe-area-inset-right)) 10px max(12px, env(safe-area-inset-left)); pointer-events: none; }
  #tour .tbar > * { pointer-events: auto; }
  .tchip { background: var(--night); color: var(--snow); border: 1px solid var(--line); border-radius: 999px; padding: 8px 14px; min-height: 42px; display: inline-flex; align-items: center; gap: 6px; font-size: 15px; box-shadow: 0 2px 10px rgba(0,0,0,.4); }
  .tchip.icon { width: 42px; justify-content: center; padding: 0; font-size: 18px; }
  .tchip.title { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: var(--display); font-style: italic; color: var(--gold-soft); }
  .tchip.treebtn { border-color: var(--gold); color: var(--gold-soft); font-weight: 700; }
  .tfab { position: absolute; z-index: 500; right: max(12px, env(safe-area-inset-right)); bottom: 40px; width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--line); background: var(--night); color: var(--snow); font-size: 20px; box-shadow: 0 2px 10px rgba(0,0,0,.4); }
  .tfab.on { background: #2f6fd6; border-color: transparent; }
  .tmenu { position: absolute; z-index: 700; top: calc(env(safe-area-inset-top, 0px) + 60px); right: max(12px, env(safe-area-inset-right)); width: min(320px, calc(100vw - 24px)); background: var(--night); border: 1px solid var(--line); border-radius: 14px; padding: 8px; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,.5); max-height: 70vh; overflow-y: auto; }
  .tmenu button, .tmenu label { background: none; border: 0; text-align: left; padding: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; gap: 10px; font-size: 16px; color: var(--snow); }
  .tmenu label.col { flex-direction: column; align-items: stretch; }
  .tmenu select { width: 100%; padding: 8px; border-radius: 8px; background: var(--night-2); color: var(--snow); border: 1px solid var(--line); }
  .tmenu .hint { font-size: 13px; color: var(--muted); padding: 0 12px 8px; }
  .tsheet { position: relative; z-index: 600; background: var(--night); border-top: 1px solid var(--line); border-radius: 20px 20px 0 0; padding: 12px max(16px, env(safe-area-inset-right)) calc(env(safe-area-inset-bottom, 0px) + 14px) max(16px, env(safe-area-inset-left)); display: flex; flex-direction: column; gap: 12px; max-height: 64vh; box-shadow: 0 -10px 30px rgba(0,0,0,.45); }
  .tsheet.tall { max-height: 74vh; }
  .tscroll { overflow-y: auto; display: flex; flex-direction: column; gap: 12px; min-height: 0; overscroll-behavior: contain; }
  .tstatus { display: flex; gap: 10px; align-items: center; font-size: 14px; color: var(--muted); }
  .tstatus .prog { margin-left: auto; font-variant-numeric: tabular-nums; }
  .tdot { width: 10px; height: 10px; border-radius: 50%; background: #66708f; flex: none; }
  .tdot.live { background: #4cc27a; box-shadow: 0 0 0 4px rgba(76,194,122,.2); }
  .tdot.warn { background: #e0a63c; }
  .dayh { font-size: 13px; letter-spacing: .18em; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-top: 6px; }
  .rcard { text-align: left; background: var(--night-2); border: 1px solid var(--line); border-radius: 14px; padding: 12px 14px; display: grid; grid-template-columns: 1fr auto; gap: 2px 12px; align-items: center; color: var(--snow); }
  .rcard strong { font-size: 17px; }
  .rcard span { font-size: 14px; color: var(--muted); grid-column: 1; }
  .rcard em { font-style: normal; font-size: 13px; color: #9fe0b4; grid-column: 1; font-weight: 700; }
  .rcard .go { grid-row: 1 / span 3; grid-column: 2; color: var(--gold); font-size: 22px; }
  .rcard.final { border-color: var(--rose); }
  .tnext { display: flex; gap: 12px; align-items: center; }
  .tnext .num { width: 32px; height: 32px; border-radius: 50%; background: var(--gold); color: #1a1406; display: grid; place-items: center; font-weight: 700; flex: none; }
  .tnext .tx { flex: 1; min-width: 0; }
  .tnext .tx span { font-size: 13px; color: var(--muted); display: block; }
  .tnext .tx strong { font: 500 19px/1.2 var(--display); }
  .tdir { display: flex; flex-direction: column; align-items: center; min-width: 62px; }
  .tarrow { width: 32px; height: 32px; color: var(--gold); transition: transform .4s; }
  .tdist { font-weight: 700; color: var(--gold-soft); font-size: 15px; font-variant-numeric: tabular-nums; }
  .tstory h2 { font: 500 25px/1.2 var(--display); margin: 0; }
  .tstory p { margin: 0; }
  .tkick { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
  .tlook { margin: 0; padding: 12px 14px; list-style: none; background: rgba(227,189,106,.08); border-radius: 12px; display: flex; flex-direction: column; gap: 8px; font-size: 16px; }
  .tlook li { display: grid; grid-template-columns: 22px 1fr; gap: 6px; }
  .tlook li::before { content: "👁"; font-size: 14px; line-height: 1.6; }
  .tlook li.h { display: block; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
  .tlook li.h::before { content: none; }
  .tmore { border-top: 1px solid var(--line); padding-top: 12px; display: flex; flex-direction: column; gap: 8px; }
  .ttip, .tinfo { border-radius: 10px; padding: 10px 12px; font-size: 15px; }
  .ttip { background: var(--night-2); }
  .tinfo { border: 1px dashed var(--line); color: var(--muted); }
  .sentence.now { background: rgba(227,189,106,.22); border-radius: 3px; }
  .tplayer { display: grid; grid-template-columns: auto 1fr auto auto; gap: 8px; }
  .tplayer .btn { padding: 12px 14px; }
  .tfoto { border: 1px solid rgba(227,189,106,.45); border-radius: 14px; padding: 12px; display: flex; flex-direction: column; gap: 8px; background: rgba(227,189,106,.06); }
  .tfoto .row { display: flex; gap: 8px; }
  .tfoto .row .btn { flex: 1; }
  .pinv { width: 30px; height: 30px; border-radius: 50%; background: var(--gold); color: #1a1406; display: grid; place-items: center; font: 700 14px var(--body); border: 2px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,.5); position: relative; }
  .pinv.done { background: #7d86a3; color: #fff; }
  .pinv.next { box-shadow: 0 0 0 6px rgba(227,189,106,.35); }
  .pinv .g { position: absolute; right: -8px; top: -9px; font-size: 13px; }
  .pinv.fin { background: var(--rose); width: 38px; height: 38px; font-size: 18px; }
  .minv { width: 14px; height: 14px; border-radius: 50%; background: #c9a34f; border: 2px solid #fff; }
  .minv.done { background: #7d86a3; }
  .mev { width: 18px; height: 18px; border-radius: 50%; background: #4b8dff; border: 3px solid #fff; box-shadow: 0 0 0 6px rgba(75,141,255,.25); }
  .tover { position: fixed; inset: 0; z-index: 950; background: rgba(5,8,20,.92); display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 18px; padding: calc(env(safe-area-inset-top, 0px) + 20px) max(18px, env(safe-area-inset-right)) calc(env(safe-area-inset-bottom, 0px) + 20px) max(18px, env(safe-area-inset-left)); text-align: center; overflow-y: auto; }
  .tover > :first-child { margin-top: auto; }
  .tover > :last-child { margin-bottom: auto; }
  .tover h2 { font: italic 500 30px/1.15 var(--display); color: var(--gold-soft); margin: 0; }
  .tover p { margin: 0; max-width: 34ch; }
  .tree { width: min(300px, 80vw); height: auto; overflow: visible; }
  .tree .b circle.ball { transition: fill .6s, filter .6s; }
  .tree .b.got circle.ball { fill: #9c2f3a; }
  .tree .b.empty circle.ball { fill: transparent; stroke: rgba(244,241,234,.35); stroke-dasharray: 4 4; }
  .tree .b.lit circle.ball { fill: #e3bd6a; filter: drop-shadow(0 0 10px #f3dca5) drop-shadow(0 0 22px #e3bd6a); }
  .tree text.m { font-size: 18px; }
  .tree text.l { font: 700 22px var(--display); fill: #1a1406; opacity: 0; transition: opacity .5s; }
  .tree .b.lit text.l { opacity: 1; }
  .tree .b.lit text.m { opacity: 0; }
  .slots { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; }
  .slots span { width: 34px; height: 46px; border-bottom: 3px solid var(--gold); font: 700 34px/46px var(--display); color: var(--gold-soft); }
  .slots span.gap { border: 0; width: 14px; }
  .slots span.on { animation: pop .5s ease; }
  @keyframes pop { 0% { transform: scale(.3); opacity: 0; } 70% { transform: scale(1.2); } 100% { transform: scale(1); opacity: 1; } }
  .award .ball { font-size: 64px; filter: drop-shadow(0 0 18px rgba(227,189,106,.6)); }
  .award .env { background: var(--snow); color: #2a2318; border-radius: 6px 16px 6px 16px; padding: 12px 16px; font: 600 24px/1.2 var(--hand); transform: rotate(-1deg); }
  @media (prefers-reduced-motion: reduce) { .slots span.on { animation: none; } }
  `;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  const html = `
  <section id="tour" hidden>
    <div class="mapwrap">
      <div id="tmap" aria-label="Mapa Vídně"></div>
      <div class="tbar">
        <button class="tchip icon" id="tBack" aria-label="Zpět">←</button>
        <div class="tchip title" id="tTitle">Náš víkend ve Vídni</div>
        <button class="tchip treebtn" id="tTreeBtn" aria-label="Můj stromeček">🎄 <span id="tTreeN">0/8</span></button>
        <button class="tchip icon" id="tMenuBtn" aria-label="Nastavení">⋯</button>
      </div>
      <button class="tfab on" id="tFollow" aria-label="Sledovat mou polohu">◎</button>
      <div class="tmenu" id="tMenu" hidden>
        <label class="col" for="tVoice">Hlas průvodce <select id="tVoice"></select></label>
        <div class="hint" id="tVoiceHint"></div>
        <label for="tRate">Rychlost čtení <input type="range" id="tRate" min="0.7" max="1.4" step="0.05" value="1"></label>
        <label for="tAuto">Číst automaticky <input type="checkbox" id="tAuto" checked></label>
        <button id="tTest">Vyzkoušet hlas</button>
        <button id="tSim">Zkušební režim (ťukni na mapu) <span id="tSimS">vyp.</span></button>
      </div>
    </div>
    <div class="tsheet" id="tSheet">
      <div class="tstatus"><span class="tdot" id="tDot"></span><span id="tGps">GPS je vypnuté</span><span class="prog" id="tProg"></span></div>
      <div class="tscroll" id="tPlan"></div>
      <div id="tRoute" hidden style="display:flex;flex-direction:column;gap:12px;min-height:0">
        <button class="btn" id="tStart">Spustit</button>
        <div class="tnext" id="tNext" hidden>
          <div class="num" id="tNum">1</div>
          <div class="tx"><span id="tNextL">Další zastávka</span><strong id="tNextN"></strong></div>
          <div class="tdir"><svg class="tarrow" id="tArrow" viewBox="0 0 30 30"><path d="M15 2 L25 26 L15 20 L5 26 Z" fill="currentColor"/></svg><div class="tdist" id="tDist">–</div></div>
        </div>
        <article class="tscroll tstory" id="tStory" hidden></article>
        <div class="tplayer" id="tPlayer" hidden>
          <button class="btn ghost" id="tPrev" aria-label="O větu zpět">⏮</button>
          <button class="btn" id="tPlay">⏸ Pauza</button>
          <button class="btn ghost" id="tSkip" aria-label="Přeskočit">⏭</button>
          <button class="btn ghost" id="tClose">Dál</button>
        </div>
      </div>
    </div>
  </section>
  <div class="tover" id="tTreeOv" hidden></div>
  <div class="tover" id="tAward" hidden></div>
  <div class="tover" id="tReveal" hidden></div>`;
  const holder = document.createElement('div'); holder.innerHTML = html; document.body.appendChild(holder);

  const $ = (id) => document.getElementById(id);
  const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };
  let V, PP, map, layer, line, meM, meC;
  let route = null, stops = [], smalls = [], pos = null, watchId = null, simulate = false, following = true, heading = null;
  let current = null, queue = [], asking = null, dwell = {};
  const visited = new Set(store.get('pp-v-visited', []));
  const fotoDone = new Set(store.get('pp-v-foto', []));
  const intro = new Set(store.get('pp-v-intro', []));
  const settings = Object.assign({ rate: 1, auto: true, voice: '' }, store.get('pp-v-set', {}));
  const save = () => { store.set('pp-v-visited', [...visited]); store.set('pp-v-foto', [...fotoDone]); store.set('pp-v-intro', [...intro]); store.set('pp-v-set', settings); };

  const byId = (id) => V.miesta.find(m => m.id === id);
  const gulaStops = () => V.miesta.filter(m => m.gula).sort((a, b) => a.gula.poradie - b.gula.poradie);
  const gotGule = () => gulaStops().filter(m => visited.has(m.id));
  const letters = () => V.tajenka.replace(/\s+/g, '').split('');

  function dist(a, b) { const R = 6371000, r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLon = (b.lon - a.lon) * r; const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLon / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(x)); }
  function bearing(a, b) { const r = Math.PI / 180, y = Math.sin((b.lon - a.lon) * r) * Math.cos(b.lat * r); const x = Math.cos(a.lat * r) * Math.sin(b.lat * r) - Math.sin(a.lat * r) * Math.cos(b.lat * r) * Math.cos((b.lon - a.lon) * r); return (Math.atan2(y, x) / r + 360) % 360; }
  const fmtDist = (d) => d < 1000 ? `${Math.round(d / 10) * 10} m` : `${(d / 1000).toFixed(1).replace('.', ',')} km`;
  const decode = (s) => s.trim().split(/\s+/).map(p => { const [a, b] = p.split(',').map(Number); return [48 + a / 1e5, 16 + b / 1e5]; });

  /* ---------- open / plan ---------- */
  function init() { PP = window.PP; V = PP.DATA.viden; if (!V) return; updateTreeN(); }
  function open() {
    if (!V) init(); if (!V) return;
    $('tour').hidden = false; document.body.style.overflow = 'hidden';
    setupMap(); showPlan(); loadVoices();
  }
  function close() {
    stopSpeech(); stopGps(); $('tour').hidden = true; document.body.style.overflow = '';
    route = null; current = null; queue = [];
  }
  $('tBack').onclick = () => { if (route) { stopSpeech(); stopGps(); route = null; current = null; showPlan(); setupMap(); } else close(); };

  function routeDone(r) { const z = r.zastavky.filter(id => !byId(id).finale); return { n: z.filter(id => visited.has(id)).length, t: z.length }; }
  function showPlan() {
    $('tTitle').textContent = 'Náš víkend ve Vídni';
    $('tRoute').hidden = true; $('tPlan').hidden = false; $('tSheet').classList.remove('tall');
    $('tProg').textContent = `🎄 ${gotGule().length} z ${gulaStops().length} ozdob`;
    const p = $('tPlan'); p.innerHTML = '';
    const intro = document.createElement('p'); intro.style.margin = '0'; intro.style.color = 'var(--muted)';
    intro.textContent = 'Vyber část víkendu. Až dojdete k zastávce, ozvu se sám. Na některých místech na tebe čeká ozdoba na stromeček.';
    p.appendChild(intro);
    let lastDay = '';
    V.okruhy.forEach(r => {
      if (r.den !== lastDay) { lastDay = r.den; const h = document.createElement('div'); h.className = 'dayh'; h.textContent = PP.fmtDay(r.den, { weekday: 'long', day: 'numeric', month: 'numeric' }); p.appendChild(h); }
      const b = document.createElement('button'); b.className = 'rcard' + (r.id === 'finale' ? ' final' : '');
      b.innerHTML = '<strong></strong><span class="d"></span><em hidden></em><span class="go">→</span>';
      b.querySelector('strong').textContent = r.nazov;
      b.querySelector('.d').textContent = [r.cas, r.dlzka].filter(Boolean).join(' · ') + ' — ' + r.popis;
      const { n, t } = routeDone(r);
      if (r.id !== 'finale' && n) { const e = b.querySelector('em'); e.hidden = false; e.textContent = n >= t ? 'Hotovo ✓' : `Hotovo ${n} z ${t}`; }
      if (r.id === 'finale' && store.get('pp-v-revealed', false)) { const e = b.querySelector('em'); e.hidden = false; e.textContent = 'Rozsvíceno ♥'; }
      b.onclick = () => openRoute(r);
      p.appendChild(b);
    });
  }

  /* ---------- map ---------- */
  function setupMap() {
    if (!window.L) return;
    if (!map) {
      map = L.map('tmap', { zoomControl: false }).setView([48.2085, 16.3700], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, subdomains: 'abc', attribution: '© OpenStreetMap' }).addTo(map);
      layer = L.layerGroup().addTo(map);
      map.on('dragstart', () => setFollow(false));
      map.on('click', (e) => { if (simulate) onPos({ coords: { latitude: e.latlng.lat, longitude: e.latlng.lng, accuracy: 5 } }, true); });
    }
    layer.clearLayers(); line = null;
    const list = route ? stops : V.miesta.filter(m => !m.typ);
    const pts = list.map(s => [s.lat, s.lon]);
    if (route && route.trasa) line = L.polyline(decode(route.trasa), { color: '#e3bd6a', weight: 4, opacity: .8 }).addTo(layer);
    if (route) smalls.forEach(s => L.marker([s.lat, s.lon], { icon: L.divIcon({ className: '', html: `<div class="minv${visited.has(s.id) ? ' done' : ''}"></div>`, iconSize: [14, 14], iconAnchor: [7, 7] }) }).addTo(layer).on('click', () => showStory(s, false)));
    list.forEach((s, i) => {
      const n = nextStop();
      const cls = ['pinv', visited.has(s.id) ? 'done' : '', route && n === s ? 'next' : '', s.finale ? 'fin' : ''].join(' ');
      const label = s.finale ? '♥' : (route ? i + 1 : '•');
      const g = s.gula && !visited.has(s.id) ? '<span class="g">🎁</span>' : '';
      L.marker([s.lat, s.lon], { icon: L.divIcon({ className: '', html: `<div class="${cls}">${label}${g}</div>`, iconSize: [30, 30], iconAnchor: [15, 15] }), zIndexOffset: 100 }).addTo(layer).on('click', () => { if (route) showStory(s, false); });
    });
    setTimeout(() => { map.invalidateSize(); if (pts.length > 1) map.fitBounds(L.latLngBounds(pts).pad(.15)); else if (pts.length) map.setView(pts[0], 16); }, 80);
  }

  /* ---------- route ---------- */
  function openRoute(r) {
    route = r; queue = []; current = null; asking = null; dwell = {};
    stops = r.zastavky.map(byId).filter(Boolean); smalls = (r.drobnosti || []).map(byId).filter(Boolean);
    $('tTitle').textContent = r.nazov.replace(/^[^:]+:\s*/, '');
    $('tPlan').hidden = true; $('tRoute').hidden = false;
    $('tStart').hidden = false; $('tNext').hidden = true; $('tStory').hidden = true; $('tPlayer').hidden = true;
    $('tStart').textContent = r.id === 'finale' ? 'Jsme na cestě do Schönbrunnu' : 'Spustit procházku';
    setupMap(); updateNext();
  }
  $('tStart').onclick = () => {
    $('tStart').hidden = true; $('tNext').hidden = false;
    unlockSpeech(); startCompass(); try { navigator.wakeLock && navigator.wakeLock.request('screen').catch(() => {}); } catch {}
    if (route.id === 'finale') { showFinale(); }
    else if (route.uvod && !intro.has(route.id)) { intro.add(route.id); save(); speak([{ text: route.uvod }], () => { if (!current) $('tPlayer').hidden = true; }); }
    startGps();
  };
  function startGps() {
    if (simulate) { gps('warn', 'Zkušební režim: ťukni na mapu'); return; }
    if (!('geolocation' in navigator)) { gps('warn', 'Tento telefon neumí zjistit polohu'); return; }
    gps('warn', 'Hledám polohu…');
    watchId = navigator.geolocation.watchPosition(onPos, (e) => gps('warn', e.code === 1 ? 'Poloha je zakázaná. Povol ji v Nastavení → Safari → Poloha.' : 'Nedaří se zjistit polohu, zkouším znovu…'), { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000 });
  }
  function stopGps() { if (watchId != null) navigator.geolocation.clearWatch(watchId); watchId = null; }
  function gps(s, t) { $('tDot').className = 'tdot' + (s === 'live' ? ' live' : s === 'warn' ? ' warn' : ''); $('tGps').textContent = t; }

  function onPos(p, instant) {
    pos = { lat: p.coords.latitude, lon: p.coords.longitude, acc: p.coords.accuracy || 10 };
    if (!simulate) gps(pos.acc <= 35 ? 'live' : 'warn', pos.acc <= 35 ? `Poloha přesná na ±${Math.round(pos.acc)} m` : `Slabý signál GPS (±${Math.round(pos.acc)} m)`);
    const ll = [pos.lat, pos.lon];
    if (!meM) { meM = L.marker(ll, { icon: L.divIcon({ className: '', html: '<div class="mev"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }), interactive: false, zIndexOffset: 1000 }).addTo(map); meC = L.circle(ll, { radius: pos.acc, color: '#4b8dff', weight: 1, fillOpacity: .08, interactive: false }).addTo(map); }
    else { meM.setLatLng(ll); meC.setLatLng(ll).setRadius(pos.acc); }
    if (following) map.panTo(ll);
    if (route && route.id === 'finale') checkFinale(); else check(!!instant);
    updateNext();
  }
  function check(instant) {
    if (!pos || pos.acc > 90 || !route) return;
    const busy = !!current || speaking || asking;
    const inZone = (s) => dist(pos, s) <= (s.polomer || 35) + Math.min(pos.acc, 15);
    const cand = stops.filter(s => !visited.has(s.id) && s !== current && !queue.includes(s)).filter(inZone);
    stops.forEach(s => { if (!cand.includes(s)) dwell[s.id] = 0; });
    const ready = cand.filter(s => instant || (dwell[s.id] = (dwell[s.id] || 0) + 1) >= 2).sort((a, b) => dist(pos, a) - dist(pos, b));
    if (ready.length) {
      if (pos.acc > 35 && !instant) { if (!busy) ask(ready[0]); return; }
      ready.forEach(x => queue.push(x));
      if (!busy) showStory(queue.shift(), true);
      return;
    }
    if (!busy) { const sm = smalls.find(s => !visited.has(s.id) && dist(pos, s) <= (s.polomer || 20) + Math.min(pos.acc, 10)); if (sm) showStory(sm, true); }
  }
  function ask(s) {
    asking = s; const el = $('tStory'); el.hidden = false; el.innerHTML = '';
    const p = document.createElement('p'); p.textContent = `Signál GPS je slabší. Jste u zastávky ${s.nazov}?`; el.appendChild(p);
    const row = document.createElement('div'); row.style.cssText = 'display:flex;gap:8px';
    const y = document.createElement('button'); y.className = 'btn'; y.style.flex = '1'; y.textContent = 'Ano, vyprávěj';
    const n = document.createElement('button'); n.className = 'btn ghost'; n.style.flex = '1'; n.textContent = 'Ještě ne';
    y.onclick = () => { asking = null; showStory(s, true); };
    n.onclick = () => { dwell[s.id] = -6; asking = null; el.hidden = true; };
    row.append(y, n); el.appendChild(row);
  }
  function nextStop() { if (!route) return null; const left = stops.filter(s => !visited.has(s.id) && !s.finale); return left[0] || null; }
  function updateNext() {
    if (!route) return;
    const { n: done, t } = routeDone(route);
    $('tProg').textContent = route.id === 'finale' ? `🎄 ${gotGule().length} z ${gulaStops().length}` : `${done}/${t}`;
    const n = nextStop();
    if (route.id === 'finale') { const f = byId('schonbrunn'); $('tNum').textContent = '♥'; $('tNextL').textContent = 'Cíl'; $('tNextN').textContent = 'Imperial Lights, brána Meidlinger Tor'; setArrow(f); return; }
    if (!n) { $('tNum').textContent = '✓'; $('tNextL').textContent = 'Hotovo'; $('tNextN').textContent = 'Tahle část je za vámi.'; $('tDist').textContent = ''; $('tArrow').style.visibility = 'hidden'; return; }
    $('tNum').textContent = stops.indexOf(n) + 1; $('tNextL').textContent = 'Další zastávka'; $('tNextN').textContent = n.nazov; setArrow(n);
  }
  function setArrow(t) {
    if (!pos) { $('tDist').textContent = '–'; $('tArrow').style.visibility = 'hidden'; return; }
    $('tDist').textContent = fmtDist(dist(pos, t)); $('tArrow').style.visibility = 'visible';
    const b = bearing(pos, t); $('tArrow').style.transform = `rotate(${heading == null ? b : b - heading}deg)`;
  }
  function startCompass() {
    const h = (e) => { let x = null; if (typeof e.webkitCompassHeading === 'number') x = e.webkitCompassHeading; else if (e.absolute && e.alpha != null) x = 360 - e.alpha; if (x != null) { heading = x; const n = route && (route.id === 'finale' ? byId('schonbrunn') : nextStop()); if (n && pos) setArrow(n); } };
    try {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') DeviceOrientationEvent.requestPermission().then(s => { if (s === 'granted') addEventListener('deviceorientation', h, true); }).catch(() => {});
      else addEventListener('deviceorientationabsolute' in window ? 'deviceorientationabsolute' : 'deviceorientation', h, true);
    } catch {}
  }
  function setFollow(on) { following = on; $('tFollow').classList.toggle('on', on); if (on && pos) map.panTo([pos.lat, pos.lon]); }
  $('tFollow').onclick = () => setFollow(!following);

  /* ---------- speech (Czech) ---------- */
  let voices = [], voice = null, segs = [], si = 0, wi = 0, speaking = false, paused = false, onDone = null, cur = null;
  const score = (v) => { let s = 0; if (/^cs/i.test(v.lang)) s += 100; else if (/^sk/i.test(v.lang)) s += 40; else return -1; if (/premium|prémiov|enhanced|vylepšen|neural|natural|google|zuzana/i.test(v.name)) s += 20; if (/premium|prémiov|enhanced|vylepšen/i.test(v.name)) s += 10; return s; };
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = speechSynthesis.getVoices().filter(v => score(v) >= 0).sort((a, b) => score(b) - score(a));
    const sel = $('tVoice'); sel.innerHTML = '';
    if (!voices.length) { sel.innerHTML = '<option>Výchozí hlas telefonu</option>'; $('tVoiceHint').textContent = 'Český hlas se nenašel. Stáhni Zuzanu: Nastavení → Zpřístupnění → Mluvený obsah → Hlasy → Čeština.'; voice = null; return; }
    voices.forEach(v => { const o = document.createElement('option'); o.value = v.voiceURI; o.textContent = `${v.name} (${v.lang})`; sel.appendChild(o); });
    voice = voices.find(v => v.voiceURI === settings.voice) || voices[0]; sel.value = voice.voiceURI;
    $('tVoiceHint').textContent = /enhanced|vylepšen|premium|prémiov/i.test(voice.name) ? '' : 'Tip: vylepšený hlas Zuzana zní mnohem lépe (Nastavení → Zpřístupnění → Mluvený obsah → Hlasy).';
  }
  if ('speechSynthesis' in window) { speechSynthesis.onvoiceschanged = loadVoices; }
  $('tVoice').onchange = () => { voice = voices.find(v => v.voiceURI === $('tVoice').value) || voice; settings.voice = voice ? voice.voiceURI : ''; save(); };
  $('tRate').value = settings.rate; $('tAuto').checked = settings.auto;
  $('tRate').oninput = () => { settings.rate = +$('tRate').value; save(); };
  $('tAuto').onchange = () => { settings.auto = $('tAuto').checked; save(); };
  function unlockSpeech() { if (!('speechSynthesis' in window)) return; const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); }
  const split = (t) => t.match(/[^.!?]+[.!?]+["“”]?\s*|[^.!?]+$/g) || [t];
  function speak(list, done) {
    if (!('speechSynthesis' in window)) { done && done(); return; }
    speechSynthesis.cancel(); segs = list.map(s => ({ ...s, ss: split(s.text) })); si = 0; wi = 0; onDone = done || null; speaking = true; paused = false;
    $('tPlayer').hidden = false; $('tPlay').textContent = '⏸ Pauza'; next();
  }
  function next() {
    if (!speaking) return;
    while (si < segs.length && wi >= segs[si].ss.length) { si++; wi = 0; }
    if (si >= segs.length) { speaking = false; hl(null); $('tPlay').textContent = '▶ Přehrát'; const d = onDone; onDone = null; d && d(); return; }
    const sg = segs[si], t = sg.ss[wi].trim(); hl(sg.node ? sg.node.querySelectorAll('.sentence')[wi] : null);
    if (!t) { wi++; return next(); }
    const u = new SpeechSynthesisUtterance(t); u.lang = voice ? voice.lang : 'cs-CZ'; if (voice) u.voice = voice; u.rate = settings.rate; cur = u;
    u.onend = () => { if (speaking && !paused && cur === u) { wi++; next(); } };
    u.onerror = (e) => { if (speaking && !paused && cur === u && e.error !== 'interrupted' && e.error !== 'canceled') { wi++; next(); } };
    speechSynthesis.speak(u);
  }
  function stopSpeech() { speaking = false; paused = false; cur = null; try { speechSynthesis.cancel(); } catch {} hl(null); }
  function hl(n) { document.querySelectorAll('#tStory .sentence.now').forEach(e => e.classList.remove('now')); if (n) { n.classList.add('now'); n.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } }
  function fill(el, text) { el.innerHTML = ''; split(text).forEach(t => { const s = document.createElement('span'); s.className = 'sentence'; s.textContent = t; el.appendChild(s); }); }
  $('tPlay').onclick = () => {
    if (speaking && !paused) { paused = true; cur = null; speechSynthesis.cancel(); $('tPlay').textContent = '▶ Přehrát'; return; }
    if (paused && segs.length) { paused = false; speaking = true; $('tPlay').textContent = '⏸ Pauza'; next(); return; }
    if (current) playStory(current);
  };
  $('tPrev').onclick = () => { if (!segs.length) return; if (wi > 0) wi--; else if (si > 0) { si--; wi = Math.max(0, segs[si].ss.length - 1); } paused = false; speaking = true; cur = null; speechSynthesis.cancel(); $('tPlay').textContent = '⏸ Pauza'; next(); };
  $('tSkip').onclick = () => { if (!segs.length) return; si++; wi = 0; paused = false; speaking = true; cur = null; speechSynthesis.cancel(); $('tPlay').textContent = '⏸ Pauza'; next(); };
  $('tTest').onclick = () => { $('tMenu').hidden = true; unlockSpeech(); loadVoices(); speak([{ text: 'Ahoj Peťko, jsem tvůj průvodce po Vídni.' }], () => { if (!current) $('tPlayer').hidden = true; }); };
  $('tMenuBtn').onclick = () => { $('tMenu').hidden = !$('tMenu').hidden; if (!$('tMenu').hidden) loadVoices(); };
  $('tSim').onclick = () => { simulate = !simulate; $('tSimS').textContent = simulate ? 'zap.' : 'vyp.'; $('tMenu').hidden = true; if (simulate) { stopGps(); gps('warn', 'Zkušební režim: ťukni na mapu'); } else if (route && $('tStart').hidden) startGps(); };

  /* ---------- story ---------- */
  function showStory(s, auto, quiet) {
    if (s.finale) return;
    if (current && current !== s) stopSpeech();
    current = s; asking = null;
    const small = s.typ === 'drobnost';
    const firstTime = !visited.has(s.id);
    if (auto) markVisited(s);
    const el = $('tStory'); el.hidden = false; el.innerHTML = ''; $('tSheet').classList.add('tall');
    const k = document.createElement('div'); k.className = 'tkick'; k.textContent = small ? 'Drobnost cestou' : `Zastávka ${stops.indexOf(s) + 1} z ${stops.length}`; el.appendChild(k);
    const h = document.createElement('h2'); h.textContent = s.nazov; el.appendChild(h);
    const p = document.createElement('p'); p.id = 'tText'; fill(p, s.text); el.appendChild(p);
    if (s.pozri && s.pozri.length) { const ul = document.createElement('ul'); ul.className = 'tlook'; ul.innerHTML = '<li class="h">Kam se podívat</li>'; s.pozri.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); }); el.appendChild(ul); }
    if (!auto && !visited.has(s.id) && !small) { const b = document.createElement('button'); b.className = 'btn'; b.textContent = 'Jsme tady'; b.onclick = () => { markVisited(s); b.remove(); playStory(s, () => { if (s.gula) award(s); }); }; el.appendChild(b); }
    if (s.foto) {
      const f = document.createElement('div'); f.className = 'tfoto';
      const done = fotoDone.has(s.id);
      f.innerHTML = `<div class="tkick">${done ? 'Fotka je v naší mapě ♥' : 'Fotka do naší mapy'}</div><div></div><div class="row"><button class="btn cam">📷 ${done ? 'Další fotka' : 'Vyfotit'}</button><button class="btn ghost lib">Z galerie</button></div>`;
      f.children[1].textContent = s.foto;
      const ex = { ukol: `${s.nazov}: ${s.foto}`, stopId: s.id };
      f.querySelector('.cam').onclick = () => PP.pick(route.den, 'fileCam', ex);
      f.querySelector('.lib').onclick = () => PP.pick(route.den, 'fileLib', ex);
      el.appendChild(f);
    }
    if (s.viac) {
      const b = document.createElement('button'); b.className = 'btn ghost'; b.textContent = 'Povídej mi víc';
      const m = document.createElement('section'); m.className = 'tmore'; m.hidden = true; const mp = document.createElement('p'); fill(mp, s.viac); m.appendChild(mp);
      b.onclick = () => { m.hidden = false; b.hidden = true; m.scrollIntoView({ block: 'start', behavior: 'smooth' }); const list = [{ text: s.viac, node: mp }]; const tr = transition(s); if (tr) list.push({ text: tr }); speak(list); };
      el.appendChild(b); el.appendChild(m);
    }
    if (s.tip) { const t = document.createElement('p'); t.className = 'ttip'; t.textContent = 'Tip: ' + s.tip; el.appendChild(t); }
    if (s.info) { const t = document.createElement('p'); t.className = 'tinfo'; t.textContent = s.info; el.appendChild(t); }
    $('tPlayer').hidden = false;
    if (quiet) return;
    el.scrollTop = 0;
    map.panTo([s.lat, s.lon]); setFollow(false); setTimeout(() => setFollow(true), 15000);
    setupMap();
    if (navigator.vibrate && auto) navigator.vibrate(small ? [80] : [120, 60, 120]);
    if (auto && !settings.auto) { $('tPlay').textContent = '▶ Přehrát'; if (s.gula && firstTime) award(s); return; }
    playStory(s, () => { if (s.gula && firstTime && (auto || visited.has(s.id))) award(s); });
  }
  function transition(s) {
    if (!route || s.typ === 'drobnost') return null;
    const left = stops.filter(x => !visited.has(x.id) && x !== s && !x.finale);
    if (!left.length && route.zaver && visited.has(s.id)) return route.zaver;
    return route.cestou && route.cestou[s.id] || null;
  }
  function playStory(s, done) { const list = [{ text: s.text, node: $('tText') }]; const tr = transition(s); if (tr) list.push({ text: tr }); speak(list, done); }
  function markVisited(s) { const was = visited.has(s.id); visited.add(s.id); save(); updateTreeN(); if (!was) setupMap(); }
  $('tClose').onclick = () => {
    stopSpeech(); $('tStory').hidden = true; $('tPlayer').hidden = true; $('tSheet').classList.remove('tall');
    current = null; updateNext(); setupMap(); setFollow(true);
    if (queue.length) showStory(queue.shift(), true);
  };

  /* ---------- ornaments ---------- */
  function updateTreeN() { if (!V) return; $('tTreeN').textContent = `${gotGule().length}/${gulaStops().length}`; }
  function award(s) {
    const n = gotGule().length, t = gulaStops().length, ov = $('tAward');
    ov.innerHTML = '';
    ov.className = 'tover award';
    const ball = document.createElement('div'); ball.className = 'ball'; ball.textContent = s.gula.motiv;
    const h = document.createElement('h2'); h.textContent = 'Nová ozdoba: ' + s.gula.nazov;
    const p = document.createElement('p'); p.textContent = n >= t ? `Máš všech ${t} ozdob. Stromeček je kompletní. Rozsvítí se v Schönbrunnu.` : `Na stromečku už máš ${n} z ${t}. Co je uvnitř, se dozvíš později.`;
    const env = document.createElement('div'); env.className = 'env'; env.textContent = `A Dušan má pro tebe obálku číslo ${s.gula.poradie + 1}.`;
    const b = document.createElement('button'); b.className = 'btn'; b.textContent = 'Pověsit na stromeček';
    b.onclick = () => { ov.hidden = true; };
    ov.append(ball, h, p);
    if (V.obalky !== false) ov.append(env);
    ov.append(b); ov.hidden = false;
    speak([{ text: `Nová ozdoba, ${s.gula.nazov}.` + (V.obalky !== false ? ` A Dušan má pro tebe obálku číslo ${s.gula.poradie + 1}.` : '') }]);
  }
  function treeSVG(mode) {
    // mode: 'collect' (shows emojis) | 'reveal' (letters hidden until lit)
    const pos8 = [[150, 95], [118, 150], [182, 150], [95, 210], [150, 205], [205, 210], [80, 268], [220, 268]];
    const all = gulaStops(), L8 = letters();
    let s = `<svg class="tree" viewBox="0 0 300 330" role="img" aria-label="Stromeček s ozdobami">
      <polygon points="150,20 40,300 260,300" fill="#14402f"/><polygon points="150,20 70,180 230,180" fill="#1b5a40"/>
      <rect x="135" y="300" width="30" height="24" fill="#5b3a1e"/>
      <text x="150" y="30" text-anchor="middle" font-size="28">⭐</text>`;
    all.forEach((m, i) => {
      const [x, y] = pos8[i] || [150, 150]; const got = visited.has(m.id);
      s += `<g class="b ${got ? 'got' : 'empty'}" data-i="${i}"><circle class="ball" cx="${x}" cy="${y}" r="21"/>` +
        `<text class="m" x="${x}" y="${y + 6}" text-anchor="middle">${got ? m.gula.motiv : ''}</text>` +
        `<text class="l" x="${x}" y="${y + 8}" text-anchor="middle">${mode === 'reveal' ? L8[m.gula.poradie] || '' : ''}</text></g>`;
    });
    return s + '</svg>';
  }
  $('tTreeBtn').onclick = () => {
    const ov = $('tTreeOv'); ov.innerHTML = '';
    const h = document.createElement('h2'); h.textContent = 'Tvůj stromeček';
    const p = document.createElement('p'); const n = gotGule().length, t = gulaStops().length;
    p.textContent = store.get('pp-v-revealed', false) ? 'Rozsvíceno. ♥' : (n ? `Máš ${n} z ${t} ozdob. Každá v sobě něco schovává. Rozsvítí se až v Schönbrunnu.` : 'Zatím je prázdný. Ozdoby najdeš na zastávkách s dárečkem 🎁.');
    const w = document.createElement('div'); w.innerHTML = treeSVG(store.get('pp-v-revealed', false) ? 'reveal' : 'collect');
    if (store.get('pp-v-revealed', false)) w.querySelectorAll('.b.got').forEach(g => g.classList.add('lit'));
    const b = document.createElement('button'); b.className = 'btn'; b.textContent = 'Zavřít'; b.onclick = () => ov.hidden = true;
    ov.append(h, w, p);
    if (store.get('pp-v-revealed', false)) { const r = document.createElement('button'); r.className = 'btn ghost'; r.textContent = 'Přehrát rozsvícení znovu'; r.onclick = () => { ov.hidden = true; reveal(); }; ov.append(r); }
    ov.append(b); ov.hidden = false;
  };

  /* ---------- finale ---------- */
  function showFinale() {
    const f = V.finale, el = $('tStory'); el.hidden = false; el.innerHTML = ''; $('tSheet').classList.add('tall');
    const h = document.createElement('h2'); h.textContent = f.nazov; el.appendChild(h);
    const p = document.createElement('p'); p.textContent = 'Až budete v parku u svítících růží, ozvu se sám. Vchod je u brány Meidlinger Tor, kousek od metra U4 Schönbrunn.'; el.appendChild(p);
    const nowT = PP.now();
    const zb = document.createElement('button'); zb.className = 'btn ghost'; zb.textContent = 'Jsme v Schönbrunnu, rozsviť ozdoby';
    zb.hidden = !(nowT >= new Date(f.zalohaOd) || PP.preview || simulate);
    zb.onclick = () => startFinale();
    el.appendChild(zb);
    $('tPlayer').hidden = true;
  }
  function checkFinale() {
    if (!pos || finaleStarted || store.get('pp-v-revealed', false)) return;
    const f = V.finale; const nowT = PP.now();
    if (nowT < new Date(f.odDatumu) && !PP.preview && !simulate) return;
    if (dist(pos, f) <= f.polomer + Math.min(pos.acc, 30)) startFinale();
  }
  let finaleRunning = false, finaleStarted = false;
  function startFinale() {
    if (finaleRunning || finaleStarted) return; finaleRunning = true; finaleStarted = true; store.set('pp-v-finale-started', true);
    const f = V.finale, el = $('tStory'); el.hidden = false; el.innerHTML = '';
    const h = document.createElement('h2'); h.textContent = f.nazov; el.appendChild(h);
    const p = document.createElement('p'); p.id = 'tText'; fill(p, f.text); el.appendChild(p);
    $('tPlayer').hidden = false;
    speak([{ text: f.text, node: p }], () => { finaleRunning = false; reveal(); });
  }
  function reveal() {
    stopSpeech();
    const f = V.finale, ov = $('tReveal'); ov.innerHTML = ''; ov.hidden = false;
    const h = document.createElement('h2'); h.textContent = 'Tvůj stromeček';
    const w = document.createElement('div'); w.innerHTML = treeSVG('reveal');
    // light every ornament in the reveal, collected or not
    const L8 = letters();
    const slots = document.createElement('div'); slots.className = 'slots';
    const word = V.tajenka; [...word].forEach(ch => { const s = document.createElement('span'); if (ch === ' ') s.className = 'gap'; slots.appendChild(s); });
    const slotEls = [...slots.children].filter(s => !s.classList.contains('gap'));
    const p = document.createElement('p'); p.textContent = f.uvodOdhaleni;
    ov.append(h, w, slots, p);
    const gs = [...w.querySelectorAll('.b')];
    gs.forEach(g => { g.classList.remove('empty'); g.classList.add('got'); });
    const order = gulaStops().map(m => m.gula.poradie);
    speak([{ text: f.uvodOdhaleni }], () => {
      let i = 0;
      const step = () => {
        if (i >= gs.length) { finish(); return; }
        const g = gs[i]; const idx = order[i]; g.classList.add('lit');
        const slot = slotEls[idx]; if (slot) { slot.textContent = L8[idx]; slot.classList.add('on'); }
        if (navigator.vibrate) navigator.vibrate(40);
        i++; setTimeout(step, 1100);
      };
      setTimeout(step, 600);
    });
    function finish() {
      store.set('pp-v-revealed', true);
      p.textContent = f.poOdhaleni;
      const card = document.createElement('div'); card.className = 'from'; card.style.maxWidth = '34ch'; card.innerHTML = '<div class="who">Od Dušana</div><p></p>'; card.querySelector('p').textContent = f.dusan;
      const fb = document.createElement('div'); fb.className = 'tfoto'; fb.style.maxWidth = '34ch'; fb.innerHTML = '<div class="tkick">Poslední fotka do naší mapy</div><div></div><div class="row"><button class="btn cam">📷 Vyfotit</button><button class="btn ghost lib">Z galerie</button></div>';
      fb.children[1].textContent = f.foto;
      const ex = { ukol: `Schönbrunn: ${f.foto}`, stopId: 'schonbrunn' };
      fb.querySelector('.cam').onclick = () => PP.pick('2026-12-06', 'fileCam', ex);
      fb.querySelector('.lib').onclick = () => PP.pick('2026-12-06', 'fileLib', ex);
      const c = document.createElement('button'); c.className = 'btn ghost'; c.textContent = 'Zavřít'; c.onclick = () => { ov.hidden = true; showPlan(); route = null; setupMap(); };
      ov.append(card, fb, c);
      speak([{ text: V.tajenka.toLowerCase() + '.' }, { text: f.poOdhaleni }]);
      updateTreeN();
    }
  }

  function onPhoto(extra) { if (extra && extra.stopId) { fotoDone.add(extra.stopId); save(); if (current && current.id === extra.stopId) { const sc = $('tStory').scrollTop; showStory(current, false, true); $('tStory').scrollTop = sc; } } }

  window.PRUVODCE = { init, open, onPhoto, _state: () => ({ route: route && route.id, current: current && current.id, visited: [...visited], gule: gotGule().map(m => m.id), revealed: store.get('pp-v-revealed', false), speaking }) };
})();
