describe('Open link in new tab', () => {
    it('Open link in new tab', () => {
        cy.visit("https://chromewebstore.google.com/detail/html-new-tab/ponjalfncfogplhjlmalcbbclbappnaf?pli=1")
        cy.get('[href = "https://support.google.com/chrome_webstore/answer/12225786?p=cws_reviews_results"]').invoke('removeAttr', 'target').click()
        cy.origin('https://support.google.com', () => {
            cy.contains('Подбор контента').should('exist')
        })
        //cy.wait(2000)
        //cy.get(".byrV5bolga",{timeout : 20000}).should("contain.text", "bmw")
        //cy.get('.example > a').invoke('removeAttr', 'target').click()
    })
  })