const accordionEl = document.getElementById("accordion");
const heroSLiderEl = document.getElementById("heroSlider");
const burgerBtnEl = document.getElementById("burgerBtn");
const navLinksEl = Array.from(
  document.getElementById("navLinks").querySelectorAll("a")
);
const changeLangsEl = document.getElementById('changeLangs')
let LANG = 'en'

i18next.init({
  lng: LANG,
  debug: true,
  resources: {
    en: {
      translation: {
        "webTitle": "Ranee - Front-End Developer",
        "home": "Home",
        "about": "About",
        "services": "Services",
        "portfolio": "Portfolio",
        "questions": "Questions",
        "hello": "Hello, I'm",
        "name": "Ranee / Dmitry",
        "name2": "Junior Front-End Developer",
        "name3": "UX/UI Developer",
        "name4": "Graphic Designer",
        "heroSloganParagraph1": "This is one page website about me, my portfolio and abilities ..",
        "heroSloganParagraph2": "shortly saying 'calling card' website.",
        "btnCV": "Download CV",
        "aboutParagraph1": "Hey! My name is Dmitry. I am a young, ambitious and determined web developer.",
        "aboutParagraph2": "Who is a web developer? A web developer is programmer which builds and maintains websites with the client and consumer in mind. That is, the end result must include products and services.",
        "aboutParagraph3": "Why me? I can write a modern and performance website in a short time. I use modern libraries and frameworks. Well, as a conclusion, I have advanced knowledge of design.",
        "aboutParagraph4": "If you were interested, go below and see what I work with and what I can do ..",
        "howIWorks": "How do i works?",
        "analyzeTitle": "Analyze work",
        "analyzeDesc": "Analysis of the received project in order to consider the possibilities for implementation, clarify customer requirements, identify problems and determine ways to solve them.",
        "ExecutionTestingTitle": "Execution & Testing",
        "ExecutionTestingDesc": "Creation of a website taking into account the interests of the client, the consumer & Product research, based on the desires and the result obtained ..",
        "PublishTitle": "Publish",
        "PublishDesc": "Make sure that the customer's requirements match the end result. The site is responsive and optimized. Then he gets to the Internet.",
        "btnTemplate": "More Templates",
        "questionsTitle": "Do you have a questions?",
        "questionsDesc": "As it turned out, these are the most frequently asked questions .. open them and get your answers!",
        "questions1": "Why me?",
        "questions1Desc": "I can write a modern and performance website in a short time. I use modern libraries and frameworks. Well, as a conclusion, I have advanced knowledge of design.",
        "questions2": "How much does to build a website?",
        "questions2Desc": "Initially, I consider the scale of work and what services will be used for a given project / application. Subsequently, the price will be announced.",
        "questions3": "What projects will I take on?",
        "questions3Desc": "Basically, I take on all projects .. it all depends on the time for which you need to write the site / application.",
        "questions4": "How to pay for an order?",
        "questions4Desc": "If everything suits the customer, then, depending on the amount of the project, there is an advance payment. At the end of the work - the remainder of the amount.",
        "underQuestionsTitle": "Stay have a questions? Get in touch!",
        "btnEmail": "Send Message",
        "footerName": "Ranee Web Developer.",
      }
    },
    ru: {
      translation: {
        "webTitle": "Рэни - Front-End Разработчик",
        "home": "Домой",
        "about": "Обо мне",
        "services": "Услуги",
        "portfolio": "Портфолио",
        "questions": "Вопросы",
        "hello": "Привет, я",
        "name": "Рэни / Дмитрий",
        "name2": "Младший Front-End разработчик",
        "name3": "UX/UI разработчик",
        "name4": "Графический дизайнер",
        "heroSloganParagraph1": "Это одностраничный сайт обо мне, моем портфолио и способностях ... ",
        "heroSloganParagraph2": "короче говоря, сайт 'визитная карточка'",
        "btnCV": "Скачать резюме",
        "aboutParagraph1": "Привет! Меня зовут Дмитрий. Я молодой, амбициозный и целеустремленный веб-разработчик.",
        "aboutParagraph2": "Кто такой веб-разработчик? Веб-разработчик - это программист, который создает и поддерживает веб-сайты с учетом интересов клиента и потребителя. То есть конечный результат должен включать продукты и услуги.",
        "aboutParagraph3": "Почему я? Я могу написать современный и эффективный веб-сайт за короткое время. Использую современные библиотеки и фреймворки. Ну и в заключение, у меня продвинутые знания в области дизайна.",
        "aboutParagraph4": "Если вам было интересно, пройдите ниже и посмотрите, с чем я работаю и что могу делать.",
        "howIWorks": "Как я работаю?",
        "analyzeTitle": "Анализирование работы",
        "analyzeDesc": "Анализ полученного проекта с целью рассмотрения возможностей реализации, уточнения требований заказчика, выявления проблем и определения путей их решения.",
        "ExecutionTestingTitle": "Выполнение & Тестирование",
        "ExecutionTestingDesc": "Написание сайта с учетом интересов клиента, исследование продукта, исходя из желаний клиента и полученного дизайна.",
        "PublishTitle": "Публикация",
        "PublishDesc": "Убедиться, что требования заказчика соответствуют конечному результату. Сайт адаптивный и оптимизированный. Затем он попадает в Интернет.",
        "btnTemplate": "Больше шаблонов",
        "questionsTitle": "Есть вопросы?",
        "questionsDesc": "Как оказалось, это наиболее часто задаваемые вопросы .. открой их и получи свои ответы!",
        "questions1": "Почему именно я?",
        "questions1Desc": "Я могу написать современный и эффективный веб-сайт за короткое время. Использую современные библиотеки и фреймворки. Ну и в заключение, у меня продвинутые знания в области дизайна.",
        "questions2": "Сколько стоит создать сайт?",
        "questions2Desc": "Изначально я рассматриваю масштаб работ и какие сервисы будут использоваться для того или иного проекта / приложения. Впоследствии будет объявлена ​​цена.",
        "questions3": "Какие проекты я возьму на себя?",
        "questions3Desc": "В основном я беру на себя все проекты .. все зависит от времени, за которое нужно написать сайт / приложение.",
        "questions4": "Как оплатить заказ?",
        "questions4Desc": "Если заказчика все устраивает, то, в зависимости от суммы проекта, есть предоплата. По окончании работы - остаток суммы.",
        "underQuestionsTitle": "Остались вопросы? Связаться!",
        "btnEmail": "Отправить сообщение",
        "footerName": "Рэни Веб-Разработчик.",
      }
    },
    uk: {
      translation: {
        "webTitle": "Рені - Front-End Розробник",
        "home": "Додому",
        "about": "Про мене",
        "services": "Послуги",
        "portfolio": "Портфоліо",
        "questions": "Питання",
        "hello": "Привіт, я",
        "name": "Рені / Дмитро",
        "name2": "Молодший Front-End розробник",
        "name3": "UX/UI розробник",
        "name4": "Графічний дизайнер",
        "heroSloganParagraph1": "Це однієї сторінки сайт про мене, моєму портфоліо і здібностях ... ",
        "heroSloganParagraph2": "коротше кажучи, сайт 'візитна картка'",
        "btnCV": "Завантажити резюме",
        "aboutParagraph1": "Привіт! Мене звуть Дмитро. Я молодий, амбітний і цілеспрямований веб-розробник.",
        "aboutParagraph2": "Хто такий веб-розробник? Веб-розробник - це програміст, який створює і підтримує веб-сайти з урахуванням інтересів клієнта і споживача. Тобто кінцевий результат повинен включати продукти і послуги.",
        "aboutParagraph3": "Чому я? Я можу написати сучасний і ефективний веб-сайт за короткий час. Використовую сучасні бібліотеки і фреймворки. Ну і на закінчення, у мене просунуті знання в області дизайну.",
        "aboutParagraph4": "Якщо вам було цікаво, пройдіть нижче і подивіться, з чим я працюю і що можу робити.",
        "howIWorks": "Як я працюю?",
        "analyzeTitle": "Аналізування роботи",
        "analyzeDesc": "Аналіз отриманого проекту з метою розгляду можливостей реалізації, уточнення вимог замовника, виявлення проблем та визначення шляхів їх вирішення.",
        "ExecutionTestingTitle": "Виконання & Тестування",
        "ExecutionTestingDesc": "Написання сайту з урахуванням інтересів клієнта, дослідження продукту, виходячи з бажань клієнта і отриманого дизайну.",
        "PublishTitle": "Публікація",
        "PublishDesc": "Переконатися, що вимоги замовника відповідають кінцевим результатом. Сайт адаптивний і оптимізований. Потім він потрапляє в Інтернет.",
        "btnTemplate": "Більше шаблонів",
        "questionsTitle": "Є питання?",
        "questionsDesc": "Як виявилося, це найбільш поширені запитання .. відкрий їх і отримай свої відповіді!",
        "questions1": "Чому саме я?",
        "questions1Desc": "Я можу написати сучасний і ефективний веб-сайт за короткий час. Використовую сучасні бібліотеки і фреймворки. Ну і на закінчення, у мене просунуті знання в області дизайну.",
        "questions2": "Скільки коштує створити сайт?",
        "questions2Desc": "Спочатку я розглядаю масштаб робіт і які сервіси будуть використовуватися для того чи іншого проекту / програми. Згодом буде оголошена ціна.",
        "questions3": "Які проекти я візьму на себе?",
        "questions3Desc": "В основному я беру на себе всі проекти .. все залежить від часу, протягом якого потрібно написати сайт / додаток.",
        "questions4": "Як оплатити замовлення?",
        "questions4Desc": "Якщо замовника все влаштовує, то, в залежності від суми проекту, є передоплата. Після закінчення роботи - залишок суми.",
        "underQuestionsTitle": "Залишилися питання? Зв'язатися!",
        "btnEmail": "Надіслати повідомлення",
        "footerName": "Рені Веб-Розробник.",
      }
    },
    sk: {
      translation: {
        "webTitle": "Ranee - Front-End vývojár",
        "home": "Domov",
        "about": "O mne",
        "services": "Služby",
        "portfolio": "Portfólio",
        "questions": "Otázky",
        "hello": "Áhoj, ja som",
        "name": "Ranee / Dmitry",
        "name2": "Mladší Front-End vývojár",
        "name3": "UX/UI vývojár",
        "name4": "Grafický dizajnér",
        "heroSloganParagraph1": "Це однієї сторінки сайт про мене, моєму портфоліо і здібностях ... ",
        "heroSloganParagraph2": "коротше кажучи, сайт 'візитна картка'",
        "btnCV": "Stiahnuť životopis",
        "aboutParagraph1": "Привіт! Мене звуть Дмитро. Я молодий, амбітний і цілеспрямований веб-розробник.",
        "aboutParagraph2": "Хто такий веб-розробник? Веб-розробник - це програміст, який створює і підтримує веб-сайти з урахуванням інтересів клієнта і споживача. Тобто кінцевий результат повинен включати продукти і послуги.",
        "aboutParagraph3": "Чому я? Я можу написати сучасний і ефективний веб-сайт за короткий час. Використовую сучасні бібліотеки і фреймворки. Ну і на закінчення, у мене просунуті знання в області дизайну.",
        "aboutParagraph4": "Якщо вам було цікаво, пройдіть нижче і подивіться, з чим я працюю і що можу робити.",
        "howIWorks": "Ako som pracujú?",
        "analyzeTitle": "Analyzovanie práci",
        "analyzeDesc": "Аналіз отриманого проекту з метою розгляду можливостей реалізації, уточнення вимог замовника, виявлення проблем та визначення шляхів їх вирішення.",
        "ExecutionTestingTitle": "Splnenie & Testovanie",
        "ExecutionTestingDesc": "Написання сайту з урахуванням інтересів клієнта, дослідження продукту, виходячи з бажань клієнта і отриманого дизайну.",
        "PublishTitle": "Publikácia",
        "PublishDesc": "Переконатися, що вимоги замовника відповідають кінцевим результатом. Сайт адаптивний і оптимізований. Потім він потрапляє в Інтернет.",
        "btnTemplate": "Viac šablónov",
        "questionsTitle": "Máte otázky?",
        "questionsDesc": "Як виявилося, це найбільш поширені запитання .. відкрий їх і отримай свої відповіді!",
        "questions1": "Prečo ja?",
        "questions1Desc": "Я можу написати сучасний і ефективний веб-сайт за короткий час. Використовую сучасні бібліотеки і фреймворки. Ну і на закінчення, у мене просунуті знання в області дизайну.",
        "questions2": "Koľko stojí vytvoriť webové stránky?",
        "questions2Desc": "Спочатку я розглядаю масштаб робіт і які сервіси будуть використовуватися для того чи іншого проекту / програми. Згодом буде оголошена ціна.",
        "questions3": "Ake stránky som robím?",
        "questions3Desc": "В основному я беру на себе всі проекти .. все залежить від часу, протягом якого потрібно написати сайт / додаток.",
        "questions4": "Ako splatiť objednávku?",
        "questions4Desc": "Якщо замовника все влаштовує, то, в залежності від суми проекту, є передоплата. Після закінчення роботи - залишок суми.",
        "underQuestionsTitle": "Stále máte otázky? Spojiť sa!",
        "btnEmail": "Odoslať správu",
        "footerName": "Ranee webový-vývojár.",
      }
    }
  }
}).then(function(t) {
  translate()
});

