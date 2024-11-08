/*
 * (c) 2024 Mykhailo Stetsiuk
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * The lists of exceptions were manually compiled based on information
 * found on these public resources by several contributors:
 * https://en.wikipedia.org/wiki/French_orthography
 * https://en.wikipedia.org/wiki/Spanish_orthography
 * https://wiktionary.org/
 * https://www.lawlessfrench.com/
 * https://www.wordmine.info/
 * https://motsavec.fr/
 */
// SPDX-License-Identifier: MPL-2.0

const exceptions_fr = {
  // "ch" — "х"
  "achaine": "aхaine",
  "achéen": "aхéen",
  "achène": "aхène",
  "achéron*": "aхéron",
  "achillée": "aхillée", "achilléine": "aхilléine", "achilléomancie": "aхilléomancie", "achilléomancien": "aхilléomancien", "achilléomantique": "aхilléomantique",
  "*chth?on*": "хton",
  "achthéo*": "aхthéo",
  "anavlochos": "anavloхos",
  "antioch*": "antioх",
  "arachn*": "araхn",
  "*archaï*": "arхaï",
  "archang*": "arхang",
  "*arché(?=[ogt])*": "arхé",
  "archont*": "arхont",
  "*auroch*": "auroх",
  "azéradach": "azéradaх",
  "bacchylide": "bakхylide",
  "brouchéion": "brouхéion",
  "chaldé*": "хaldé",
  "chaol*": "хaol", "chaomancie": "хaomancie", "chaot*": "хaot", "chaos": "хaos", "chaosphère": "хaosphère",
  "charism*": "хarism",
  "charites": "хarites",
  "charybde": "хarybde",
  "*chélid*": "хélid",
  "chéloïde": "хéloïde",
  "chélydre": "хélydre",
  "cherson*": "хerson",
  "chiasm*": "хiasm",
  "chilio*": "хilio", "chilia*": "хilia", "chilo*": "хilo",
  "chiro*": "хiro", "*chiral*": "хiral",
  "chiton": "хiton", "chitin*": "хitin",
  "*chlor*": "хlor",
  "chœni*": "хœni", "choinix": "хoinix", "chénice": "хénice", "chénisque": "хénisque",
  "chœur": "хœur", "choral": "хoral", "choriste": "хoriste",
  "*cholér*": "хolér",
  "*cholestér*": "хolestér",
  "*chor(?=[eéèoi])*": "хoré", "chorus": "хorus",
  "*chré*": "хré",
  "chrême": "хrême",
  "*christ*": "хrist",
  "*chro*": "хro",
  "chry*": "хry",
  "*cochl*": "coхl",
  "cromelech": "cromeleх",
  "dichot*": "diхot",
  "*ecch*": "ekх",
  "échécrate": "éхécrate",
  "écho": "éхo", "anécho*": "anéхo", "autoécho*": "autoéхo", "écho(?=[gïkl])*": "éхo", "échom(?=[éèi])*": "éхom", "échop(?!p)*": "éхop", "échot*": "éхot",
  "épiché*": "épiхé", "épicho*": "épiхo",
  "exarchopoulos": "exarхopoulos",
  "fuchsin": "fuхsin",
  "icht*": "iхt", "maastricht*": "maastriхt",
  "ischém*": "isхém", "*ischi(?!u)*": "isхi",
  "jéricho": "jériхo",
  "krach": "kraх",
  "lichen(?!t)*": "liхen", "phycolichen": "phycoliхen",
  "machaon": "maхahon", // "aon" — "аон"
  "ochlo*": "oхlo",
  "œnochoé": "œnoхoé",
  "onycho*": "onyхo",
  "orchest*": "orхest",
  "orchi*": "orхi", "cryptorchid*": "cryptorхid",
  "orichal*": "oriхal", "aurichal*": "auriхal",
  "pachyptile": "paхyptile",
  "polychreste": "polyхreste",
  "*psych(?!i[eq])*": "psyх",
  "schénanthe": "sхénanthe",
  "*schizo*": "sхizo",
  "schol*": "sхol",
  "*splanch*": "splanх",
  "stésichore": "stésiхore",
  "stœchio*": "stœхio",
  "strych*": "stryх",
  "*tech": "teх", "*techn*": "teхn",
  "tétrachire": "tétraхire",
  "varech": "vareх",
  "vrachasi": "vraхasi",
  // "c"œ — "с"
  "cœruléolactite": "sœruléolactite",
  // "gn" ­— "гн"
  "gnaphale": "ghnaphale",
  "gnat*": "ghnat",
  "*gnathe": "ghnathe",
  "gnavelle": "ghnavelle",
  "gneiss*": "ghneiss",
  "gnetum": "ghnetum",
  "gnewitz": "ghnewitz",
  "gnétacée": "ghnétacée",
  "*(?<!i)gnom*": "ghnom",
  "*gnos(?!q)*": "ghnos",
  "gnou": "ghnou",
  // "j" — "й"
  "fjord*": "fyord",
  // "j" — "х"
  "jota": "хota",
  "marijuana": "mariхuana",
  // "s" — "с"
  "antis*": "antiss",
  "paras(?!it)*": "parass",
  "*vraisembl*": "vraissembl",
  // "s" — "з"
  "alsace": "alzace",
  // "s" — ø
  "mesd(?=[ai])*": "med", "mesdemoiselles": "medmoiselles",
  "debusclin": "debuclin",
  "descartes": "decartes",
  // "sc" — "ш"
  "*fascis*": "fachis",
  // "x" — ø
  "auxdit": "audit",
  "auxquel*": "auquel",
  // "x" — "с"
  "auxais": "aussais",
  "auxelles": "ausselles",
  "auxer*": "ausser",
  "auxi": "aussi",
  "*auxoi*": "aussoi",
  "auxon": "ausson", "auxonne": "aussonne", "auxonnais": "aussonnais",
  "bruxell*": "brussell",
  "coccyx": "coccys",
  "dix": "dis", "dixain*": "dissain", "dixante": "dissante", "dixen*": "dissen", "dixième*": "dissième",
  "six": "sis", "sixain*": "sissain", "sixen*": "sissen", "sixième*": "sissième", "sixiémisme": "sissiémisme",
  "soixant*": "soissant",
  // "ae" — "аэ"
  "maestro": "mahestro",
  "paella": "pahella", "paellera": "pahellera",
  // "ai" — "ъ"/"е"
  "faisan": "fesan",
  "faisons": "fesons",
  // "ao" — "о"
  "curaçao": "curaço",
  "saône": "sone",
  // "aou"/"aoû" — "у"
  "aout": "out", "août": "out",
  "*saoul*": "soul", "*saoûl*": "soul",
  // "ay" — "ай"
  "bay*": "bahy",
  "mayo*": "mahyo",
  "papay*": "papahy",
  // "e" — "є"
  "clef": "cléf",
  "et": "ét",
  // "e" — "а"
  "*emment": "amment",
  "femm*": "famm", "sagefemme": "sagefamme",
  "*solenn*": "solann",
  // "e" — "ө"
  "gennevilliers": "jœunnevilliers",
  "gennevillois": "jœunnevillois",
  // "ee" — "є"
  "pedigree": "pedigré",
  // "œ" — "оє"
  "lœri": "loéri",
  // "œ" — "ө"
  "lœss*": "lœuss",
  // "œ" — "у"
  "lœve": "louve",
  // "oe", "oë" — "уа"
  "mo[eë]lle": "moille", "mo[eë]llon": "moillon", "mo[eë]lleux": "moilleux",
  // "oe" — "ө"
  "foehn*": "fœhn",
  // "oë" — "оє"
  "canoë": "canoé",
  "goëmon*": "goémon",
  "goëlette": "goélette",
  // "oë" — "уэ"
  "foën*": "fouehn",
  "oeyre*": "oueyre",
  "plancoët*": "plancouet",
  // "oë" — "уа"
  "voëvre": "vouavre",
  // "oi" — "о"
  "encoignure": "encognure",
  "oignon*": "ognon",
  // "oi" — "ой"
  "séquoia": "séquohia",
  // "ou" — "оу"
  "pseudouridimycine": "pseudohuridimycine",
  // "oy" — "ой"/"ои"
  "ayoye": "ahyohye",
  "cowboy": "cowbohy",
  "goyave": "gohyave",
  "moyse": "mohyse",
  // "[gq]ui" — "[гк]юи"
  "aiguillage": "aigüillage", "aiguille": "aigüille", "aiguiller": "aigüiller", "aiguillette": "aigüillette", "aiguillon": "aigüillon", "aiguiser": "aigüiser",
  "linguist*": "lingüist",
  "unguis": "ongüis", // "un" — "о̃"
  "équilatéral": "éqüilatéral",
  "obliquité": "obliqüité",
  "quia": "qüia",
  "ubiqui*": "ubiqüi",
  // "uy" — "юй"
  "ahuy": "ahulli",
  "berruyer": "berruhyer", "berruyère": "berruhyère", "bruyéreuse": "bruhyéreuse", "bruyéreux": "bruhyéreux",
  "caluyau": "caluhyau",
  "écuyer": "écuhyer", "écuyère": "écuhyère",
  "embruyer": "embruhyer",
  "gruyer": "gruhyer", "gruyère": "gruhyère",
  "thuya": "thuhya",
  "thuyone": "thuhyone",
  "truyère": "truhyère",
  "truyes": "truhyes",
  "tuya": "tuhya",
  "tuyautage": "tuhyautage",
  "zhuyin": "zhuhyin",
  // "uy" — "уй"
  "buyon": "bouyon", "buyonnais": "bouyonnais",
  "gikuyu": "gikouyu",
  "kikuyu": "kikouyu",
  "puyadin": "pouyadin",
  // "uy" — "өй"
  "oeyreluy": "oeyreleuy",
  // "aon" — "о̃"
  "chaon": "chon", "chaonnais": "chonhais",
  // "aon" — "аон"/"ао̃н"
  "claonais": "clahonais",
  "gaonat": "gahonat",
  "graonnais": "grahonnais",
  "haonnois": "hahonnois",
  "jaonnais": "jahonnais",
  "kaonique": "kahonique",
  "laone": "lahone",
  "lycaonie": "lycahonie", "lycaonien": "lycahonien",
  "pharaonique": "pharahonique", "pharaonien": "pharahonien", "pharaonne": "pharahonne",
  "tétraonidé": "tétrahonidé", "tétraonides": "tétrahonides", "tétraoniné": "tétrahoniné",
  "thaonnais": "thahonnais",
  "arpaon": "arpahon",
  "claon": "clahon",
  "graon": "grahon",
  "haon": "hahon",
  "kaon": "kahon",
  "lycaon": "lycahon",
  "pharaon": "pharahon",
  "thaon": "thahon",
  "yanaon": "yanahon",
  // "en" — "эн"
  "end": "ehnd",
  "lichen": "lichehn",
  "weekend": "weekehnd",
  // "em" — "эм"
  "totem": "totehm",
  // "er" — "өр"
  "leader": "leadeur",
  "speaker": "speakeur",
  // "ier" — "йэр"
  "hier": "hiehr",
  "tier": "tiehr",
  // Don't guess "fier"
  "fier": "фиер",
  // "ew" — "уи"
  "chewing": "chouing",
  // "ill" — "ил"
  "achille": "achile",
  "bacille": "bacile",
  "billevesée": "bilevesée",
  "billion": "bilion",
  "capillaire": "capilaire",
  "codicille": "codicile",
  "distill*": "distil",
  "fibrill*": "fibril",
  "gilles": "giles",
  "illaire": "ilaire",
  "krill": "kril",
  "lille": "lile",
  "lilliput*": "liliput",
  "millage": "milage", "mille": "mile",
  "millefeuille": "milefeuille",
  "millepertuis": "milepertuis",
  "milletupl*": "miletupl",
  "millée": "miље", //an exception to "millé*"
  "millé*": "milé",
  "milli*": "mili",
  "oscill*": "oscil",
  "pénicilline": "péniciline", "pénicillinase": "pénicilinase",
  "scille": "scile", "scillarine": "scilarine", "scillitique": "scilitique", "scilline": "sciline", "scillirosidine": "scilirosidine", "scilliroside": "sciliroside",
  "spongille": "spongile",
  "tranquill*": "tranquil",
  "vexill*": "vexil",
  "*vill*": "vil",
  "whatmille": "whatmile",
  /*
   * TODO; unchecked beyond this point
   */
  // "in" — "ин"
  "sprint": "sprihnt",
  // "on" — "он"
  "canyon": "canyohn",
  // "on" — "е/ъ"
  "monsieur": "mecieur",
  // "mn" — "н"
  "*automn*": "auton",
  "*damn*": "dan",
  // silent "t"
  "hautbois": "haubois",
  "asthme": "asme",
  // "ow" — "у"
  "clown": "cloun",
  // "ow" ­— "оу"
  "koweït": "kohoueït",
  // "qu" — "ку"
  "adéquat*": "adéqouat",
  "aqua*": "aqoua",
  "équanime": "éqouanime", "équanimité": "éqouanimité",
  "équateur": "éqouateur",
  "équatif": "éqouatif",
  "équation": "éqouation", "équationnel": "éqouationnel",
  "équator*": "éqouator",
  "péréquation": "péréqouation",
  "qua": "qoua",
  "quadrature": "qouadrature",
  "quadri*": "qouadri",
  "quadru*": "qouadru",
  "quartidi": "qouartidi",
  "quaternaire": "qouaternaire",
  "quatuor": "qouatuor",
  "quid": "qouid",
  "quos": "qouos",
  "squa*": "sqoua",
  "quoque": "qouoqoue",
  // "um" — "ом"
  "album": "albohm",
  "aquarium": "aquariohm",
  "atrium": "atriohm",
  "auditorium": "auditoriohm",
  "cæcum": "cæcohm",
  "cæsium": "cæsiohm",
  "capharnaüm": "capharnaüm",
  "circum": "circohm",
  "compendium": "compendiohm",
  "consortium": "consortiohm",
  "crématorium": "crématoriohm",
  "curriculum": "curriculohm",
  "delphinium": "delphiniohm",
  "décorum": "décorohm",
  "diluvium": "diluviohm",
  "duumvir": "duohmvir", "duumvirat": "duohmvirat",
  "extremum": "extremohm",
  "forum": "forohm",
  "funérarium": "funérariohm",
  "galbanum": "galbanohm",
  "herculanum": "herculanohm",
  "impedimentum": "impedimentohm",
  "infundibulum": "infundibulohm",
  "lactucarium": "lactucariohm",
  "magnésium": "magnésiohm",
  "magnum": "magnohm",
  "maximum": "maximohm",
  "médium": "médiohm",
  "minium": "miniohm",
  "muséum": "muséohm",
  "oïdium": "oïdiohm",
  "parabellum": "parabellohm",
  "pensum": "pensohm",
  "péplum": "péplohm",
  "philtrum": "philtrohm",
  "podium": "podiohm",
  "pomœrium": "pomœriohm",
  "postscriptum": "postscriptohm",
  "proctodeum": "proctodeohm",
  "pygidium": "pygidiohm",
  "quantum": "quantohm",
  "quorum": "quorohm",
  "rectum": "rectohm",
  "référendum": "référendohm",
  "sanatorium": "sanatoriohm",
  "scriptorium": "scriptoriohm",
  "scrotum": "scrotohm",
  "sébum": "sébohm",
  "sélénium": "séléniohm",
  "sérum": "sérohm",
  "silicium": "siliciohm",
  "solarium": "solariohm",
  "spéculum": "spéculohm",
  "stratum": "stratohm",
  "terrarium": "terrariohm",
  "thermopolium": "thermopoliohm",
  "triumvirat": "triohmvirat",
  "velum": "velohm",
  "vivarium": "vivariohm",
  "vulgum": "vulgohm",
  // "un" — "юн"
  "betun": "betuhn",
  "cunnilingus": "cuhnnilingus",
  "mozambrun": "mozambruhn",
  "rèbelun": "rèbeluhn",
  "tun": "tuhn",
  "verdun": "verduhn",
  "yichun": "yichuhn",
  // "un" — "он"
  "fun": "fohn",
  "run": "rohn",
  // "un" — "ун"
  "hunnu": "hounnu",
  "inuktun": "inuktoun",
  "kun": "koun",
  "nun": "noun",
  "qanun": "qanoun",
  "shogun": "shogoun",
  "tiqqun": "tiqqoun",
  "ttakun": "ttakoun",
  "ttun": "ttoun",
  // "un" — "о̃"
  "avunculaire": "avonculaire",
  "homuncule": "homoncule",
  "infundibul*": "infondibul",
  "nuncupation": "noncupation",
  "punch": "ponch",
  "secundo": "secondo",
  // Foreign words
  "yacht": "yoхt",
  "almanach": "almanaх",
  "check": "tcheck",
  "strech": "stretch",
  "coach": "coatch",
  "gin": "dgin",
  "adagio": "adadgio",
  "management": "manadgement",
  "fjord": "fyord",
  "football": "foutboll",
  "lady": "lédy",
  "okay": "okéy",
  "business": "bizness",
  "bazooka": "bazouka",
  "cool": "coul",
  "shampooing": "champouhing",
  "alcool": "alcol",
  "boskoop": "boskop",
  "rooibos": "rohibos",
  "spéculoos": "spéculos",
  "mooré": "moré",
  "zoo": "zo",
  "tofu": "tofou",
  "pudding": "poudding",
  "club": "cleub",
  "puzzle": "peuzzle",
  "rhumerie": "rhomerie",
  "brahman": "brahmahn",
  "chaman": "chamahn",
  "gentleman": "gentlemahn",
  "tennisman": "tennismahn",
  "naan": "naahn"
};

