import { Student } from '../types';

export const MOCK_STUDENTS: Student[] = [
  // --- 10A СЫНЫБЫ ---
  {
    id: "2024-1001",
    name: "Білімнұр Елназ",
    grade: "10A",
    attendance: 100,
    midtermProject: {
      title: "AuraStream - музыка әлемінің көзі",
      description: "Жасанды интеллект алгоритмдерін қолдана отырып, пайдаланушының көңіл-күйіне сәйкес музыкалық тректерді ұсынатын инновациялық веб-қосымша.",
       grade: "16/20",
      feedback: " Елназ, сенің AuraStream жобасы музыкалық ұсыныстар алгоритмі мен қолданушы интерфейсінің дизайны жағынан жақсы ойластырылған. JavaScript кодында функцияларды тиімді қолданғансың, бірақ кейбір жерлерде кодтың құрылымын жақсартуға болады. Веб-қосымшаның жылдамдығы мен жауап беру қабілеті жақсы деңгейде. Бұл жоба тек мектеп деңгейінде ғана емес, нақты қолдануға да жарайтын өнімге айналуы мүмкін. ", 
      status: 'Completed',
       imageUrl: "22.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    testResults: [{ name: "Аралық бақылау #1", score: 18, maxScore: 20 }, { name: "Аралық бақылау #2", score: 20, maxScore: 20 }],
    feedback: "Елназ тоқсан бойы өзін өте жауапты және ізденімпаз оқушы ретінде көрсетті. Ол JavaScript тілінің күрделі құрылымдарын, әсіресе нысандар мен функцияларды еркін меңгерген. Сабақ үстінде тек өз тапсырмасын орындап қана қоймай, сыныптастарына бағыт-бағдар беріп, көшбасшылық қасиетін танытады. Оның код жазу мәдениеті кәсіби деңгейге өте жақын. Осы қарқынын сақтаса, болашақта ІТ саласының мықты маманы болатынына күмәнім жоқ.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1002",
    name: "Үмітбекұлы Айбарыс",
    grade: "10A",
    attendance: 88,
    testResults: [{ name: "Аралық бақылау #1", score: 14, maxScore: 20 }, { name: "Аралық бақылау #2", score: 16, maxScore: 20 }],
    feedback: "Айбарыс техникалық тапсырмаларды орындау кезінде өте жоғары жылдамдық танытады. Ол бағдарламалау логикасын тез ұғады, бірақ кейде ұсақ бөлшектерге мұқияттылық жетіспейді. Сабақ кезіндегі зейінін тек Аралық бақылауадемиялық мақсаттарға бағыттаса, оның әлеуеті бұдан да жоғары болар еді. Тәртіп пен жүйелілікке көбірек мән беру оның алдағы тоқсандардағы көрсеткішін айтарлықтай жақсартады. Жалпы алғанда, оның ІТ саласына деген икемі өте жақсы.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1003",
    name: "Тұрсынғали Елнұр Медеуұлы",
    grade: "10A",
    attendance: 85,
    testResults: [{ name: "Аралық бақылау #1", score: 13, maxScore: 20 }, { name: "Аралық бақылау #2", score: 15, maxScore: 20 }],
    feedback: "Елнұрдың алгоритмдік ойлау қабілеті жақсы дамыған, ол берілген кодты талдауда жақсы нәтиже көрсетіп жүр. Алайда, сабақ барысында зейіні жиі алаңдап, бұл оның тақырыпты толық меңгеруіне кедергі келтіреді. Сынып тәртібіне көбірек көңіл бөліп, тапсырмаларға байсалды қараса, білім деңгейі едәуір артатын болады. Оның бойындағы қабілетті ашу үшін тұрақтылық пен жауапкершілік қажет. Келесі тоқсанда осы олқылықтарды түзейді деп сенеміз.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1004",
    name: "Нұрқадыр Айғаным Айтжанқызы",
    grade: "10A",
    attendance: 98,
    midtermProject: {
      title: "EduAI - оқу әлемінің көмекшісі",
      description: " Жасанды интеллект алгоритмдерін қолдана отырып, оқушыларға оқу материалдарын түсіндіруге және тапсырмаларды орындауға көмектесетін инновациялық веб-қосымша.",
       grade: "18/20",
      feedback: " Айғаным, сенің EduAI жобасы оқушыларға бағытталған интерфейс пен AI алгоритмдерінің үйлесімі жағынан өте жақсы жасалған. JavaScript кодында функцияларды тиімді қолданғансың, бірақ кейбір жерлерде кодтың құрылымын жақсартуға болады. Веб-қосымшаның жылдамдығы мен жауап беру қабілеті жақсы деңгейде. Бұл жоба тек мектеп деңгейінде ғана емес, нақты қолдануға да жарайтын өнімге айналуы мүмкін. ",
        status: 'Completed',
       imageUrl: "22.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    testResults: [{ name: "Аралық бақылау #1", score: 17, maxScore: 20 }, { name: "Аралық бақылау #2", score: 19, maxScore: 20 }],
    feedback: "Айғаным — сыныптағы ең белсенді және білімді оқушылардың бірі. Ол кез келген жаңа технологияны тез игеріп, оны прАралық бақылаутикада қолдана біледі. Сабақ үстінде өте ұқыпты және қойылған сұрақтарға мазмұнды жауап береді. Оның еңбекқорлығы мен білімге деген құштарлығы өзгелерге үлгі болуға лайық. Болашақта күрделі жобаларды еркін басқара алатын маман ретінде көріне алады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1005",
    name: "Жахан Жанболат Ғалымжанұлы",
    grade: "10A",
    attendance: 78,
    testResults: [{ name: "Аралық бақылау #1", score: 10, maxScore: 20 }, { name: "Аралық бақылау #2", score: 12, maxScore: 20 }],
    feedback: "Жанболаттың бағдарламалау негіздерін меңгерудегі алғашқы қадамдарында ілгерілеу байқалады, бірақ бұл жеткіліксіз. Оның сабаққа қатысуы мен тапсырмаларды орындау қарқыны әлі де төмен деңгейде қалып отыр. Оқуға деген жауапкершілігін арттырып, сабақ кезінде зейінін нығайтса, нәтижесі жақсарар еді. Бағдарламалау логикасын түсіну үшін көбірек прАралық бақылаутикалық жұмыс жасауы қажет. Күш-жігерін білімге бағыттаса, жақсы көрсеткіштерге жете алады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1006",
    name: "Серік Ақжан Ержанұлы",
    grade: "10A",
    attendance: 75,
    testResults: [{ name: "Аралық бақылау #1", score: 9, maxScore: 20 }, { name: "Аралық бақылау #2", score: 11, maxScore: 20 }],
    feedback: "Ақжанның білім деңгейін көтеру үшін сабаққа деген көзқарасын түбегейлі өзгертуі қажет. Сабақ үстінде жиі алаңдап, тәртіп мәселесіне байланысты ескертулер алуы оның материалды меңгеруіне кедергі келтіруде. Тапсырмаларды орындау кезінде шыдамдылық пен зейін жетіспейтіні байқалады. Егер ол сабаққа байсалды қарап, прАралық бақылаутикалық жұмыстарға көбірек көңіл бөлсе, қабілетін аша алар еді. Ата-анасымен бірлесе жұмыс істеу нәтиже береді деп сенемін.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1007",
    name: "Дәуренбек Әлия",
    grade: "10A",
    attendance: 96,
    testResults: [{ name: "Аралық бақылау #1", score: 17, maxScore: 20 }, { name: "Аралық бақылау #2", score: 19, maxScore: 20 }],
    midtermProject: {
      title: "Өсімдіктер Әлемі",
      description: "Жасанды интеллект алгоритмдерін қолдана отырып, өсімдіктің түрін анықтайтын және күтім бойынша нұсқаулық беретін инновациялық веб-қосымша.",
      grade: "19/20",
      feedback: "Әлия, сенің жобаңдағы AI моделін API арқылы біріктіру шешімі өте сауатты жасалған. Қолданушы интерфейсінің (UI) эстетикасы мен функционалдығы өзара жақсы үйлесім тапқан. Өсімдіктердің денсаулығын тексеру логикасында JavaScript нысандарын тиімді пайдаланғаның көрініп тұр. Кодтың құрылымы таза және оқуға ыңғайлы. Болашақта бұл жобаға деректер қорын қоссаң, толыққанды стартапқа айналдыруға болады.",
      status: 'Completed', imageUrl: "5.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Әлия сабақ үстінде өзін өте жинақы және ұстамды ұстайды. Ол жаңа тақырыптарды, әсіресе веб-дизайн мен логикалық алгоритмдерді үлкен қызығушылықпен меңгеріп келеді. Оның жұмыс істеу стилі өте ұқыпты, әрбір тапсырманы соңына дейін сапалы орындауға тырысады. Сынып ішіндегі белсенділігі мен теориялық білімі жоғары деңгейде. Өз қабілетін прАралық бақылаутикада қолдануда ерекше шеберлік танытып жүр.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1008",
    name: "Дәуренбек Қалия",
    grade: "10A",
    attendance: 84,
    testResults: [{ name: "Аралық бақылау #1", score: 11, maxScore: 20 }, { name: "Аралық бақылау #2", score: 13, maxScore: 20 }],
    feedback: "Қалия сабақ үстінде өзін ұстауы тұрақты, бірақ жаңа тақырыптарды меңгеруде аздаған қиындықтарға тап болады. Оған қосымша прАралық бақылаутика мен үйде материалды қайталау қажеттілігі байқалады. Сабақ барысында сұрақ қоюдан тартынбай, белсендірек болса, білім деңгейі едәуір артар еді. Өз-өзіне сенімділігін арттырып, код жазуға көбірек уақыт бөлгені дұрыс. Талпынысы бар, тек жүйелі жұмыс керек.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1009",
    name: "Ғұзыхан Хақназар Берденұлы",
    grade: "10A",
    attendance: 98,
    testResults: [{ name: "Аралық бақылау #1", score: 18, maxScore: 20 }, { name: "Аралық бақылау #2", score: 20, maxScore: 20 }],
    midtermProject: {
      title: "ZerdeAI",
      description: "Оқушылардың Аралық бақылауадемиялық және жеке дамуына бағыт беретін, мақсаттар қоюға көмектесетін интеллектуалды цифрлық тәлімгер.",
      grade: "20/20",
      feedback: "Хақназар, 'ZerdeAI' жобасының концепциясы мен техникалық архитектурасы мені таң қалдырды. Оқушының уақытын жоспарлау алгоритмін жасауда JS циклдері мен массив әдістерін өте орынды қолданғансың. Чат-боттың жауап беру жылдамдығы мен интерфейстің жеңілдігі жобаның сапасын арттырып тұр. Бұл жай ғана мектеп жобасы емес, нақты қолданысқа ие өнім. Техникалық жағынан да, идея жағынан да сен ең жоғары бағаға лайықтысың.",
      status: 'Completed', imageUrl: "7.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Хақназар бағдарламалаудың күрделі тақырыптарын өз бетінше зерттеуге өте бейім. Ол сабақта тек берілген материалмен шектелмей, технологияның тереңіне үңілуге тырысады. Оның аналитикалық ойлау қабілеті мен есептерді шешудегі креативті жолдары өте жоғары деңгейде. Сабақ үстінде өзін өте мәдениетті ұстайды және әрқашан жаңа белестерді бағындыруға дайын. Оның потенциалы халықаралық деңгейдегі маман болуға жетеді.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1010",
    name: "Женіскызы Нұрай",
    grade: "10A",
    attendance: 92,
    testResults: [{ name: "Аралық бақылау #1", score: 14, maxScore: 20 }, { name: "Аралық бақылау #2", score: 16, maxScore: 20 }],
    feedback: "Нұрай сабақ үстінде өзін жинақы ұстайды және жаңа материалды сабырмен меңгереді. Ол JavaScript функциялары мен оқиғаларды (events) басқаруды прАралық бақылаутикада сәтті қолданып жүр. Оған өз бетінше күрделірек логикалық есептерді шығаруға және код жазуда көбірек тәжірибе жинақтауға кеңес беремін. Жалпы оқу үлгерімі тұрақты және жақсы деңгейде. Алдағы уақытта өз жобасын бастауға толық мүмкіндігі бар.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1011",
    name: "Айдынқызы Аяулым",
    grade: "10A",
    attendance: 97,
    testResults: [{ name: "Аралық бақылау #1", score: 17, maxScore: 20 }, { name: "Аралық бақылау #2", score: 19, maxScore: 20 }],
    midtermProject: {
      title: "Kazakh Voice",
      description: "Пайдаланушының эмоционалды жағдайына сәйкес қазақша әндер жинағын ұсынатын интеллектуалды веб-қосымша.",
      grade: "19/20",
      feedback: "Аяулым, эмоционалды талдау идеясы өте ұнады. Қолданушыға бағытталған интерфейс пен JS логикасы өте жақсы үйлесім тапқан. Веб-қосымшаның жылдамдығы мен батырмалардың функционалдығы сауатты жасалған. Қолданылған плейлисттерді сұрыптау алгоритмі оқушының JS массивтерімен жақсы жұмыс істей алатынын көрсетеді.",
      status: 'Completed',
       imageUrl: "6.png",
        tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Аяулым — өте шығармашыл және зерек оқушы, ол сабақ барысында жаңа идеяларды ұсынудан тартынбайды. Ол музыка мен технологияны сәтті ұштастырып, жобалау кезінде жақсы нәтиже көрсетті. Сабақтағы белсенділігі мен тапсырмаларды орындауға деген жауапкершілігі өте жоғары. Код жазу кезінде интерфейстің эстетикасына да, логикасына да мән береді. Оның даму қарқыны өте жақсы.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1012",
    name: "Жомарт Еркенұр САралық бақылауенқызы",
    grade: "10A",
    attendance: 82,
    testResults: [{ name: "Аралық бақылау #1", score: 10, maxScore: 20 }, { name: "Аралық бақылау #2", score: 12, maxScore: 20 }],
    midtermProject: {
      title: "Туристік Аралық бақылауадемия",
      description: "Отандық турөнімдер туралы ақпарат беретін және чат-бот арқылы кеңес ұсынатын Аралық бақылауадемияның ресми сайты.",
      grade: "14/20",
      feedback: "Еркенұр, чат-ботты сайтқа қосу жақсы шешім болды. Дегенмен, дизайн мен кодтың функционалдығын әлі де жетілдіру қажет. CSS стильдерін қолдануда көбірек прАралық бақылаутика керек. Жалпы алғанда, сайттың құрылымы мен мақсаты дұрыс таңдалған.",
      status: 'Completed', imageUrl: "8.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Еркенұрдың бағдарламалауға деген ынтасы бар, бірақ техникалық бөлімдерде көбірек дайындық қажет. Сабақ кезіндегі зейіні мен тәртібін нығайтса, күрделі тақырыптарды меңгеру оңай болады. Жобалау кезінде жақсы белсенділік танытты, бірақ кодтағы қателермен жұмыс істеуге көбірек уақыт бөлуі керек. Өз күшіне сеніп, көбірек ізденсе, нәтижесі жақсарады. Алдағы тоқсанда оған қолдау көрсетуге дайынбыз.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },

  // --- 10Ә СЫНЫБЫ ---
  {
    id: "2024-1013",
    name: "АбдразАралық бақылауова Мерей Муратовна",
    grade: "10Ә",
    attendance: 79,
    testResults: [{ name: "Аралық бақылау #1", score: 10, maxScore: 20 }, { name: "Аралық бақылау #2", score: 13, maxScore: 20 }],
    feedback: "Мерейдің оқуға деген көзқарасы жақсартуды қажет етеді, себебі сабақ үстіндегі зейіннің алаңдауы оның дамуына кедергі болып жатыр. Ол бағдарламалаудың қарапайым құрылымдарын түсінеді, бірақ оларды іс жүзінде қолдануда қиналады. Тәртіпке қатысты ескертулер оның оқу үлгеріміне кері әсерін тигізуде. Егер ол сабаққа жауапкершілікпен қарап, тапсырмаларды дер кезінде орындаса, нәтижелері жақсарар еді. Оған өзіне сенімділік пен жүйелілік қажет.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1014",
    name: "Аршабек Айсұлтан Қожаланұлы",
    grade: "10Ә",
    attendance: 76,
    testResults: [{ name: "Аралық бақылау #1", score: 9, maxScore: 20 }, { name: "Аралық бақылау #2", score: 12, maxScore: 20 }],
    feedback: "Айсұлтанның техникалық қабілеті бар, бірақ оны дұрыс арнаға бағыттау қажеттілігі байқалады. Сабақ үстіндегі тәртібіне байланысты жиі ескертулер алуы оның материалды меңгеруіне мүмкіндік бермейді. Бағдарламалау — үлкен зейінділікті талап ететін пән болғандықтан, Айсұлтанға сабаққа байсалды қарау керек. Ол код жазуға қызығушылық танытса да, табандылық жетіспейді. Тәртібін түзесе, білім көрсеткіштері бірден өсетініне сенемін.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1015",
    name: "Аянқызы Алуа",
    grade: "10Ә",
    attendance: 94,
    testResults: [{ name: "Аралық бақылау #1", score: 15, maxScore: 20 }, { name: "Аралық бақылау #2", score: 17, maxScore: 20 }],
    feedback: "Алуа — сабаққа өте тиянақты қатысатын, жауапты оқушы. Ол JavaScript тіліндегі нысандар мен деректер құрылымын жақсы меңгерген. ПрАралық бақылаутикалық тапсырмаларды ұқыпты орындайды және мұғалімнің нұсқауларын мүлтіксіз орындауға тырысады. Оның оқу үлгерімі тұрақты және жақсы даму үстінде. Осы жауапкершілігі мен еңбекқорлығы оның болашақта жақсы нәтижелерге жетуіне негіз болады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1016",
    name: "Әділхан Камила Еркінқызы",
    grade: "10Ә",
    attendance: 95,
    testResults: [{ name: "Аралық бақылау #1", score: 16, maxScore: 20 }, { name: "Аралық бақылау #2", score: 18, maxScore: 20 }],
    feedback: "Камила JavaScript пен AI интеграциясы тақырыптарында жақсы белсенділік танытты. Ол жаңа технологияларды меңгеруге деген құштарлығымен ерекшеленеді. Код жазу кезіндегі логикалық қадамдары жүйелі және сауатты. Алдағы уақытта күрделірек тақырыптарда осы зейінін сақтаса, үлкен жетістіктерге жетеді. Оның оқуға деген ынтасы мұғалімдер тарапынан жоғары бағаланады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1017",
    name: "Берікболұлы Мырза",
    grade: "10Ә",
    attendance: 90,
    midtermProject: {
      title: "Gym Pro",
      description: "Gym Pro — бұл жаттығу залын басқаруға және келушілердің белсенділігін арттыруға арналған кешенді шешім. Платформаның басты ерекшелігі — оған біріктірілген AI-көмекші, ол әрбір қолданушының нәтижесін цифрлық форматта бақылап, бағыт-бағдар беріп отырады.",
      grade: "16/20",
      feedback: " Мырза, 'Gym Pro' жобасы фитнес индустриясына арналған инновациялық шешім ұсынды. AI көмекшісін жаттығу бағдарламаларын жасауға қолдану өте тиімді идея болды. Дегенмен, функционалдықты жетілдіру қажет. Код құрылымы жақсы, бірақ кейбір бөлімдерде оптимизация қажет. Жалпы алғанда, бұл жоба болашақта нақты өнімге айналуы мүмкін әлеуетке ие.",   
      status: 'Completed',
       imageUrl: "25.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    testResults: [{ name: "Аралық бақылау #1", score: 13, maxScore: 20 }, { name: "Аралық бақылау #2", score: 15, maxScore: 20 }],
    feedback: "Мырзаның бағдарламалау саласындағы ілгерілеуі қуантады, ол әр сабақ сайын жаңа дағдыларды игеріп келеді. Ол JavaScript негіздерін сенімді меңгеріп, күрделілік деңгейі орташа есептерді өз бетінше шығара алады. Сабаққа қатысуы мен ынтасы жақсы, тапсырмаларды уақытында орындауға тырысады. Болашақта прАралық бақылаутикалық жұмыстарға көбірек уақыт бөліп, өз бетінше ізденуді жалғастыруды ұсынамын. Жалпы оқу үлгерімі оң нәтиже көрсетіп отыр.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1018",
    name: "Ербол Әли Даулетқалиұлы",
    grade: "10Ә",
    attendance: 74,
    testResults: [{ name: "Аралық бақылау #1", score: 8, maxScore: 20 }, { name: "Аралық бақылау #2", score: 11, maxScore: 20 }],
    feedback: "Әлидің оқуға деген ынтасын арттыру үшін қосымша жігерлендіру қажет, себебі оның көрсеткіштері төмендеп жатыр. Сабақ кезіндегі тәртібі мен зейіні оның Аралық бақылауадемиялық прогресіне айтарлықтай кедергі келтіруде. Ол бағдарламалаудың негіздерін түсіну үшін көбірек күш жұмсауы керек. Сабаққа қатысуы тұрақсыз, бұл тақырыптардан қалып қоюға әкеледі. Егер ол өз көзқарасын өзгертсе, қабілетін аша алатын потенциалы бар.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1019",
    name: "Ерлан Ернар",
    grade: "10Ә",
    attendance: 97,
    testResults: [{ name: "Аралық бақылау #1", score: 16, maxScore: 20 }, { name: "Аралық бақылау #2", score: 18, maxScore: 20 }],
    midtermProject: {
      title: "DalaRecipes",
      description: "Қазақстаннан Дубайға дейінгі ең жақсы ауызашар рецепттерін ұсынатын веб-платформа.",
      grade: "18/20",
      feedback: "Ернар, жобаңның дизайны мен контенті өте тартымды. JS функционалдығын рецепттерді сұрыптауға қолданғаның өте тиімді болған. Сайттың мобилді нұсқасын (responsive) жасауға көбірек мән берсең, нағыз кәсіби өнім болар еді. Кодтың тазалығы мен құрылымы жақсы деңгейде.",
      status: 'Completed', imageUrl: "2.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Ернардың 'DalaRecipes' жобасы өте ерекше және талғаммен жасалған, бұл оның шығармашылық қырын көрсетеді. Код жазу кезіндегі мұқияттылығы мен жаңа тақырыптарды игеруге деген құштарлығы жоғары. Сабақ үстінде өте зейінді және тапсырмаларды мұқият орындайды. Оның даму қарқыны тұрақты және болашағынан үлкен үміт күттіреді. Оқу үдерісіне деген жауапкершілігі өте жоғары бағаланады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1020",
    name: "Есенғали Бақытжан Думанұлы",
    grade: "10Ә",
    attendance: 87,
    testResults: [{ name: "Аралық бақылау #1", score: 14, maxScore: 20 }, { name: "Аралық бақылау #2", score: 17, maxScore: 20 }],
    midtermProject: {
      title: "Zombie Arena",
      description: "Әр түрлі рөлдерді таңдауға мүмкіндік беретін, зомби толқындарына қарсы тұратын 2D аман қалу ойыны.",
      grade: "17/20",
      feedback: "Бақытжан, ойыныңның динамикасы мен басқару жүйесі өте қызықты шыққан. Кейіпкерлердің рөлдерін бөлуде логикалық шарттарды орынды пайдаланғансың. Ойынның кадрлық жиілігі мен нысандардың өзара әрекеттесуі жақсы реттелген. CSS-те анимацияларды қолдану шеберлігің жақсы екені көрініп тұр.",
      status: 'Completed', imageUrl: "4.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Бақытжанның техникалық шығармашылығы өте жоғары, ол әсіресе ойын жасауға үлкен қызығушылық танытады. Оның бағдарламалау логикасын меңгерудегі қарқыны жақсы, бірақ сабақ кезіндегі зейінін тұрақтандыру қажет. Кейде тәртіпке қатысты ескертулер оның оқу процесіне кедергі келтіреді. Егер ол сабаққа байсалды қарап, зейінін тек тапсырмаға бағыттаса, нәтижесі бұдан да жоғары болар еді. Оның қабілеті зор, тек жүйелілік керек.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1021",
    name: "Маратұлы Азамат",
    grade: "10Ә",
    attendance: 83,
    midtermProject: {
      title: "QazaqMind - жеке даму көмекшісі",
      description: "бұл қазақ тілді қолданушылардың жеке өсуіне, өнімділігін арттыруға және күнделікті тапсырмаларын жүйелеуге көмектесетін заманауи интеллектуалды қолданба.",
       grade: "17/20",
      feedback: " Азамат, сенің QazaqMind жобасы оқушыларға бағытталған интерфейс пен AI алгоритмдерінің үйлесімі жағынан өте жақсы жасалған. JavaScript кодында функцияларды тиімді қолданғансың, бірақ кейбір жерлерде кодтың құрылымын жақсартуға болады. Веб-қосымшаның жылдамдығы мен жауап беру қабілеті жақсы деңгейде. Бұл жоба тек мектеп деңгейінде ғана емес, нақты қолдануға да жарайтын өнімге айналуы мүмкін. ",
       status: 'Completed',
       imageUrl: "24.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    testResults: [{ name: "Аралық бақылау #1", score: 12, maxScore: 20 }, { name: "Аралық бақылау #2", score: 14, maxScore: 20 }],
    feedback: "Азаматтың техникалық ойлауы жақсы, бірақ оған оқу процесінде жүйелілік пен тәртіп қажет. Ол бағдарламалаудың негізгі элементтерін түсінеді, бірақ кейде зейіні алаңдағандықтан маңызды бөлшектерді жіберіп алады. Егер ол сабаққа байсалды қарап, тапсырмаларды соңына дейін жеткізуді әдетке айналдырса, нәтижесі айтарлықтай өседі. Тәртіпке қатысты ескертулерді назарға алса, болашақта жақсы маман бола алады. Оған көбірек сабырлық пен зейін керек.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1022",
    name: "Қабдылғазинов Дарын Серікұлы",
    grade: "10Ә",
    attendance: 96,
    testResults: [{ name: "Аралық бақылау #1", score: 17, maxScore: 20 }, { name: "Аралық бақылау #2", score: 19, maxScore: 20 }],
    midtermProject: {
      title: "Тоғызқұмалақ",
      description: "Ұлттық ойынның PvP және PvE (жасанды интеллектке қарсы) режимдері бар заманауи веб-нұсқасы.",
      grade: "19/20",
      feedback: "Дарын, ұлттық ойынды цифрлық форматқа көшірудегі еңбегің орасан зор. Әсіресе, жасанды интеллектке қарсы ойнау режимін іске асырудағы логикалық қадамдарың өте күрделі әрі сауатты. Ойынның ережелерін кодқа айналдыруда JavaScript-тің мүмкіндіктерін толық пайдаланғансың. Интерфейстің дизайны қазақша нақышта өте әдемі жасалған.",
      status: 'Completed', imageUrl: "3.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Дарын сабаққа өте жауапты қарайды және бағдарламалаудың қиын тұстарын тез меңгереді. Ол теориялық білімді прАралық бақылаутикамен ұштастыруда ерекше табандылық танытады. Сабақ үстінде өзін жинақы ұстап, берілген тапсырмаларды уақытынан бұрын орындайды. Оның логикалық пайымдауы мен жұмысқа деген ынтасы сыныптастарына үлгі бола алады. Болашақта күрделі жүйелерді басқаратын инженер болатынына сенемін.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1023",
    name: "Серік Ардақ Бейбітұлы",
    grade: "10Ә",
    attendance: 99,
    testResults: [{ name: "Аралық бақылау #1", score: 18, maxScore: 20 }, { name: "Аралық бақылау #2", score: 20, maxScore: 20 }],
    feedback: "Ардақ — өте жауапты және білімді оқушы, ол бағдарламалауды терең меңгеруге ұмтылады. Сабақтың әрбір бөлімін мұқият тыңдап, түсінбеген тұстарын сұраудан тартынбайды. JavaScript тіліндегі логикалық амалдар мен нысандарды өте жақсы меңгерген. Оның білімге деген құштарлығы мен тәртібі сыныптастарына үлгі. Алдағы уақытта кәсіби деңгейдегі жобаларды еркін орындай алатынына сеніміміз мол.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1024",
    name: "Тұрсынғазыұлы Еларыс",
    grade: "10Ә",
    attendance: 96,
    testResults: [{ name: "Аралық бақылау #1", score: 17, maxScore: 20 }, { name: "Аралық бақылау #2", score: 18, maxScore: 20 }],
    midtermProject: {
      title: "Елес үй",
      description: "Ескі үйдің ішіндегі кедергілерден өтетін, сиқырлы жұлдыздар жинайтын шытырман оқиғалы 2D платформалық ойын.",
      grade: "18/20",
      feedback: "Еларыс, ойынның деңгейлерін құрастыруда жақсы шеберлік көрсеттің. Қозғалыс физикасы мен JS логикасы жақсы орындалған. Кейіпкердің секіру және заттарды жинау механикасы қатесіз жұмыс істейді. Жобаның визуалды атмосферасы ойынның тақырыбына толық сәйкес келеді.",
      status: 'Completed', imageUrl: "1.png", tools: ["HTML", "CSS", "JS", "AI"]
    },
    feedback: "Еларыстың шығармашылық ойлау қабілеті өте жақсы, ол қиын мәселелерге креативті шешім таба алады. Жобасы арқылы ол өзінің платформалық ойын жасау шеберлігін жоғары деңгейде көрсетті. Сабақ үстінде өте зейінді және тапсырмаларды орындауға жауапкершілікпен қарайды. Оның техникалық білімі мен прАралық бақылаутикалық дағдылары жақсы тепе-теңдікте. Оқу үдерісіндегі жетістіктері қуантады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1025",
    name: "Үсенқызы Ұлдана",
    grade: "10Ә",
    attendance: 93,
    testResults: [{ name: "Аралық бақылау #1", score: 15, maxScore: 20 }, { name: "Аралық бақылау #2", score: 17, maxScore: 20 }],
    feedback: "Ұлдана сабақта өзін ұстамды және зейінді көрсетеді, ол әрқашан жаңа білім алуға дайын. Ол JavaScript тіліндегі функциялар мен циклдердің жұмысын жақсы түсінеді. Тапсырмаларды орындау кезінде мұқияттылық танытады және қателермен жұмыс істей біледі. Оған бағдарламалау логикасын бұдан да тереңірек меңгеру үшін қосымша алгоритмдік есептермен жұмыс істеуге кеңес беремін. Жалпы оқу үлгерімі тұрақты және жақсы.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  },
  {
    id: "2024-1026",
    name: "Мәуленбай Еңілік Әбубәкірқызы",
    grade: "10Ә",
    attendance: 81,
    testResults: [{ name: "Аралық бақылау #1", score: 11, maxScore: 20 }, { name: "Аралық бақылау #2", score: 12, maxScore: 20 }],
    feedback: "Еңілік сабаққа үнемі қатысып, бағдарламалау негіздерін үйренуге талпыныс жасайды. Ол JavaScript тіліндегі қарапайым алгоритмдер мен HTML құрылымын түсінуде жақсы қадамдар жасауда. Дегенмен, күрделірек тақырыптарды меңгеру үшін сабақ үстіндегі зейінді арттырып, прАралық бақылаутикалық тапсырмаларға көбірек уақыт бөлуі қажет. Кей кездері алаңғасарлық танытатыны білім сапасына әсер етіп жатыр. Өз күшіне сеніп, көбірек ізденсе, нәтижесі міндетті түрде жақсарады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],  externalResourcesUrl: "https://classroom.google.com/c/ODA5ODcxMjAxNzg3?cjc=zlrpltt7"
  }
];
