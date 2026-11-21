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
  /* ---------- night show: route preview + weekend recap ---------- */
  #tmap .leaflet-tile-pane { transition: filter 1.2s ease; }
  #tmap.night .leaflet-tile-pane { filter: invert(1) hue-rotate(195deg) brightness(.78) contrast(.92) saturate(.45); }
  #tmap.night { background: #0b1124; }
  #tour.showing .tsheet, #tour.showing .tfab, #tour.showing .tbar { display: none; }
  .tshow { position: absolute; inset: 0; z-index: 650; pointer-events: none; overflow: hidden; }
  .tshow > * { pointer-events: auto; }
  .tshow .sn { position: absolute; top: 0; color: #fff; opacity: .7; pointer-events: none; animation: ppFall linear infinite; }
  .tshow .shead { position: absolute; top: calc(env(safe-area-inset-top, 0px) + 12px); left: max(12px, env(safe-area-inset-left)); right: max(12px, env(safe-area-inset-right)); display: flex; justify-content: flex-end; gap: 8px; }
  .tshow .shead button { pointer-events: auto; }
  .scard { position: absolute; left: 0; right: 0; margin: 0 auto; top: calc(env(safe-area-inset-top, 0px) + 64px); width: min(360px, calc(100vw - 28px)); display: flex; gap: 12px; align-items: center; padding: 12px 14px; border-radius: 14px; background: rgba(12,17,36,.82); border: 1px solid rgba(243,220,165,.25); box-shadow: 0 10px 30px rgba(0,0,0,.5); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); animation: ppRise .45s ease both; pointer-events: none; }
  .scard .sno { width: 38px; height: 38px; border-radius: 50%; flex: none; display: grid; place-items: center; font: 700 17px var(--display); color: #fff; background: radial-gradient(circle at 35% 30%, #e0606b, #8f1f2c); box-shadow: 0 0 16px rgba(224,96,107,.6); }
  .scard .stx { min-width: 0; }
  .scard .stx b { display: block; font: 500 20px/1.2 var(--display); color: var(--snow); }
  .scard .stx span { display: block; font-size: 14px; color: var(--gold-soft); opacity: .85; }
  .scard.big { flex-direction: column; text-align: center; gap: 4px; padding: 18px 16px; }
  .scard.big .k { font-size: 12px; letter-spacing: .2em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
  .scard.big b { font: italic 500 28px/1.15 var(--display); color: var(--gold-soft); }
  .scard.big span { font-size: 15px; color: var(--muted); }
  .sbar { position: absolute; left: max(14px, env(safe-area-inset-left)); right: max(14px, env(safe-area-inset-right)); bottom: calc(env(safe-area-inset-bottom, 0px) + 16px); display: grid; grid-template-columns: auto 1fr auto; gap: 10px; align-items: center; font: 700 12px var(--body); letter-spacing: .14em; text-transform: uppercase; color: var(--gold-soft); text-shadow: 0 1px 4px #000; pointer-events: none; }
  .strack { position: relative; height: 12px; }
  .strack::before { content: ""; position: absolute; left: 0; right: 0; top: 5px; height: 2px; background: rgba(243,220,165,.25); border-radius: 2px; }
  .strack .fill { position: absolute; left: 0; top: 5px; height: 2px; background: var(--gold); border-radius: 2px; box-shadow: 0 0 8px var(--gold); transition: width .5s ease; }
  .strack i { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: #3a4366; border: 1px solid rgba(243,220,165,.5); transition: background .4s; }
  .strack i.on { background: var(--gold); box-shadow: 0 0 6px var(--gold); }
  .sday { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; background: radial-gradient(70% 50% at 50% 50%, rgba(11,17,36,.85), rgba(11,17,36,.35)); animation: ppFade 2.2s ease both; pointer-events: none; }
  .sday div { font: italic 500 34px/1.15 var(--display); color: var(--gold-soft); text-shadow: 0 0 30px rgba(227,189,106,.4); }
  .sday small { display: block; font: 700 12px var(--body); letter-spacing: .22em; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; font-style: normal; }
  @keyframes ppFade { 0% { opacity: 0; } 18%, 75% { opacity: 1; } 100% { opacity: 0; } }
  .spol { position: absolute; left: max(16px, env(safe-area-inset-left)); bottom: calc(env(safe-area-inset-bottom, 0px) + 50px); width: min(46vw, 190px); background: #fbf8f1; padding: 8px 8px 10px; border-radius: 3px; box-shadow: 0 12px 30px rgba(0,0,0,.6); animation: ppPol .55s cubic-bezier(.3,1.4,.5,1) both; pointer-events: none; }
  .spol.r { left: auto; right: max(16px, env(safe-area-inset-right)); }
  .spol img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; background: #ddd; }
  .spol p { margin: 6px 2px 0; font: 600 17px/1.15 var(--hand); color: #2a2318; max-height: 3.5em; overflow: hidden; }
  @keyframes ppPol { from { transform: translateY(40px) rotate(var(--rot, -4deg)) scale(.8); opacity: 0; } to { transform: rotate(var(--rot, -4deg)); opacity: 1; } }
  .spin2 { width: 16px; height: 16px; border-radius: 50%; background: #ffd27a; border: 2px solid #fff6df; box-shadow: 0 0 0 4px rgba(255,170,90,.25), 0 0 18px 6px rgba(255,190,110,.65); display: grid; place-items: center; animation: ppPop .5s cubic-bezier(.3,1.6,.5,1) both; }
  .spin2.fin { background: var(--rose); box-shadow: 0 0 0 4px rgba(232,138,138,.3), 0 0 20px 8px rgba(232,138,138,.7); }
  .slab { position: absolute; left: 22px; top: -4px; white-space: nowrap; font: 600 12px var(--body); color: #fff; background: rgba(12,17,36,.85); border: 1px solid rgba(243,220,165,.3); border-radius: 6px; padding: 2px 7px; }
  .slab em { font-style: normal; color: #ff9a8f; margin-right: 4px; font-weight: 700; }
  @keyframes ppPop { from { transform: scale(0); } to { transform: scale(1); } }
  .ssum { position: absolute; left: 0; right: 0; margin: 0 auto; bottom: calc(env(safe-area-inset-bottom, 0px) + 14px); width: min(380px, calc(100vw - 24px)); max-height: 62vh; overflow-y: auto; background: rgba(12,17,36,.9); border: 1px solid rgba(243,220,165,.3); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 -10px 40px rgba(0,0,0,.5); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); animation: ppRise .6s ease both; }
  .ssum .nums { display: flex; justify-content: space-around; text-align: center; }
  .ssum .nums b { display: block; font: 700 30px/1 var(--display); color: var(--gold-soft); }
  .ssum .nums span { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); font-weight: 700; }
  .ssum ol { margin: 0; padding: 0; list-style: none; columns: 2; column-gap: 14px; font-size: 13px; }
  .ssum ol li { break-inside: avoid; padding: 2px 0; display: flex; gap: 6px; }
  .ssum ol li em { font-style: normal; color: #ff9a8f; font-weight: 700; min-width: 18px; }
  .ssum .word { text-align: center; font: italic 500 34px/1.1 var(--display); color: var(--gold-soft); text-shadow: 0 0 24px rgba(227,189,106,.5); }
  .ssum .row { display: flex; gap: 8px; }
  .ssum .row .btn { flex: 1; }
  .ssum .h { font: italic 500 22px/1.2 var(--display); color: var(--gold-soft); text-align: center; }
  .ssum .from p { font-size: 21px; }
  .scoll { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
  .scoll img { width: 84px; height: 84px; object-fit: cover; border-radius: 6px; flex: none; }
  .tprog { display: flex; flex-direction: column; gap: 4px; }
  .tprog .sbar { position: static; grid-template-columns: auto 1fr auto; text-shadow: none; color: var(--gold-soft); font-size: 11px; }
  .rcard.recap { border-color: var(--gold); background: linear-gradient(135deg, rgba(227,189,106,.18), var(--night-2)); }
  @media (prefers-reduced-motion: reduce) { .tshow .sn { display: none; } .scard, .spol, .spin2, .ssum, .sday { animation: none; } }
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
        <div id="tStartRow" style="display:flex;gap:8px"><button class="btn" id="tStart" style="flex:1">Spustit</button><button class="btn ghost" id="tPrevw">▶ Ukázka trasy</button></div>
        <div class="tprog" id="tProgW" hidden></div>
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
  const seenPreview = new Set(store.get('pp-v-ukazka', []));
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
    if (recapReady()) {
      const rc = document.createElement('button'); rc.className = 'rcard recap';
      rc.innerHTML = '<strong>🎞️ Náš vánoční víkend</strong><span class="d">Celý víkend znovu, zastávku po zastávce, s našimi fotkami.</span><span class="go">▶</span>';
      rc.onclick = () => playRecap(); p.appendChild(rc);
    }
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
      if (window.ResizeObserver) new ResizeObserver(() => { if (!map) return; map.invalidateSize(); if (showing) return; if (!pos && !current && lastPts.length > 1) map.fitBounds(L.latLngBounds(lastPts).pad(.15)); else if (current) map.panTo([current.lat, current.lon]); }).observe($('tmap'));
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
    $('tStart').hidden = false; $('tStartRow').hidden = false; $('tPrevw').hidden = !(r.trasa && r.id !== 'finale'); $('tProgW').hidden = true;
    $('tNext').hidden = true; $('tStory').hidden = true; $('tPlayer').hidden = true;
    $('tStart').textContent = r.id === 'finale' ? 'Jsme na cestě do Schönbrunnu' : 'Spustit procházku';
    renderList(); $('tList').hidden = r.id === 'finale';
    setupMap(); updateNext();
    if (r.trasa && r.id !== 'finale' && !seenPreview.has(r.id) && !visited.has(r.zastavky[0])) { seenPreview.add(r.id); store.set('pp-v-ukazka', [...seenPreview]); setTimeout(() => { if (route === r && !current && !showing && !$('tStart').hidden) playPreview(r); }, 700); }
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
    $('tStart').hidden = true; $('tStartRow').hidden = true; $('tNext').hidden = false; $('tList').hidden = true; $('tProgW').hidden = route.id === 'finale' || !route.trasa;
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
    if (showing) return;
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
    if (!n) { renderWalkProg(); $('tNum').textContent = '✓'; $('tNextL').textContent = 'Hotovo'; $('tNextN').textContent = 'Tahle část je za vámi.'; $('tDist').textContent = ''; $('tArrow').style.visibility = 'hidden'; return; }
    $('tNum').textContent = stops.indexOf(n) + 1; $('tNextL').textContent = 'Další zastávka'; $('tNextN').textContent = n.nazov; setArrow(n);
    renderWalkProg();
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
  $('tReset').onclick = () => { ['pp-v-ukazka', 'pp-v-visited','pp-v-foto','pp-v-intro','pp-v-awarded','pp-v-revealed','pp-v-finale-started'].forEach(k => { try { localStorage.removeItem(k); } catch {} }); location.reload(); };
  $('tSim').onclick = () => { simulate = !simulate; $('tSimS').textContent = simulate ? 'zap.' : 'vyp.'; $('tMenu').hidden = true; if (simulate) { stopGps(); gps('warn', 'Zkušební režim: ťukni na mapu'); } else if (route && $('tStart').hidden) startGps(); };

  /* ---------- story ---------- */
  function showStory(s, auto, quiet) {
    if (s.finale) return;
    if (current && current !== s) stopSpeech();
    current = s; asking = null; $('tList').hidden = true; $('tProgW').hidden = true;
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
    if ($('tStart').hidden && route && route.id !== 'finale' && route.trasa) $('tProgW').hidden = false;
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
      const rb = document.createElement('button'); rb.className = 'btn'; rb.textContent = '🎞️ Přehrát náš víkend'; rb.onclick = () => { ov.hidden = true; stopSpeech(); route = null; showPlan(); playRecap(); };
      ov.append(card, fb, rb, c);
      speak([{ text: V.tajenka.replace(/♥/g, '').trim().toLowerCase() + '.' }, { text: f.poOdhaleni }]);
      updateTreeN();
    }
  }

  /* ---------- route geometry ---------- */
  const fmtKm = (m) => `${(m / 1000).toFixed(1).replace('.', ',')} km`;
  const P = (a) => ({ lat: a[0], lon: a[1] });
  const geoCache = {};
  function geo(r) {
    if (geoCache[r.id]) return geoCache[r.id];
    const segs = r.trasa ? decode(r.trasa) : [];
    const pts = [], seg = [], cum = [];
    segs.forEach((sg, k) => sg.forEach((p, j) => {
      const i = pts.length; pts.push(p); seg.push(k);
      cum.push(i === 0 ? 0 : cum[i - 1] + (j === 0 ? 0 : dist(P(pts[i - 1]), P(p))));
    }));
    const main = r.zastavky.map(byId).filter(s => s && !s.finale);
    const at = {}; let from = 0;
    main.forEach(s => {
      let best = -1, bd = Infinity;
      for (let j = from; j < pts.length; j++) {
        const d = dist(P(pts[j]), s);
        if (d < 60) { best = j; bd = d; while (j + 1 < pts.length && dist(P(pts[j + 1]), s) < bd) { j++; best = j; bd = dist(P(pts[j]), s); } break; }
        if (d < bd) { bd = d; best = j; }
      }
      if (best < 0) best = from; at[s.id] = best; from = best;
    });
    return (geoCache[r.id] = { pts, seg, cum, at, main, total: cum.length ? cum[cum.length - 1] : 0 });
  }
  const cumAt = (g, s) => g.pts.length ? g.cum[g.at[s.id]] : 0;
  function slice(g, d) {
    const out = []; let cur = null, sp = -1;
    for (let i = 0; i < g.pts.length; i++) {
      if (g.cum[i] > d) {
        if (cur && i > 0 && g.seg[i] === g.seg[i - 1]) { const a = g.pts[i - 1], b = g.pts[i], t = (d - g.cum[i - 1]) / ((g.cum[i] - g.cum[i - 1]) || 1); cur.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
        break;
      }
      if (g.seg[i] !== sp) { cur = []; out.push(cur); sp = g.seg[i]; }
      cur.push(g.pts[i]);
    }
    return out.filter(x => x.length > 1);
  }
  function barEl(label, dots, frac, right) {
    const b = document.createElement('div'); b.className = 'sbar';
    const l = document.createElement('span'); l.textContent = label;
    const t = document.createElement('div'); t.className = 'strack';
    const f = document.createElement('div'); f.className = 'fill'; f.style.width = Math.max(0, Math.min(1, frac)) * 100 + '%'; t.appendChild(f);
    dots.forEach((on, i) => { const d = document.createElement('i'); if (on) d.className = 'on'; d.style.left = (dots.length > 1 ? i / (dots.length - 1) : 0) * 100 + '%'; t.appendChild(d); });
    const r = document.createElement('span'); r.textContent = right;
    b.append(l, t, r); return b;
  }
  function renderWalkProg() {
    const box = $('tProgW'); box.innerHTML = '';
    if (!route || !route.trasa || route.id === 'finale') return;
    const g = geo(route), m = g.main; if (!m.length) return;
    let last = -1; m.forEach((s, i) => { if (visited.has(s.id)) last = i; });
    const dk = last >= 0 ? cumAt(g, m[last]) : 0;
    const nx = nextStop(); const no = nx ? m.indexOf(nx) + 1 : m.length;
    box.appendChild(barEl(nx ? `Zastávka ${no}/${m.length}` : 'Hotovo ✓', m.map(s => visited.has(s.id)), g.total ? dk / g.total : 0, `${fmtKm(dk)} z ${fmtKm(g.total)}`));
  }

  /* ---------- night show (route preview + weekend recap) ---------- */
  let showing = false, showTok = 0, showLayer = null, speed = 1, showPins = [];
  const STOP = 'ppStop';
  const sleep = (ms, tok) => new Promise((res, rej) => setTimeout(() => (tok === showTok ? res() : rej(STOP)), ms / speed));
  function animate(ms, fn, tok) {
    return new Promise((res, rej) => {
      const t0 = performance.now(), dur = ms / speed;
      const f = (now) => {
        if (tok !== showTok) return rej(STOP);
        const t = Math.min(1, (now - t0) / dur); fn(t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        if (t < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
  }
  function showBegin() {
    const tok = ++showTok; showing = true; stopSpeech();
    $('tour').classList.add('showing'); $('tmap').classList.add('night'); $('tMenu').hidden = true;
    layer.clearLayers(); if (meM) { meM.remove(); meC.remove(); meM = meC = null; }
    if (showLayer) showLayer.remove(); showLayer = L.layerGroup().addTo(map); showPins = [];
    const old = $('tShow'); if (old) old.remove();
    const ov = document.createElement('div'); ov.className = 'tshow'; ov.id = 'tShow';
    for (let i = 0; i < 22; i++) { const s = document.createElement('span'); s.className = 'sn'; s.textContent = i % 4 ? '•' : '❄'; s.style.left = Math.random() * 100 + '%'; s.style.fontSize = (5 + Math.random() * 9) + 'px'; s.style.animationDuration = (7 + Math.random() * 8) + 's'; s.style.animationDelay = (-Math.random() * 12) + 's'; ov.appendChild(s); }
    const h = document.createElement('div'); h.className = 'shead';
    const sp = document.createElement('button'); sp.className = 'tchip'; sp.textContent = speed > 1 ? '⏩ 2×' : '⏵ 1×'; sp.setAttribute('aria-label', 'Rychlost přehrávání');
    sp.onclick = () => { speed = speed > 1 ? 1 : 2; sp.textContent = speed > 1 ? '⏩ 2×' : '⏵ 1×'; };
    const x = document.createElement('button'); x.className = 'tchip icon'; x.textContent = '✕'; x.setAttribute('aria-label', 'Zavřít'); x.onclick = showEnd;
    h.append(sp, x); ov.appendChild(h);
    document.querySelector('#tour .mapwrap').appendChild(ov);
    map.invalidateSize();
    return tok;
  }
  function showEnd() {
    showTok++; showing = false;
    const ov = $('tShow'); if (ov) ov.remove();
    if (showLayer) { showLayer.remove(); showLayer = null; }
    $('tour').classList.remove('showing'); $('tmap').classList.remove('night');
    try { map.stop(); } catch {}
    setTimeout(() => { map.invalidateSize(); setupMap(); }, 60);
  }
  function glow() {
    const a = L.polyline([], { color: '#ff5a4e', weight: 16, opacity: .16, interactive: false, lineCap: 'round' }).addTo(showLayer);
    const b = L.polyline([], { color: '#ff7a5c', weight: 8, opacity: .38, interactive: false, lineCap: 'round' }).addTo(showLayer);
    const c = L.polyline([], { color: '#fff0dc', weight: 3, opacity: .95, interactive: false, lineCap: 'round' }).addTo(showLayer);
    return { set(ll) { a.setLatLngs(ll); b.setLatLngs(ll); c.setLatLngs(ll); } };
  }
  function pin(s, n, fin) {
    showPins.forEach(p => p.setIcon(pinIcon(p._n, null, p._fin)));
    const m = L.marker([s.lat, s.lon], { icon: pinIcon(n, s.nazov, fin), interactive: false, zIndexOffset: 500 }).addTo(showLayer);
    m._n = n; m._fin = fin; showPins.push(m);
  }
  function pinIcon(n, name, fin) {
    const lab = name ? `<span class="slab"><em>${n}</em>${name.replace(/[<>&]/g, '')}</span>` : '';
    return L.divIcon({ className: '', html: `<div class="spin2${fin ? ' fin' : ''}" style="position:relative">${lab}</div>`, iconSize: [16, 16], iconAnchor: [8, 8] });
  }
  function card(o) {
    const ov = $('tShow'); if (!ov) return; const old = ov.querySelector('.scard'); if (old) old.remove();
    if (!o) return;
    const c = document.createElement('div'); c.className = 'scard' + (o.big ? ' big' : '');
    if (o.big) { c.innerHTML = '<div class="k"></div><b></b><span></span>'; c.querySelector('.k').textContent = o.k || ''; }
    else { c.innerHTML = '<div class="sno"></div><div class="stx"><b></b><span></span></div>'; c.querySelector('.sno').textContent = o.n; }
    c.querySelector('b').textContent = o.b; c.querySelector('span').textContent = o.s || '';
    ov.appendChild(c);
  }
  function bar(label, dots, frac, right) {
    const ov = $('tShow'); if (!ov) return; const old = ov.querySelector('.sbar'); if (old) old.remove();
    ov.appendChild(barEl(label, dots, frac, right));
  }
  function polaroids(list) {
    const ov = $('tShow'); if (!ov) return; ov.querySelectorAll('.spol').forEach(e => e.remove());
    list.forEach((p, i) => {
      const d = document.createElement('div'); d.className = 'spol' + (i % 2 ? ' r' : '');
      d.style.setProperty('--rot', (i % 2 ? 4 : -5) + (Math.random() * 3 - 1.5) + 'deg');
      const img = document.createElement('img'); img.alt = ''; img.src = PP.publicUrl(p.cesta); img.onerror = () => d.remove();
      d.appendChild(img);
      if (p.popis) { const t = document.createElement('p'); t.textContent = p.popis; d.appendChild(t); }
      ov.appendChild(d);
    });
  }
  const preload = (list, tok) => Promise.race([Promise.all(list.map(p => new Promise(r => { const i = new Image(); i.onload = i.onerror = r; i.src = PP.publicUrl(p.cesta); }))), sleep(2500 * speed, tok)]);
  function summary(build) {
    const ov = $('tShow'); if (!ov) return; const s = document.createElement('div'); s.className = 'ssum'; build(s); ov.appendChild(s);
  }
  const plural = (n, a, b, c) => n === 1 ? a : n >= 2 && n <= 4 ? b : c;
  const rName = (r) => r.nazov.replace(/^[^:]+:\s*/, '');

  async function playPreview(r) {
    const g = geo(r); if (!g.pts.length || !map) return;
    const tok = showBegin();
    try {
      const m = g.main, gifts = m.filter(s => s.gula).length, min = Math.max(5, Math.round(g.total / 1000 * 15 / 5) * 5);
      map.fitBounds(L.latLngBounds(g.pts).pad(.12), { animate: false });
      card({ big: true, k: 'Ukázka trasy', b: rName(r), s: `${m.length} ${plural(m.length, 'zastávka', 'zastávky', 'zastávek')} · ${fmtKm(g.total)} · asi ${min} min chůze` });
      bar(`Zastávka 0/${m.length}`, m.map(() => false), 0, '0,0 km');
      await sleep(2600, tok);
      const line = glow(); let d = 0;
      for (let i = 0; i < m.length; i++) {
        const s = m[i], d1 = Math.max(d, cumAt(g, s)), dur = Math.min(2600, Math.max(1100, (d1 - d) * 3));
        card(null);
        map.flyTo([s.lat, s.lon], 16, { duration: dur / 1000 / speed });
        await animate(dur, t => line.set(slice(g, d + (d1 - d) * t)), tok);
        d = d1; pin(s, i + 1);
        card({ n: i + 1, b: s.nazov + (s.gula ? ' 🎁' : ''), s: s.kratce || '' });
        bar(`Zastávka ${i + 1}/${m.length}`, m.map((_, j) => j <= i), g.total ? d / g.total : 0, fmtKm(d));
        await sleep(1900, tok);
      }
      card(null);
      if (g.total > d) await animate(Math.min(1500, (g.total - d) * 3), t => line.set(slice(g, d + (g.total - d) * t)), tok);
      map.flyToBounds(L.latLngBounds(g.pts).pad(.12), { duration: 1.4 / speed });
      await sleep(1500, tok);
      bar(`Zastávka ${m.length}/${m.length}`, m.map(() => true), 1, fmtKm(g.total));
      summary(su => {
        su.innerHTML = '<div class="h"></div><div class="nums"></div><ol></ol><div class="row"></div>';
        su.querySelector('.h').textContent = rName(r);
        const nums = [[fmtKm(g.total).replace(' km', ''), 'km'], [`${min}`, 'min chůze'], [m.length, plural(m.length, 'zastávka', 'zastávky', 'zastávek')]];
        if (gifts) nums.push([gifts, gifts === 1 ? 'dáreček 🎁' : 'dárečky 🎁']);
        nums.forEach(([a, b]) => { const d2 = document.createElement('div'); d2.innerHTML = '<b></b><span></span>'; d2.querySelector('b').textContent = a; d2.querySelector('span').textContent = b; su.querySelector('.nums').appendChild(d2); });
        m.forEach((s, i) => { const li = document.createElement('li'); li.innerHTML = '<em></em><span></span>'; li.querySelector('em').textContent = i + 1; li.querySelector('span').textContent = s.nazov; su.querySelector('ol').appendChild(li); });
        const again = document.createElement('button'); again.className = 'btn ghost'; again.textContent = '↺ Znovu'; again.onclick = () => playPreview(r);
        const go = document.createElement('button'); go.className = 'btn'; go.textContent = 'Jdeme na to ♥'; go.onclick = showEnd;
        su.querySelector('.row').append(again, go);
      });
    } catch (e) { if (e !== STOP) { console.error(e); showEnd(); } }
  }

  /* ---------- weekend recap ---------- */
  const TRIP = ['2026-12-05', '2026-12-06', '2026-12-07'];
  function recapReady() { return store.get('pp-v-revealed', false) || PP.preview || PP.dayKey(PP.now()) >= '2026-12-07'; }
  function recapPlan() {
    const photos = (PP.PHOTOS || []).filter(p => TRIP.includes(p.den));
    const fin = byId('schonbrunn');
    const all = []; // {r, s, fin}
    V.okruhy.forEach(r => { if (r.id === 'finale') { if (fin) all.push({ r, s: fin, fin: true }); } else geo(r).main.forEach(s => all.push({ r, s })); });
    const by = new Map(all.map(x => [x.s.id, Object.assign(x, { ph: [] })]));
    const left = [];
    photos.forEach(p => {
      const u = (p.ukol || '').replace(/^Duško:\s*/, '');
      const hit = all.find(x => u.startsWith(x.s.nazov + ':'));
      if (hit) hit.ph.push(p); else left.push(p);
    });
    const inc = (x) => visited.has(x.s.id) || x.ph.length || (x.fin && store.get('pp-v-revealed', false));
    let chosen = all.filter(inc);
    const rest = [];
    left.forEach(p => {
      if (p.lat == null) { rest.push(p); return; }
      let best = null, bd = 250; chosen.forEach(x => { const d = dist({ lat: p.lat, lon: p.lon }, x.s); if (d < bd) { bd = d; best = x; } });
      if (best) best.ph.push(p); else rest.push(p);
    });
    const days = TRIP.map(den => ({ den, items: chosen.filter(x => x.r.den === den) })).filter(d => d.items.length);
    return { days, count: chosen.length, photos: photos.length, rest };
  }
  async function playRecap() {
    if (!map) setupMap();
    const plan = recapPlan();
    const tok = showBegin();
    try {
      if (!plan.count) {
        card({ big: true, k: 'Náš vánoční víkend', b: 'Zatím tu nic není', s: 'Až projdete první zastávky, objeví se tady.' });
        await sleep(3500, tok); showEnd(); return;
      }
      const items = plan.days.flatMap(d => d.items);
      const ll = items.map(x => [x.s.lat, x.s.lon]);
      map.fitBounds(L.latLngBounds(ll).pad(.15), { animate: false });
      card({ big: true, k: 'Náš vánoční víkend', b: 'Vídeň, 5.–7. prosince', s: `${plan.count} ${plural(plan.count, 'zastávka', 'zastávky', 'zastávek')} · ${plan.photos} ${plural(plan.photos, 'fotka', 'fotky', 'fotek')} · ty a já ♥` });
      await sleep(3000, tok); card(null);
      let n = 0, km = 0;
      const dots = () => items.map((_, j) => j < n);
      for (const day of plan.days) {
        const ov = $('tShow'); const sd = document.createElement('div'); sd.className = 'sday';
        sd.innerHTML = '<div><small></small><span></span></div>'; sd.querySelector('small').textContent = 'Vídeň'; sd.querySelector('span').textContent = PP.fmtDay(day.den, { weekday: 'long', day: 'numeric', month: 'long' });
        ov.appendChild(sd); setTimeout(() => sd.remove(), 2300);
        await sleep(2300, tok);
        let curR = null, line = null, g = null, d = 0;
        for (const x of day.items) {
          n++;
          if (x.r !== curR) { curR = x.r; g = geo(x.r); line = g.pts.length && !x.fin ? glow() : null; d = x.fin ? 0 : cumAt(g, x.s); }
          const d1 = x.fin ? 0 : Math.max(d, cumAt(g, x.s)), dur = Math.min(2600, Math.max(1100, (d1 - d) * 3 || 1300));
          polaroids([]); card(null);
          const pl = preload(x.ph.slice(0, 4), tok);
          map.flyTo([x.s.lat, x.s.lon], x.fin ? 15.5 : 16, { duration: dur / 1000 / speed });
          if (line) await animate(dur, t => line.set(slice(g, d + (d1 - d) * t)), tok); else await sleep(dur, tok);
          km += d1 - d; d = d1;
          pin(x.s, x.fin ? '♥' : n, x.fin);
          card({ n: x.fin ? '♥' : n, b: x.fin ? 'Imperial Lights' : x.s.nazov, s: x.s.kratce || '' });
          bar(`Zastávka ${n}/${items.length}`, dots(), items.length > 1 ? (n - 1) / (items.length - 1) : 1, fmtKm(km));
          await pl;
          const ph = x.ph.slice(0, 4);
          if (!ph.length) { await sleep(1900, tok); continue; }
          for (let k = 0; k < ph.length; k += 2) { polaroids(ph.slice(k, k + 2)); await sleep(k ? 2600 : 3000, tok); }
        }
      }
      polaroids([]); card(null);
      map.flyToBounds(L.latLngBounds(ll).pad(.15), { duration: 1.6 / speed });
      await sleep(1700, tok);
      const rev = store.get('pp-v-revealed', false);
      summary(su => {
        su.innerHTML = '<div class="h">Náš vánoční víkend</div><div class="nums"></div>';
        [[fmtKm(km).replace(' km', ''), 'km pěšky'], [plan.count, plural(plan.count, 'zastávka', 'zastávky', 'zastávek')], [plan.photos, plural(plan.photos, 'fotka', 'fotky', 'fotek')], [`${gotGule().length}`, 'ozdob 🎄']].forEach(([a, b]) => { const d2 = document.createElement('div'); d2.innerHTML = '<b></b><span></span>'; d2.querySelector('b').textContent = a; d2.querySelector('span').textContent = b; su.querySelector('.nums').appendChild(d2); });
        if (rev) { const w = document.createElement('div'); w.className = 'word'; w.textContent = V.tajenka; su.appendChild(w); }
        if (plan.rest.length) { const c = document.createElement('div'); c.className = 'scoll'; plan.rest.slice(0, 12).forEach(p => { const i = document.createElement('img'); i.alt = ''; i.loading = 'lazy'; i.src = PP.publicUrl(p.cesta); c.appendChild(i); }); su.appendChild(c); }
        const ol = document.createElement('ol'); let k = 0; items.forEach(x => { k++; const li = document.createElement('li'); li.innerHTML = '<em></em><span></span>'; li.querySelector('em').textContent = k; li.querySelector('span').textContent = x.fin ? 'Imperial Lights ♥' : x.s.nazov; ol.appendChild(li); }); su.appendChild(ol);
        const row = document.createElement('div'); row.className = 'row';
        const again = document.createElement('button'); again.className = 'btn ghost'; again.textContent = '↺ Znovu'; again.onclick = () => playRecap();
        const cl = document.createElement('button'); cl.className = 'btn'; cl.textContent = 'Zavřít ♥'; cl.onclick = showEnd;
        row.append(again, cl); su.appendChild(row);
      });
    } catch (e) { if (e !== STOP) { console.error(e); showEnd(); } }
  }
  $('tPrevw').onclick = () => { if (route) playPreview(route); };

  function onPhoto(extra) { if (extra && extra.stopId) { fotoDone.add(extra.stopId); save(); if (current && current.id === extra.stopId) { const sc = $('tStory').scrollTop; showStory(current, false, true); $('tStory').scrollTop = sc; } } }

  window.PRUVODCE = { init, open, onPhoto, _preview: (id) => playPreview(V.okruhy.find(r => r.id === id)), _recap: () => playRecap(), _state: () => ({ showing, route: route && route.id, current: current && current.id, visited: [...visited], gule: gotGule().map(m => m.id), revealed: store.get('pp-v-revealed', false), speaking }) };
})();
