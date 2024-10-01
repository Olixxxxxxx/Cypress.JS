describe('Google search', () => {
    it('Calculator Test', () => {
        CalculatorTest(3,'/',9)
    // it('Addition Operation', () => {
    //     AdditionOperationTest(3,8)
    // })
    // it('Division Operation', () => {
    //     DivisionOperationTest(7,3)
    // })
    // it('Modulo Operation', () => {
    //     ModuloOperationTest(8,5)
    // })
    // it('Multiplication Operation', () => {
    //     MultiplicationOperationTest(7,8)
    // })
    // it('Substraction Operation', () => {
    //     SubstractionOperationTest(8,5)
    })

})

  //Functions
  const CalculatorTest = function(FirstNumber, operator, SecondNumber){
    cy.visit('https://juliemr.github.io/protractor-demo')
        cy.get('input').eq(0).type(FirstNumber)
        cy.get('select[ng-model="operator"]').select(operator)
        cy.get('input').eq(1).type(SecondNumber)
        cy.get('#gobutton').click()
        let ExpectedResult
        switch (operator){
                case '+':
                    ExpectedResult = (FirstNumber + SecondNumber)
                    break
                case '-': 
                    ExpectedResult = (FirstNumber - SecondNumber)
                    break
                case '%':
                    ExpectedResult = FirstNumber % SecondNumber
                    break
                case '/':
                    ExpectedResult = (FirstNumber / SecondNumber).toFixed(16)
                    break   
                case '*':
                    ExpectedResult = FirstNumber * SecondNumber
                    break
                default:
                    ExpectedResult = 'Not Found'
            }
            cy.get('form .ng-binding').should('contain.text', ExpectedResult)
        }
//   const AdditionOperationTest = function(FirstNumber,SecondNumber){
//         cy.visit('https://juliemr.github.io/protractor-demo')
//         cy.get('input').eq(0).type(FirstNumber)
//         cy.get('select[ng-model="operator"]').select('+')
//         cy.get('input').eq(1).type(SecondNumber)
//         cy.get('#gobutton').click()
//         cy.get('form .ng-binding').should('contain.text',`${FirstNumber + SecondNumber}`)
//   }

//   const DivisionOperationTest = function(FirstNumber,SecondNumber){
//         cy.visit('https://juliemr.github.io/protractor-demo')
//         cy.get('input').eq(0).type(FirstNumber)
//         cy.get('select[ng-model="operator"]').select(1)
//         cy.get('input').eq(1).type(SecondNumber)
//         cy.get('#gobutton').click()
//         cy.get('form .ng-binding').should('contain.text',`${(FirstNumber / SecondNumber).toFixed(16)}`)
//   }

//   const ModuloOperationTest = function(FirstNumber,SecondNumber){
//         cy.visit('https://juliemr.github.io/protractor-demo')
//         cy.get('input').eq(0).type(FirstNumber)
//         cy.get('select[ng-model="operator"]').select(2)
//         cy.get('input').eq(1).type(SecondNumber)
//         cy.get('#gobutton').click()
//         cy.get('form .ng-binding').should('contain.text',`${(FirstNumber % SecondNumber)}`)
//   }

//   const MultiplicationOperationTest = function(FirstNumber,SecondNumber){
//         cy.visit('https://juliemr.github.io/protractor-demo')
//         cy.get('input').eq(0).type(FirstNumber)
//         cy.get('select[ng-model="operator"]').select(3)
//         cy.get('input').eq(1).type(SecondNumber)
//         cy.get('#gobutton').click()
//         cy.get('form .ng-binding').should('contain.text',`${(FirstNumber * SecondNumber)}`)

//   }

//   const SubstractionOperationTest = function(FirstNumber,SecondNumber){
//         cy.visit('https://juliemr.github.io/protractor-demo')
//         cy.get('input').eq(0).type(FirstNumber)
//         cy.get('select[ng-model="operator"]').select(4)
//         cy.get('input').eq(1).type(SecondNumber)
//         cy.get('#gobutton').click()
//         cy.get('form .ng-binding').should('contain.text',`${(FirstNumber - SecondNumber)}`)

//   }