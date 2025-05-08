const professions = [
  {
    name: "Математика мұғалімі",
    description: "Орта мектепте математика пәнінен сабақ береді.",
    icon: "fas fa-chalkboard-teacher",
    subjects: ["Математика", "Педагогика"],
    details: {
      code: "B009",
      demand: "Жоғары сұраныс",
      minScore: "87 балл",
      subjects: "Математика – Физика",
      duration: "4 жыл",
      salary: "200,000 - 350,000 ₸",
      fullDescription: "Бұл мамандық бойынша студенттер математика пәнінің теориялық негіздерін және оны оқыту әдістемесін зерттейді."
    }
  },
  {
    "name": "Информатика мұғалімі",
    "description": "Орта мектепте информатика пәнінен сабақ береді.",
    "icon": "fas fa-desktop",
    "subjects": ["Информатика", "Педагогика"],
    "details": {
        "code": "B011",
        "demand": "Жоғары сұраныс",
        "minScore": "88 балл",
        "subjects": "Математика – Информатика",
        "duration": "4 жыл",
        "salary": "200,000 - 400,000 ₸",
        "fullDescription": "Бұл мамандық бойынша студенттер информатика пәнінің теориялық негіздерін және оны оқыту әдістемесін зерттейді."
    }
},
  {
    name: "Математика мұғалімі",
    description: "Орта мектепте математика пәнінен сабақ береді.",
    icon: "fas fa-chalkboard-teacher",
    subjects: ["Математика", "Педагогика"],
    details: {
      code: "B009",
      demand: "Жоғары сұраныс",
      minScore: "87 балл",
      subjects: "Математика – Физика",
      duration: "4 жыл",
      salary: "200,000 - 350,000 ₸",
      fullDescription: "Бұл мамандық бойынша студенттер математика пәнінің теориялық негіздерін және оны оқыту әдістемесін зерттейді."
    }
  },
  {
    name: "Информатика мұғалімі",
    description: "Орта мектепте информатика пәнінен сабақ береді.",
    icon: "fas fa-desktop",
    subjects: ["Информатика", "Педагогика"],
    details: {
      code: "B011",
      demand: "Жоғары сұраныс",
      minScore: "88 балл",
      subjects: "Математика – Информатика",
      duration: "4 жыл",
      salary: "200,000 - 400,000 ₸",
      fullDescription: "Бұл мамандық бойынша студенттер информатика пәнінің теориялық негіздерін және оны оқыту әдістемесін зерттейді."
    }
  },
  {
    name: "Дәрігер",
    description: "Адамдардың денсаулығын сақтаумен айналысады.",
    icon: "fas fa-user-md",
    subjects: ["Биология", "Химия"],
    details: {
      code: "B101",
      demand: "Өте жоғары сұраныс",
      minScore: "95 балл",
      subjects: "Биология – Химия",
      duration: "6 жыл",
      salary: "300,000 - 1,000,000 ₸",
      fullDescription: "Медициналық білім алып, пациенттерді емдеумен айналысады."
    }
  },
  {
    name: "Инженер-программист",
    description: "Бағдарламалық жасақтамаларды әзірлейді.",
    icon: "fas fa-code",
    subjects: ["Математика", "Информатика"],
    details: {
      code: "B042",
      demand: "Өте жоғары сұраныс",
      minScore: "90 балл",
      subjects: "Математика – Физика",
      duration: "4 жыл",
      salary: "350,000 - 800,000 ₸",
      fullDescription: "Компьютерлік бағдарламалар мен қолданбалы бағдарламаларды жасаумен айналысады."
    }
  },
  {
    name: "Педагог-психолог",
    description: "Оқушылардың психологиялық дамуына көмектеседі.",
    icon: "fas fa-brain",
    subjects: ["Психология", "Педагогика"],
    details: {
      code: "B015",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "Биология – География",
      duration: "4 жыл",
      salary: "150,000 - 300,000 ₸",
      fullDescription: "Оқушылардың психологиялық мәселелерін шешуге көмектеседі."
    }
  },
  {
    name: "Бухгалтер",
    description: "Компаниялардың қаржылық есебін жүргізеді.",
    icon: "fas fa-calculator",
    subjects: ["Математика", "Экономика"],
    details: {
      code: "B061",
      demand: "Жоғары сұраныс",
      minScore: "75 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "200,000 - 500,000 ₸",
      fullDescription: "Қаржылық операцияларды есепке алу және талдаумен айналысады."
    }
  },
  {
    name: "Маркетолог",
    description: "Өнімдер мен қызметтерді насихаттаумен айналысады.",
    icon: "fas fa-bullhorn",
    subjects: ["Математика", "Экономика"],
    details: {
      code: "B072",
      demand: "Орташа сұраныс",
      minScore: "78 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "250,000 - 600,000 ₸",
      fullDescription: "Нарықтағы тенденцияларды зерттеп, компанияның маркетингтік стратегиясын әзірлейді."
    }
  },
  {
    name: "Аудитор",
    description: "Қаржылық есептілікті тексерумен айналысады.",
    icon: "fas fa-search-dollar",
    subjects: ["Математика", "Экономика"],
    details: {
      code: "B063",
      demand: "Жоғары сұраныс",
      minScore: "85 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "300,000 - 700,000 ₸",
      fullDescription: "Компаниялардың қаржылық қызметін тексеріп, заңдылығын бақылайды."
    }
  },
  {
    name: "Журналист",
    description: "Ақпаратты жинау және таратумен айналысады.",
    icon: "fas fa-newspaper",
    subjects: ["Әдебиет", "Тарих"],
    details: {
      code: "B122",
      demand: "Орташа сұраныс",
      minScore: "70 балл",
      subjects: "Әдебиет – Тарих",
      duration: "4 жыл",
      salary: "150,000 - 400,000 ₸",
      fullDescription: "Әртүрлі тақырыптар бойынша материалдар дайындап, оларды БАҚ арқылы таратады."
    }
  },
  {
    name: "Юрист",
    description: "Заңдық кеңес беру және қорғаумен айналысады.",
    icon: "fas fa-gavel",
    subjects: ["Тарих", "Әдебиет"],
    details: {
      code: "B131",
      demand: "Жоғары сұраныс",
      minScore: "85 балл",
      subjects: "Әдебиет – Тарих",
      duration: "4 жыл",
      salary: "250,000 - 1,000,000 ₸",
      fullDescription: "Заңдық мәселелер бойынша кеңес береді және клиенттердің құқығын қорғайды."
    }
  },
  {
    name: "Архитектор",
    description: "Ғимараттарды жобалаумен айналысады.",
    icon: "fas fa-ruler-combined",
    subjects: ["Математика", "Сурет"],
    details: {
      code: "B021",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "Математика – Сурет",
      duration: "5 жыл",
      salary: "300,000 - 800,000 ₸",
      fullDescription: "Ғимараттардың сәулеттік және функционалдық жобаларын әзірлейді."
    }
  },
  {
    name: "Дизайнер",
    description: "Өнеркәсіптік және графикалық дизайнмен айналысады.",
    icon: "fas fa-paint-brush",
    subjects: ["Сурет", "Информатика"],
    details: {
      code: "B022",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Сурет – География",
      duration: "4 жыл",
      salary: "200,000 - 600,000 ₸",
      fullDescription: "Өнімдердің сыртқы түрін және пайдалануға ыңғайлылығын жобалайды."
    }
  },
  {
    name: "Эколог",
    description: "Қоршаған ортаны қорғаумен айналысады.",
    icon: "fas fa-leaf",
    subjects: ["Биология", "География"],
    details: {
      code: "B051",
      demand: "Төмен сұраныс",
      minScore: "70 балл",
      subjects: "Биология – География",
      duration: "4 жыл",
      salary: "150,000 - 350,000 ₸",
      fullDescription: "Табиғи ресурстардың қоршаған ортаға әсерін зерттейді және қорғау шараларын әзірлейді."
    }
  },
  {
    name: "Ауыл шаруашылығы инженері",
    description: "Ауыл шаруашылығын механикаландырумен айналысады.",
    icon: "fas fa-tractor",
    subjects: ["Биология", "Физика"],
    details: {
      code: "B031",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Математика – Физика",
      duration: "4 жыл",
      salary: "200,000 - 450,000 ₸",
      fullDescription: "Ауыл шаруашылық техникасын жобалау және пайдаланумен айналысады."
    }
  },
  {
    name: "Ветеринар",
    description: "Жануарларды емдеумен айналысады.",
    icon: "fas fa-paw",
    subjects: ["Биология", "Химия"],
    details: {
      code: "B102",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "Биология – Химия",
      duration: "5 жыл",
      salary: "200,000 - 500,000 ₸",
      fullDescription: "Жануарлардың денсаулығын сақтау және оларды емдеумен айналысады."
    }
  },
  {
    name: "Фармацевт",
    description: "Дәрі-дәрмектерді дайындау және сатумен айналысады.",
    icon: "fas fa-pills",
    subjects: ["Химия", "Биология"],
    details: {
      code: "B103",
      demand: "Жоғары сұраныс",
      minScore: "85 балл",
      subjects: "Химия – Биология",
      duration: "5 жыл",
      salary: "250,000 - 600,000 ₸",
      fullDescription: "Дәрі-дәрмектерді дайындау, сапасын бақылау және оларды дұрыс пайдалану туралы кеңес береді."
    }
  },
  {
    name: "Электр инженері",
    description: "Электр жүйелерін жобалаумен айналысады.",
    icon: "fas fa-bolt",
    subjects: ["Физика", "Математика"],
    details: {
      code: "B041",
      demand: "Жоғары сұраныс",
      minScore: "85 балл",
      subjects: "Математика – Физика",
      duration: "4 жыл",
      salary: "300,000 - 700,000 ₸",
      fullDescription: "Электр қондырғыларын жобалау, орнату және пайдаланумен айналысады."
    }
  },
  {
    name: "Мейрамханашы",
    description: "Тағамдар дайындаумен айналысады.",
    icon: "fas fa-utensils",
    subjects: ["Химия", "Биология"],
    details: {
      code: "B111",
      demand: "Орташа сұраныс",
      minScore: "60 балл",
      subjects: "Химия – Биология",
      duration: "3 жыл",
      salary: "150,000 - 400,000 ₸",
      fullDescription: "Әртүрлі тағамдарды дайындау технологиясын меңгереді."
    }
  },
  {
    name: "Әуе кемесінің пилоты",
    description: "Ұшақты басқарумен айналысады.",
    icon: "fas fa-plane",
    subjects: ["Физика", "Математика"],
    details: {
      code: "B091",
      demand: "Жоғары сұраныс",
      minScore: "95 балл",
      subjects: "Математика – Физика",
      duration: "4 жыл",
      salary: "500,000 - 2,000,000 ₸",
      fullDescription: "Әуе кемесін басқару және қауіпсіздік ережелерін сақтаумен айналысады."
    }
  },
  {
    name: "Логист",
    description: "Тауарларды тасымалдауды ұйымдастырады.",
    icon: "fas fa-truck",
    subjects: ["Математика", "География"],
    details: {
      code: "B073",
      demand: "Жоғары сұраныс",
      minScore: "80 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "250,000 - 600,000 ₸",
      fullDescription: "Тауар ағынын ұйымдастыру және оны тиімді етумен айналысады."
    }
  },
  {
    name: "HR-менеджер",
    description: "Компанияның кадрлық саясатын жүргізеді.",
    icon: "fas fa-users",
    subjects: ["Психология", "Әдебиет"],
    details: {
      code: "B074",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Әдебиет – География",
      duration: "4 жыл",
      salary: "200,000 - 500,000 ₸",
      fullDescription: "Қызметкерлерді іріктеу, олардың қызметін бағалау және дамытумен айналысады."
    }
  },
  {
    name: "Финанс маманы",
    description: "Қаржылық жоспарлаумен айналысады.",
    icon: "fas fa-chart-line",
    subjects: ["Математика", "Экономика"],
    details: {
      code: "B062",
      demand: "Жоғары сұраныс",
      minScore: "85 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "300,000 - 800,000 ₸",
      fullDescription: "Компанияның қаржылық ресурстарын тиімді басқарумен айналысады."
    }
  },
  {
    name: "Стоматолог",
    description: "Тіс ауруларын емдеумен айналысады.",
    icon: "fas fa-tooth",
    subjects: ["Биология", "Химия"],
    details: {
      code: "B104",
      demand: "Жоғары сұраныс",
      minScore: "90 балл",
      subjects: "Химия – Биология",
      duration: "5 жыл",
      salary: "300,000 - 1,200,000 ₸",
      fullDescription: "Тіс ауруларын диагностикалау және емдеумен айналысады."
    }
  },
  {
    name: "IT-сақтандыру маманы",
    description: "Ақпараттық қауіпсіздікті қамтамасыз етеді.",
    icon: "fas fa-shield-alt",
    subjects: ["Информатика", "Математика"],
    details: {
      code: "B043",
      demand: "Өте жоғары сұраныс",
      minScore: "90 балл",
      subjects: "Математика – Информатика",
      duration: "4 жыл",
      salary: "400,000 - 1,000,000 ₸",
      fullDescription: "Компьютерлік жүйелердің қауіпсіздігін қамтамасыз етумен айналысады."
    }
  },
  {
    name: "Мұнай инженері",
    description: "Мұнай өндіру процестерін басқарады.",
    icon: "fas fa-oil-can",
    subjects: ["Химия", "Физика"],
    details: {
      code: "B052",
      demand: "Жоғары сұраныс",
      minScore: "85 балл",
      subjects: "Химия – Физика",
      duration: "4 жыл",
      salary: "400,000 - 1,500,000 ₸",
      fullDescription: "Мұнай өндіру және өңдеу технологияларымен айналысады."
    }
  },
  {
    name: "Геолог",
    description: "Жер қойнауын зерттеумен айналысады.",
    icon: "fas fa-mountain",
    subjects: ["География", "Химия"],
    details: {
      code: "B053",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "География – Химия",
      duration: "4 жыл",
      salary: "250,000 - 600,000 ₸",
      fullDescription: "Пайдалы қазбаларды іздеу және олардың қорын бағалаумен айналысады."
    }
  },
  {
    name: "Металлург",
    description: "Металл өндіру және өңдеумен айналысады.",
    icon: "fas fa-industry",
    subjects: ["Химия", "Физика"],
    details: {
      code: "B054",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "Химия – Физика",
      duration: "4 жыл",
      salary: "300,000 - 700,000 ₸",
      fullDescription: "Металл өндіру технологияларын әзірлеу және жетілдірумен айналысады."
    }
  },
  {
    name: "Химик-технолог",
    description: "Химиялық өндірістерді басқарады.",
    icon: "fas fa-flask",
    subjects: ["Химия", "Физика"],
    details: {
      code: "B055",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "Химия – Физика",
      duration: "4 жыл",
      salary: "250,000 - 600,000 ₸",
      fullDescription: "Химиялық өнімдерді өндіру процестерін жобалаумен айналысады."
    }
  },
  {
    name: "Аудармашы",
    description: "Тілдер арасында аударма жасайды.",
    icon: "fas fa-language",
    subjects: ["Шет тілі", "Әдебиет"],
    details: {
      code: "B123",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Шет тілі – Әдебиет",
      duration: "4 жыл",
      salary: "150,000 - 400,000 ₸",
      fullDescription: "Әртүрлі тілдердегі мәтіндерді аударумен айналысады."
    }
  },
  {
    name: "Социолог",
    description: "Қоғамдық құбылыстарды зерттейді.",
    icon: "fas fa-users-cog",
    subjects: ["Тарих", "Әдебиет"],
    details: {
      code: "B124",
      demand: "Төмен сұраныс",
      minScore: "70 балл",
      subjects: "Тарих – География",
      duration: "4 жыл",
      salary: "150,000 - 300,000 ₸",
      fullDescription: "Қоғамдағы әлеуметтік процестерді талдаумен айналысады."
    }
  },
  {
    name: "Филолог",
    description: "Тілдер мен әдебиеттерді зерттейді.",
    icon: "fas fa-book",
    subjects: ["Әдебиет", "Тарих"],
    details: {
      code: "B125",
      demand: "Төмен сұраныс",
      minScore: "70 балл",
      subjects: "Әдебиет – Тарих",
      duration: "4 жыл",
      salary: "150,000 - 300,000 ₸",
      fullDescription: "Тілдердің дамуын және әдебиеттерді зерттеумен айналысады."
    }
  },
  {
    name: "Философ",
    description: "Философиялық мәселелерді зерттейді.",
    icon: "fas fa-brain",
    subjects: ["Тарих", "Әдебиет"],
    details: {
      code: "B126",
      demand: "Төмен сұраныс",
      minScore: "65 балл",
      subjects: "Тарих – Әдебиет",
      duration: "4 жыл",
      salary: "120,000 - 250,000 ₸",
      fullDescription: "Философиялық теорияларды зерттеу және талдаумен айналысады."
    }
  },
  {
    name: "Медбике",
    description: "Дәрігерге емдеу процесінде көмектеседі.",
    icon: "fas fa-user-nurse",
    subjects: ["Биология", "Химия"],
    details: {
      code: "B105",
      demand: "Жоғары сұраныс",
      minScore: "75 балл",
      subjects: "Биология – Химия",
      duration: "3 жыл",
      salary: "150,000 - 350,000 ₸",
      fullDescription: "Пациенттерге күтім көрсету және дәрігердің тапсырмаларын орындаумен айналысады."
    }
  },
  {
    name: "Фитнес жаттықтырушысы",
    description: "Адамдардың денсаулығын жақсартуға көмектеседі.",
    icon: "fas fa-dumbbell",
    subjects: ["Биология", "Дене шынықтыру"],
    details: {
      code: "B112",
      demand: "Орташа сұраныс",
      minScore: "60 балл",
      subjects: "Биология – Дене шынықтыру",
      duration: "3 жыл",
      salary: "100,000 - 300,000 ₸",
      fullDescription: "Клиенттерге жеке жаттығу бағдарламаларын әзірлейді және олардың денсаулығын қадағалайды."
    }
  },
  {
    name: "Турагент",
    description: "Туристік саяхаттарды ұйымдастырады.",
    icon: "fas fa-plane-departure",
    subjects: ["География", "Әдебиет"],
    details: {
      code: "B113",
      demand: "Орташа сұраныс",
      minScore: "65 балл",
      subjects: "География – Әдебиет",
      duration: "3 жыл",
      salary: "120,000 - 300,000 ₸",
      fullDescription: "Туристік бағдарламаларды әзірлеу және оларды клиенттерге ұсынумен айналысады."
    }
  },
  {
    name: "Оқытушы",
    description: "Жоғары оқу орындарында сабақ береді.",
    icon: "fas fa-user-graduate",
    subjects: ["Педагогика", "Мамандық пәні"],
    details: {
      code: "B016",
      demand: "Орташа сұраныс",
      minScore: "85 балл",
      subjects: "Мамандық пәні – Педагогика",
      duration: "5 жыл",
      salary: "200,000 - 500,000 ₸",
      fullDescription: "Жоғары білім беру орындарында студенттерді оқытумен айналысады."
    }
  },
  {
    name: "Экономист",
    description: "Экономикалық процестерді талдайды.",
    icon: "fas fa-chart-pie",
    subjects: ["Математика", "Экономика"],
    details: {
      code: "B064",
      demand: "Жоғары сұраныс",
      minScore: "85 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "250,000 - 600,000 ₸",
      fullDescription: "Компаниялардың экономикалық қызметін талдаумен айналысады."
    }
  },
  {
    name: "Мемлекеттік қызметші",
    description: "Мемлекеттік органдарда қызмет етеді.",
    icon: "fas fa-landmark",
    subjects: ["Тарих", "Әдебиет"],
    details: {
      code: "B132",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "Тарих – Әдебиет",
      duration: "4 жыл",
      salary: "200,000 - 500,000 ₸",
      fullDescription: "Мемлекеттік басқару жүйесінде әкімшілік қызмет атқарады."
    }
  },
  {
    name: "Полиция қызметкері",
    description: "Қоғамдық тәртіпті сақтайды.",
    icon: "fas fa-shield-alt",
    subjects: ["Тарих", "Дене шынықтыру"],
    details: {
      code: "B133",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Тарих – Дене шынықтыру",
      duration: "4 жыл",
      salary: "200,000 - 500,000 ₸",
      fullDescription: "Заңдылықты қамтамасыз ету және азаматтардың қауіпсіздігін қорғаумен айналысады."
    }
  },
  {
    name: "Әскери қызметші",
    description: "Қарулы күштерде қызмет етеді.",
    icon: "fas fa-fighter-jet",
    subjects: ["Тарих", "Дене шынықтыру"],
    details: {
      code: "B134",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Тарих – Дене шынықтыру",
      duration: "4 жыл",
      salary: "200,000 - 600,000 ₸",
      fullDescription: "Елдің әскери қауіпсіздігін қамтамасыз етумен айналысады."
    }
  },
  {
    name: "Дипломат",
    description: "Шетелде ел мүддесін қорғайды.",
    icon: "fas fa-handshake",
    subjects: ["Тарих", "Шет тілі"],
    details: {
      code: "B135",
      demand: "Жоғары сұраныс",
      minScore: "90 балл",
      subjects: "Тарих – Шет тілі",
      duration: "5 жыл",
      salary: "300,000 - 1,000,000 ₸",
      fullDescription: "Халықаралық қатынастарды реттеумен айналысады."
    }
  },
  {
    name: "Банк қызметкері",
    description: "Банк операцияларын жүргізеді.",
    icon: "fas fa-university",
    subjects: ["Математика", "Экономика"],
    details: {
      code: "B065",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "200,000 - 500,000 ₸",
      fullDescription: "Клиенттерге банк қызметтерін көрсетумен айналысады."
    }
  },
  {
    name: "Саудагер",
    description: "Сауда операцияларын жүргізеді.",
    icon: "fas fa-shopping-cart",
    subjects: ["Математика", "Экономика"],
    details: {
      code: "B066",
      demand: "Орташа сұраныс",
      minScore: "70 балл",
      subjects: "Математика – География",
      duration: "4 жыл",
      salary: "150,000 - 400,000 ₸",
      fullDescription: "Тауар айналымын ұйымдастырумен айналысады."
    }
  },
  {
    name: "Сәулетші",
    description: "Ғимараттардың сәулеттік жобаларын әзірлейді.",
    icon: "fas fa-archway",
    subjects: ["Сурет", "Математика"],
    details: {
      code: "B023",
      demand: "Орташа сұраныс",
      minScore: "80 балл",
      subjects: "Сурет – Математика",
      duration: "5 жыл",
      salary: "250,000 - 700,000 ₸",
      fullDescription: "Ғимараттардың эстетикалық және функционалдық қасиеттерін жобалаумен айналысады."
    }
  },
  {
    name: "Журналист-зерттеуші",
    description: "Терен зерттеулер жүргізіп, материалдар жазады.",
    icon: "fas fa-search",
    subjects: ["Әдебиет", "Тарих"],
    details: {
      code: "B127",
      demand: "Орташа сұраныс",
      minScore: "75 балл",
      subjects: "Әдебиет – Тарих",
      duration: "4 жыл",
      salary: "180,000 - 450,000 ₸",
      fullDescription: "Әлеуметтік немесе саяси мәселелер бойынша терен зерттеулер жүргізеді."
    }
  },
  {
    name: "Кинорежиссер",
    description: "Кинофильмдерді түсіріп, шығарады.",
    icon: "fas fa-film",
    subjects: ["Әдебиет", "Сурет"],
    details: {
      code: "B128",
      demand: "Төмен сұраныс",
      minScore: "70 балл",
      subjects: "Әдебиет – Сурет",
      duration: "4 жыл",
      salary: "150,000 - 1,000,000 ₸",
      fullDescription: "Кинематографиялық жобаларды жүзеге асырумен айналысады."
    }
  }

  
];

