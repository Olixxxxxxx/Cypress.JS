
import { timeout } from 'async'
import 'cypress-iframe'
let mypassword = 'Oline2011'
let wrongpassword = 'Oline2020'
let mymail = 'olga220789@ukr.net'
let wrongmail = 'oline123@gmail.com'
let errMessage1 = 'Enter the email or phone number and password for your Apple\u00A0Account.'
let errMessage2 = 'Failed to verify your identity. Try again.'
describe('Test Authorization', () => {
    it('Log in with wrong login and password', () => {
        logInAccount(wrongmail,wrongpassword)
        errorMessage(errMessage1)
     })
    it('Log in with Wrong mail and Correct password', () => {
        logInAccount(wrongmail,mypassword)
        errorMessage(errMessage1)
     })
     it('Log in with Correct mail and Wrong password', () => {
        logInAccount(mymail,mypassword)
        errorMessage(errMessage1)
     })
})

//Functions
const loadIframe = function(){
    cy.frameLoaded('#aid-auth-widget-iFrame')
}
const openPage = function(browserLink){
    cy.visit(browserLink)
}

const findIframeElement = function(elementSelector){
    return cy.iframe('#aid-auth-widget-iFrame').find(elementSelector)
}
const logInAccount = function(mail,password){
    openPage('https://appleid.apple.com/') 
        cy.get('button.button-elevated').click()
        loadIframe()
        findIframeElement('input[type="text"]#account_name_text_field').type(mail)
        findIframeElement('#sign-in').click()
        findIframeElement('input[type="password"]#password_text_field').type(password)
        findIframeElement('#sign-in').click()
}
const errorMessage = function(text){
    findIframeElement('#errMsg').should("contain.text",text)
}