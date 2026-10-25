// Dudkov sprievodca: Praha
// Polia zastávky:
//   text   – krátka verzia, číta sa automaticky (aj s pokynmi, kam sa pozrieť)
//   pozri  – body „kam sa pozrieť“ (zobrazia sa ako zoznam)
//   viac   – hlbší príbeh, číta sa po ťuknutí na „Povedz mi viac“
//   info   – praktické informácie (len na čítanie očami)
//   typ: "drobnost" – krátka zaujímavosť po ceste, ozve sa len keď nič iné nehrá
// Okruh: trasa (pešia trasa, body "lat,lon" v stotisícinách od 50/14), uvod (na začiatku), cestou {idZastavky: text po nej}, zaver (na konci), drobnosti [id]

window.MESTA = window.MESTA || [];

window.MESTA.unshift({
  id: "praha",
  nazov: "Praha",
  krajina: "Česko",
  stred: [50.0875, 14.4140],
  trasaZaklad: [50, 14],
  zoom: 15,
  uvod: "Stovežatá Praha, mesto kráľov, alchymistov a defenestrácií. Historické centrum je od roku 1992 na zozname UNESCO a väčšinu najväčších pokladov prejdeš pešo za jeden deň.",

  okruhy: [
    {
      id: "kralovska",
      nazov: "Kráľovská cesta",
      popis: "Trasa korunovačných sprievodov: od Prašnej brány cez Staromák a Karlov most až na Hrad. Klasika, ktorú treba zažiť aspoň raz.",
      dlzka: "asi 4,5 km",
      trasa: "8724,42775 8727,42755 8720,42750 8715,42573 8686,42559 8639,42448 8628,42393 8585,42317 8581,42323 8574,42317 8599,42275 8621,42261 8675,42165 8709,42121 8704,42107 8773,42052 8789,42101 8782,42107 8789,42101 8773,42052 8704,42107 8688,42065 8724,42176 8749,42164 8756,42200 8749,42164 8724,42176 8704,42107 8653,41981 8637,41926 8637,41905 8610,41896 8610,41849 8601,41806 8615,41794 8599,41718 8610,41658 8624,41660 8610,41658 8612,41616 8599,41530 8599,41479 8662,41023 8684,40875 8679,40873 8673,40887 8677,40873 8668,40867 8673,40850 8592,40842 8601,40773 8615,40770 8617,40732 8626,40731 8610,40597 8650,40574 8639,40545 8644,40498 8668,40441 8679,40395 8715,40379 8760,40390 8762,40366 8776,40367 8776,40381 8787,40389 8776,40381 8783,40268 8854,40268 8852,40128 8854,40202 8863,40202 8865,40208 8906,40201 8906,40136 8944,39926 8944,39901 8930,39856 8932,39832 8961,39808 8999,39897 9042,39866 9062,39949 9071,39968 9089,39963 9091,39978 9089,39963 9071,39968 9067,39962 9022,39990 9056,40088 9042,40104 9047,40116 9042,40104 9060,40090 9082,40140 9102,40157 9100,40235 9114,40283 9143,40344 9167,40347 9179,40385 9194,40377 9205,40428",
      cas: "3 až 4 hodiny",
      zastavky: ["prasna", "stavovske", "staromak", "orloj", "tyn", "klementinum", "vez", "most", "kampa", "lennon", "mikulas", "nerudova", "rampa", "brana", "katedrala", "palac", "zlata"],
      drobnosti: ["matka", "ungelt", "jakub", "minuta", "bruncvik", "slunce"],
      uvod: "Vitaj na Kráľovskej ceste. Presne touto trasou kedysi prechádzali korunovačné sprievody českých kráľov: z kráľovského dvora pri Prašnej bráne cez Staré Mesto a Karlov most až hore do katedrály na Hrade. Prejdeme ju spolu. Keď prídeš k zastávke, ozvem sa sám. Ak ťa niečo zaujme, ťukni na Povedz mi viac. Začíname pri Prašnej bráne.",
      cestou: {
        prasna: "Teraz choď rovno do ulice Celetná, ktorá začína priamo pod bránou. Pozor, po pár desiatkach metrov odbočíš doľava k divadlu.",
        stavovske: "Vráť sa do Celetnej a pokračuj ňou až na koniec. Ulica ťa sama vyvedie na Staromestské námestie.",
        staromak: "Teraz sa otoč k vysokej veži radnice s orlojom. Je v rohu námestia, vľavo od miesta, odkiaľ si prišiel z Celetnej.",
        orloj: "Ďalšia zastávka je Týnsky chrám. To sú tie dve špicaté čierne veže na opačnej strane námestia.",
        tyn: "Teraz prejdi cez námestie a pokračuj do uličky Malé náměstí a potom kľukatou Karlovou ulicou smerom k rieke. Drž sa davu, Karlova sa krúti.",
        klementinum: "Pokračuj Karlovou až na koniec, k veži nad mostom.",
        vez: "Prejdi pod vežou na Karlov most. Na moste sa zastav pri soche s piatimi hviezdami okolo hlavy. Je zhruba v polovici, po pravej strane.",
        most: "Pokračuj po moste na Malú Stranu. Tesne pred mostnými vežami na druhej strane zíď po schodoch vľavo dolu na Kampu.",
        kampa: "Prejdi mostíkom cez Čertovku a hneď za ním je Lennonova stena.",
        lennon: "Z Velkopřevorského námestia choď cez uličky na Malostranské námestie, k veľkému kostolu so zelenou kupolou.",
        mikulas: "Teraz začína stúpanie. Z námestia pokračuj hore ulicou Nerudova.",
        nerudova: "Na konci Nerudovej zahni doprava do ulice Ke Hradu a vystúp po rampe hore. Na rampe sa zastav a otoč sa.",
        rampa: "Ešte pár krokov hore a si na Hradčanskom námestí. Zamier k bráne s bojujúcimi obrami.",
        brana: "Prejdi prvým nádvorím, Matyášovou bránou a druhým nádvorím. Za priechodom ťa doslova zarazí fasáda katedrály.",
        katedrala: "Obíď katedrálu vpravo, na tretie nádvorie. Starý kráľovský palác je nízka budova oproti južnej strane katedrály.",
        palac: "Posledná zastávka: pokračuj okolo baziliky svätého Jiří, tej s červenou fasádou, a dolu Jiřskou ulicou. Zlatá ulička je vľavo."
      },
      zaver: "A sme na konci Kráľovskej cesty. Prešiel si to, čo kedysi panovníci prešli raz za život, a to v najdôležitejší deň svojej vlády. Dolu do mesta môžeš ísť Starými zámockými schodmi na východnom konci Hradu, je to najpohodlnejšia cesta. Ďakujem, že si išiel so mnou."
    },
    {
      id: "stare-mesto",
      nazov: "Staré Mesto za hodinu",
      popis: "Prašná brána, Staromák s orlojom, Týn, Klementinum a Karlov most. Najviac Prahy na najmenšom priestore.",
      dlzka: "asi 2 km",
      trasa: "8724,42775 8727,42755 8720,42750 8715,42586 8718,42573 8715,42374 8729,42256 8724,42176 8807,42135 8789,42101 8782,42107 8789,42101 8773,42052 8704,42107 8688,42065 8724,42176 8749,42164 8756,42200 8749,42164 8724,42176 8704,42107 8653,41981 8637,41926 8637,41905 8610,41896 8610,41849 8601,41806 8615,41794 8599,41718 8610,41658 8624,41660 8610,41658 8612,41616 8599,41530 8599,41479 8637,41236 8662,41023",
      cas: "1 až 1,5 hodiny",
      zastavky: ["prasna", "staromak", "orloj", "tyn", "klementinum", "vez", "most"],
      drobnosti: ["matka", "ungelt", "jakub", "minuta", "bruncvik"],
      uvod: "Ideme na rýchlu prechádzku Starým Mestom. Za hodinu uvidíš to najslávnejšie, čo Praha má. Začíname pri Prašnej bráne a skončíme na Karlovom moste.",
      cestou: {
        prasna: "Choď rovno ulicou Celetná, ktorá začína pod bránou, až na Staromestské námestie.",
        staromak: "Teraz sa otoč k vysokej veži radnice s orlojom.",
        orloj: "Ďalšia zastávka sú dve špicaté čierne veže na druhej strane námestia, Týnsky chrám.",
        tyn: "Prejdi cez námestie na Malé náměstí a potom kľukatou Karlovou ulicou smerom k rieke.",
        klementinum: "Pokračuj Karlovou až k veži nad mostom.",
        vez: "Prejdi pod vežou na most a zastav sa pri soche s piatimi hviezdami, zhruba v polovici vpravo."
      },
      zaver: "Toto bola hodinka v Starom Meste. Ak máš chuť pokračovať, si presne na začiatku okruhu Malá Strana a Hrad. Stačí si ho vybrať a pokračovať cez most."
    },
    {
      id: "hrad",
      nazov: "Malá Strana a Hrad",
      popis: "Z Karlovho mosta cez Kampu, Lennonovu stenu a Nerudovu ulicu hore na Hrad, do katedrály a Zlatej uličky.",
      dlzka: "asi 2,5 km, do kopca",
      trasa: "8662,41023 8684,40875 8679,40873 8673,40887 8677,40873 8668,40867 8673,40850 8592,40842 8601,40773 8615,40770 8617,40732 8626,40731 8610,40597 8650,40574 8639,40545 8644,40498 8668,40441 8679,40395 8715,40379 8760,40390 8762,40366 8776,40367 8776,40381 8787,40389 8776,40381 8783,40268 8854,40268 8852,40128 8854,40202 8863,40202 8865,40208 8906,40201 8906,40136 8944,39926 8944,39901 8930,39856 8932,39832 8961,39808 8999,39897 9042,39866 9062,39949 9071,39968 9089,39963 9091,39978 9089,39963 9071,39968 9067,39962 9022,39990 9056,40088 9042,40104 9047,40116 9042,40104 9060,40090 9082,40140 9102,40157 9100,40235 9114,40283 9143,40344 9167,40347 9179,40385 9194,40377 9205,40428",
      cas: "2 až 2,5 hodiny",
      zastavky: ["most", "kampa", "lennon", "mikulas", "nerudova", "rampa", "brana", "katedrala", "palac", "zlata"],
      drobnosti: ["bruncvik", "slunce", "ulicka"],
      uvod: "Ideme z rieky hore na Hrad. Čaká ťa trochu stúpania, ale aj najkrajšie výhľady v Prahe. Začíname na Karlovom moste pri soche svätého Jána Nepomuckého.",
      cestou: {
        most: "Pokračuj po moste na Malú Stranu. Tesne pred mostnými vežami zíď po schodoch vľavo dolu na Kampu.",
        kampa: "Prejdi mostíkom cez Čertovku a hneď za ním je Lennonova stena.",
        lennon: "Z námestia choď cez uličky na Malostranské námestie, k veľkému kostolu so zelenou kupolou.",
        mikulas: "Teraz pokračuj hore ulicou Nerudova.",
        nerudova: "Na konci Nerudovej zahni doprava do ulice Ke Hradu a vystúp po rampe. Na rampe sa zastav a otoč sa.",
        rampa: "Ešte pár krokov a si na Hradčanskom námestí pri bráne s obrami.",
        brana: "Prejdi prvým a druhým nádvorím k fasáde katedrály.",
        katedrala: "Obíď katedrálu vpravo na tretie nádvorie. Palác je nízka budova oproti južnej strane katedrály.",
        palac: "Pokračuj okolo červenej baziliky svätého Jiří a dolu Jiřskou ulicou. Zlatá ulička je vľavo."
      },
      zaver: "A si na konci. Dolu do mesta sa dostaneš Starými zámockými schodmi na východnom konci Hradu. Na ich spodku je stanica metra Malostranská."
    },
    {
      id: "josefov",
      nazov: "Židovské Mesto",
      popis: "Krátka prechádzka Josefovom: Španielska synagóga a Kafka, Staronová synagóga s legendou o Golemovi a Starý židovský cintorín.",
      dlzka: "necelý 1 km",
      trasa: "8782,42107 8789,42101 8807,42135 8843,42163 8876,42200 8885,42179 8892,42184 8941,42116 8979,42099 9002,42075 9031,42069 9008,42079 9002,42073 8979,42023 8950,41919 8997,41887 8993,41830 8999,41712 8997,41699 8984,41699 8979,41723",
      cas: "45 minút bez vstupov, 2 hodiny so vstupmi",
      zastavky: ["staromak", "spanelska", "staronova", "cintorin"],
      drobnosti: ["minuta"],
      uvod: "Ideme do Josefova, bývalého židovského mesta. Väčšinu jeho uličiek zbúrali okolo roku 1900, no to najcennejšie zostalo: synagógy a jeden z najstarších židovských cintorínov v Európe. Začíname na Staromestskom námestí.",
      cestou: {
        staromak: "Z námestia choď ulicou Dušní, je to tá vľavo od kostola svätého Mikuláša. Po pár minútach uvidíš vpravo budovu s maurskými ornamentmi.",
        spanelska: "Teraz choď Vězeňskou a Maiselovou ulicou k najstaršej synagóge. Spoznáš ju podľa strmého tehlového štítu.",
        staronova: "Choď ulicou U Starého hřbitova alebo okolo Pinkasovej synagógy. Vstup na cintorín je cez Pinkasovu synagógu v Širokej ulici."
      },
      zaver: "Toto bol Josefov. Ak máš čas, spoločný lístok Židovského múzea platí aj do ďalších synagóg a do Obradnej siene pri cintoríne."
    }
  ],

  miesta: [
    {
      id: "prasna",
      nazov: "Prašná brána",
      lat: 50.08724, lon: 14.42776, polomer: 40,
      kratko: "Gotická brána, kde začínali korunovačné sprievody.",
      text: "Stojíš pri Prašnej bráne. Pozri sa hore: tá tmavá gotická veža je brána, ktorou kedysi vchádzali do Starého Mesta. Postaviť ju začali v roku 1475. Hneď vedľa nej, kde je dnes secesný Obecný dom so zlatou mozaikou, stál kráľovský dvor. Práve odtiaľ vyrážali korunovační sprievody na cestu na Hrad. Prašná sa volá preto, že v nej neskôr skladovali pušný prach.",
      pozri: [
        "Vpravo od brány je Obecný dom. Pozri na veľkú mozaiku nad vchodom.",
        "Na bráne hľadaj sochy českých kráľov a erby krajín.",
        "Pozri sa pod klenbu brány, kadiaľ dnes vedie Celetná ulica."
      ],
      viac: "Brána mala byť pýchou mesta, ale stavba sa zasekla. Kráľ Vladislav Jagelonský sa totiž presťahoval z kráľovského dvora na Hrad a brána zostala dlho nedokončená, iba so strechou. Dnešnú honosnú novogotickú podobu dostala až v devätnástom storočí. A Obecný dom vedľa nej? Je to vrchol pražskej secesie. Zdobili ho Alfons Mucha aj ďalší najlepší umelci doby. A 28. októbra 1918 tu bolo vyhlásené samostatné Československo. Ak budeš mať čas, oplatí sa nazrieť aspoň do kaviarne na prízemí.",
      tip: "Celetnú ulicu si pozri pomaly, takmer každý dom tu má gotické pivnice.",
      info: "Na vežu Prašnej brány sa dá vystúpiť (platí sa). Interiéry Obecného domu len s prehliadkou, kaviareň a reštaurácia sú voľne prístupné."
    },
    {
      id: "matka",
      typ: "drobnost",
      nazov: "Dom U Černé Matky Boží",
      lat: 50.08697, lon: 14.42656, polomer: 22,
      kratko: "Kubistická budova, aké nemá nikto iný.",
      text: "Malá zastávka po ceste. Pozri na rohový dom s čiernou soškou Panny Márie v klietke na nároží. Toto je Dom U Čiernej Matky Božej z roku 1912, jedna z prvých kubistických budov na svete. Kubistická architektúra je takmer výlučne česká špecialita. Pozri na zalomené okná a hrany. Vo vnútri je kaviareň Grand Café Orient, kde sú kubistické aj lampy a stoličky."
    },
    {
      id: "stavovske",
      nazov: "Stavovské divadlo",
      lat: 50.08596, lon: 14.42364, polomer: 35,
      kratko: "Tu mal premiéru Mozartov Don Giovanni.",
      text: "Pred tebou je Stavovské divadlo, zelená klasicistická budova z roku 1783. Je to jedno z mála divadiel na svete, kde sa dodnes hrá v tej istej sále, v ktorej dirigoval Mozart. V októbri 1787 tu sám dirigoval svetovú premiéru opery Don Giovanni. Napísal ju pre Prahu, lebo Pražania ho milovali viac ako Viedeň.",
      pozri: [
        "Na fasáde hľadaj latinský nápis Patriae et Musis, teda vlasti a múzam.",
        "Pred divadlom stojí socha Il Commendatore, prázdny plášť bez tela. Je to postava z Dona Giovanniho."
      ],
      viac: "Mozart bol v Prahe naozaj hviezda. Jeho Figarova svadba mala vo Viedni len vlažný úspech, no v Prahe sa z nej stal hit a melódie si pospevovali ľudia na ulici. Divadlo si preto u neho objednalo novú operu. Traduje sa, že predohru k Donovi Giovannimu dopísal až noc pred premiérou. A ešte jedna vec: v roku 1834 tu v hre Fidlovačka po prvý raz zaznela pieseň Kde domov můj. Dnes je to česká hymna.",
      tip: "Na operu sa tu dajú zohnať lístky aj za rozumné ceny, najmä na balkón.",
      info: "Interiér len počas predstavení alebo občasných prehliadok."
    },
    {
      id: "staromak",
      nazov: "Staromestské námestie",
      lat: 50.08772, lon: 14.42114, polomer: 45,
      kratko: "Srdce Starého Mesta s pomníkom Jana Husa.",
      text: "Si na Staromestskom námestí. Toto miesto je trhom a centrom mesta už vyše osemsto rokov. Uprostred stojí pomník Jana Husa. Kazateľa upálili v Kostnici v roku 1415, pomník odhalili presne o päťsto rokov neskôr. Otoč sa okolo seba: Týnsky chrám s dvoma vežami, radnica s orlojom, biely barokový kostol svätého Mikuláša a domy všetkých slohov, od gotiky po rokoko.",
      pozri: [
        "Okolo Husa sú husitskí bojovníci, vyhnanci po Bielej hore a matka s dieťaťom ako symbol obrodenia národa.",
        "Kúsok od Husa stojí Mariánsky stĺp. Pri jeho tieni hľadaj v dlažbe kovový pás, to je pražský poludník.",
        "Pozri na bielu fasádu kostola svätého Mikuláša v rohu námestia."
      ],
      viac: "Pomník je viac než socha. Sochár Ladislav Šaloun ho tvoril roky a odhalili ho v roku 1915, uprostred vojny, keď Rakúsko-Uhorsko nedovolilo veľkú oslavu. Pomník sa tak stal tichým symbolom českého národa. Mariánsky stĺp vedľa má zase dramatický osud. Postavili ho po tridsaťročnej vojne a v roku 1918, pár dní po vzniku republiky, ho dav strhol ako symbol habsburskej moci. Viac ako sto rokov tu potom chýbal. Kópiu postavili znova až v roku 2020 a dodnes sa o ňom vedú spory.",
      tip: "Najkrajší pohľad na celé námestie je z vyhliadky na veži radnice. Je tam aj výťah.",
      info: "Na Vianoce a Veľkú noc sú tu trhy. Reštaurácie priamo na námestí sú drahé, o ulicu ďalej je to výrazne lacnejšie."
    },
    {
      id: "orloj",
      nazov: "Staromestský orloj",
      lat: 50.08683, lon: 14.42070, polomer: 35,
      kratko: "Šesťstoročné astronomické hodiny s apoštolmi.",
      text: "Pozri sa na orloj na veži radnice. Je z roku 1410 a je to najstarší orloj na svete, ktorý ešte funguje. Horný ciferník nie sú obyčajné hodiny. Ukazuje polohu Slnka a Mesiaca, znamenia zverokruhu aj tri rôzne spôsoby merania času naraz. Dolný ciferník je kalendár s mesiacmi. Každú celú hodinu sa nad ciferníkom otvoria okienka a prejdú nimi apoštoli.",
      pozri: [
        "Vpravo od horného ciferníka je kostlivec, smrť. Pri odbíjaní ťahá za zvonček a kýva hlavou.",
        "Vedľa neho je Turek, vľavo Lakomec s mešcom a Márnivec so zrkadlom.",
        "Na konci predstavenia hore zakikiríka kohút.",
        "Pod vežou radnice hľadaj v dlažbe 27 bielych krížov."
      ],
      viac: "Legenda hovorí, že orloj zostrojil majster Hanuš. Radní páni ho dali oslepiť, aby už nikde inde nepostavil podobný. Hanuš potom zastavil orloj tým, že doň strčil ruku, a ten dlho nešiel. Je to len povesť: v skutočnosti ho zostrojil hodinár Mikuláš z Kadane podľa výpočtov astronóma Jána Šindela. A tých 27 krížov v dlažbe? Pripomínajú 27 českých pánov popravených na tomto mieste v júni 1621, po porážke stavovského povstania na Bielej hore. Kat Jan Mydlář vraj pracoval celé štyri hodiny.",
      tip: "Príď aspoň 5 minút pred celou hodinou a postav sa trochu bokom, odtiaľ lepšie uvidíš okienka.",
      info: "Apoštoli sa ukazujú každú celú hodinu, zvyčajne od 9:00 do 23:00. Vstup do radnice a na vežu je spoplatnený, na vežu vedie aj výťah."
    },
    {
      id: "minuta",
      typ: "drobnost",
      nazov: "Dom U Minuty",
      lat: 50.08673, lon: 14.41999, polomer: 20,
      kratko: "Sgrafitový dom, kde vyrastal Franz Kafka.",
      text: "Drobnosť po ceste: dom priamo vedľa radnice, celý pokrytý čiernobielymi kresbami. Táto technika sa volá sgrafito. Sú tu výjavy z Biblie aj z antických mýtov. V tomto dome v detstve býval Franz Kafka s rodičmi a tu sa narodili jeho tri sestry."
    },
    {
      id: "tyn",
      nazov: "Týnsky chrám",
      lat: 50.08757, lon: 14.42200, polomer: 40,
      kratko: "Dve čierne veže, ktoré poznáš z každej pohľadnice.",
      text: "Teraz sa pozri na dve čierne veže. Je to kostol Matky Božej pred Týnom. Veže sú vysoké asi osemdesiat metrov a pri pozornom pohľade zistíš, že nie sú rovnaké. Južná, bližšie k tebe, je mohutnejšia, severná štíhlejšia. Hovorí sa im Adam a Eva. Kostol je schovaný za radom domov, kde bola kedysi Týnska škola, takže dovnútra sa vchádza cez podlubie.",
      pozri: [
        "Porovnaj šírku oboch veží, južná je viditeľne hrubšia.",
        "Uprostred štítu medzi vežami je zlatá socha Panny Márie.",
        "Za kostolom je dvor Ungelt, kam sa oplatí nazrieť."
      ],
      viac: "Týn bol po dvesto rokov hlavným kostolom husitov. Na štíte medzi vežami bol obrovský zlatý kalich, symbol husitstva. Po porážke na Bielej hore ho jezuiti dali strhnúť a nahradili sochou Panny Márie. Traduje sa, že kalich roztavili a z jeho zlata vyrobili jej svätožiaru. Vo vnútri je pochovaný aj dánsky astronóm Tycho Brahe, ktorý pracoval na dvore cisára Rudolfa Druhého. Povráva sa, že zomrel, lebo na hostine nechcel zo slušnosti odísť na toaletu. Výskumy jeho ostatkov to však nepotvrdili.",
      tip: "Najlepší záber na veže je z rohu námestia pri pomníku Jana Husa.",
      info: "Kostol býva otvorený len v niektorých hodinách a počas bohoslužieb sa nedá prezerať."
    },
    {
      id: "ungelt",
      typ: "drobnost",
      nazov: "Ungelt",
      lat: 50.08805, lon: 14.42378, polomer: 25,
      kratko: "Stredoveký dvor zahraničných kupcov.",
      text: "Drobnosť po ceste: tento uzavretý dvor je Ungelt, alebo Týnsky dvor. V stredoveku sem prichádzali zahraniční kupci, ktorí tu museli zaplatiť clo, nemecky Ungelt. Dvor slúžil aj ako hostinec a sklad, a na noc ho zamykali. Je to jedno z najpokojnejších miest v centre."
    },
    {
      id: "jakub",
      typ: "drobnost",
      nazov: "Kostol sv. Jakuba a ruka zlodeja",
      lat: 50.08836, lon: 14.42433, polomer: 22,
      kratko: "V kostole visí stáročia stará mumifikovaná ruka.",
      text: "Drobnosť pre otužilých: ak vojdeš do tohto kostola a pozrieš sa hneď vpravo od vchodu hore, uvidíš visieť zčernalú mumifikovanú ruku. Legenda hovorí, že zlodej chcel ukradnúť šperky zo sochy Panny Márie. Socha ho chytila za ruku a už nepustila. Ruku mu museli odseknúť a od vtedy tu visí ako výstraha. Je to mimochodom jeden z najdlhších kostolov v Prahe a má slávny organ."
    },
    {
      id: "klementinum",
      nazov: "Klementinum",
      lat: 50.08625, lon: 14.41660, polomer: 40,
      kratko: "Jezuitské kolégium s najkrajšou knižnicou Prahy.",
      text: "Celý ten obrovský blok budov po pravej strane je Klementinum. Po Hrade je to druhý najväčší stavebný komplex v Prahe. Postavili ho jezuiti, ktorí sem prišli v roku 1556, aby vrátili Čechy ku katolíckej viere. Vo vnútri je jedna z najkrajších barokových knižníc na svete a astronomická veža. Od roku 1775 sa v nej každý deň meria počasie.",
      pozri: [
        "Ak sa dá, nazri do vnútorných nádvorí, bývajú otvorené.",
        "Na astronomickej veži je socha Atlasa, ktorý nesie nebeskú guľu.",
        "Na Karlovej ulici hľadaj dom U Zlatého hada. Bola v ňom prvá kaviareň v Prahe."
      ],
      viac: "Barokovú knižnicu uvidíš len s prehliadkou a len od dverí, aby vzácnym knihám neškodil dych tisícov turistov. Je tu zlatá výzdoba, glóbusy a fresky na strope. Meteorologické merania v Klementine patria medzi najdlhšie nepretržité rady na svete. Vďaka nim vieme, aké bolo pražské počasie počas celej histórie od čias Márie Terézie. A ten dom U Zlatého hada? Okolo roku 1714 tu Arménec Deodatus Damajan otvoril prvú kaviareň v meste. Pražania mu najprv kávu vraj neverili.",
      tip: "Prehliadku knižnice a veže si rezervuj vopred, skupiny sú malé.",
      info: "Knižnica a astronomická veža len s prehliadkou (spoplatnené). Vo večerných hodinách sú tu koncerty vážnej hudby v Zrkadlovej kaplnke."
    },
    {
      id: "vez",
      nazov: "Staromestská mostecká veža",
      lat: 50.08618, lon: 14.41361, polomer: 35,
      kratko: "Najkrajšia gotická veža Európy, tvrdia Pražania.",
      text: "Zastav sa pred vežou, ktorá stráži vstup na Karlov most. Navrhol ju Peter Parléř, ten istý majster, ktorý staval most aj katedrálu na Hrade. Je to jedna z najkrajších gotických veží v Európe. Nebola len ozdobou: bola súčasťou opevnenia a cez ňu vchádzali do mesta všetky sprievody, ktoré prišli cez rieku.",
      pozri: [
        "Na východnej strane veže sedí cisár Karol Štvrtý a jeho syn Václav Štvrtý, nad nimi patróni.",
        "Hľadaj drobný motív vtáčika ľadňáčika. Je to symbol kráľa Václava Štvrtého.",
        "Strana smerom k mostu je hladká. Výzdobu zničili Švédi v roku 1648."
      ],
      viac: "Na konci tridsaťročnej vojny, v roku 1648, sa Švédi dostali na Malú Stranu a chceli prejsť cez most na Staré Mesto. Študenti, mešťania aj Židia bránili práve túto vežu a Švédov nepustili. Strana k mostu pritom utrpela tak, že jej výzdobu už nikdy neobnovili. Po porážke stavovského povstania tu zase na desať rokov vyvesili hlavy dvanástich popravených pánov. Mali odstrašiť každého, kto by sa chcel opäť vzoprieť Habsburgom.",
      tip: "Vyhliadka na veži ponúka asi najkrajší pohľad na most a Hrad. Je tam pár desiatok schodov a menej ľudí ako na moste.",
      info: "Vstup na vežu je spoplatnený."
    },
    {
      id: "most",
      nazov: "Karlov most a sv. Ján Nepomucký",
      lat: 50.08668, lon: 14.41025, polomer: 30,
      kratko: "Šesťstoročný most s tridsiatimi sochami.",
      text: "Si pri soche svätého Jána Nepomuckého, tej s piatimi zlatými hviezdami okolo hlavy. Karlov most dal postaviť cisár Karol Štvrtý v roku 1357. Je dlhý vyše päťsto metrov a takmer päťsto rokov to bol jediný most cez Vltavu v Prahe. Sochy pribudli až v baroku a táto je najstaršia, z roku 1683. Ľudia sa dotýkajú bronzovej tabule na jej podstavci pre šťastie, preto je vyleštená.",
      pozri: [
        "Na podstavci sochy sú dve tabule. Vyleštené miesta ukazujú, kam ľudia najčastejšie siahajú.",
        "Kúsok ďalej, na zábradlí, je malý kríž s piatimi hviezdami. Tam vraj Nepomuka zhodili do rieky.",
        "Pozri sa smerom k Malej Strane, nad ňou sa týči Hrad."
      ],
      viac: "Kňaza Jána Nepomuckého dal v roku 1393 zhodiť z mosta kráľ Václav Štvrtý. Podľa legendy preto, že odmietol prezradiť, čo sa mu kráľovná zverila pri spovedi. V skutočnosti išlo skôr o mocenský spor kráľa s arcibiskupom. A päť hviezd? Keď telo plávalo po rieke, vraj sa nad ním objavilo päť svetiel. O samotnom moste koluje aj iná legenda. Základný kameň mal byť položený 9. júla 1357 o 5:31 ráno. Keď to napíšeš ako číslo, dostaneš 1 3 5 7 9 7 5 3 1, rovnako sa číta z oboch strán. A povesť o vajíčkach primiešaných do malty kvôli pevnosti? Tú vedci zatiaľ nepotvrdili ani nevyvrátili.",
      tip: "Bez davov zažiješ most len skoro ráno, pred ôsmou.",
      info: "Most je voľne prístupný celý deň a noc. Pozor na vreckárov v tlačenici."
    },
    {
      id: "bruncvik",
      typ: "drobnost",
      nazov: "Bruncvík",
      lat: 50.08665, lon: 14.40937, polomer: 20,
      kratko: "Rytier s čarovným mečom ukrytým v moste.",
      text: "Drobnosť: nakloň sa cez zábradlie vľavo. Na pilieri mosta, dole nad vodou, stojí rytier so zlatým mečom a levom pri nohách. Je to Bruncvík, rytier z českej povesti. Podľa legendy je v moste zamurovaný jeho čarovný meč. Keď bude Čechom najhoršie, objaví sa a zachráni ich."
    },
    {
      id: "kampa",
      nazov: "Kampa a Čertovka",
      lat: 50.08598, lon: 14.40850, polomer: 35,
      kratko: "Ostrov s mlynmi, nazývaný pražské Benátky.",
      text: "Zišiel si na Kampu, ostrov oddelený od Malej Strany úzkym kanálom. Ten kanál sa volá Čertovka a kedysi poháňal mlyny. Pozri sa na domy, ktoré stoja priamo na vode, a na drevené mlynské koleso. Preto sa tomuto miestu hovorí pražské Benátky. Kampa je dnes pokojný park, aj keď je hneď pod najrušnejším mostom v Prahe.",
      pozri: [
        "Hľadaj mlynské koleso Velkopřevorského mlyna.",
        "Pozri pod klenby mosta. Most tu prechádza rovno ponad ostrov.",
        "Južnejšie v parku pred múzeom Kampa lezú obrie bronzové bábätká bez tvárí od Davida Černého."
      ],
      viac: "Odkiaľ názov Čertovka? Jedna verzia hovorí o hašterivej práčke, ktorá tu bývala a ktorej ľudia hovorili čertica. Kampa však mala aj ťažké chvíle. Leží nízko pri rieke a pri povodniach v roku 2002 bola celá pod vodou. Na niektorých domoch ešte nájdeš značky, kam až voda siahala. Ak máš čas, prejdi sa parkom na juh k Múzeu Kampa. V múzeu sú diela Františka Kupku, jedného z priekopníkov abstraktnej maľby.",
      tip: "Lavičky v parku Kampa sú ideálne na prestávku. Je tu ticho a výhľad na rieku.",
      info: "Park je voľne prístupný."
    },
    {
      id: "ulicka",
      typ: "drobnost",
      nazov: "Najužšia ulička Prahy",
      lat: 50.08765, lon: 14.40972, polomer: 20,
      kratko: "Ulička tak úzka, že má semafor.",
      text: "Drobnosť: kúsok odtiaľto vedú schody dolu k reštaurácii pri vode a sú také úzke, že sa v nich dvaja ľudia nevyhnú. Preto majú na oboch koncoch semafor pre chodcov. Široké sú necelý meter. Ak svieti červená, počkaj, kým prejde protismer."
    },
    {
      id: "lennon",
      nazov: "Lennonova stena",
      lat: 50.08624, lon: 14.40682, polomer: 30,
      kratko: "Stena odporu proti komunizmu, dnes plná grafiti.",
      text: "Stena celá pokrytá farbami je Lennonova stena. Po smrti Johna Lennona v roku 1980 sem niekto namaľoval jeho portrét. Mladí ľudia sem potom písali texty jeho piesní, ale aj nápisy proti režimu. Komunistická polícia stenu stále pretierala a nápisy sa na nej vždy znova objavili. Dnes sa nápisy menia takmer každý deň, takže stenu nikdy neuvidíš dvakrát rovnakú.",
      pozri: [
        "Hľadaj na stene niečo, čo tam podľa teba bolo včera ešte inak.",
        "Oproti stojí palác Maltézskych rytierov. Stena patrí práve im.",
        "Za mostíkom vpravo je Čertovka s mlynským kolesom."
      ],
      viac: "Pre mladých Čechov v osemdesiatych rokoch bol Lennon symbolom slobody, mieru a západnej kultúry, ktorú režim zakazoval. Stretávali sa tu, spievali a polícia ich rozháňala. Neskôr sa tu objavovali výzvy k Zamatovej revolúcii. Stena dnes patrí Zvrchovanému rádu Maltézskych rytierov, ktorý sa po revolúcii rozhodol nechať ju živou. V roku 2014 ju skupina študentov celú pretrela nabielo s nápisom Wall is over, čo bola narážka na Lennonovu pieseň. Zostala biela len pár hodín.",
      tip: "Ráno je tu takmer prázdno a dá sa urobiť fotka bez ľudí.",
      info: "Voľne prístupné. Pravidlá pre kreslenie na stenu sa menia, sleduj tabule na mieste."
    },
    {
      id: "mikulas",
      nazov: "Malostranské námestie a sv. Mikuláš",
      lat: 50.08795, lon: 14.40375, polomer: 45,
      kratko: "Vrchol pražského baroka so zelenou kupolou.",
      text: "Pozri na obrovský kostol so zelenou kupolou. Je to kostol svätého Mikuláša, najkrajšia baroková stavba v Prahe. Stavali ho takmer sto rokov, otec a syn Dientzenhoferovci. Kupola a zvonica dotvorili siluetu Malej Strany, akú poznáš z pohľadníc. Vo vnútri je nádherná ilúzia: maľby na strope vyzerajú, akoby sa kostol otváral až do neba.",
      pozri: [
        "Porovnaj kupolu so štíhlou zvonicou vedľa nej. Postavili ich rôzni architekti.",
        "Pozri sa na fasádu, ktorá sa vlní, ako keby kamenná stena dýchala.",
        "Pozri do podlubí domov okolo námestia, kedysi tu boli obchody a trh."
      ],
      viac: "Ten kostol má aj špionážny príbeh. Zvonica patrí mestu, nie kostolu, a za komunizmu ju využívala tajná polícia, Štátna bezpečnosť. Z najvyššieho poschodia bol perfektný výhľad na západné veľvyslanectvá v okolí, napríklad americké a nemecké. Agenti tu sedeli roky a fotografovali, kto prichádza a odchádza. A ešte čosi pre milovníkov hudby: na organ v kostole hrával v roku 1787 Mozart. Po jeho smrti sa tu konala smútočná omša a prišli na ňu tisíce Pražanov.",
      tip: "Na zvonicu sa dá vystúpiť a pozrieť si miestnosť, kde sedeli agenti.",
      info: "Vstup do kostola aj na zvonicu je spoplatnený. Večer tu bývajú koncerty."
    },
    {
      id: "nerudova",
      nazov: "Nerudova ulica",
      lat: 50.08830, lon: 14.40130, polomer: 35,
      kratko: "Ulica domových znamení, ktorá vedie na Hrad.",
      text: "Si na Nerudovej ulici, poslednom kúsku Kráľovskej cesty pred Hradom. Pozri sa nad dvere domov. Takmer každý dom má znamenie: zlatú podkovu, červeného orla, troje husličky, dve slnká. Čísla domov zaviedli až v roku 1770 a dovtedy sa adresa hovorila podľa týchto znamení. Napríklad: bývam u Troch husličiek.",
      pozri: [
        "Hľadaj dom U Tří housliček, tam bola dielňa slávnej husliarskej rodiny.",
        "Dom U Zlaté podkovy, legenda hovorí o koni svätého Václava.",
        "Na hornom konci ulice je dom U Dvou slunců, kde býval básnik Jan Neruda."
      ],
      viac: "Ulica je pomenovaná po spisovateľovi Janovi Nerudovi. Ten tu vyrastal a v knihe Povídky malostranské opísal život jej obyvateľov. Mimochodom, juhoamerický básnik Pablo Neruda si zvolil pseudonym práve podľa neho. Kedysi sa ulica volala Ostruhová, lebo v nej bývali kováči a remeselníci, ktorí vyrábali ostrohy. Cestou hore ťa zaujmú aj dva veľké paláce s veľvyslanectvami. Šľachta chcela mať svoje sídla čo najbližšie k panovníkovi na Hrade.",
      tip: "Fotky znamení sú najlepšie zo spodnej strany ulice. Zakloň hlavu a choď pomaly.",
      info: "Ulica je strmá a dláždená. S kočíkom alebo na vozíku je lepšie vyjsť na Hrad električkou č. 22 k zastávke Pražský hrad."
    },
    {
      id: "slunce",
      typ: "drobnost",
      nazov: "U Dvou slunců",
      lat: 50.08844, lon: 14.39723, polomer: 22,
      kratko: "Dom, kde žil Jan Neruda.",
      text: "Drobnosť: pozri nad vchod domu s dvoma zlatými slnkami. V tomto dome býval básnik Jan Neruda, podľa ktorého sa ulica volá. Dnes je tu tradičná krčma, a aj to by sa mu asi páčilo."
    },
    {
      id: "rampa",
      nazov: "Výhľad z hradnej rampy",
      lat: 50.08925, lon: 14.39860, polomer: 35,
      kratko: "Pohľad na stovežatú Prahu.",
      text: "Zastav sa a otoč sa. Pod tebou sú červené strechy Malej Strany, za riekou kupoly a veže Starého Mesta. Teraz chápeš, prečo sa Praha volá stovežatá. Skús nájsť miesta, kadiaľ si dnes šiel: Týnske veže, mostovú vežu, zelenú kupolu svätého Mikuláša. Z tejto výšky je jasné aj to, prečo si knieža Bořivoj v deviatom storočí vybral práve tento kopec: kontroloval odtiaľto celé údolie.",
      pozri: [
        "Hľadaj dve čierne veže Týnskeho chrámu.",
        "Zelená kupola svätého Mikuláša je priamo pod tebou.",
        "Na obzore vpravo je Petřín s rozhľadňou, ktorá sa podobá na Eiffelovku."
      ],
      viac: "Petřínska rozhľadňa vznikla v roku 1891 podľa vzoru Eiffelovej veže, ktorú Česi obdivovali na svetovej výstave v Paríži. Je asi päťkrát menšia, ale keďže stojí na kopci, jej vrchol je vyššie nad morom ako vrchol tej parížskej. A ako sa to s tými sto vežami vlastne má? Matematik Bernard Bolzano ich v devätnástom storočí napočítal 103. Dnes ich je oveľa viac. Hovorí sa o päťsto a viac, podľa toho, čo všetko za vežu považuješ.",
      tip: "Najkrajšie svetlo je tu podvečer, keď slnko zapadá za Hradom a svieti na Staré Mesto.",
      info: "Voľne prístupné."
    },
    {
      id: "brana",
      nazov: "Brána Hradu a čestná stráž",
      lat: 50.08985, lon: 14.39925, polomer: 35,
      kratko: "Vstup do najväčšieho hradného areálu na svete.",
      text: "Si pri vstupe na Pražský hrad. Podľa Guinnessovej knihy rekordov je to najväčší starobylý hradný komplex na svete. Je sídlom českých kniežat, kráľov, cisárov a dnes prezidenta. Na bráne bojujú dvaja kamenní obri, titáni, a pod nimi stoja vojaci Hradnej stráže. Ich modré uniformy navrhol návrhár kostýmov z oscarového filmu Amadeus.",
      pozri: [
        "Na bráne sú dve súsošia bojujúcich titánov. Jeden bije palicou, druhý dýkou.",
        "Za prvým nádvorím je Matyášova brána z roku 1614, jedna z prvých barokových stavieb v Čechách.",
        "Pozri sa na strážcov. Ich úlohou je stáť bez pohnutia."
      ],
      viac: "Hrad má za sebou vyše tisíc rokov. Najstarším zachovaným objektom sú pozostatky kostola Panny Márie z deviateho storočia. Dnešnú jednotnú fasádu nádvorí dostal za Márie Terézie. A ešte o uniformách: navrhol ich v roku 1990 Theodor Pištěk, kostýmový výtvarník, ktorý dostal Oscara za Formanov film Amadeus. Prezident Václav Havel ich chcel mať elegantnejšie ako komunistické. Na stráže nesmieš siahať a nesmieš im zavadzať, no fotiť ich môžeš.",
      tip: "Slávnostná výmena stráží s fanfárami býva na prvom nádvorí o 12:00, príď aspoň 20 minút vopred.",
      info: "Pri vstupe je bezpečnostná kontrola. Výmena stráží býva každú celú hodinu, slávnostná o 12:00. Areál Hradu je zvyčajne otvorený od 6:00 do 22:00, nádvoria sú voľné, do budov treba lístok."
    },
    {
      id: "katedrala",
      nazov: "Katedrála sv. Víta",
      lat: 50.09085, lon: 14.39990, polomer: 40,
      kratko: "Gotická katedrála, ktorú stavali takmer 600 rokov.",
      text: "Zakloň hlavu. Katedrála svätého Víta, Václava a Vojtecha je najväčší a najdôležitejší kostol v krajine. Tu korunovali českých kráľov a sú tu ich hrobky. Základný kameň položil Karol Štvrtý v roku 1344 a stavať ju začal Matej z Arrasu, po ňom Peter Parléř. Dokončili ju však až v roku 1929. Fasáda pred tebou je teda z dvadsiateho storočia, no podľa gotických vzorov.",
      pozri: [
        "Nad hlavným vchodom je okrúhle ružicové okno so scénami stvorenia sveta.",
        "Vo vnútri vľavo hľadaj vitráž od Alfonsa Muchu, je úplne iná ako ostatné.",
        "Vnútri vpravo je kaplnka svätého Václava, steny zdobia polodrahokamy."
      ],
      viac: "Nad kaplnkou svätého Václava je ukrytá korunovačná komora so svätováclavskou korunou. Vedú do nej dvere so siedmimi zámkami a sedem kľúčov má sedem rôznych ľudí: napríklad prezident, premiér, predsedovia oboch komôr parlamentu a pražský arcibiskup. Klenoty preto uvidí verejnosť len výnimočne. Legenda hovorí, že kto si korunu nasadí bez práva, do roka zomrie. Vraj ju skúsil nemecký ríšsky protektor Heydrich a o necelý rok neskôr ho zabili parašutisti. Je to však skôr legenda ako doložená história. Vo vnútri nájdeš aj obrovský strieborný náhrobok svätého Jána Nepomuckého, toho z mosta.",
      tip: "Do časti pri vchode sa dá vstúpiť zadarmo, celý interiér je na lístok okruhu Hradu.",
      info: "V nedeľu dopoludnia počas omší je prehliadka obmedzená. Rad pred vstupom býva dlhý, najkratší ráno."
    },
    {
      id: "palac",
      nazov: "Starý kráľovský palác",
      lat: 50.09050, lon: 14.40130, polomer: 35,
      kratko: "Rytierske turnaje v sále a slávna defenestrácia.",
      text: "Si pri Starom kráľovskom paláci. Vo vnútri je Vladislavská sála, v čase dokončenia najväčšia klenutá sála v strednej Európe. Bola taká veľká, že sa v nej konali rytierske turnaje. Rytieri do nej vchádzali po jazdeckých schodoch rovno na koňoch. A z jedného z okien paláca v roku 1618 vyhodili dvoch cisárskych miestodržiteľov. Tento čin spustil tridsaťročnú vojnu.",
      pozri: [
        "Otoč sa ku katedrále. Na jej južnej strane je Zlatá brána s trblietavou mozaikou Posledného súdu.",
        "Pozri na okná paláca. Hoci je budova gotická, sú to jedny z prvých renesančných okien v Čechách."
      ],
      viac: "Tá defenestrácia mala bizarný koniec. Protestantskí stavovia vyhodili oknom miestodržiteľov Martinica a Slavatu a ešte aj ich pisára Fabricia. Všetci traja pád z výšky asi šestnásť metrov prežili. Katolíci tvrdili, že ich zachránili anjeli alebo Panna Mária. Protestanti zase, že dopadli na hromadu hnoja. Pisár Fabricius neskôr dostal od cisára šľachtický titul s pomenovaním von Hohenfall, teda z Vysokého pádu. Vladislavská sála dodnes slúži na najslávnostnejšie udalosti štátu, napríklad na voľbu a inauguráciu prezidenta.",
      tip: "Mozaiku Zlatej brány si pozri zblízka. Je z benátskeho skla a má vyše milión kamienkov.",
      info: "Vstup do paláca je na lístok okruhu Hradu."
    },
    {
      id: "zlata",
      nazov: "Zlatá ulička",
      lat: 50.09206, lon: 14.40427, polomer: 35,
      kratko: "Domčeky v hradbách, kde písal Kafka.",
      text: "Si v Zlatej uličke. Tieto miniatúrne farebné domčeky sú prilepené rovno na hradbách. Postavili ich koncom šestnásteho storočia pre hradných strážcov a služobníctvo. Žili tu v neuveriteľne malom priestore aj celé rodiny. Neskôr sa tu usadili zlatníci, odtiaľ názov ulice. Pozri na dom číslo 22, ten modrý. V rokoch 1916 a 1917 v ňom písal Franz Kafka.",
      pozri: [
        "Modrý domček číslo 22 je ten, kde písal Kafka. Jeho sestra si ho prenajala.",
        "Niektoré domčeky sú zariadené ako dobové obydlia: krčma, zbrojnica, dielňa.",
        "Nad domčekmi je v hradbách obranná chodba so zbraňami a brneniami."
      ],
      viac: "Často počuješ, že tu za Rudolfa Druhého bývali alchymisti a pokúšali sa vyrobiť zlato. Je to romantická legenda. Rudolfovi alchymisti pracovali skôr na iných miestach Hradu a v meste. V dome číslo 14 v dvadsiatom storočí bývala jasnovidka Matylda Průšová. Gestapo ju vraj zatklo potom, čo predpovedala pád Tretej ríše.",
      tip: "Večer po zatvorení okruhov býva ulička voľne prístupná a takmer prázdna, len domčeky sú zatvorené. Over si to na mieste.",
      info: "Počas dňa je vstup na lístok okruhu Hradu. Ulička je úzka, v sezóne sú tu rady."
    },
    {
      id: "spanelska",
      nazov: "Španielska synagóga a Kafka",
      lat: 50.09036, lon: 14.42085, polomer: 35,
      kratko: "Najkrajšia synagóga v maurskom štýle a socha Kafku.",
      text: "Pred tebou je Španielska synagóga z roku 1868. Postavili ju v maurskom slohu podľa vzoru Alhambry v Granade, odtiaľ názov. Zvonka je pomerne skromná, ale vnútri sa ti zatají dych: všetko pokrývajú zlaté a farebné ornamenty. Hneď vedľa je zvláštna socha: prázdny oblek bez hlavy a na jeho pleciach sedí Franz Kafka. Je to odkaz na jeho poviedku Opis jedného zápasu.",
      pozri: [
        "Socha Kafku je od Jaroslava Rónu. Kafka sedí na pleciach prázdneho obleku.",
        "Pozri na maurské oblúky a ornamenty na fasáde."
      ],
      viac: "Kafka je s touto štvrťou spätý celým životom. Narodil sa pár krokov odtiaľto, na rohu Staromestského námestia, chodil tu do školy a do práce. Písal po nemecky, ako väčšina pražských Židov tej doby. Vďaka svojmu priateľovi Maxovi Brodovi sa jeho diela vôbec zachovali. Kafka ho žiadal, aby po jeho smrti všetko spálil, no Brod ho neposlúchol. Synagóga dnes patrí Židovskému múzeu a v lete tu bývajú koncerty.",
      tip: "Do synagógy sa dostaneš so spoločným lístkom Židovského múzea.",
      info: "Pamiatky Židovského múzea sú v sobotu a počas židovských sviatkov zatvorené."
    },
    {
      id: "staronova",
      nazov: "Staronová synagóga",
      lat: 50.09004, lon: 14.41859, polomer: 30,
      kratko: "Najstaršia fungujúca synagóga v Európe a Golem.",
      text: "Táto nenápadná budova so strmým tehlovým štítom je Staronová synagóga. Postavili ju okolo roku 1270 a je to najstaršia doteraz používaná synagóga v Európe. Prežila požiare, pogromy, asanáciu štvrte aj nacistickú okupáciu. A práve sem sa viaže najslávnejšia pražská legenda, o Golemovi.",
      pozri: [
        "Pozri na strmý štít z tehál. Je to typická gotika.",
        "Na stene vysoko hore hľadaj železné stúpačky. Vedú na povalu, kde vraj leží Golem."
      ],
      viac: "Podľa legendy vytvoril na konci šestnásteho storočia rabín Jehuda Löw z hliny umelého človeka, Golema. Oživil ho vložením šému, papierika s Božím menom, do úst. Golem mal chrániť pražských Židov. Raz však rabín zabudol šém vybrať pred sobotou a Golem začal ničiť všetko okolo seba. Rabín ho zastavil a jeho telo uložil na povalu synagógy. Vraj tam leží dodnes. Povala je pre verejnosť zatvorená. Rabín Löw bol skutočná osobnosť, slávny učenec, a jeho hrob nájdeš na Starom židovskom cintoríne, kam ideš teraz.",
      tip: "Vo vnútri si všimni klenbu. Má päť rebier namiesto obvyklých štyroch, aby nevytvárala kríž.",
      info: "Vstup na samostatný lístok. Muži dostanú pri vstupe jarmulku. V sobotu a počas sviatkov je zatvorené."
    },
    {
      id: "cintorin",
      nazov: "Starý židovský cintorín",
      lat: 50.08960, lon: 14.41720, polomer: 40,
      kratko: "Tisíce náhrobkov v desiatkach vrstiev.",
      text: "Za týmto múrom je Starý židovský cintorín, jedno z najpôsobivejších miest v Prahe. Pochovávalo sa tu viac ako tristo rokov, až do roku 1787. Židia nesmeli rozširovať cintorín za hranice geta a podľa ich viery sa hroby nesmú rušiť. Preto sa na seba vŕšili nové vrstvy hrobov. Na malom priestore je asi dvanásťtisíc náhrobkov, nakrivo, tesne pri sebe.",
      pozri: [
        "Na mnohých náhrobkoch sú symboly: ruky žehnajúcich kňazov, krčah, zvieratá podľa mena rodiny.",
        "Na hroboch nájdeš kamienky a papieriky s prianiami. Ľudia ich nechávajú najmä pri hrobe rabína Löwa."
      ],
      viac: "Vstupuje sa cez Pinkasovu synagógu a tá je pamätníkom holokaustu. Na jej stenách je ručne napísaných takmer osemdesiattisíc mien českých a moravských Židov, ktorí zahynuli. Počas vojny sem zvážali predmety zo zrušených židovských obcí z celých Čiech a Moravy. Dlho sa tradovalo, že nacisti tu plánovali múzeum vyhynutej rasy. Historici to dnes spochybňujú a zdôrazňujú, že zbierku zachraňovali hlavne samotní židovskí odborníci. Vďaka nim má Praha jednu z najväčších zbierok židovského umenia na svete. Ten kamienok namiesto kvetov má tiež význam. Kvety zvädnú, kameň je trvalým znamením, že tu niekto bol a spomínal.",
      tip: "Na hrob rabína Löwa môžeš položiť kamienok a papierik s prianím. Je to tradícia.",
      info: "Vstup cez Pinkasovu synagógu v Širokej ulici so spoločným lístkom Židovského múzea. Ide sa po úzkej vyznačenej trase."
    }
  ]
});
