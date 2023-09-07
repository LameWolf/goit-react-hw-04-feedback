# React homework template

Цей проект було створено за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
та налаштування додаткових можливостей
[Зверніться до документації](https://facebook.github.io/create-react-app/docs/getting-started).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення
репозиторію свого проекту. Для цього натисніть на кнопку ``Use this template'' і
вибери опцію "Create a new repository", як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному етапі відкриється сторінка створення нового репозиторію. Заповни
поле його імені, переконайся, що репозиторій публічний, після чого натисніть
кнопку "Create repository from template".

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того, як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як показано
на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції "Workflow permissions" вибери
опцію "Read and write permissions" і постав галочку в чекбоксі. Це необхідно для
автоматизації процесу деплою проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів та папок
репозиторію-шаблону. Далі працюй з ним як з будь-яким іншим особистим
репозиторієм, клонуй його собі на комп'ютер, пиши код, роби комміти та
відправляй їх на GitHub.

## Підготовка до роботи

1. Переконайтеся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту командою `npm install`.
3. Запусти режим розробки, виконавши команду `npm start`.
4. Перейдіть до браузера за адресою
   [http://localhost:3000](http://localhost:3000). Ця сторінка автоматично
   перезавантажуватиметься після збереження змін у файли проекту.

## Деплой

Продакшн версія проекту автоматично проходитиме лінтинг, збиратиметься і
деплоїтися на GitHub Pages, у гілку `gh-pages`, щоразу коли оновлюється гілка
`main`. Наприклад, після прямого пуша або прийнятого пул-реквесту. Для цього
необхідно у файлі `package.json` відредагувати поле `homepage`, замінивши
`your_username` та `your_repo_name` на свої, і відправити зміни на GitHub.

``json "homepage": "https://your_username.github.io/your_repo_name/"

```

Далі необхідно зайти в налаштування GitHub-репозиторія (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього комміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується складання та деплой проекту.
- "Зелений колір" - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, складання або деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікна, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися
за адресою вказаною у відредагованій властивості `homepage`. Наприклад, ось
посилання на живу версію для цього репозиторію
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Якщо відкриється порожня сторінка, переконайтеся, що у вкладці `Console` немає помилок
пов'язаних з неправильними шляхами до CSS та JS файлів проекту (**404**). Швидше
всього в тебе неправильне значення властивості `homepage` у файлі `package.json`.

### Маршрутизація

Якщо програма використовує бібліотеку `react-router-dom` для маршрутизації,
необхідно додатково налаштувати компонент `<BrowserRouter>`, передавши в пропі
'basename' - точна назва твого репозиторію. Сліш на початку рядка є обов'язковим.

``jsx
<BrowserRouter basename="/your_repo_name">
   <App />
</BrowserRouter>
```

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторія, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та складання перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   вирушає у гілку `gh-pages`. В іншому випадку, у логу виконання скрипт буде
   вказано в чому проблема.