function displayProfessions(selectedSubjects) {
  const container = document.getElementById('profession-cards');
  container.innerHTML = '';

  professions.forEach(profession => {
    if (
      selectedSubjects.length === 0 ||
      profession.subjects.some(sub => selectedSubjects.includes(sub))
    ) {
      const card = document.createElement('div');
      card.classList.add('profession-card');
      card.innerHTML = `
        <div class="profession-card-header">
          <div class="profession-icon"><i class="${profession.icon || 'fas fa-briefcase'}"></i></div>
          <div class="profession-info">
            <h2>${profession.name}</h2>
            <p>${profession.description}</p>
          </div>
        </div>
        <div class="profession-card-content">
          <button class="profession-link">Толығырақ <i class="fas fa-arrow-right"></i></button>
        </div>
      `;
      card.querySelector('.profession-link').addEventListener('click', () => showDetails(profession));
      container.appendChild(card);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('#subject-filters input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      displayProfessions(selected);
    });
  });
  displayProfessions([]);

  // Модаль жабу үшін
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });
});

function showDetails(profession) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-title').textContent = profession.name;
  document.getElementById('modal-demand').textContent = profession.details?.demand || '-';
  document.getElementById('modal-code').textContent = profession.details?.code || profession.code || '-';
  document.getElementById('modal-subjects').textContent = profession.details?.subjects || profession.subjects.join(' – ');
  document.getElementById('modal-duration').textContent = profession.details?.duration || profession.duration || '-';
  document.getElementById('modal-score').textContent = profession.details?.minScore || profession.minScore || '-';
  document.getElementById('modal-salary').textContent = profession.details?.salary || profession.salary || '-';
  document.getElementById('modal-description').textContent = profession.details?.fullDescription || profession.description;
}