const exceptions_fr_phonetic = {
  // b
  "*lomb": "plom",
  "*doub": "dou",
  "kemb": "kem",
  // c
  "estomac": "estoma",
  "porc": "por",
  "*tabac": "taba",
  "caoutchouc": "caoutchou",
  // d
  "*land": "lande",
  "*field": "fielde",
  "*head": "heade",
  "*ford": "forde",
  "david": "davide",
  "dread": "dreade",
  "leed": "leede",
  "mcdonald": "mcdonalde",
  "ombuds": "ombudse",
  "*wood": "woode",
  "raid": "raide",
  "raunds": "raundse",
  "sud": "sude",
  "amands": "amandse",
  "*shield": "shielde",
  "zid": "zide",
  // f
  "*clef": "clé", //TODO check "clef*"
  "nerf": "ner",
  "boeufs": "boeu",
  "bœufs": "bœu",
  "piqueboeufs": "piqueboeu",
  "piquebœufs": "piquebœu",
  "oeufs": "oeu",
  "œufs": "œu",
  "cerfs": "cer",
  "zeitlofs": "zeitlo",
  // g
  "joug": "jou",
  "*ing": "inge",
  // p
  "cap": "cape",
  "cep": "cepe",
  "slip": "slipe",
  // ct
  "amict": "ami",
  "*spect": "spè",
  "*nct": "n",
  "éject": "éjè",
  "præfect": "præfè",
  "traict": "trai",
  // st
  "est": "è", // "être" is more common than the noun
  // t
  "*ct": "cte",
  "*pt": "pte",
  "*st": "ste",
  "brut": "brute",
  "dot": "dote",
  "huit": "huite",
  "déficit": "déficite",
  "granit": "granite",
  "yaourt": "yaourte",
  // th
  "bizuth": "bizu",
  "goth": "go",
  // l
  "*aulx": "au",
  "bacul": "bacu",
  "cul": "cu",
  "fils": "fis",
  "foutrecul": "foutrecu",
  "fusil": "fusi",
  "gentil": "genti",
  "*outil": "outi",
  "*saoul": "sou",
  "*saoûl": "sou",
  // s
  "*bus": "buse",
  "sens": "sense",
  "contresens": "contresense",
  "antisens": "antisense",
  "os": "osse",
  "ours": "ourse",
  "tennis": "tennisse",
  // rs
  "gars": "ga",
  // x
  "aix": "aixe",
  "*index": "indexe",
  "*pharynx": "pharynxe",
  // z
  "*zz": "zze",
  "*gaz": "gaze",
  "fez": "feze",
  "merguez": "mergueze"
};

