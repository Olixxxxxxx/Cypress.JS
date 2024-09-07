
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('Test Case 2', () => {
   let x = 23
   let y = 2
   let z = x + y
   expect(z).to.equal(25)
   cy.visit("https://docs.cypress.io/guides/getting-started/installing-cypress")
  })
  it('Test Case 3', () => {
    const PlusTwoNumbers = function(){
      let x = 23
      let y = 2
      let z = x + y
      z = toString(z)
      return z
    }
    expect(PlusTwoNumbers()).to.be.a('number')
    //cy.visit("https://docs.cypress.io/guides/getting-started/installing-cypress")
   })
  })