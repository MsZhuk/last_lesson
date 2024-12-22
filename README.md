# Проект по автоматизации тестирования сервисов: academybugs и apichallenges
## Содержание:
+ [Описание](#Описание)
+ [UI тесты](#UI-тесты)
+ [API тесты](#API-тесты)
+ [Сборка github CI](#Сборка-github-CI)
+ [Генерация Allure-отчета](#Пример-Allure-отчета)
+ [Уведомления в Telegram](#Уведомления-в-Telegram-с-использованием-бота)
## 📒Описание
Тесты разработаны на языке `JavaScript` с использованием фреймворка для автоматизации тестирования `Playwright`. <br>
Особенности проекта:
+ Page Object шаблон проектирования
+ Возможность запуска тестов: локально, удалённо, по тегам
+ Использование `Faker` для генерации данных
+ Генерация Allure отчет
+ Отправка уведомлений в Telegram
### Запуск всех тестов:
`npm test`
### Запуск UI тестов:
`npx playwright test academybugs.spec.js`
### Запуск API тестов:
`npx playwright test apitest.spec.js`
##  ✅UI тесты
+ Проверка смены валют
+ Проверка отправки отзывы
+ Проверка пагинации
+ Проверка перехода на страницу производителя
+ Проверка кнопки Return the store
##  ✅API тесты
+ Проверка получения списка заданий
+ Проверка выполнения запрос GET
+ Проверка выполения запроса на возврат определенной задачи GET
+ Проверка создания задачи
+ Проверка обновления задачи
## 🕒Сборка github CI
Для запуска сборки необходимо перейти Actions -> pw test - Нажать Run workflow. <br>
После завершения сборки можно перейти и ознакомится с Allure-отчетом:
`https://mszhuk.github.io/last_lesson/2/`
## 💻Пример Allure-отчета
![yesy2](https://github.com/user-attachments/assets/86d6a313-453d-4f12-903f-0d4be28e4cee)

![forlast](https://github.com/user-attachments/assets/173f237e-6560-4fbc-95e0-cea0aedfd4cd)

## 📩Уведомления в Telegram с использованием бота
В Actions добавлены скрипты отправки уведомлений в `Telegram`.<br>
Пример успешного прохождения тестов:<br>
```javascript
 - name: telegram Notification
        if: success()
        uses: cbrgm/telegram-github-action@v1
        with:
         to: ${{ secrets.TELEGRAM_CHAT_ID }}
         token: ${{ secrets.TELEGRAM_TOKEN }}
         message: |
            🚀 Success!
            Repository: ${{ github.repository }}
```
![1d35d71d-7caf-4e72-ae6f-923bac9d7e60](https://github.com/user-attachments/assets/bdaa3d8c-0430-4542-bfe1-8d931210f9db)

Пример неуспешного прохождения тестов:<br>
```javascript
 - name: telegram Notification<br>
        if: success()<br>
        uses: cbrgm/telegram-github-action@v1<br>
        with:<br>
         to: ${{ secrets.TELEGRAM_CHAT_ID }}<br>
         token: ${{ secrets.TELEGRAM_TOKEN }}<br>
         message: |<br>
            🚀 Success!<br>
            Repository: ${{ github.repository }}
```

