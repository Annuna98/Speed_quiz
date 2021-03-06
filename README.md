# speed_quiz_frontend
## О проекте
Speed Quiz - приложение для игры в квизы, которое заключается в угадывании вопросов на время в компании друзей, коллег, одногруппников, знакомых.

## Скриншоты
Приложение состоит из 3-х главных экранов:
* Экран администратора для роли ведущего. Он создает сессию игры и проверяет ответы участников.
Администратор выбирает игру среди списка и получает уникальный ключ сессии, который вводит на экран монитора. Тогда и начинается игра.

|   Выбор игры  |  Начало игры  | Вопрос 1 |
| ------------- | ------------- |----------|
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/admin-start.png" width="300"> | <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/admin-generated-key.png" width="300">  | <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/admin-question1.png" width="300"> |


|   Порядок ответов  |  Проверка ответов | Вопрос 2 |
| ------------- | ------------- | -------------|
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/admin-order-of-answers.png" width="300"> | <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/admin-validate-answer.png" width="300">  | <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/admin-question2.png" width="300">  |

* Экран игрока. Роль игрока заключается в нажатии на скорость кнопки “Знаю ответ” при появлении вопроса на экране. Для того чтобы игроку подключиться к сессии игры необходимо отсканировать предоставленный QR-код на главном экране.

|   Ввод имени  |  Подключение участников  | Вопрос 1 |
| ------------- | ------------- | -------------|
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/player-input-form.PNG" width="300"> | <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/player-participants.PNG" width="300">  |<img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/player-question1.PNG" width="300">  |

|   Порядок ответа  |  Конец игры  | 
| ------------- | ------------- |
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/player-order-of-answer.PNG" width="300"> | <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/player-and-game.PNG" width="300">  |

*	Главный экран показывает всю необходимую информацию

|   Ввод ключа  |
| ------------- |
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/desktop-input-key.png" width="1000"> |

|   Подключение игроков  |
| ------------- |
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/desktop-qr.png" width="1000"> |

|   Результаты первого вопроса  |
| ------------- |
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/desktop-results.png" width="1000"> |

|   Вопрос 2 |
| ------------- |
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/desktop-question2.png" width="1000"> |

|   Результаты игры  |
| ------------- |
| <img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/desktop-results-game.png" width="1000"> |

### Figma
[https://www.figma.com/file/RLnE09wipLF86Zmp1pUzc8/Speed-Squiz-(Copy)?node-id=0%3A1]

## Стек технологий
Angular, Strapi, NodeJS

## Бэкенд
https://github.com/Annuna98/SpeedQuiz_backend.git

## Quick Start
Если вы хотите запустить приложение на локальный машине:

#### Backend

```
git clone https://github.com/Annuna98/SpeedQuiz_backend.git -b develop
cd speed_quiz_backend
npm i
strapi develop
```

Затем переходите в localhost:1337/admin и регистрируетесь,
В коллекции Games создаете 3 игры:
<img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/strapi1.png" width="1000">

В коллекции Questions создаете вопросы, которые должны получать участники в течение игры:
<img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/strapi2.png" width="1000">

Каждый вопрос привязываете к конкретной игре:
<img src="https://github.com/Annuna98/Speed_quiz/blob/master/screenshots/strapi3.png" width="1000">

#### Frontend: 

```
Git clone https://github.com/Annuna98/Speed_quiz.git -b develop
cd speed_quiz_frontend
npm i
ng serve
```
