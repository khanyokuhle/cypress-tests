// In order to access window elements on the console, type window

describe('Document Commands Suite', () => {

    beforeEach( () => {
        cy.visit('/#/login?_k=r5q2cs')
    })

    it('Confirm title', () => {     
        cy.title().should('eq', 'Conduit')
    })

    it('Override default viewport', () => {
        cy.viewport(1000, 1200, 'landscape')

        cy.document().should( (doc) => {
            const queryObj = Cypress.$(doc)
            let docWith = queryObj.width() 
            let docHeight = queryObj.height()

            expect(docWith).to.eq(1000)
            expect(docHeight).to.eq(1200)

            console.log(`Width is ${docWith} & Height is ${docHeight}`)
        })

    })

    it('Setting and getting cookies', () => {
        cy.setCookie('sessionID', '12ybtf')
        cy.setCookie('userID', '09876543221')
        cy.getAllCookies().should('have.length', 2)
    })

})