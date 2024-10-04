describe('Registration & Authorization Form', () => {
    it('Fill the form with user data', () => {
       newUserForm()
       cy.contains('Sign In').should('exist')
    })
    it('Log in to account', () => {
        logInWithData()
        cy.contains('Sign Out').should('exist')
     })
     it('User Data Validation', () => {
        verifyUserDataInAccount()
     })
     it('Update User Data', () => {
        updateUserData()
        cy.log('User Data Updated')
     })
   })




















//Functions 
let userData = {
    username: `${(Math.random() * (10 ** 4)).toFixed(0)}Oline`,
    password: `${(Math.random() * (10 ** 4)).toFixed(0)}Pet`,
    firstName: 'Olha',
    lastName: 'Kolmakova',
    email: 'olha.kolmakova354567@gmail.net',
    phone: '380934567856',
    address1: 'Lubinova 1',
    address2: 'Lubinova 1',
    city: 'Warshawa',
    state: 'PL',
    zip: '567-35',
    country: 'Poland',
    language: 'japanese',
    favouriteCategory : 'CATS'
}
const newUserForm = function () {
    cy.visit("https://petstore.octoperf.com/")
    cy.contains("Enter the Store").click()
    cy.contains("Sign In").click()
    cy.contains("Register Now!").click()
    cy.get('[name="username"]').type(userData.username, { delay: 0 })
    cy.get('[name="password"]').type(userData.password, { delay: 0 })
    cy.get('[name="repeatedPassword"]').type(userData.password, { delay: 0 })
    cy.get('[name="account.firstName"]').type(userData.firstName, { delay: 0 })
    cy.get('[name="account.lastName"]').type(userData.lastName, { delay: 0 })
    cy.get('[name="account.email"]').type(userData.email, { delay: 0 })
    cy.get('[name="account.phone"]').type(userData.phone, { delay: 0 })
    cy.get('[name="account.address1"]').type(userData.address1, { delay: 0 })
    cy.get('[name="account.address2"]').type(userData.address2, { delay: 0 })
    cy.get('[name="account.city"]').type(userData.city, { delay: 0 })
    cy.get('[name="account.state"]').type(userData.state, { delay: 0 })
    cy.get('[name="account.zip"]').type(userData.zip, { delay: 0 })
    cy.get('[name="account.country"]').type(userData.country, { delay: 0 })
    cy.get('[name="account.languagePreference"]').select(userData.language)
    cy.get('[name="account.favouriteCategoryId"]').select(userData.favouriteCategory)
    cy.get('[name="account.listOption"]').check()
    cy.get('[name="account.bannerOption"]').check()
    cy.get('[value="Save Account Information"]').click()
}
const logInWithData = function(){
    cy.visit("https://petstore.octoperf.com/")
    cy.contains("Enter the Store").click()
    cy.contains("Sign In").click()
    cy.get('[name="username"]').clear().type(userData.username)
    cy.get('[name="password"]').clear().type(userData.password)
    cy.get('[name="signon"]').click()
}

const verifyUserDataInAccount = function(){
    logInWithData()
    cy.contains('My Account').click()
    cy.contains('User ID:').next().should('have.text', `${userData.username}`)
    cy.get('[name="account.firstName"]').should('have.value', `${userData.firstName}`)
    cy.get('[name="account.lastName"]').should('have.value', `${userData.lastName}`)
    cy.get('[name="account.phone"]').should('have.value', `${userData.phone}`)
    cy.get('[name="account.address1"]').should('have.value', `${userData.address1}`)
    cy.get('[name="account.address2"]').should('have.value', `${userData.address2}`)
    cy.get('[name="account.city"]').should('have.value', `${userData.city}`)
    cy.get('[name="account.state"]').should('have.value', `${userData.state}`)
    cy.get('[name="account.zip"]').should('have.value', `${userData.zip}`)
    cy.get('[name="account.country"]').should('have.value', `${userData.country}`)
    cy.get('[name="account.languagePreference"]').should('have.value', `${userData.language}`)
    cy.get('[name="account.favouriteCategoryId"]').should('have.value', `${userData.favouriteCategory}`)
    cy.get('[name="account.listOption"]').should('be.checked')
    cy.get('[name="account.bannerOption"]').should('be.checked')
}
const updateUserData = function(){
        logInWithData()
        cy.contains('My Account').click()
        cy.get('[name="account.firstName"]').clear().type('Karina')
        cy.get('[name="editAccount"]').click()
        cy.get('[name="account.firstName"]').should('have.value', `Karina`)
}