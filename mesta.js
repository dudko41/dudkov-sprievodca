// Dudkov sprievodca: pripravené mestá.
// Nové mesto = nový objekt v poli MESTA (pripraví ho Claude na požiadanie).
// Každá zastávka: id, nazov, lat, lon, polomer (m, kedy sa spustí), kratko (jedna veta), text (číta sa nahlas), tip (nepovinné).

window.MESTA = window.MESTA || [];

window.MESTA.push({
  id: "cesky-krumlov",
  nazov: "Český Krumlov",
  krajina: "Česko",
  stred: [48.8112, 14.3150],
  zoom: 16,
  uvod: "Mesto v ohybe Vltavy, ktoré sa od stredoveku skoro nezmenilo. Od roku 1992 je na zozname UNESCO a jeho zámok je po Pražskom hrade druhým najväčším zámockým areálom v Česku.",

  okruhy: [
    {
      id: "klasika",
      nazov: "Veľký okruh",
      popis: "Námestie, hrad, zámocká záhrada a späť cez Schieleho štvrť. Všetko podstatné na jeden výlet.",
      dlzka: "asi 3 km",
      cas: "2,5 až 3 hodiny",
      zastavky: ["namesti", "kostel-vita", "seminarni-zahrada", "lazebnicky-most", "cervena-brana", "medvedi-prikop", "zamecka-vez", "plastovy-most", "barokni-divadlo", "zamecka-zahrada", "otacive-hlediste", "schiele", "namesti"]
    },
    {
      id: "rychly",
      nazov: "Za hodinu",
      popis: "Keď máš málo času: centrum, najkrajší výhľad a hradné nádvoria až po Plášťový most.",
      dlzka: "asi 1,5 km",
      cas: "1 hodina",
      zastavky: ["namesti", "kostel-vita", "seminarni-zahrada", "lazebnicky-most", "cervena-brana", "medvedi-prikop", "zamecka-vez", "plastovy-most"]
    },
    {
      id: "mimo-davu",
      nazov: "Mimo davu",
      popis: "Latrán, pivovar, fotoateliér Seidel, synagóga a na záver výstup na Křížovú horu s výhľadom na celé mesto.",
      dlzka: "asi 4 km",
      cas: "2,5 hodiny",
      zastavky: ["lazebnicky-most", "minoritsky-klaster", "budejovicka-brana", "pivovar", "seidel", "synagoga", "krizova-hora"]
    }
  ],

  miesta: [
    {
      id: "namesti",
      nazov: "Náměstí Svornosti",
      lat: 48.81074, lon: 14.31536, polomer: 40,
      kratko: "Hlavné námestie s morovým stĺpom a radnicou.",
      text: "Stojíš na Náměstí Svornosti, v srdci starého mesta. Námestie je malé, takmer štvorcové, a obkolesujú ho domy, ktorých základy sú často gotické, hoci fasády dostali neskôr renesančný či barokový kabát. Všimni si radnicu: vznikla spojením dvoch gotických domov a má renesančné podlubie, pod ktorým sa dá prejsť ako pod klenbou. Uprostred námestia stojí morový stĺp s Pannou Máriou. Postavili ho na začiatku osemnásteho storočia ako poďakovanie, že mesto prežilo morovú epidémiu. Prečo Svornosť, teda svornosť? Námestie dostalo tento názov po vojne. Predtým sa volalo jednoducho Ringplatz, ako vo väčšine nemecky hovoriacich miest. Český Krumlov bol totiž stáročia dvojjazyčný a nemčinu tu bolo počuť rovnako často ako češtinu.",
      tip: "Na fasádach hľadaj päťlistú ružu. Je to znak Rožmberkovcov, pánov mesta na tri storočia."
    },
    {
      id: "kostel-vita",
      nazov: "Kostol sv. Víta",
      lat: 48.81000, lon: 14.31611, polomer: 40,
      kratko: "Gotický kostol, ktorý je druhou dominantou mesta.",
      text: "Pred tebou je kostol svätého Víta. Ak sa pozrieš na panorámu mesta, uvidíš dve veže: zámockú a túto. Kostol stavali v prvej polovici pätnásteho storočia a dodnes má nádhernú gotickú sieťovú klenbu. Pôvodne tu bola aj jedna z najslávnejších gotických sôch strednej Európy, takzvaná Krumlovská madona. Je to krásna, nežne sa usmievajúca Panna Mária s dieťaťom, dnes vystavená vo Viedni. Kostol stojí na skalnom ostrohu nad Vltavou a z ulice pod ním vyzerá, akoby visel nad riekou. Rožmberkovci, ktorí mesto vlastnili, sem rozdávali dary, oltáre aj zvony, lebo kostol bol aj ich rodinnou výkladnou skriňou.",
      tip: "Zíď kúsok dolu ulicou Horní a obzri sa. Kostol odtiaľ vyzerá najdramatickejšie."
    },
    {
      id: "seminarni-zahrada",
      nazov: "Výhľad zo Seminárnej záhrady",
      lat: 48.81090, lon: 14.31725, polomer: 40,
      kratko: "Najznámejší pohľad na zámok a Vltavu.",
      text: "Teraz sa zastav a pozri sa cez zábradlie. Toto je asi najfotografovanejší pohľad v celom Česku. Pod tebou sa Vltava stáča do tvaru písmena S a na skalnom brale oproti stojí zámok s maľovanou vežou. Mesto vzniklo práve preto, že rieka tu robí ostré slučky. Skala nad ohybom sa dala dobre brániť a slučka rieky chránila mesto z troch strán. Budovy za tebou patrili jezuitom. Mali tu kolégium a seminár, odtiaľ názov záhrady. Dnes je v jednej z budov hotel Růže a v susednej Regionálne múzeum, kde nájdeš veľký keramický model mesta. Ak chceš pochopiť, ako to tu do seba zapadá, ten model stojí za päť minút.",
      tip: "Najlepšie svetlo na fotku je dopoludnia, keď slnko svieti na zámok."
    },
    {
      id: "lazebnicky-most",
      nazov: "Lazebnický most",
      lat: 48.81182, lon: 14.31571, polomer: 30,
      kratko: "Drevený most s temnou legendou o cisárovom synovi.",
      text: "Prechádzaš Lazebnickým mostom, ktorý spája staré mesto s Latránom pod zámkom. Názov má po lazebni, teda kúpeľoch, ktoré tu stáli pri vode. A s lazebňou sa spája najtemnejší príbeh Krumlova. Začiatkom sedemnásteho storočia poslal cisár Rudolf Druhý do zámku svojho nemanželského syna Juliusa. Bol to mladík s vážnou duševnou chorobou. Do zámku si vzal Markétu, dcéru miestneho lazebníka. Po čase ju v záchvate brutálne zavraždil. Mesto bolo zdesené a Julius zomrel o rok neskôr, zamknutý v zámku. Na moste dnes stojí socha svätého Jána Nepomuckého, ochrancu pred utopením. Keď je voda vysoko, pod mostom sa preháňajú pltníci a vodáci.",
      tip: "Pozri sa z mosta smerom k zámku. Vidíš, ako sa domy Latránu tlačia rovno na vodu?"
    },
    {
      id: "cervena-brana",
      nazov: "Červená brána a 1. nádvorie",
      lat: 48.81278, lon: 14.31700, polomer: 35,
      kratko: "Vstup do zámockého areálu.",
      text: "Prešiel si Červenou bránou a si v zámku. Prvé nádvorie bolo kedysi hospodárske: sídlila tu správa panstva, sýpky, stajne, lekáreň aj byty úradníkov. Zámok dlho patril Rožmberkovcom, najmocnejšiemu šľachtickému rodu v Čechách. Po nich prišli Eggenbergovci a od roku 1719 Schwarzenbergovci, ktorí tu vládli až do dvadsiateho storočia. Každý rod niečo pristaval, takže zámok je ako kniha, v ktorej každá kapitola je z iného storočia. Nádvorie je voľne prístupné, rovnako ako ďalšie nádvoria a záhrada. Platí sa len za prehliadky interiérov.",
      tip: "Rezerváciu na prehliadku interiérov sa oplatí urobiť vopred, v lete sa rýchlo minú."
    },
    {
      id: "medvedi-prikop",
      nazov: "Medvedí príkop",
      lat: 48.81288, lon: 14.31605, polomer: 25,
      kratko: "Zámocké medvede, ktoré tu žijú už stáročia.",
      text: "Nakloň sa cez múrik mosta. Dole v príkope žijú medvede. A to nie je turistická atrakcia z posledných rokov. Medvede sú tu doložené od začiatku osemnásteho storočia. Prečo práve medvede? Rožmberkovci tvrdili, že pochádzajú zo slávneho talianskeho rodu Orsini. A taliansky medveď je orso. Bola to vymyslená genealógia, ale pre prestíž rodu dôležitá. Medvede si preto chovali ako živý erb. Tradíciu zachovali aj ďalší majitelia a medvede sú tu dodnes. Na Štedrý deň tu dokonca bývajú medvedie Vianoce, keď medvede dostanú sviatočnú nádielku.",
      tip: "Ak medvede nevidíš, nevzdávaj to. Často spia v brlohu a vyjdú, keď je okolo pokoj."
    },
    {
      id: "zamecka-vez",
      nazov: "Zámocká veža a Hrádek",
      lat: 48.81233, lon: 14.31592, polomer: 30,
      kratko: "Maľovaná veža, symbol mesta.",
      text: "Nad tebou sa týči zámocká veža, symbol Krumlova. Jej spodná časť je najstaršia, patrí ku gotickému hrádku z trinásteho storočia, z ktorého celý zámok vyrástol. Svoj dnešný vzhľad s arkádovou ochodzou a pestrou maľbou dostala koncom šestnásteho storočia. Tie farebné ornamenty, ktoré vidíš, nie sú reliéf, ale maľba na omietke, ktorá má vytvoriť ilúziu. Na vežu sa dá vystúpiť po asi stošesťdesiatich schodoch. Z ochodze uvidíš celé mesto v ohybe Vltavy ako na dlani. Na druhom nádvorí za vežou sa pozri na steny: aj tie sú celé pomaľované falošnými kvádrami a oknami. Renesancia mala rada efekt.",
      tip: "Výstup na vežu je samostatná vstupenka, nie je súčasťou prehliadok."
    },
    {
      id: "plastovy-most",
      nazov: "Plášťový most",
      lat: 48.81262, lon: 14.31297, polomer: 35,
      kratko: "Viacposchodový most cez skalnú roklinu.",
      text: "Stojíš na Plášťovom moste, jednej z najodvážnejších stavieb zámku. Most premosťuje hlbokú skalnú roklinu a má viac poschodí: hore je krytá chodba, ktorou šľachta prechádzala zo zámku do divadla a záhrady bez toho, aby zmokla, pod ňou sú ďalšie podlažia a dole oblúky ako na rímskom akvadukte. Dnešnú podobu dostal v osemnástom storočí. Pozri sa cez okná dole. Pod tebou je ulica, rieka a strechy mesta. Pohľad na most zdola, z ulice Pod Plášťovým mostom, je mimochodom jeden z najkrajších záberov Krumlova.",
      tip: "Na spiatočnej ceste skús zísť dolu pod most a pozri sa naň zospodu."
    },
    {
      id: "barokni-divadlo",
      nazov: "Zámocké barokové divadlo",
      lat: 48.81242, lon: 14.31207, polomer: 30,
      kratko: "Unikátne divadlo s pôvodnou javiskovou technikou.",
      text: "V budove pred tebou je poklad, o ktorom veľa návštevníkov ani netuší. Je to barokové zámocké divadlo, ktoré sa zachovalo takmer kompletne v pôvodnom stave. Nielen hľadisko, ale aj kulisy, kostýmy, rekvizity a hlavne drevená javisková mašinéria. Tá umožňovala za pár sekúnd vymeniť celú scénu, spustiť z neba boha na oblaku alebo vytvoriť búrku. Podobne zachované divadlo je na svete už len jedno, vo švédskom Drottningholme. Je tak vzácne, že sa hrá len výnimočne a prehliadky sú v malých skupinách.",
      tip: "Prehliadky divadla bývajú len v sezóne a lístky sa míňajú rýchlo."
    },
    {
      id: "zamecka-zahrada",
      nazov: "Zámocká záhrada a Kaskádová fontána",
      lat: 48.81135, lon: 14.30928, polomer: 50,
      kratko: "Barokový park na kopci nad mestom.",
      text: "Vitaj v zámockej záhrade. Rozkladá sa na plošine nad mestom a je prekvapivo veľká, dlhá vyše pol kilometra. Najbližšie k zámku je formálna baroková časť s presne strihanými záhonmi a fontánou, ďalej sa mení na anglický park so starými stromami. Kaskádová fontána, pri ktorej si, je z osemnásteho storočia a voda tu steká po stupňoch medzi sochami antických bohov. Šľachta sem chodila na prechádzky, slávnosti a divadlo pod holým nebom. Záhrada je väčšinou otvorená od apríla do októbra a vstup je zadarmo.",
      tip: "Vezmi si chvíľu na lavičke. Tu býva aj v lete ticho."
    },
    {
      id: "otacive-hlediste",
      nazov: "Bellarie a otáčavé hľadisko",
      lat: 48.81076, lon: 14.30739, polomer: 45,
      kratko: "Letohrádok a divadlo, kde sa točí publikum.",
      text: "Tu je letohrádok Bellarie, malá rokoková stavba na leto, a vedľa neho zvláštnosť: otáčavé hľadisko. Funguje opačne než bežné divadlo. Nehýbe sa scéna, ale diváci. Hľadisko sa otáča a herci hrajú v prírode okolo, takže pozadím je samotný park a letohrádok. Hľadisko tu je od päťdesiatych rokov dvadsiateho storočia a v lete sa tu hrajú predstavenia Juhočeského divadla. Má však aj odporcov: pamiatkari a UNESCO už roky upozorňujú, že moderná konštrukcia do barokovej záhrady nepatrí a malo by sa presunúť.",
      tip: "Ak chceš zažiť predstavenie, lístky sa predávajú na stránke Juhočeského divadla."
    },
    {
      id: "schiele",
      nazov: "Egon Schiele Art Centrum",
      lat: 48.81068, lon: 14.31320, polomer: 35,
      kratko: "Galéria v starom pivovare a príbeh rebelského maliara.",
      text: "Si na ulici Široká pri Egon Schiele Art Centre. Galéria je v budove bývalého mestského pivovaru. Rakúsky maliar Egon Schiele mal ku Krumlovu blízky vzťah, odtiaľto pochádzala jeho matka. V roku 1911 sa sem presťahoval so svojou partnerkou a modelkou Wally. Krumlov ho fascinoval a namaľoval ho mnohokrát, často ako mŕtve mesto s temnými strechami. Lenže maloburžoázni obyvatelia neboli nadšení. Neboli zosobášení, maľoval akty a do jeho záhrady chodili pózovať mladé dievčatá z mesta. Po pár týždňoch ho z mesta vyštvali. Dnes je naň mesto hrdé a galéria ukazuje jeho diela aj súčasné umenie.",
      tip: "Široká ulica je naozaj najširšia v starom meste."
    },
    {
      id: "minoritsky-klaster",
      nazov: "Minoritský kláštor",
      lat: 48.81300, lon: 14.31810, polomer: 40,
      kratko: "Jedinečný dvojkláštor mníchov a mníšok.",
      text: "Za týmito múrmi je kláštor, ktorý je v strednej Európe raritou. Rožmberkovci ho založili v polovici štrnásteho storočia ako dvojitý kláštor: v jednej časti žili minoriti, teda mnísi, a v druhej klarisky, mníšky. Oba konventy zdieľali kostol, ale boli prísne oddelené. Klarisky sedeli na vlastnom chóre, odkiaľ ich nikto nevidel. Dnes je kláštor zrekonštruovaný a sú tu výstavy, dielne starých remesiel a krásna gotická krížová chodba.",
      tip: "Nezabudni nazrieť do krížovej chodby, je to najtichšie miesto v centre."
    },
    {
      id: "budejovicka-brana",
      nazov: "Budějovická brána",
      lat: 48.81479, lon: 14.31712, polomer: 35,
      kratko: "Jediná zachovaná mestská brána.",
      text: "Pred tebou je Budějovická brána, jediná zachovaná z pôvodných mestských brán. Kedysi ich mal Krumlov deväť. Táto je renesančná, z prelomu šestnásteho a sedemnásteho storočia, a cez ňu viedla cesta smerom na České Budějovice. Na vonkajšej strane si všimni slnečné hodiny. Brána bola nielen obranou, ale aj kontrolným miestom: tu sa platilo mýto a strážnici mali prehľad o tom, kto a s akým tovarom prichádza. Od brány začína štvrť Latrán, kde bývali remeselníci a služobníctvo zámku.",
      tip: "Prejdi bránou von a obzri sa. Z vonkajšej strany vyzerá úplne inak."
    },
    {
      id: "pivovar",
      nazov: "Pivovar Eggenberg",
      lat: 48.81295, lon: 14.31975, polomer: 45,
      kratko: "Zámocký pivovar s tradíciou od 16. storočia.",
      text: "Si pri pivovare Eggenberg. Pivo sa tu varí od šestnásteho storočia, keď si Rožmberkovci zriadili vlastný pivovar v budovách, ktoré predtým slúžili ako zbrojnica. Názov dostal po rode Eggenbergovcov, ktorí zámok vlastnili v sedemnástom storočí. Pivovar dodnes funguje a dá sa prehliadnuť, uvidíš varňu, spilku aj pivnice.",
      tip: "Ak nešoféruješ, ochutnaj nefiltrovanú klasiku priamo z pivovaru."
    },
    {
      id: "seidel",
      nazov: "Fotoateliér Seidel",
      lat: 48.80834, lon: 14.31641, polomer: 35,
      kratko: "Ateliér fotografa, ktorý zachytil celú Šumavu.",
      text: "V tomto dome bol ateliér Josefa Seidela, fotografa, ktorý začiatkom dvadsiateho storočia nafotil život Krumlova a celej Šumavy. Ateliér po ňom prevzal syn František. Zachovalo sa obrovské množstvo sklenených negatívov: svadby, remeselníci, deti, dediny, ktoré dnes už neexistujú. Najsilnejšie na múzeu je, že ateliér zostal takmer presne tak, ako ho fotografi opustili. Uvidíš ateliér so svetlíkom, fotoaparáty, kulisy aj rodinnú kuchyňu. A na starých portrétoch uvidíš ľudí, ktorí kráčali tými istými ulicami ako ty.",
      tip: "Prehliadka ateliéru je s výkladom, oplatí sa na ňu počkať."
    },
    {
      id: "synagoga",
      nazov: "Synagóga",
      lat: 48.80760, lon: 14.31740, polomer: 35,
      kratko: "Secesná synagóga s pohnutým osudom.",
      text: "Táto budova je synagóga, postavená na začiatku dvadsiateho storočia, keď v Krumlove žila malá, ale aktívna židovská komunita. Má kombináciu neogotiky a secesie. Fungovala len niekoľko desaťročí. Po roku 1938 sa mesto stalo súčasťou Sudet, komunita sa rozpadla a väčšina jej členov zahynula počas holokaustu. Budova potom slúžila ako sklad. Po rokoch chátrania ju opravili a dnes sú tu výstavy a koncerty, ktoré pripomínajú, kým boli jej pôvodní návštevníci.",
      tip: "Otváracie hodiny sú obmedzené, mimo sezóny si ich over vopred."
    },
    {
      id: "krizova-hora",
      nazov: "Křížová hora",
      lat: 48.80266, lon: 14.32299, polomer: 60,
      kratko: "Pútnické miesto s výhľadom na celé mesto.",
      text: "Gratulujem, vystúpil si na Křížovú horu. Na vrchol vedie krížová cesta so zastaveniami a hore stojí baroková kaplnka z osemnásteho storočia, kedysi cieľ procesií z mesta. Pre väčšinu ľudí je však hlavnou odmenou výhľad. Odtiaľto vidíš celý Český Krumlov naraz: zámok na skale, vežu kostola svätého Víta, slučky Vltavy a za mestom kopce Šumavy. Je to ten istý pohľad, aký mali pútnici pred tristo rokmi, len s viac autami na parkovisku. Sadni si, nadýchni sa a pozri, kadiaľ si dnes kráčal.",
      tip: "Výstup trvá asi 20 minút do kopca. Pri západe slnka je tu najkrajšie."
    }
  ]
});
