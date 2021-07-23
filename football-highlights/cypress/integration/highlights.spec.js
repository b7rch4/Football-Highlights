describe("When I load the page", function() {
    it("Displays a heading", function() {
        cy.visit('/')
        cy.get("#heading").should("contain", "Football Highlights")
    })

    it("Displays a sub-heading", function() {
        cy.visit('/')
        cy.get("#sub-heading").should("contain", "Select two teams to see the match highlights")
    })
})