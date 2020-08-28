# speed_quiz_frontend
## О проекте
Speed Quiz - приложение для игры в квизы, которое заключается в угадывании вопросов на время в компании друзей, коллег, одногруппников, знакомых.

## Скриншоты
Приложение состоит из 3-х главных экранов:
* Экран администратора для роли ведущего. Он создает сессию игры и проверяет ответы участников.

|   Выбор игры  |  Начало игры  | Вопрос 1 |
| ------------- | ------------- |----------|
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/admin-start.png" width="300"> | <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/admin-generated-key.png" width="300">  | <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/admin-question1.png" width="300"> |


|   Порядок ответов  |  Проверка ответов | Вопрос 2 |
| ------------- | ------------- | -------------|
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/admin-order-of-answers.png" width="300"> | <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/admin-validate-answer.png" width="300">  | <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/admin-question2.png" width="300">  |

* Экран игрока. Роль игрока заключается в нажатии на скорость кнопки “Знаю ответ” при появлении вопроса на экране. Для того чтобы игроку подключиться к сессии игры необходимо отсканировать предоставленный QR-код на главном экране.

|   Ввод имени  |  Подключение участников  | Вопрос 1 |
| ------------- | ------------- | -------------|
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/player-input-form.PNG" width="300"> | <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/player-participants.PNG" width="300">  |<img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/player-question1.PNG" width="300">  |

|   Порядок ответа  |  Конец игры  | 
| ------------- | ------------- |
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/player-order-of-answer.PNG" width="300"> | <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/player-and-game.PNG" width="300">  |

*	Главный экран показывает всю необходимую информацию

|   Ввод ключа  |
| ------------- |
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/desktop-input-key.png" width="1000"> |

|   Подключение игроков  |
| ------------- |
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/desktop-qr.png" width="1000"> |

|   Результаты первого вопроса  |
| ------------- |
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/desktop-results.png" width="1000"> |

|   Вопрос 2 |
| ------------- |
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/desktop-question2.png" width="1000"> |

|   Результаты игры  |
| ------------- |
| <img src="https://github.com/serbeys/speed_quiz_frontend/blob/master/screenshots/desktop-results-game.png" width="1000"> |

## Quick Start
Если вы хотите запустить приложение на локальный машине:

#### Важно!! Для того, чтобы подключиться к игре через телефон, он должен находиться в одной сети с локальной машиной, также в environment.ts (строка 7), player-question.component.ts (строка 32), question-admin.component.ts (строка 33), question.component.ts( строка 33) измените значение на ip вашей сети

### Backend
```
git clone https://github.com/serbeys/speed_quiz_backend.git
cd speed_quiz_backend
npm i
strapi start
```

### Frontend
```
Git clone https://github.com/serbeys/speed_quiz_frontend.git -b develop
cd speed_quiz_frontend
npm i
ng serve –host 0.0.0.0
```

Чтобы перейти на страницу главного экрана, вводите localhost:4200/
Чтобы перейти на страницу экрана админа, вводите localhost:4200/admin

