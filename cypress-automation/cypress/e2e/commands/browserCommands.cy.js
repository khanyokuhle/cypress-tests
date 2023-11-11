// In order to access document elements on the console, type document

describe('Browser Commands Suite', () => {

    beforeEach( () => {
        cy.visit('/#/login?_k=r5q2cs')
    })

    it('URI Properties', () => {
        
        cy.location().should(function(loc){
            expect(loc.host).to.eq('react-redux.realworld.io')
            expect(loc.origin).to.eq('https://react-redux.realworld.io')
            expect(loc.protocol).to.eq('https:')
        })
    })

    it('Page Reload', () => {
        cy.reload()
    })

    it('Page Navigation', () => {
        cy.contains('Need an account?').click()
        cy.go('back')
        cy.contains('Sign In').should('be.visible')
        cy.go('forward')
        cy.contains('Sign Up').should('be.visible')

    })
})