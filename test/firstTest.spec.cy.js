describe('Google search', () => {
  it('should login with text', () => {
      cy.visit("http://www.google.com/")
      cy.log('Im opening Page '+"http://www.google.com/")
      cy.get("#APjFqb").type("bmw")
      cy.contains("Szukaj w Google").click()
      cy.wait(2000)
      cy.get(".byrV5bolga",{timeout : 20000}).should("contain.text", "bmw")
  })
})