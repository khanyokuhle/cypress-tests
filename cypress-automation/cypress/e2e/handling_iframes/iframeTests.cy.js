
describe('Handling IFrames and Frames', () => {
    beforeEach( () => {
        cy.visit('https://demoqa.com/frames')
    })

    it.skip('IFrame Test Case', () => {
        cy.frameLoaded('#frame1')
        cy.iframe('#frame1').find('#sampleHeading').should('be.visible')
    })
})