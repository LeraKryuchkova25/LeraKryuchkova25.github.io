describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // Нашла поле логин и ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Нашла поле пароля и ввела верный пароль 
         cy.get('#loginButton').click(); // Нашла кнопку войти и нажала на неё

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу нужный текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })

     it('проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт

        cy.get('#forgotEmailButton').click(); // Нашла кнопку «Забыли пароль» и нажала на неё

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Нашла поле для почты и ввела почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нашла кнопку отправить код и нажала на неё

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что получили нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // Нашла поле логин и ввела верный логин
        cy.get('#pass').type('iLoveqastudio8'); // Нашла поле пароля и ввела неверный пароль 
        cy.get('#loginButton').click(); // Нашла кнопку войти и нажала на неё

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт

        cy.get('#mail').type('german@dolnik.ru'); // Нашла поле логин и ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашла поле пароля и ввела верный пароль 
        cy.get('#loginButton').click(); // Нашла кнопку войти и нажала на неё

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт

        cy.get('#mail').type('germandolnikov.ru'); // Нашла поле логин и ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Нашла поле пароля и ввела верный пароль 
        cy.get('#loginButton').click(); // Нашла кнопку войти и нажала на неё

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Нашла поле логин и ввела логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Нашла поле пароля и ввела верный пароль 
        cy.get('#loginButton').click(); // Нашла кнопку войти и нажала на неё

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
 }) 