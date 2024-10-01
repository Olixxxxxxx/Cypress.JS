describe('Registration & Authorization Form', () => {
    it('Fill the form with user data', () => {
       newUserForm('Olha', 'Kolmakovaa', 'olha.kolmakova354567@gmail.net', '380934567856', 'Lubinova 1', 'Warshawa', 'PL', '567-35', 'Poland')
       cy.pause()
       cy.contains('Sign In').should('exist')
    })
    it('Log in to account', () => {
        LogInWithData()
        cy.contains('Sign Out').should('exist')
     })
})




//Functions
let userData = {
    username: '',
    password: ''
}
const newUserForm = function (name, surname, email, telephone, street_number, city, countrycode, postcode, country) {
    userData.username = `${(Math.random() * (10 ** 4)).toFixed(0)}Oline`
    userData.password = `${(Math.random() * (10 ** 4)).toFixed(0)}Pet`
    cy.visit("https://petstore.octoperf.com/")
    cy.contains("Enter the Store").click()
    cy.contains("Sign In").click()
    cy.contains("Register Now!").click()
    cy.get('tr td [name="username"]').type(userData.username, { delay: 0 })
    cy.get('tr td [name="password"]').type(userData.password, { delay: 0 })
    cy.get('tr td [name="repeatedPassword"]').type(userData.password, { delay: 0 })
    cy.get('tr td [name="account.firstName"]').type(name, { delay: 0 })
    cy.get('tr td [name="account.lastName"]').type(surname, { delay: 0 })
    cy.get('tr td [name="account.email"]').type(email, { delay: 0 })
    cy.get('tr td [name="account.phone"]').type(telephone, { delay: 0 })
    cy.get('tr td [name="account.address1"]').type(street_number, { delay: 0 })
    cy.get('tr td [name="account.address2"]').type(street_number, { delay: 0 })
    cy.get('tr td [name="account.city"]').type(city, { delay: 0 })
    cy.get('tr td [name="account.state"]').type(countrycode, { delay: 0 })
    cy.get('tr td [name="account.zip"]').type(postcode, { delay: 0 })
    cy.get('tr td [name="account.country"]').type(country, { delay: 0 })
    cy.get('tr td [name="account.favouriteCategoryId"]').select(3)
    cy.get('tr td [name="account.listOption"]').check()
    cy.get('tr td [name="account.bannerOption"]').check()
    cy.get('[value="Save Account Information"]').click()
}
const LogInWithData = function(){
    cy.visit("https://petstore.octoperf.com/")
    cy.contains("Enter the Store").click()
    cy.contains("Sign In").click()
    cy.get('[name="username"]').clear().type(userData.username)
    cy.get('[name="password"]').clear().type(userData.password)
    cy.get('[name="signon"]').click()
}
