describe('Test simples', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('Debe buscar un usuario correcto', () => {
        cy.get('#username')
            .type('ahmm16').should('have.value', 'ahmm16')
        cy.get('#searchData').click()
        cy.wait(3000)
        cy.get('#incorrectUser').should('not.exist')
    })
    it('Debe vaciar el usuario', () => {
        cy.get('#username')
        .type('ahmm16').should('have.value', 'ahmm16')
        cy.get('#searchData').click()
        cy.wait(3000)
        cy.get('#cleanParamsRepos').click()
    })
    it('Debe buscar un usuario incorrecto', () => {
        cy.get('#username')
            .type('ahmm1623132123').should('have.value', 'ahmm1623132123')
        cy.get('#searchData').click()
        cy.wait(3000)
        cy.get('#incorrectUser').should('be.visible')

    })
})
