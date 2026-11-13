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
  .rcard strong { font: 500 20px/1.2 var(--display); }
  .rcard .meta { font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
  .badge { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; font-weight: 700; border-radius: 999px; padding: 3px 9px; border: 1px solid; white-space: nowrap; }
  .badge.k { color: var(--gold-soft); border-color: rgba(227,189,106,.5); }
  .badge.r { color: var(--rose); border-color: rgba(232,138,138,.55); }
  .slist { display: flex; flex-direction: column; }
  .slist h3 { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); margin: 0 0 4px; font-weight: 700; }
  .srow { display: flex; gap: 12px; align-items: center; padding: 10px 0; border: 0; border-bottom: 1px solid var(--line); background: none; color: var(--snow); text-align: left; width: 100%; }
  .srow:last-child { border-bottom: 0; }
  .srow .n { width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--gold); color: var(--gold-soft); display: grid; place-items: center; font-weight: 700; font-size: 13px; flex: none; }
  .srow.done .n { background: #7d86a3; border-color: transparent; color: #fff; }
  .srow .nm { flex: 1; min-width: 0; font: 500 17px/1.25 var(--display); }
  .srow .nm small { display: block; font: 400 13px/1.3 var(--body); color: var(--muted); }
  .khead { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
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
  .tree .b { transform-box: fill-box; transform-origin: center; }
  .tree .b circle.ball { transition: fill .6s, filter .6s; fill: url(#ppBall); }
  .tree .b .cap { fill: #e3bd6a; }
  .tree .b .shine { fill: #fff; opacity: .28; }
  .tree .b.empty circle.ball { fill: rgba(255,255,255,.04); stroke: rgba(244,241,234,.4); stroke-dasharray: 4 4; }
  .tree .b.empty .cap, .tree .b.empty .shine { opacity: 0; }
  .tree .b.lit circle.ball { fill: #e9c877; filter: drop-shadow(0 0 10px #f3dca5) drop-shadow(0 0 22px #e3bd6a); }
  .tree .b.new { animation: ppDrop 1.1s cubic-bezier(.3,1.4,.5,1) .35s both; }
  .tree .b.new circle.ball { animation: ppGlow 1.8s ease-in-out 1.4s infinite; }
  .tree text.m { font-size: 18px; }
  .tree text.l { font: 700 22px var(--display); fill: #1a1406; opacity: 0; transition: opacity .5s; }
  .tree .b.lit text.l { opacity: 1; }
  .tree .b.lit text.m { opacity: 0; }
  .tree .lights circle { animation: ppTw 2.4s ease-in-out infinite; }
  .tree .lights circle:nth-child(2n) { animation-delay: .8s; }
  .tree .lights circle:nth-child(3n) { animation-delay: 1.5s; }
  .tree .star { animation: ppStar 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
  @keyframes ppDrop { 0% { transform: translateY(-190px) scale(2.2); opacity: 0; } 55% { opacity: 1; } 100% { transform: none; opacity: 1; } }
  @keyframes ppGlow { 0%,100% { filter: drop-shadow(0 0 4px #f3dca5); } 50% { filter: drop-shadow(0 0 14px #f3dca5) drop-shadow(0 0 26px #e3bd6a); } }
  @keyframes ppTw { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
  @keyframes ppStar { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
  @keyframes ppFall { 0% { transform: translateY(-10vh) rotate(0); opacity: 0; } 15% { opacity: 1; } 100% { transform: translateY(105vh) rotate(260deg); opacity: 0; } }
  @keyframes ppRise { from { transform: translateY(18px); opacity: 0; } to { transform: none; opacity: 1; } }
  .tover.award { background: radial-gradient(90% 55% at 50% 38%, rgba(227,189,106,.22), rgba(5,8,20,.96) 70%), rgba(5,8,20,.96); gap: 12px; }
  .award .tree { width: min(190px, 48vw); }
  .award .kick { font-size: 12px; letter-spacing: .2em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
  .award h2 { font-size: 28px; }
  .award .cnt { color: var(--muted); font-size: 15px; }
  .award .sp { position: fixed; top: 0; color: var(--gold-soft); pointer-events: none; animation: ppFall linear infinite; }
  .award .envl { width: min(340px, 100%); background: #f6efe0; color: #2a2318; border-radius: 6px 6px 16px 16px; padding: 30px 16px 14px; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,.5); animation: ppRise .6s ease 1.5s both; text-align: center; }
  .award .envl::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 46px; background: linear-gradient(to bottom right, #e6dcc6 50%, transparent 50.5%) left / 50.2% 100% no-repeat, linear-gradient(to bottom left, #e6dcc6 50%, transparent 50.5%) right / 50.2% 100% no-repeat; border-radius: 6px 6px 0 0; }
  .award .seal { position: absolute; left: 50%; top: 22px; transform: translateX(-50%); width: 44px; height: 44px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #d2525f, #8f1f2c); color: #fff; font: 700 20px/44px var(--display); box-shadow: 0 2px 6px rgba(0,0,0,.35); }
  .award .envl .who { margin-top: 38px; font: 700 12px var(--body); letter-spacing: .14em; text-transform: uppercase; color: #9b6b1e; }
  .award .envl .tsk { font: 600 23px/1.2 var(--hand); margin-top: 4px; }
  .award .btn { animation: ppRise .6s ease 1.9s both; }
  @media (prefers-reduced-motion: reduce) { .tree .b.new, .tree .b.new circle.ball, .tree .lights circle, .tree .star, .award .sp, .award .envl, .award .btn { animation: none; } .award .sp { display: none; } }
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
        <button id="tReset" hidden>Vynulovat průvodce (jen pro zkoušení)</button>
      </div>
    </div>
    <div class="tsheet" id="tSheet">
      <div class="tstatus"><span class="tdot" id="tDot"></span><span id="tGps">GPS je vypnuté</span><span class="prog" id="tProg"></span></div>
      <div class="tscroll" id="tPlan"></div>
      <div id="tRoute" hidden style="display:flex;flex-direction:column;gap:12px;min-height:0">
        <button class="btn" id="tStart">Spustit</button>
        <div class="tscroll slist" id="tList"></div>
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
  const awarded = new Set(store.get('pp-v-awarded', []));
  const settings = Object.assign({ rate: 1, auto: true, voice: '' }, store.get('pp-v-set', {}));
  const save = () => { store.set('pp-v-visited', [...visited]); store.set('pp-v-foto', [...fotoDone]); store.set('pp-v-intro', [...intro]); store.set('pp-v-set', settings); };

  const byId = (id) => V.miesta.find(m => m.id === id);
  const gulaStops = () => V.miesta.filter(m => m.gula).sort((a, b) => a.gula.poradie - b.gula.poradie);
  const gotGule = () => gulaStops().filter(m => visited.has(m.id));
  const letters = () => V.tajenka.replace(/\s+/g, '').split('');

  function dist(a, b) { const R = 6371000, r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLon = (b.lon - a.lon) * r; const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLon / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(x)); }
  function bearing(a, b) { const r = Math.PI / 180, y = Math.sin((b.lon - a.lon) * r) * Math.cos(b.lat * r); const x = Math.cos(a.lat * r) * Math.sin(b.lat * r) - Math.sin(a.lat * r) * Math.cos(b.lat * r) * Math.cos((b.lon - a.lon) * r); return (Math.atan2(y, x) / r + 360) % 360; }
  const fmtDist = (d) => d < 1000 ? `${Math.round(d / 10) * 10} m` : `${(d / 1000).toFixed(1).replace('.', ',')} km`;
  const decode = (s) => s.split('|').map(seg => seg.trim().split(/\s+/).map(p => { const [a, b] = p.split(',').map(Number); return [48 + a / 1e5, 16 + b / 1e5]; }));

  /* ---------- open / plan ---------- */
  function init() { PP = window.PP; V = PP.DATA.viden; if (!V) return; updateTreeN(); $('tReset').hidden = !PP.preview; }
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
    intro.textContent = 'Tvůj první víkend ve Vídni. Vyber část dne, a až dojdete k zastávce, ozvu se sám. Na místech s dárečkem na tebe čeká ozdoba na stromeček.';
    p.appendChild(intro);
    let lastDay = '';
    V.okruhy.forEach(r => {
      if (r.den !== lastDay) { lastDay = r.den; const h = document.createElement('div'); h.className = 'dayh'; h.textContent = PP.fmtDay(r.den, { weekday: 'long', day: 'numeric', month: 'numeric' }); p.appendChild(h); }
      const b = document.createElement('button'); b.className = 'rcard' + (r.id === 'finale' ? ' final' : '');
      b.innerHTML = '<strong></strong><span class="meta"></span><span class="d"></span><em hidden></em><span class="go">→</span>';
      b.querySelector('strong').textContent = r.nazov.replace(/^[^:]+:\s*/, '');
      const zs = r.zastavky.map(byId).filter(x => x && !x.finale), gs = zs.filter(x => x.gula).length;
      const kdy = r.nazov.includes(':') ? r.nazov.split(':')[0].replace(/^(Sobota|Neděle|Pondělí)\s*/, '') : '';
      b.querySelector('.meta').textContent = [kdy, zs.length ? `${zs.length} ${zs.length < 5 ? 'zastávky' : 'zastávek'}` : '', gs ? `🎁 ${gs}` : '', r.cas].filter(Boolean).join(' · ');
      b.querySelector('.d').textContent = r.popis;
      const { n, t } = routeDone(r);
      if (r.id !== 'finale' && n) { const e = b.querySelector('em'); e.hidden = false; e.textContent = n >= t ? 'Hotovo ✓' : `Hotovo ${n} z ${t}`; }
      if (r.id === 'finale' && store.get('pp-v-revealed', false)) { const e = b.querySelector('em'); e.hidden = false; e.textContent = 'Rozsvíceno ♥'; }
      b.onclick = () => openRoute(r);
      p.appendChild(b);
    });
  }

  /* ---------- map ---------- */
  let lastPts = [];
  function setupMap() {
    if (!window.L) return;
    if (!map) {
      map = L.map('tmap', { zoomControl: false }).setView([48.2085, 16.3700], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, subdomains: 'abc', attribution: '© OpenStreetMap' }).addTo(map);
      layer = L.layerGroup().addTo(map);
      map.on('dragstart', () => setFollow(false));
      if (window.ResizeObserver) new ResizeObserver(() => { if (!map) return; map.invalidateSize(); if (!pos && !current && lastPts.length > 1) map.fitBounds(L.latLngBounds(lastPts).pad(.15)); else if (current) map.panTo([current.lat, current.lon]); }).observe($('tmap'));
      map.on('click', (e) => { if (simulate) onPos({ coords: { latitude: e.latlng.lat, longitude: e.latlng.lng, accuracy: 5 } }, true); });
    }
    layer.clearLayers(); line = null;
    const used = new Set(V.okruhy.flatMap(r => r.zastavky)); const list = route ? stops : V.miesta.filter(m => !m.typ && used.has(m.id));
    const pts = list.map(s => [s.lat, s.lon]); lastPts = pts;
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
    renderList(); $('tList').hidden = r.id === 'finale';
    setupMap(); updateNext();
  }
  function renderList() {
    const box = $('tList'); box.innerHTML = '';
    const h = document.createElement('h3'); h.textContent = 'Co vás čeká'; box.appendChild(h);
    stops.filter(s => !s.finale).forEach((s, i) => {
      const b = document.createElement('button'); b.className = 'srow' + (visited.has(s.id) ? ' done' : '');
      b.innerHTML = '<span class="n"></span><span class="nm"></span>';
      b.querySelector('.n').textContent = visited.has(s.id) ? '✓' : i + 1;
      b.querySelector('.nm').textContent = s.nazov + (s.gula && !visited.has(s.id) ? ' 🎁' : '');
      if (s.druh) { const g = document.createElement('span'); g.className = 'badge ' + (s.druh === 'romantika' ? 'r' : 'k'); g.textContent = s.druh === 'romantika' ? '♥ Romantika' : 'Klasika'; b.appendChild(g); }
      b.onclick = () => showStory(s, false);
      box.appendChild(b);
    });
    if (smalls.length) { const p = document.createElement('p'); p.style.cssText = 'margin:10px 0 0;font-size:14px;color:var(--muted)'; p.textContent = `A cestou ${smalls.length} ${smalls.length === 1 ? 'drobnost' : smalls.length < 5 ? 'drobnosti' : 'drobností'}, o kterých se dozvíš, až půjdeš kolem.`; box.appendChild(p); }
  }
  $('tStart').onclick = () => {
    $('tStart').hidden = true; $('tNext').hidden = false; $('tList').hidden = true;
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
    const nx = nextStop();
    if (nx && nx.lety && !heartAnnounced && !current && !speaking && dist(pos, nx) < 450) { const t = heartLine(nx); if (t) { heartAnnounced = true; speak([{ text: t }], () => { if (!current) $('tPlayer').hidden = true; }); } }
    updateNext();
  }
  function check(instant) {
    if (!pos || pos.acc > 90 || !route) return;
    const busy = !!current || !!asking;
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
    if (!busy && !speaking) { const sm = smalls.find(s => !visited.has(s.id) && dist(pos, s) <= (s.polomer || 20) + Math.min(pos.acc, 10)); if (sm) showStory(sm, true); }
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
    clearTimeout(watchdog); watchdog = setTimeout(() => { if (speaking && !paused && cur === u) { try { speechSynthesis.cancel(); } catch {} wi++; next(); } }, (t.length * 110) / Math.max(.5, settings.rate) + 6000);
  }
  let watchdog = 0;
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
  $('tReset').onclick = () => { ['pp-v-visited','pp-v-foto','pp-v-intro','pp-v-awarded','pp-v-revealed','pp-v-finale-started'].forEach(k => { try { localStorage.removeItem(k); } catch {} }); location.reload(); };
  $('tSim').onclick = () => { simulate = !simulate; $('tSimS').textContent = simulate ? 'zap.' : 'vyp.'; $('tMenu').hidden = true; if (simulate) { stopGps(); gps('warn', 'Zkušební režim: ťukni na mapu'); } else if (route && $('tStart').hidden) startGps(); };

  /* ---------- story ---------- */
  function showStory(s, auto, quiet) {
    if (s.finale) return;
    if (current && current !== s) stopSpeech();
    current = s; asking = null; $('tList').hidden = true;
    const small = s.typ === 'drobnost';
    const firstTime = !visited.has(s.id);
    markVisited(s);
    const el = $('tStory'); el.hidden = false; el.innerHTML = ''; $('tSheet').classList.add('tall');
    const k = document.createElement('div'); k.className = 'tkick'; k.textContent = small ? 'Drobnost cestou' : `Zastávka ${stops.indexOf(s) + 1} z ${stops.length}`;
    const kh = document.createElement('div'); kh.className = 'khead'; kh.appendChild(k);
    if (s.druh) { const g = document.createElement('span'); g.className = 'badge ' + (s.druh === 'romantika' ? 'r' : 'k'); g.textContent = s.druh === 'romantika' ? '♥ Romantika' : 'Klasika'; kh.appendChild(g); }
    el.appendChild(kh);
    const h = document.createElement('h2'); h.textContent = s.nazov; el.appendChild(h);
    const p = document.createElement('p'); p.id = 'tText'; fill(p, s.text); el.appendChild(p);
    if (s.pozri && s.pozri.length) { const ul = document.createElement('ul'); ul.className = 'tlook'; ul.innerHTML = '<li class="h">Kam se podívat</li>'; s.pozri.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); }); el.appendChild(ul); }
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
    if (s.lety) heartBox(s, el);
    if (auto && !settings.auto) { $('tPlay').textContent = '▶ Přehrát'; maybeAward(s); return; }
    playStory(s, () => maybeAward(s));
  }
  /* ---------- flying heart ---------- */
  function nextFlight(s) {
    const L = s.lety; if (!L) return null;
    const n = PP.now(); const key = PP.dayKey(n);
    const at = (hm) => new Date(`${key}T${hm}:00+01:00`);
    const from = at(L.od), to = at(L.do);
    let t = new Date(Math.max(n.getTime(), from.getTime()));
    const step = L.kazdych * 60000; const base = from.getTime();
    let k = Math.ceil((t.getTime() - base) / step); let f = new Date(base + k * step);
    if (f < n) f = new Date(f.getTime() + step);
    return f <= to ? f : null;
  }
  const minsTo = (d) => Math.max(0, Math.round((d - PP.now()) / 60000));
  let heartTimer = null, heartAnnounced = false;
  function heartBox(s, el) {
    const box = document.createElement('div'); box.className = 'tfoto'; box.id = 'tHeart';
    el.insertBefore(box, el.children[2] || null);
    const tick = () => {
      const f = nextFlight(s);
      if (!f) { box.innerHTML = '<div class="tkick">Létající srdce</div><div>Dnes už srdce nelétá, ale strom svítí dál.</div>'; return; }
      const sec = Math.max(0, Math.round((f - PP.now()) / 1000));
      box.innerHTML = `<div class="tkick">Létající srdce</div><div style="font:700 30px var(--display);color:var(--gold-soft)">${sec > 0 ? `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}` : 'Letí! ♥'}</div><div>${sec > 0 ? 'Postavte se pod strom a dívejte se nahoru.' : 'Dívejte se nahoru.'}</div>`;
    };
    tick(); clearInterval(heartTimer); heartTimer = setInterval(() => { if (!document.getElementById('tHeart')) { clearInterval(heartTimer); return; } tick(); }, 1000);
  }
  let heartAwardTimer = null;
  function maybeAward(s) {
    if (!s || !s.gula || !visited.has(s.id) || awarded.has(s.id)) return;
    if (!$('tAward').hidden) return;
    if (s.lety) awardAfterLanding(s); else award(s);
  }
  function awardAfterLanding(s) {
    const f = nextFlight(s);
    if (!f) { award(s); return; }
    const ms = f - PP.now() + (s.lety.pristani || 45) * 1000;
    if (ms > 35 * 60000) { award(s); return; }
    clearTimeout(heartAwardTimer); heartAwardTimer = setTimeout(() => award(s, 'Srdce přistálo na stromě.'), Math.max(0, ms));
  }
  function heartLine(s) { const f = nextFlight(s); if (!f) return null; const m = minsTo(f); return m <= 0 ? 'Srdce právě letí. Dívejte se nahoru.' : `Srdce poletí za ${m} ${m === 1 ? 'minutu' : m < 5 ? 'minuty' : 'minut'}. Postavte se pod strom.`; }

  function transition(s) {
    if (!route || s.typ === 'drobnost') return null;
    const left = stops.filter(x => !visited.has(x.id) && x !== s && !x.finale);
    if (!left.length && route.zaver && visited.has(s.id)) return route.zaver;
    return route.cestou && route.cestou[s.id] || null;
  }
  function playStory(s, done) { const list = [{ text: s.text, node: $('tText') }]; const hl2 = s.lety && heartLine(s); if (hl2) list.push({ text: hl2 }); const tr = transition(s); if (tr) list.push({ text: tr }); speak(list, done); }
  function markVisited(s) { const was = visited.has(s.id); visited.add(s.id); save(); updateTreeN(); if (!was) setupMap(); }
  $('tClose').onclick = () => {
    const was = current;
    stopSpeech(); $('tStory').hidden = true; $('tPlayer').hidden = true; $('tSheet').classList.remove('tall');
    current = null; updateNext(); setupMap(); setFollow(true);
    if (!$('tStart').hidden && route && route.id !== 'finale') { renderList(); $('tList').hidden = false; }
    if (was && was.gula && visited.has(was.id) && !awarded.has(was.id)) { if (was.lety && nextFlight(was) && (nextFlight(was) - PP.now()) < 35 * 60000) awardAfterLanding(was); else award(was); return; }
    if (queue.length) showStory(queue.shift(), true);
  };

  /* ---------- ornaments ---------- */
  function updateTreeN() { if (!V) return; $('tTreeN').textContent = `${gotGule().length}/${gulaStops().length}`; }
  function award(s, prefix) {
    if (awarded.has(s.id)) return;
    awarded.add(s.id); store.set('pp-v-awarded', [...awarded]);
    updateTreeN();
    const n = gotGule().length, t = gulaStops().length, ov = $('tAward');
    ov.innerHTML = ''; ov.className = 'tover award';
    for (let i = 0; i < 16; i++) { const sp = document.createElement('span'); sp.className = 'sp'; sp.textContent = i % 3 ? '✦' : '❄'; sp.style.left = (Math.random() * 100) + 'vw'; sp.style.fontSize = (10 + Math.random() * 14) + 'px'; sp.style.animationDuration = (5 + Math.random() * 6) + 's'; sp.style.animationDelay = (-Math.random() * 8) + 's'; ov.appendChild(sp); }
    const k = document.createElement('div'); k.className = 'kick'; k.textContent = prefix || 'Nová ozdoba na stromeček';
    const h = document.createElement('h2'); h.textContent = `${s.gula.motiv} ${s.gula.nazov}`;
    const w = document.createElement('div'); w.innerHTML = treeSVG('collect', s.id);
    const c = document.createElement('div'); c.className = 'cnt'; c.textContent = n >= t ? `Máš všech ${t} ozdob. Rozsvítí se v Schönbrunnu.` : `${n} z ${t} ozdob. Co je uvnitř, se dozvíš později.`;
    ov.append(k, h, w, c);
    if (V.obalky !== false) {
      const e = document.createElement('div'); e.className = 'envl';
      e.innerHTML = '<div class="seal"></div><div class="who"></div><div class="tsk"></div>';
      e.querySelector('.seal').textContent = s.gula.poradie + 1;
      e.querySelector('.who').textContent = `Dušan má pro tebe obálku číslo ${s.gula.poradie + 1}`;
      e.querySelector('.tsk').textContent = s.gula.uloha ? `Ale nejdřív: ${s.gula.uloha}` : 'Řekni si o ni.';
      ov.appendChild(e);
    }
    const b = document.createElement('button'); b.className = 'btn'; b.textContent = s.gula.uloha ? 'Splněno ♥' : 'Pověsit na stromeček';
    b.onclick = () => { ov.hidden = true; stopSpeech(); if (!current && queue.length) showStory(queue.shift(), true); };
    ov.appendChild(b); ov.hidden = false; ov.scrollTop = 0;
    if (navigator.vibrate) navigator.vibrate([60, 40, 60, 40, 160]);
    speak([{ text: (prefix ? prefix + ' ' : '') + `Nová ozdoba na stromeček: ${s.gula.nazov}.` + (V.obalky !== false ? (s.gula.uloha ? ` Dušan má pro tebe obálku číslo ${s.gula.poradie + 1}. Ale nejdřív si ji musíš zasloužit. ${s.gula.uloha}` : ` A Dušan má pro tebe obálku číslo ${s.gula.poradie + 1}.`) : '') }]);
  }
  function treeSVG(mode, newId) {
    // mode: 'collect' (shows emojis) | 'reveal' (letters hidden until lit)
    const pos8 = [[150, 98], [121, 160], [179, 160], [101, 222], [150, 216], [199, 222], [80, 278], [220, 278]];
    const all = gulaStops(), L8 = letters();
    let s = `<svg class="tree" viewBox="0 0 300 345" role="img" aria-label="Stromeček s ozdobami">
      <defs>
        <linearGradient id="ppT" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a7a57"/><stop offset="1" stop-color="#0e3a29"/></linearGradient>
        <radialGradient id="ppBall" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#e86b76"/><stop offset="1" stop-color="#8a1c29"/></radialGradient>
      </defs>
      <ellipse cx="150" cy="322" rx="120" ry="12" fill="#f4f1ea" opacity=".14"/>
      <rect x="136" y="296" width="28" height="28" rx="3" fill="#5b3a1e"/>
      <polygon points="150,128 34,304 266,304" fill="url(#ppT)"/>
      <polygon points="150,70 62,214 238,214" fill="url(#ppT)"/>
      <polygon points="150,22 92,124 208,124" fill="url(#ppT)"/>
      <path d="M100 118 Q150 142 200 118 M72 206 Q150 240 228 206 M46 296 Q150 330 254 296" fill="none" stroke="#e3bd6a" stroke-width="1.5" opacity=".45"/>
      <g class="lights" fill="#f3dca5"><circle cx="118" cy="124" r="2.5"/><circle cx="150" cy="131" r="2.5"/><circle cx="182" cy="124" r="2.5"/><circle cx="92" cy="214" r="2.5"/><circle cx="130" cy="225" r="2.5"/><circle cx="170" cy="225" r="2.5"/><circle cx="208" cy="214" r="2.5"/><circle cx="70" cy="304" r="2.5"/><circle cx="115" cy="314" r="2.5"/><circle cx="185" cy="314" r="2.5"/><circle cx="230" cy="304" r="2.5"/></g>
      <text class="star" x="150" y="32" text-anchor="middle" font-size="30">⭐</text>`;
    all.forEach((m, i) => {
      const [x, y] = pos8[i] || [150, 150]; const got = visited.has(m.id);
      s += `<g class="b ${got ? 'got' : 'empty'}${m.id === newId ? ' new' : ''}" data-i="${i}"><rect class="cap" x="${x - 4}" y="${y - 26}" width="8" height="7" rx="2"/><circle class="ball" cx="${x}" cy="${y}" r="20"/><ellipse class="shine" cx="${x - 7}" cy="${y - 8}" rx="6" ry="4"/>` +
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
      speak([{ text: V.tajenka.replace(/♥/g, '').trim().toLowerCase() + '.' }, { text: f.poOdhaleni }]);
      updateTreeN();
    }
  }

  function onPhoto(extra) { if (extra && extra.stopId) { fotoDone.add(extra.stopId); save(); if (current && current.id === extra.stopId) { const sc = $('tStory').scrollTop; showStory(current, false, true); $('tStory').scrollTop = sc; } } }

  window.PRUVODCE = { init, open, onPhoto, _state: () => ({ route: route && route.id, current: current && current.id, visited: [...visited], gule: gotGule().map(m => m.id), revealed: store.get('pp-v-revealed', false), speaking }) };
})();
