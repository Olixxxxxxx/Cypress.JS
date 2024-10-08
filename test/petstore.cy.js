describe('Registration & Authorization Form', () => {
    it('Fill the form with user data', () => {
       newUserForm()
       cy.contains('Sign In').should('exist')
    })
    // it('Log in to account', () => {
    //     logInWithData()
    //     cy.contains('Sign Out').should('exist')
    //  })
    //  it('User Data Validation', () => {
    //     verifyUserDataInAccount()
    //  })
    //  it('Update User Data', () => {
    //     updateUserData()
    //     cy.log('User Data Updated')
    //  })
     it('Create an Order', () => {
        logInWithData()
        cy.get('#SidebarContent a[href="/actions/Catalog.action?viewCategory=&categoryId=FISH"]').click()
        cy.contains("FI-SW-01").click()
        cy.get('tr').eq(2).find('td').eq(4).click()
        cy.contains("Proceed to Checkout").click()
        cy.get('[name="order.cardType"]').select(userData.cardType)
        cy.get('input[name="order.creditCard"]').clear().type(userData.cardNumber)
        cy.get('input[name="order.expiryDate"]').clear().type(userData.cardDate)
        cy.contains("Continue").click()
        checkData(2,'First name:',`${userData.firstName}`)
        checkData(3,'Last name:',`${userData.lastName}`)
        checkData(4,'Address 1:',`${userData.address1}`)
        checkData(5,'Address 2:',`${userData.address2}`)
        checkData(6,'City:',`${userData.city}`)
        checkData(7,'State:',`${userData.state}`)
        checkData(8,'Zip:',`${userData.zip}`)
        checkData(9,'Country:',`${userData.country}`)
        checkData(11,'First name:',`${userData.firstName}`)
        checkData(12,'Last name:',`${userData.lastName}`)
        checkData(13,'Address 1:',`${userData.address1}`)
        checkData(14,'Address 2:',`${userData.address2}`)
        checkData(15,'City:',`${userData.city}`)
        checkData(16,'State:',`${userData.state}`)
        checkData(17,'Zip:',`${userData.zip}`)
        checkData(18,'Country:',`${userData.country}`)
        cy.contains("Confirm").click()
        cy.contains("Thank you, your order has been submitted.").should('exist')
        checkData(2,'Card Type:',`${userData.cardType}`)
        checkData(3,'Card Number:',`${userData.cardNumber}`)
        checkData(4,'Expiry Date (MM/YYYY):',`${userData.cardDate}`)
        checkData(6,'First name:',`${userData.firstName}`)
        checkData(7,'Last name:',`${userData.lastName}`)
        checkData(8,'Address 1:',`${userData.address1}`)
        checkData(9,'Address 2:',`${userData.address2}`)
        checkData(10,'City:',`${userData.city}`)
        checkData(11,'State:',`${userData.state}`)
        checkData(12,'Zip:',`${userData.zip}`)
        checkData(13,'Country:',`${userData.country}`)
        checkData(15,'First name:',`${userData.firstName}`)
        checkData(16,'Last name:',`${userData.lastName}`)
        //cy.contains('Last name:').eq(1).next().should('contain.text',`${userData.lastName}`)
        checkData(17,'Address 1:',`${userData.address1}`)
        checkData(18,'Address 2:',`${userData.address2}`)
        checkData(19,'City:',`${userData.city}`)
        checkData(20,'State:',`${userData.state}`)
        checkData(21,'Zip:',`${userData.zip}`)
        checkData(22,'Country:',`${userData.country}`)
        checkData(23,'Courier:','UPS')
        cy.get('tr').eq(24).find('td').contains('Status: P').should('exist')
        cy.get('tr').eq(25).find('td').eq(1).find('a').should('have.attr','href',`${order.item.link}`).and('have.text',`${order.item.code}`)
        cy.get('tr').eq(25).find('td').eq(2).invoke('text').should('match', /Small\s+Angelfish/)
        //cy.get('tr').eq(25).find('td').eq(2).should('include.text', 'Small').and('include.text', 'Angelfish')
        cy.get('tr').eq(25).find('td').eq(3).should('have.text',`${order.count}`)
        cy.get('tr').eq(25).find('td').eq(4).should('have.text',`$${(order.item.itemPrice).toFixed(2)}`)
        cy.get('tr').eq(25).find('td').eq(5).should('have.text',`$${order.totalPrice()}`)

     })
   })
















//Functions 
let itemData = {
    name: 'Small Angelfish',
    code: 'EST-2',
    link: '/actions/Catalog.action?viewItem=&itemId=EST-2',
    itemPrice: 16.50
}
let order = { 
    item: itemData,
    count: 1,
    totalPrice(){
        return (this.item.itemPrice*this.count).toFixed(2)
    }
}
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
    favouriteCategory : 'CATS',
    cardType: 'MasterCard',
    cardNumber: '33 2222 2222 2222 2222',
    cardDate: '12/27'
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
const checkData = function(trNumber,tdName,expectedValue){
    cy.get('tr').eq(trNumber).find('td').contains(tdName).next().should('contain.text',expectedValue)
}