const exceptions_es = {
  // "x" — "ҳ"
  "méxico": "méhico",
  "oaxaca": "oahaca",
  "xiote": "hyote",
  "texas": "tehas",
  "axarquía": "aharquía",
  "ximena": "himena",
  "ximénez": "himénez",
  "mexía": "mehía",
  "roxas": "rohas",
  // "x" — "ш"
  "xela": "shela",
  "xocoyote": "shocoyote"
};

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

function fix_french(text, phoneticize) {
  let exceptions = exceptions_fr;
  if (phoneticize) exceptions = {...exceptions_fr_phonetic, ...exceptions};
  for (const [key, value] of Object.entries(exceptions)) {
    for (const e of ["", "s", "x"]) {
      let k = key;
      const limitStart = (k[0] != "*")? "(?<!\\p{L})" : "";
      const limitEnd = (k.slice(-1) != "*")? "(?!\\p{L})" : "";
      if (!limitEnd && e != "") continue;
      if (!limitStart) k = k.slice(1);
      if (!limitEnd) k = k.slice(0, -1);
      k = k + e;
      let lower = limitStart + k + limitEnd;
      let capit = limitStart + capitalize(k) + limitEnd;
      let upper = limitStart + k.toUpperCase() + limitEnd;
      text = text.replace(new RegExp(lower, "gu"), value);
      text = text.replace(new RegExp(capit, "gu"), capitalize(value));
      text = text.replace(new RegExp(upper, "gu"), value.toUpperCase());
    }
  } return text;
}

function fix_spanish(text) {
  for (const [key, value] of Object.entries(exceptions_es)) {
    for (const e of ["", "s"]) {
      let k = key + e;
      let lower = "(?<!\\p{L})" + k + "(?!\\p{L})";
      let capit = "(?<!\\p{L})" + capitalize(k) + "(?!\\p{L})";
      let upper = "(?<!\\p{L})" + k.toUpperCase() + "(?!\\p{L})";
      text = text.replace(new RegExp(lower, "gu"), value);
      text = text.replace(new RegExp(capit, "gu"), capitalize(value));
      text = text.replace(new RegExp(upper, "gu"), value.toUpperCase());
    }
  } return text;
}