changeLangsEl.addEventListener('click', e => {
  e.preventDefault()
  const btn = e.target.closest('a[data-lang]')
  if (btn) {
    const lang = btn.dataset.lang
    const currentLang = changeLangsEl.querySelector('[data-lang="current"]').querySelector('span')
    LANG = lang
    document.documentElement.lang = lang
    i18next.changeLanguage(LANG).then(() => translate())
    const prevLang = currentLang.textContent 
    currentLang.textContent = lang.toUpperCase()
    btn.dataset.lang = prevLang.toLowerCase()
    btn.textContent = prevLang
  }
  return false
})

const heroSliderEl = new Swiper(".hero-slider", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 800,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 2500,
  },
});

window.addEventListener("popstate", (e) => {
  const hash = location.hash.slice(1);
  const currentLink = navLinksEl.find((link) => link.href.split('#')[1] === hash);
   currentLink.classList.add('active')
   findSiblings(currentLink.parentElement).forEach(li => li.firstElementChild.classList.remove('active')) 
});


accordionEl.addEventListener("click", (e) => {
  const title = e.target.closest(".accordion-title");
  const collapse = title.nextElementSibling;
  const content = collapse.firstElementChild;
  if (collapse.classList.contains("active")) {
    collapse.style.height = 0;
    collapse.classList.remove("active");
    title.classList.remove("active-title");
  } else {
    collapse.style.height = getComputedStyle(content).height;
    collapse.classList.add("active");
    title.classList.add("active-title");
  }
});

burgerBtnEl.addEventListener("click", (e) => {
  document.body.classList.toggle("burger-open");
});

AOS.init();

copyRightYear.textContent = new Date().getFullYear();

function findSiblings(node) {
  return Array.from(node.parentElement.children).filter(
    (child) => child !== node
  );
}

function translate(params) {
  const elemToTranslate = document.querySelectorAll('[data-i18n]')
  elemToTranslate.forEach(elem => elem.textContent = i18next.t(elem.dataset.i18n))
}


