// Dudkov sprievodca: Viedeň – romantická adventná
// Formát rovnaký ako praha.js. Texty sú písané pre dvojicu (vykanie v množnom čísle).

window.MESTA = window.MESTA || [];

window.MESTA.push({
  id: "viden",
  nazov: "Viedeň",
  krajina: "Rakúsko",
  stred: [48.2085, 16.3690],
  zoom: 15,
  trasaZaklad: [48, 16],
  uvod: "Romantická adventná Viedeň pre dvoch: skryté dvory, osvetlené uličky, cisárske lásky a vianočné trhy, ktoré poznajú hlavne Viedenčania. Najkrajšie je to po zotmení, okolo pol piatej.",
  poznamka: "Trhy 2026 (podľa zverejnených termínov, môžu sa zmeniť): Rathausplatz 13. 11. – 26. 12. denne 10–22, ľadová plocha Eistraum od 14. 11.; Spittelberg 13. 11. – 23. 12., Po–Pi 14–21:30, víkend 11–21:30; Am Hof 13. 11. – 23. 12., 11–21 (Pi–Ne od 10); Freyung 14. 11. – 23. 12., 10–21; Altes AKH 13. 11. – 23. 12., Po–Št 14–22, Pi 14–23, So 11–23, Ne 11–21; Karlsplatz 13. 11. – 23. 12., 12–20; Belvedere 20. 11. – 31. 12., 11–21 (víkend od 10); Riesenradplatz 20. 11. – 6. 1. Heiligenkreuzerhof a Gartenpalais Liechtenstein nemali v čase prípravy zverejnené termíny, overte si ich.",

  okruhy: [
    {
      id: "rozpravka",
      nazov: "Večerná rozprávka",
      popis: "Od Dómu sv. Štefana cez skryté dvory a lampami osvetlené uličky, okolo Mozarta, baziliška a Beethovena až k srdiečkovému stromu a korčuľovaniu pred radnicou.",
      dlzka: "asi 3 km",
      trasa: "20826,37244 20804,37319 20806,37372 20841,37415 20813,37484 20825,37456 20845,37472 20841,37483 20879,37520 20873,37536 20917,37600 20903,37632 20928,37662 20924,37671 20952,37720 20954,37739 20978,37710 20994,37672 20978,37710 20954,37739 20945,37774 20919,37752 20945,37774 20924,37833 20989,37890 21005,37891 21060,37729 21076,37722 21066,37701 21078,37603 21096,37545 21074,37498 21010,37411 21121,37196 21104,37170 21140,37094 21128,37076 21180,36941 21157,36898 21150,36860 21168,36829 21152,36808 21155,36802 21093,36733 21101,36720 21094,36711 21113,36668 21107,36665 21139,36579 21138,36562 21173,36477 21171,36439 21204,36408 21173,36325 21189,36293 21204,36279 21218,36245 21204,36279 21182,36295 21169,36318 21115,36185 21111,36189 21103,36171 21110,36104 21050,36080 21056,36034 21044,36030 21060,35920",
      cas: "3 hodiny s punčom",
      zastavky: ["stephansdom", "mozarthaus", "heiligenkreuzerhof", "schoenlatern", "jesuiten", "griechengasse", "amhof", "freyung", "moelker", "rathaus"],
      drobnosti: ["haas", "blutgasse", "ruprecht", "ankeruhr"],
      uvod: "Vitajte vo Viedni. Dnes večer vás prevediem mestom tak, ako ho väčšina turistov nevidí: skrytými dvormi, uličkami s lampami a miestami, kde sa písali skutočné aj vymyslené ľúbostné príbehy. Nikam sa neponáhľajte. Keď vás niečo zaujme, zastavte sa a dajte si punč. Začíname pri Dóme svätého Štefana.",
      cestou: {
        stephansdom: "Teraz obíďte dóm z pravej strany, smerom za jeho zadnú časť, a pokračujte do úzkej Domgasse. Je to len pár krokov.",
        mozarthaus: "Ďalšia zastávka je skrytý dvor asi tristo metrov na severovýchod. Sledujte čiaru na mape. Vchod je cez veľkú bránu zo Schönlaterngasse alebo z Grashofgasse.",
        heiligenkreuzerhof: "Vyjdite z dvora bránou na Schönlaterngasse a choďte pomaly. Hľadajte na stene kovovú lampu a na dome nástennú maľbu so zvláštnym zvieraťom.",
        schoenlatern: "Kúsok odtiaľto je malé námestie s barokovým kostolom a starou univerzitou. Ak je kostol otvorený, vojdite dnu.",
        jesuiten: "Teraz choďte na sever, k ulici Fleischmarkt. Úzka Griechengasse so starou vežou z nej odbočuje. Sledujte čiaru na mape.",
        griechengasse: "Teraz je pred vami dlhší úsek, asi pätnásť minút. Choďte cez Hoher Markt s veľkými secesnými hodinami a ďalej na západ až na veľké námestie Am Hof s vianočným trhom.",
        amhof: "Z námestia vyjdite na západ, smerom ku kostolu Schottenkirche. Ďalšie námestie, Freyung, s druhým trhom, je hneď za rohom.",
        freyung: "Teraz choďte smerom k Ringu, k zvyšku starých hradieb Mölker Bastei. Hore vedú schody Mölker Steig, pri ktorých stojí malý domček. Je to tiché miesto so starými lampami.",
        moelker: "Zíďte z hradieb, prejdite cez Ring a pred vami bude svietiť radnica. Choďte rovno do parku pred ňou."
      },
      zaver: "A sme na konci. Pred vami svieti radnica, okolo vás trh a ľadové chodníčky pomedzi stromy. Ak máte ešte silu, požičajte si korčule a prejdite sa spolu pomedzi osvetlené stromy. A ak chcete večer zakončiť naozaj romanticky, zoberte električku alebo metro U1 k Pratru a zviezte sa nočným obrovským kolesom. Krásny večer vám obom."
    },
    {
      id: "cisarska",
      nazov: "Cisárska láska",
      popis: "Príbeh Sisi a Františka Jozefa: svetlá na Grabene, Sisine fialky v Demeli, kostol ich svadby, sklenený Palmenhaus a na záver útulný trh na Spittelbergu.",
      dlzka: "asi 2 km",
      trasa: "20873,36970 20867,36968 20942,36850 20815,36675 20818,36641 20711,36714 20620,36757 20604,36779 20592,36784 20604,36779 20620,36757 20638,36752 20618,36711 20596,36711 20579,36727 20573,36717 20566,36701 20592,36663 20561,36618 20544,36617 20500,36670 20496,36661 20503,36651 20497,36639 20503,36604 20490,36563 20501,36547 20413,36391 20531,36236 20498,36182 20497,36156 20462,36096 20468,36083 20464,36060 20490,36026 20433,35926 20513,35822 20433,35659 20432,35643 20437,35638 20411,35502 20356,35515",
      cas: "2 až 2,5 hodiny",
      zastavky: ["graben", "demel", "michaelerplatz", "augustiner", "palmenhaus", "mtplatz", "spittelberg"],
      drobnosti: ["mq", "joseph"],
      uvod: "Toto je prechádzka o cisárskych láskach. O Sisi a Františkovi Jozefovi, o Márii Terézii, ktorá sa vydala z lásky, čo bolo u panovníkov veľmi vzácne, aj o tom, čo z ich príbehov zostalo v uliciach Viedne. Začíname na Grabene, pod žiariacimi lustrami.",
      cestou: {
        graben: "Na konci Grabenu zahnite doľava na Kohlmarkt. Cukráreň Demel je na ľavej strane, spoznáte ju podľa výkladov.",
        demel: "Pokračujte Kohlmarktom až na koniec. Otvorí sa pred vami námestie s obrovskou bránou Hofburgu.",
        michaelerplatz: "Prejdite vľavo cez Josefsplatz s jazdeckou sochou cisára Jozefa. Kostol svadby je hneď za rohom, na Augustinerstraße.",
        augustiner: "Pokračujte Augustinerstraße k Albertine a potom vpravo do Burggartenu. Sklenený palác uvidíte hneď.",
        palmenhaus: "Prejdite parkom a cez Ring k veľkej soche cisárovnej medzi dvoma rovnakými múzeami.",
        mtplatz: "Teraz prejdite cez MuseumsQuartier a za ním hore do úzkych uličiek Spittelbergu.",
      },
      zaver: "Toto bola Cisárska láska. Ste na Spittelbergu, kde Viedenčania chodia na punč s priateľmi. Nájdite si stánok, objednajte si dva hrnčeky a nechajte si jeden na pamiatku. Na zálohovaných hrnčekoch je každý rok iný motív."
    },
    {
      id: "mimo-davu",
      nazov: "Mimo davu",
      popis: "Kam chodia Viedenčania: secesné schodisko Strudlhofstiege, trh v záhradách paláca Liechtensteinovcov, univerzitná Weihnachtsdorf a nasvietený Votivkirche.",
      dlzka: "asi 2 km",
      trasa: "22207,35776 22222,35776 22215,35782 22220,35790 22227,35877 22188,35916 22189,35931 22207,35948 22232,35927 22229,35911 22243,35905 22229,35911 22232,35927 22207,35948 22189,35931 22188,35916 22176,35928 22178,35943 22135,35975 22082,36042 22076,36019 21918,36096 21849,35927 21845,35929 21812,35853 21732,35928 21646,35676 21640,35666 21633,35669 21625,35652 21610,35520 21601,35521 21587,35452 21606,35450 21605,35421 21606,35450 21587,35452 21579,35462 21560,35513 21541,35770 21556,35854 21538,35870 21531,35863 21514,35903 21524,35912",
      cas: "1,5 až 2 hodiny",
      zastavky: ["strudlhof", "liechtenstein", "akh", "votiv"],
      drobnosti: [],
      uvod: "Toto je prechádzka pre tých, ktorí už Viedeň poznajú. Žiadne preplnené námestia, ale miesta, ktoré Viedenčania nechávajú radšej pre seba. Začíname na secesnom schodisku v deviatom okrese.",
      cestou: {
        strudlhof: "Zíďte dolu schodmi na Liechtensteinstraße a choďte doľava, na sever, k palácu Liechtenstein. Vchod je z Fürstengasse. Je to asi dve minúty.",
        liechtenstein: "Teraz choďte Liechtensteinstraße späť na juh a potom vpravo do areálu starej nemocnice, Altes AKH. Vchod do veľkého dvora je zo Spitalgasse aj z Alser Straße.",
        akh: "Z dvora vyjdite smerom na východ. Dvojvežový novogotický kostol, ktorý svieti nad parkom, je cieľ."
      },
      zaver: "Toto bola Viedeň mimo davu. Odtiaľto ste kúsok od Ringu a električkou za pár minút v centre. Ak vám ešte zostala chuť, Rathausplatz s ľadovou plochou je odtiaľto len päť minút pešo."
    },
    {
      id: "barok",
      nazov: "Barokové svetlá",
      popis: "Karlskirche v odraze jazierka a umelecký trh, osvetlená fontána na Schwarzenbergplatz a na záver Belvedere, kde visí Klimtov Bozk.",
      dlzka: "asi 1,5 km",
      trasa: "19870,37180 19892,37243 19891,37331 19877,37330 19815,37484 19790,37491 19447,37704 19283,37845 19287,37862 19122,37967 19129,37996 19106,38032 19112,38099 19101,38101",
      cas: "1,5 hodiny, s Bozkom 2,5",
      zastavky: ["karlskirche", "belvedere"],
      drobnosti: ["hochstrahl"],
      uvod: "Krátka prechádzka barokovou Viedňou. Začíname pri Karlskirche a končíme pri obraze, ktorý je možno najslávnejším bozkom v dejinách umenia.",
      cestou: {
        karlskirche: "Teraz choďte na východ, cez Schwarzenbergplatz s osvetlenou fontánou, a potom hore Prinz-Eugen-Straße k Hornému Belvederu."
      },
      zaver: "A tu prechádzka končí. Ak je ešte otvorené, choďte sa pozrieť na Bozk naživo. Je oveľa väčší a viac sa ligoce, než si ľudia predstavujú."
    }
  ],

  miesta: [
    {
      id: "stephansdom",
      nazov: "Dóm sv. Štefana",
      lat: 48.20835, lon: 16.37250, polomer: 45,
      kratko: "Tu sa ženil Mozart.",
      text: "Stojíte pred Dómom svätého Štefana, srdcom Viedne. Pozrite na strechu: je pokrytá vyše dvestotridsiatimi tisícami farebných škridiel, ktoré tvoria vzory a cisárske orly. Pre vás dvoch je tu dôležitejší iný príbeh. Štvrtého augusta 1782 sa v tomto dóme oženil Wolfgang Amadeus Mozart so svojou Konstanzou. Jeho otec bol proti a súhlas mu poslal až po svadbe.",
      pozri: [
        "Strecha so vzorom: na južnej strane hľadajte dvojhlavého orla.",
        "Pri hlavnom vchode sú na stene vytesané staré dĺžkové miery. Obchodníci si nimi overovali látky.",
        "Južná veža, Steffl, je vysoká 136 metrov. Viedenčania ju berú ako symbol mesta."
      ],
      viac: "Mozart a Konstanza sa poznali od jej sestry Aloisie, do ktorej bol Mozart pôvodne zamilovaný a ktorá ho odmietla. Svadba bola skromná, bolo na nej len pár ľudí a podľa Mozartových listov sa obaja pri obrade rozplakali. Žili spolu deväť rokov, až do Mozartovej smrti. Dóm má aj iný príbeh. Najväčší zvon, Pummerin, sa rozoznieva len pri výnimočných príležitostiach, napríklad pri príchode Nového roka. Jeho predchodcu odliali z diel, ktoré zanechali Turci po obliehaní Viedne v roku 1683.",
      tip: "Vianočný trh na Stephansplatz je malý. Zaujímavejší je vnútorný dvor čajovne Haas & Haas hneď za dómom.",
      info: "Dóm je otvorený denne, prehliadky veží, katakomb a strechy sú spoplatnené. Počas omší je prehliadka obmedzená."
    },
    {
      id: "haas",
      typ: "drobnost",
      nazov: "Dvor Haas & Haas",
      lat: 48.20795, lon: 16.37395, polomer: 20,
      kratko: "Útulný dvor čajovne s punčom.",
      text: "Drobnosť: hneď vedľa je čajovňa Haas a Haas. V advente býva v jej dvore malý zimný trh, kam chodia hlavne Viedenčania. Majú tu domáci punč a je tu výrazne pokojnejšie ako pred dómom. Ak je otvorené, je to ideálne miesto na prvý spoločný hrnček."
    },
    {
      id: "blutgasse",
      typ: "drobnost",
      nazov: "Blutgasse",
      lat: 48.20762, lon: 16.37440, polomer: 20,
      kratko: "Ulička s hrozivým menom a krásnymi dvormi.",
      text: "Drobnosť: táto ulička sa volá Blutgasse, Krvavá ulica. Legenda hovorí o krvavom konci templárov, historici skôr o mäsiaroch, ktorí tu kedysi pracovali. Dnes je to jedna z najtichších uličiek centra. Nazrite do dvora Fähnrichshof, je ako malé mestečko schované medzi domami."
    },
    {
      id: "mozarthaus",
      nazov: "Mozartov dom",
      lat: 48.20822, lon: 16.37493, polomer: 30,
      kratko: "Byt, kde Mozart a Konstanza prežili najšťastnejšie roky.",
      text: "V tomto dome na Domgasse žili Mozart a Konstanza v rokoch 1784 až 1787. Bol to ich najväčší a najdrahší byt a zároveň najšťastnejšie obdobie Mozartovho života. Mal úspech, peniaze aj priateľov. Tu napísal operu Figarova svadba. Je to mimochodom jediný z vyše desiatky Mozartových viedenských bytov, ktorý sa zachoval.",
      pozri: [
        "Pozrite na okná prvého poschodia, tam mali byt.",
        "Úzka Domgasse s osvetlenými oknami vyzerá večer ako z Mozartových čias."
      ],
      viac: "Mozart sa sťahoval veľmi často. Vo Viedni vystriedal vyše desať bytov, podľa toho, ako sa mu práve darilo. Tento byt bol skutočne veľkorysý: mal niekoľko izieb, kuchyňu a dokonca biliardový stôl. Mozart biliard miloval a vraj pri ňom vymýšľal melódie. Navštívil ho tu aj jeho otec Leopold a v listoch dcére sa nevedel vynachváliť, ako sa synovi darí. Dnes je tu múzeum.",
      tip: "Múzeum je otvorené cez deň, večer si dom môžete pozrieť len zvonka.",
      info: "Mozarthaus Vienna: vstup spoplatnený, zvyčajne denne do 19:00."
    },
    {
      id: "heiligenkreuzerhof",
      nazov: "Heiligenkreuzerhof",
      lat: 48.20994, lon: 16.37672, polomer: 40,
      kratko: "Skrytý kláštorný dvor s maličkým adventným trhom.",
      text: "Vošli ste do Heiligenkreuzerhofu, jedného z najkrajších a najmenej známych miest vo Viedni. Tento dvor patrí už od dvanásteho storočia kláštoru Heiligenkreuz za mestom. Mnísi sem vozili víno a tovar na predaj. Mesto akoby za bránou zmizne. V advente tu býva malý trh s ručne robenými vecami a domácim punčom.",
      pozri: [
        "V rohu dvora je malá Bernardova kaplnka, obľúbené miesto svadieb.",
        "Pozrite hore na barokové fasády. Okná tu svietia večer ako v rozprávke."
      ],
      viac: "Heiligenkreuz je cisterciánsky kláštor vo Viedenskom lese a funguje bez prestávky už od roku 1133. Je teda starší ako väčšina toho, čo vo Viedni vidíte. Dvor v meste bol jeho obchodnou základňou a dodnes mu patrí. Bernardova kaplnka v dvore je malá, barokovo zdobená a mnoho viedenských párov si práve tu hovorí áno, lebo je to pokojnejšie a intímnejšie ako veľké kostoly. Ak je kaplnka otvorená, nazrite dnu.",
      tip: "Trh tu býva len niektoré dni, najmä cez víkendy. Ak je zatvorený, dvor je krásny aj prázdny.",
      info: "Dvor je zvyčajne prístupný cez deň a podvečer. Termíny trhu pre rok 2026 neboli v čase prípravy zverejnené."
    },
    {
      id: "schoenlatern",
      nazov: "Schönlaterngasse a bazilišek",
      lat: 48.20965, lon: 16.37751, polomer: 25,
      kratko: "Ulička krásnej lampy a viedenský drak.",
      text: "Ste v Schönlaterngasse, ulici Krásnej lampy. Pozrite na kovovú lampu na stene, podľa nej dostala ulica meno. A na dome číslo sedem hľadajte nástennú maľbu a sochu zvláštneho tvora. Je to bazilišek, viedenský drak, a s týmto domom sa spája najslávnejšia viedenská povesť.",
      pozri: [
        "Kovaná lampa na stene, podľa nej sa ulica volá.",
        "Na dome číslo 7 je bazilišek: maľba aj socha vo výklenku.",
        "Ulica sa krúti tak, že nikdy nevidíte jej koniec. Večer je najkrajšia."
      ],
      viac: "Podľa legendy v roku 1212 našli v studni tohto domu basiliska, napoly kohúta a napoly ropuchu, ktorého pohľad zabíjal a dych otrávil vodu. Nikto sa k nemu neodvážil, až kým sa jeden pekársky učeň nespustil do studne so zrkadlom. Bazilišek zbadal vlastný odraz a od hrôzy skamenel. Studňu potom zasypali. V niektorých verziách povesti to učeň urobil preto, aby získal ruku majstrovej dcéry. Takže aj tento drak je vlastne ľúbostný príbeh.",
      tip: "Pár krokov odtiaľto je kaviareň Alt Wien, legendárny podnik s guľášom a umelcami.",
      info: "Voľne prístupné."
    },
    {
      id: "jesuiten",
      nazov: "Jezuitský kostol a falošná kupola",
      lat: 48.20913, lon: 16.37768, polomer: 30,
      kratko: "Kupola, ktorá neexistuje.",
      text: "Ste na námestí so starou univerzitou a jezuitským kostolom. Ak je otvorený, vojdite dnu a pozrite sa hore. Uvidíte nádhernú kupolu, ktorá v skutočnosti neexistuje. Strop je úplne rovný a kupolu naň namaľoval taliansky majster Andrea Pozzo začiatkom osemnásteho storočia. Ilúzia funguje najlepšie, keď stojíte v strede lode.",
      pozri: [
        "Vo vnútri kostola sa postavte doprostred lode a pozrite hore na kupolu.",
        "Potom choďte pár krokov ďalej a sledujte, ako sa kupola zrazu zdeformuje.",
        "Na námestí je budova starej univerzity, dnes Akadémia vied."
      ],
      viac: "Andrea Pozzo bol jezuitský maliar a majster perspektívy. Napísal o nej aj učebnicu. Podobnú falošnú kupolu namaľoval aj v Ríme. Pre vás dvoch je to pekný symbol: z jedného miesta vyzerá všetko dokonalo a stačí sa pohnúť, aby ste videli, že je to len maľba. V aule starej univerzity oproti v roku 1808 slávnostne uviedli Haydnovo oratórium Stvorenie, za prítomnosti starého Haydna. Bol to jeho posledný verejný výstup.",
      tip: "Kostol býva otvorený hlavne cez deň. Večer je námestie s osvetlenými fasádami jedno z najtichších v centre.",
      info: "Vstup do kostola je bezplatný, mimo bohoslužieb."
    },
    {
      id: "griechengasse",
      nazov: "Griechengasse a milý Augustín",
      lat: 48.21075, lon: 16.37727, polomer: 30,
      kratko: "Stredoveká ulička a najstarší hostinec mesta.",
      text: "Ste v Griechengasse, jednej z najstarších a najkľukatejších uličiek Viedne. Pozrite na stredovekú vežu nad uličkou. Na rohu je hostinec Griechenbeisl, jeden z najstarších vo Viedni. Varí sa tu už vyše päťsto rokov. A s týmto miestom sa spája povesť o milom Augustínovi, ktorého pieseň O du lieber Augustin poznajú všetky deti.",
      pozri: [
        "Stredoveká obytná veža v uličke, jedna z mála zachovaných.",
        "Pri vchode do Griechenbeislu je za mrežou socha Augustína v jame.",
        "Ulica sa lomí v pravom uhle. Večer tu svietia len lampy."
      ],
      viac: "Augustín bol pouličný hudobník a dudák. Počas morovej epidémie v roku 1679 sa vraj tak opil, že zaspal na ulici. Hrobári si mysleli, že je mŕtvy, a hodili ho do jamy s obeťami moru. Ráno sa zobudil, začal hrať na dudy a vytiahli ho. Mor ho vraj nechytil, lebo bol od alkoholu dezinfikovaný. A Griechenbeisl? Vo vnútri je miestnosť, ktorej strop a steny sú pokryté podpismi slávnych hostí, od Marka Twaina po hudobníkov a hercov.",
      tip: "Ak chcete teplé jedlo, Griechenbeisl je na tradičný viedenský rezeň dobrá voľba, ale rezervujte si stôl.",
      info: "Ulička voľne prístupná. Reštaurácia je otvorená zvyčajne denne."
    },
    {
      id: "ruprecht",
      typ: "drobnost",
      nazov: "Ruprechtskirche",
      lat: 48.21199, lon: 16.37439, polomer: 25,
      kratko: "Podľa tradície najstarší kostol Viedne.",
      text: "Drobnosť: malý kostolík na vyvýšenine sa volá Ruprechtskirche a podľa tradície je to najstarší kostol vo Viedni. Pôvodne stál rovno nad brehom Dunaja. Zvonka je skromný, ale vnútri sú jedny z najstarších vitráží v meste. A zo schodov pred ním je pekný pohľad na svetlá pri Dunajskom kanáli."
    },
    {
      id: "ankeruhr",
      typ: "drobnost",
      nazov: "Ankeruhr",
      lat: 48.21076, lon: 16.37368, polomer: 25,
      kratko: "Secesné hodiny, ktoré spájajú dve budovy.",
      text: "Drobnosť: pozrite hore na mostík medzi dvoma budovami. Sú v ňom secesné hodiny Ankeruhr. Každú hodinu nimi prejde jedna postava z dejín Viedne, od rímskeho cisára Marka Aurélia až po skladateľa Haydna. Na obed o dvanástej prejdú všetky naraz s hudbou."
    },
    {
      id: "amhof",
      nazov: "Am Hof",
      lat: 48.21111, lon: 16.36766, polomer: 50,
      kratko: "Námestie, kde skončila Svätá ríša rímska.",
      text: "Ste na Am Hof, najväčšom námestí vo vnútornom meste. Je tu vianočný trh so stánkami s umeleckými remeslami a vianočný strom. Pozrite na bielu fasádu kostola s balkónom. Práve z tohto balkóna v roku 1806 vyhlásili koniec Svätej ríše rímskej, ktorá trvala vyše tisíc rokov.",
      pozri: [
        "Balkón na fasáde kostola Am Hof.",
        "Uprostred námestia stojí Mariánsky stĺp.",
        "Na trhu tu býva viac umeleckých remesiel ako jedla. Dobré miesto na darček pre seba navzájom."
      ],
      viac: "Námestie dostalo meno podľa dvora, teda sídla Babenbergovcov, ktorí tu vládli predtým, než sa presťahovali do Hofburgu. Po stáročia sa tu konali turnaje, popravy aj trhy. Vianočný trh na Am Hof patrí k tým, kam chodia aj Viedenčania. Býva tu menej tlačenice ako pred radnicou a zameriava sa na tradičné remeslá, napríklad ručne fúkané sklenené ozdoby.",
      tip: "Kúpte si spolu jednu ozdobu na stromček a každý rok ju doma zaveste. Takú tradíciu si začína veľa párov.",
      info: "Trh 13. 11. – 23. 12. 2026, Po–Št 11–21, Pi–Ne a sviatky 10–21, občerstvenie do 22."
    },
    {
      id: "freyung",
      nazov: "Freyung a pasáž Ferstel",
      lat: 48.21162, lon: 16.36519, polomer: 45,
      kratko: "Najstarší vianočný trh a pasáž s nymfou Dunaja.",
      text: "Ste na Freyungu. Je tu Altwiener Christkindlmarkt, jeden z najtradičnejších vianočných trhov. Stánky sú tu ladené ako v starej Viedni a často tu hrá živá adventná hudba. Námestie sa volá Freyung, teda sloboda. Prenasledovaní ľudia tu kedysi našli útočisko v kláštore Schottenstift a nikto ich nesmel zatknúť.",
      pozri: [
        "Kostol Schottenkirche, tu bolo útočisko.",
        "Na južnej strane je vchod do pasáže Palais Ferstel. Vo vnútri je fontána s nymfou Dunaja.",
        "Za pasážou je slávna Café Central."
      ],
      viac: "Pasáž Palais Ferstel je jedna z najkrajších vo Viedni: sklenená strecha, mramor a uprostred fontána Donaunixenbrunnen, s nymfou Dunaja, ktorá drží rybu. Večer je tu teplo a ticho. A Café Central na rohu je legendárna kaviareň, kde kedysi sedávali spisovatelia, filozofi aj revolucionári. Traduje sa vtip o rakúskom politikovi, ktorý pri správach o hroziacej revolúcii v Rusku vraj povedal: A kto ju bude robiť, ten pán Bronštejn z kaviarne Central? Pán Bronštejn bol Lev Trockij.",
      tip: "Do Café Central sa po zotmení stojí rad. Zadný vchod cez pasáž býva menej nápadný.",
      info: "Trh 14. 11. – 23. 12. 2026, denne 10–21."
    },
    {
      id: "moelker",
      nazov: "Mölker Bastei a Dreimäderlhaus",
      lat: 48.21226, lon: 16.36254, polomer: 35,
      kratko: "Zvyšok hradieb, Beethoven a romantická legenda o Schubertovi.",
      text: "Ste na Mölker Bastei, jednom z mála zachovaných kúskov starých mestských hradieb. Je to jedno z najromantickejších zákutí Viedne: lampy, dlažba, ticho. Na dome číslo 8 býval Ludwig van Beethoven. A ten malý starobylý domček na rohu schodov je Dreimäderlhaus, Dom troch dievčat.",
      pozri: [
        "Dreimäderlhaus, úzky domček na rohu schodov Mölker Steig.",
        "Pasqualatihaus, dom číslo 8, kde Beethoven žil.",
        "Pohľad dolu na Ring a univerzitu."
      ],
      viac: "Legenda hovorí, že v Dome troch dievčat bývali tri sestry a do jednej z nich sa zaľúbil skladateľ Franz Schubert. Bol však taký hanblivý, že sa jej nikdy nevyznal a dievča si vzalo jeho priateľa. Ide skôr o legendu ako o doloženú históriu, ale v roku 1916 z nej urobili veľmi úspešnú operetu Das Dreimäderlhaus. Beethoven zase býval v dome oproti s prestávkami vyše osem rokov a napísal tu operu Fidelio. Bol to jeden z mála bytov, z ktorých sa neodsťahoval po pár mesiacoch. Údajne preto, že mal tak krásny výhľad.",
      tip: "Toto je dobré miesto na spoločnú fotku pod lampou.",
      info: "Voľne prístupné. Beethovenov byt je pobočkou Wien Museum, otvorené v obmedzených hodinách."
    },
    {
      id: "rathaus",
      nazov: "Radnica, srdiečka a ľad",
      lat: 48.21060, lon: 16.35920, polomer: 60,
      kratko: "Najväčší vianočný trh, Herzerlbaum a korčuľovanie pomedzi stromy.",
      text: "Ste pred viedenskou radnicou, ktorá v advente svieti ako zo zámku z rozprávky. Je tu najväčší vianočný trh vo Viedni. Dôležitejšia ako stánky je však časť v parku. Stromy v Rathausparku sú ozdobené svetlami a jeden z nich, Herzerlbaum, býva celý ovešaný svietiacimi srdiečkami. Je to obľúbené miesto na bozk a spoločnú fotku. A okolo radnice vedú ľadové chodníčky, po ktorých sa dá korčuľovať pomedzi stromy.",
      pozri: [
        "Herzerlbaum v Rathausparku, strom so srdiečkami.",
        "Ľadové chodníčky Eistraumu, ktoré sa vinú parkom a cez mostíky.",
        "Fasáda radnice, na jej vrchu stojí Rathausmann, železný rytier."
      ],
      viac: "Vianočný trh na mieste radnice má dlhé korene. Viedenský decembrový trh sa spomína už v roku 1298. Pred radnicou je trh od roku 1975. Na veži radnice stojí Rathausmann, socha rytiera, ktorá je tak trocha symbolom mesta. Hovorí sa, že architekt chcel, aby radnica nebola vyššia ako Votivkirche oproti, a tak ju o pár metrov prevýšil práve až tým rytierom na vrchole. Takže pravidlo dodržal a zároveň obišiel.",
      tip: "Korčule sa dajú požičať priamo na mieste. Najkrajšie je to po ôsmej večer, keď odídu rodiny s deťmi.",
      info: "Trh 13. 11. – 26. 12. 2026, denne 10–22, 24. 12. do 18:30. Wiener Eistraum od 14. 11. 2026, 10–22."
    },
    {
      id: "graben",
      nazov: "Graben pod lustrami",
      lat: 48.20872, lon: 16.36979, polomer: 40,
      kratko: "Ulica, nad ktorou visia obrie krištáľové lustre.",
      text: "Ste na Grabene, najelegantnejšej ulici Viedne. V advente nad ňou visia obrovské svetelné lustre, ako keby celá ulica bola tanečná sála plesu. Viedeň je mesto valčíka a plesov a tu to vidíte aj na ulici. Uprostred stojí morový stĺp, ktorý dal postaviť cisár Leopold Prvý ako poďakovanie za koniec moru v roku 1679.",
      pozri: [
        "Lustre nad ulicou. Postavte sa pod jeden a pozrite hore.",
        "Morový stĺp a na ňom kľačiaci cisár Leopold.",
        "Na rohu so Stephansplatz je moderný Haas-Haus, v ktorom sa zrkadlí dóm."
      ],
      viac: "Graben znamená priekopa. Kedysi tu viedla priekopa pred rímskym táborom Vindobona, ktorý stál na mieste dnešného centra. Neskôr ju zasypali a vznikla tu ulica pre trhy, neskôr aj pre módne obchody a kaviarne. Z ulice odbočuje mnoho malých uličiek. Ak nazriete do Naglergasse, uvidíte jednu z najkrajších stredovekých uličiek vo Viedni.",
      tip: "Fotku pod lustrami urobte s mobilom nastaveným na nočný režim, svetlá potom krásne svietia.",
      info: "Voľne prístupné. Vianočné osvetlenie býva zapnuté zhruba od polovice novembra do januára."
    },
    {
      id: "demel",
      nazov: "Demel a Sisine fialky",
      lat: 48.20861, lon: 16.36721, polomer: 30,
      kratko: "Cisárska cukráreň a kandizované fialky.",
      text: "Pred vami je Demel, bývalá cisárska a kráľovská dvorná cukráreň. Pozrite na výklady: v advente sú v nich rozprávkové scény z cukru a marcipánu. Cisárovná Sisi si odtiaľto dávala nosiť kandizované fialky. Boli to jej obľúbené sladkosti a Demel ich predáva dodnes v malých krabičkách.",
      pozri: [
        "Výklady Demelu, každý advent iná scéna z cukru.",
        "Nápis K. u. K. Hofzuckerbäcker, teda cisársko-kráľovský dvorný cukrár.",
        "Cez sklo je vidieť cukrárov pri práci."
      ],
      viac: "Sisi bola známa prísnymi diétami a cvičením, takže sladkosti si dovolila len výnimočne. Fialky však milovala a fialová farba sa stala jej symbolom. Demel je spojený aj so slávnou sladkou vojnou o Sachertortu. Eduard Sacher, syn vynálezcu torty, pracoval u Demela a pôvodný recept sa vraj dostal práve sem. Hotel Sacher a Demel sa potom roky súdili o to, kto môže predávať pravú Sachertortu.",
      tip: "Krabička kandizovaných fialiek je romantický darček, ktorý sa zmestí do vrecka.",
      info: "Otvorené zvyčajne denne do večera. V advente býva pred vchodom rad."
    },
    {
      id: "michaelerplatz",
      nazov: "Michaelerplatz a dom bez obočia",
      lat: 48.20799, lon: 16.36639, polomer: 40,
      kratko: "Brána Hofburgu a dom, ktorý cisár neznášal.",
      text: "Ste na Michaelerplatz pred bránou Hofburgu, zimného sídla Habsburgovcov. Odtiaľto vládli stáročia. Ale otočte sa. Oproti bráne stojí jednoduchá budova bez ozdôb, Looshaus. Keď ju v roku 1911 postavili, Viedenčania jej hovorili dom bez obočia, lebo okná nemali ozdobné rímsy. Cisár František Jozef ju vraj tak neznášal, že na túto stranu nechcel ani pozerať.",
      pozri: [
        "Michaelerská brána Hofburgu s kupolou a sochami Herkula.",
        "Looshaus oproti, so zelenými mramorovými stĺpmi a holou fasádou.",
        "Uprostred námestia sú odkryté zvyšky rímskych stavieb."
      ],
      viac: "František Jozef žil vo veľmi spartánskom režime: vstával o štvrtej ráno, spal na železnej vojenskej posteli a pracoval celý deň. Sisi bola pravý opak. Neznášala dvorný život a viedenskú etiketu, cestovala, jazdila na koni a písala básne. Ich manželstvo bolo zložité, ale František Jozef ju podľa svedectiev miloval až do konca. Keď sa dozvedel o jej zavraždení v Ženeve v roku 1898, vraj povedal, že nikto netuší, ako ju miloval.",
      tip: "V Hofburgu je Sisi múzeum s jej šatami, lekárničkou a súkromnými vecami.",
      info: "Sisi múzeum a cisárske apartmány: vstup spoplatnený, otvorené zvyčajne denne."
    },
    {
      id: "augustiner",
      nazov: "Augustínsky kostol, kostol svadieb",
      lat: 48.20588, lon: 16.36761, polomer: 35,
      kratko: "Tu sa vzali Sisi a František Jozef.",
      text: "Pred vami je Augustínsky kostol, farský kostol cisárskeho dvora. Dvadsiateho štvrtého apríla 1854 sa tu vzali cisár František Jozef a šestnásťročná Alžbeta Bavorská, Sisi. Vraj sa do nej zamiloval na prvý pohľad, hoci mal pôvodne požiadať o ruku jej staršiu sestru. Kostol je zvonka nenápadný, schovaný v rade budov Hofburgu.",
      pozri: [
        "Vo vnútri je pyramídový náhrobok arcivojvodkyne Márie Kristíny od sochára Canovu.",
        "Úzke gotické vnútro, kde stál svadobný sprievod."
      ],
      viac: "Ten príbeh o láske na prvý pohľad je naozaj zaznamenaný. Mladý cisár mal v kúpeľoch Bad Ischl požiadať o ruku Helenu, staršiu z bavorských sestier. Na stretnutí však uvidel jej mladšiu sestru Sisi a napriek vôli matky si vybral ju. V tomto kostole sa okrem nich sobášili aj ďalší: Mária Terézia s Františkom Štefanom a v zastúpení aj Mária Antoinetta a Napoleon s Máriou Lujzou. A v krypte je jedno z najzvláštnejších miest Viedne, Hrobka sŕdc, kde sú v strieborných urnách uložené srdcia päťdesiatich štyroch Habsburgovcov.",
      tip: "V nedeľu ráno tu na omši často zaznie Haydnova alebo Mozartova omša s orchestrom.",
      info: "Kostol je otvorený cez deň, mimo bohoslužieb. Hrobka sŕdc len s prehliadkou."
    },
    {
      id: "palmenhaus",
      nazov: "Palmenhaus v Burggartene",
      lat: 48.20510, lon: 16.36620, polomer: 45,
      kratko: "Secesný sklenený palác s palmami uprostred zimy.",
      text: "Ste v Burggartene, kedysi súkromnej záhrade cisára. Pred vami je Palmenhaus, obrovský secesný skleník s palmami. Postavili ho začiatkom dvadsiateho storočia. Dnes je v jednej jeho časti kaviareň a bar, kde sedíte pod palmami a vonku je zima a tma. Je to jedno z najromantickejších miest na teplý drink vo Viedni.",
      pozri: [
        "Secesná sklenená fasáda Palmenhausu, večer žiari zvnútra.",
        "V parku je socha Mozarta. V lete je pred ňou kvetinový záhon v tvare husľového kľúča.",
        "Vedľa je motýlí dom, kde lietajú tropické motýle aj v zime."
      ],
      viac: "Burggarten bol do roku 1919 len pre cisársku rodinu. František Jozef tu vraj sám pestoval rastliny a rád sa tu prechádzal. Skleník navrhol architekt Friedrich Ohmann v secesnom slohu. Mozartova socha bola pôvodne na inom námestí a sem ju presťahovali po vojne, keď bola poškodená.",
      tip: "Rezervujte si stôl v brasserii Palmenhaus vopred, cez advent je plno.",
      info: "Brasserie Palmenhaus je otvorená zvyčajne denne. Motýlí dom je spoplatnený a zatvára skoro."
    },
    {
      id: "mtplatz",
      nazov: "Mária Terézia, kráľovná z lásky",
      lat: 48.20451, lon: 16.36077, polomer: 50,
      kratko: "Panovníčka, ktorá sa vydala z lásky.",
      text: "Ste na námestí Márie Terézie medzi dvoma rovnakými múzeami. Uprostred sedí na tróne cisárovná Mária Terézia. V advente je tu vianočná dedinka. Pre vás je však dôležitý jej príbeh. Mária Terézia bola jednou z mála panovníčok, ktoré sa vydali z lásky. Vzala si Františka Štefana Lotrinského, do ktorého bola zamilovaná od detstva.",
      pozri: [
        "Socha Márie Terézie, okolo nej jej generáli a poradcovia.",
        "Dve múzeá oproti sebe: umelecko-historické a prírodovedné. Sú takmer zrkadlovo rovnaké."
      ],
      viac: "Mária Terézia a František Štefan mali šestnásť detí. Ich manželstvo bolo napriek jeho neverám podľa všetkého šťastné. Keď v roku 1765 náhle zomrel, Mária Terézia bola zdrvená. Do konca života nosila čierne šaty, ostrihala si vlasy a každý mesiac v deň jeho smrti sa modlila v jeho hrobke v Kapucínskej krypte. Dala si pripraviť dvojitý sarkofág, kde dnes ležia spolu, tvárami k sebe.",
      tip: "Vianočná dedinka tu cez týždeň môže zatvárať skôr, cez víkend býva otvorená do večera.",
      info: "Weihnachtsdorf 20. 11. – 26. 12. 2026. Otváracie hodiny cez týždeň sa v zdrojoch líšia, overte si ich."
    },
    {
      id: "mq",
      typ: "drobnost",
      nazov: "Zima v MuseumsQuartier",
      lat: 48.20318, lon: 16.35835, polomer: 30,
      kratko: "Svietiace iglu a punč v nádvorí múzeí.",
      text: "Drobnosť: v nádvorí MuseumsQuartier býva v zime podujatie Winter im MQ. Sú tu svietiace pavilóny, punč, často aj DJ a curling. Je to skôr večierok ako tradičný trh, a to sa pre zmenu na pár minút tiež hodí."
    },
    {
      id: "spittelberg",
      nazov: "Spittelberg",
      lat: 48.20356, lon: 16.35515, polomer: 45,
      kratko: "Biedermeierové uličky s najútulnejším trhom vo Viedni.",
      text: "Ste na Spittelbergu, v štvrti úzkych dláždených uličiek a biedermeierových domov. Vianočný trh tu nie je na jednom námestí, ale vinie sa uličkami, takže sa medzi stánkami túlate ako po dedine. Je tu viac umelcov a remeselníkov a menej sériových suvenírov. Mnoho Viedenčanov tvrdí, že je to najkrajší trh v meste.",
      pozri: [
        "Úzke uličky Spittelberggasse a Gutenberggasse so svetielkami nad hlavou.",
        "Na dome Gutenberggasse 13 hľadajte nápis o cisárovi Jozefovi.",
        "Pozrite do dvorov, často sú v nich ukryté ďalšie stánky."
      ],
      viac: "Spittelberg nemal vždy dobrú povesť. V osemnástom storočí to bola štvrť krčiem, vojakov a nevestincov. Legenda hovorí, že sem inkognito prišiel aj cisár Jozef Druhý a z jedného podniku ho vyhodili. Na dome Gutenberggasse 13 to pripomína rýmovaný nápis. Štvrť začala chátrať, v sedemdesiatych rokoch ju mali zbúrať. Zachránili ju obyvatelia a študenti, ktorí ju opravili. Dnes je to jedno z najmilších zákutí Viedne.",
      tip: "Na Spittelbergu ochutnajte namiesto klasického punču horúci jablkový mošt alebo Feuerzangenbowle.",
      info: "Trh 13. 11. – 23. 12. 2026, Po–Pi 14–21:30, víkendy a sviatky 11–21:30."
    },
    {
      id: "joseph",
      typ: "drobnost",
      nazov: "Kam vyletel cisár",
      lat: 48.20328, lon: 16.35559, polomer: 15,
      kratko: "Rýmovaný nápis o cisárovi, ktorého vyhodili.",
      text: "Drobnosť: nad bránou domu Gutenberggasse 13 hľadajte nápis v rýmoch. Hovorí, že cez túto bránu vyletel cisár Jozef Druhý. Prišiel sem vraj inkognito, choval sa dotieravo, a tak ho bez okolkov vyhodili. Či sa to naozaj stalo, nevie nikto. Ale Viedenčanom sa ten príbeh tak páčil, že ho dali napísať na dom."
    },
    {
      id: "strudlhof",
      nazov: "Strudlhofstiege",
      lat: 48.22207, lon: 16.35776, polomer: 35,
      kratko: "Najromantickejšie secesné schodisko Viedne.",
      text: "Ste pri Strudlhofstiege, secesnom schodisku z roku 1910. Vinie sa terasami, má fontánky a hlavne krásne lampy. Večer, keď sa rozsvietia, patrí k najromantickejším miestam vo Viedni. Turisti sem chodia málo, Viedenčania veľa.",
      pozri: [
        "Secesné lampy na zábradlí, večer svietia teplým svetlom.",
        "Malá fontánka v strede schodiska, s maskou.",
        "Pohľad zhora dolu na mesto."
      ],
      viac: "Schodisko je slávne aj vďaka románu Heimita von Doderera, ktorý sa volá jednoducho Die Strudlhofstiege. Je to veľký viedenský román o láskach, náhodách a stretnutiach a schodisko je v ňom miestom, kde sa osudy postáv pretínajú. Doderer o ňom napísal aj báseň, ktorá je na schodisku vytesaná. Na hornom konci schodov je pamätná tabuľa.",
      tip: "Postavte sa na prostrednú terasu, odtiaľ je najkrajší záber schodiska aj s lampami.",
      info: "Voľne prístupné. V zime môžu byť schody klzké."
    },
    {
      id: "liechtenstein",
      nazov: "Gartenpalais Liechtenstein",
      lat: 48.22240, lon: 16.35890, polomer: 50,
      kratko: "Barokový palác knižat s adventným trhom v záhrade.",
      text: "Ste pri Gartenpalais Liechtenstein, letnom paláci kniežat z Lichtenštajnska. Pred palácom a v jeho záhradách býva v posledných rokoch malý adventný trh, s asi tridsiatimi stánkami, starým kolotočom a barokovou kulisou. Je ďaleko od davov a je to jeden z najelegantnejších trhov vo Viedni.",
      pozri: [
        "Baroková fasáda paláca osvetlená večer.",
        "Starý kolotoč, ak je v prevádzke.",
        "Záhrada za palácom."
      ],
      viac: "Kniežatá z Lichtenštajnska patrili k najbohatším rodom monarchie a viedenské paláce stavali ešte predtým, než ich rod dostal vlastnú krajinu. Tento palác stál kedysi za mestom v záhradách a slúžil ako letné sídlo. Vo vnútri sú freskami zdobené sály a súkromná umelecká zbierka kniežat s dielami Rubensa a Rembrandta. Do paláca sa dá dostať len s prehliadkou.",
      tip: "Ak trh tento rok nebude, záhrady a fasáda sú krásne aj tak. Potom pokračujte rovno na Altes AKH.",
      info: "Termíny trhu pre rok 2026 neboli v čase prípravy zverejnené. Overte si ich pred cestou."
    },
    {
      id: "akh",
      nazov: "Weihnachtsdorf Altes AKH",
      lat: 48.21610, lon: 16.35420, polomer: 60,
      kratko: "Trh v nádvorí starej nemocnice, kam chodia študenti a Viedenčania.",
      text: "Ste v areáli Altes AKH, starej všeobecnej nemocnice z čias cisára Jozefa Druhého. Dnes je to univerzitný kampus a v jeho veľkom dvore pod starými stromami býva vianočná dedinka. Chodia sem najmä študenti a Viedenčania po práci, je tu uvoľnená atmosféra, curling a dlhé stoly, kde si prisadnete k cudzím ľuďom.",
      pozri: [
        "Staré stromy v nádvorí ovešané svetlami.",
        "Dráhy na curling. Je to Eisstockschießen, obľúbená rakúska zábava.",
        "Budovy bývalej nemocnice okolo nádvorí."
      ],
      viac: "Nemocnicu dal postaviť Jozef Druhý v roku 1784 a bola to jedna z prvých veľkých moderných nemocníc v Európe. Na dvoroch je aj zvláštna okrúhla veža, Narrenturm, kde kedysi zatvárali duševne chorých. Dnes je v nej patologické múzeum. Areál sa v deväťdesiatych rokoch zmenil na univerzitný kampus a jeho nádvoria patria medzi najpríjemnejšie verejné priestory Viedne.",
      tip: "Skúste spolu curling. Pravidlá vám vysvetlia na mieste a je to výborná zábava aj pre začiatočníkov.",
      info: "Trh 13. 11. – 23. 12. 2026, Po–Št 14–22, Pi 14–23, So 11–23, Ne 11–21."
    },
    {
      id: "votiv",
      nazov: "Votivkirche",
      lat: 48.21542, lon: 16.35914, polomer: 50,
      kratko: "Kostol z vďaky za cisárov život.",
      text: "Pred vami je Votivkirche, novogotický kostol s dvoma štíhlymi vežami, ktoré večer svietia nad parkom. Postavili ho ako poďakovanie za to, že mladý cisár František Jozef prežil v roku 1853 atentát. Útočník ho bodol nožom do krku, ale cisára zachránil golier uniformy.",
      pozri: [
        "Dve štíhle veže vysoké takmer sto metrov.",
        "Pred kostolom je park Sigmunda Freuda. Freud pracoval neďaleko."
      ],
      viac: "Zbierku na stavbu organizoval cisárov brat Maximilián, ten istý, ktorý sa neskôr stal mexickým cisárom a v Mexiku ho popravili. Na stavbu prispeli ľudia z celej monarchie. Pre vás dvoch je tu ešte jedna vec: atentát sa stal rok predtým, než sa František Jozef oženil so Sisi. Keby zomrel, ich príbeh by sa nikdy nestal.",
      tip: "Pohľad na osvetlený kostol je najkrajší z parku pred ním, z lavičky.",
      info: "Kostol býva otvorený cez deň."
    },
    {
      id: "karlskirche",
      nazov: "Karlskirche v odraze",
      lat: 48.19870, lon: 16.37180, polomer: 50,
      kratko: "Barokový kostol, ktorý sa zrkadlí v jazierku.",
      text: "Ste na Karlsplatzi pred Karlskirche, najkrajším barokovým kostolom Viedne. Pozrite sa na jazierko pred ním. Ak je pokojná voda, celý kostol sa v nej zrkadlí. Dal ho postaviť cisár Karol Šiesty ako sľub počas morovej epidémie. V advente je tu umelecký trh Art Advent, s remeslami a len bio jedlom.",
      pozri: [
        "Dva stĺpy pred kostolom. Inšpiroval ich Trajánov stĺp v Ríme a reliéfy rozprávajú život svätého Karola Boromejského.",
        "Odraz kostola v jazierku. Najlepší je z protiľahlého brehu.",
        "Napravo je secesný pavilón stanice Otta Wagnera."
      ],
      viac: "Kostol postavili otec a syn Fischerovci z Erlachu. Je to zvláštna zmes: grécky portál ako na chráme, rímska kupola, dva stĺpy ako v starom Ríme a k tomu barokové zvonice. Vo vnútri sú obrovské fresky v kupole. Na trhu Art Advent predávajú hlavne viedenskí umelci a remeselníci a je známy tým, že je pokojnejší a umeleckejší ako veľké trhy.",
      tip: "Fotku odrazu urobte z rohu jazierka bližšie k Technickej univerzite.",
      info: "Art Advent 13. 11. – 23. 12. 2026, denne 12–20, občerstvenie do 21."
    },
    {
      id: "hochstrahl",
      typ: "drobnost",
      nazov: "Hochstrahlbrunnen",
      lat: 48.19836, lon: 16.37611, polomer: 30,
      kratko: "Fontána, ktorá večer svieti farbami.",
      text: "Drobnosť: veľká fontána na Schwarzenbergplatzi sa volá Hochstrahlbrunnen. Postavili ju v roku 1873 na oslavu prvého viedenského vodovodu, ktorý privádzal pitnú vodu z Álp. Večer je nasvietená farebne."
    },
    {
      id: "belvedere",
      nazov: "Belvedere a Klimtov Bozk",
      lat: 48.19100, lon: 16.38090, polomer: 60,
      kratko: "Barokový palác, vianočný trh a najslávnejší bozk v umení.",
      text: "Ste pri Hornom Belvederi, barokovom paláci princa Eugena Savojského. Pred palácom býva cisársko-kráľovský vianočný trh pri jazierku, v ktorom sa palác zrkadlí. A vo vnútri visí obraz, kvôli ktorému sem chodia páry z celého sveta: Bozk od Gustava Klimta. Muž a žena v zlatom plášti, objatí na rozkvitnutej lúke.",
      pozri: [
        "Odraz paláca v jazierku. Postavte sa na druhú stranu jazierka.",
        "Fasáda Horného Belvederu, večer nasvietená.",
        "Vo vnútri v prvom poschodí hľadajte Bozk, zlatý obraz v miestnosti, kde je vždy najviac ľudí."
      ],
      viac: "Klimt namaľoval Bozk v rokoch 1907 a 1908 a štát ho kúpil ešte predtým, než bol dokončený. Je to najslávnejší obraz rakúskeho umenia. Kto sú tí dvaja na obraze, nie je isté. Často sa hovorí, že je to Klimt a jeho dlhoročná partnerka Emilie Flöge, s ktorou sa nikdy neoženil. Zlato na obraze je skutočné. Klimtov otec bol zlatník a gravér a Klimt používal plátky zlata. Pre vás dvoch: postavte sa pred obraz trochu bokom a pozrite sa, ako sa zlato pri každom kroku inak ligoce.",
      tip: "Na Bozk choďte ráno alebo hodinu pred zatvorením, vtedy je pred obrazom najmenej ľudí.",
      info: "Trh 20. 11. – 31. 12. 2026, Po–Pi 11–21, víkendy a sviatky 10–21. Múzeum Horný Belvedere je spoplatnené a zatvára skôr než trh, overte si hodiny."
    },
    {
      id: "riesenrad",
      nazov: "Obrovské koleso v Pratri",
      lat: 48.21674, lon: 16.39591, polomer: 50,
      kratko: "Nočná jazda v drevenom vagóniku nad Viedňou.",
      text: "Ste pod Riesenradom, obrovským kolesom v Pratri. Postavili ho v roku 1897 na oslavu päťdesiateho výročia vlády cisára Františka Jozefa. Má drevené červené vagóniky a otáča sa tak pomaly, že máte dosť času pozerať sa na celú nočnú Viedeň. V zime je pri ňom zimný trh, ktorý trvá až do Troch kráľov.",
      pozri: [
        "Červené vagóniky. Niektoré sú zariadené ako malé jedálne pre dvoch.",
        "Pri pohľade z vrchu hľadajte Dóm sv. Štefana a radnicu."
      ],
      viac: "Riesenrad hral vo filme Tretí muž z roku 1949. Orson Welles v ňom pri pohľade dolu na ľudí, ktorí vyzerajú ako bodky, hovorí slávny monológ o Švajčiarsku a kukučkových hodinách. Koleso prežilo aj vojnu, hoci vyhorelo a po vojne ho obnovili len s polovičným počtom vagónikov. Dá sa v ňom objednať súkromný vagónik so šampanským alebo večerou. Ak chcete niekoho požiadať o ruku, Viedeň má lepšie miesto len ťažko.",
      tip: "Súkromný vagónik treba rezervovať vopred. Bežná jazda trvá asi štvrťhodinu.",
      info: "Zimný trh Riesenradplatz 20. 11. 2026 – 6. 1. 2027, Po–Pi 12–22, víkendy 11–22. Koleso je spoplatnené."
    }
  ]
});
