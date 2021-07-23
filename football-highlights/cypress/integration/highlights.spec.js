describe("When I load the page", function() {
    it("Displays a heading", function() {
        cy.visit('/')
        cy.get("#heading").should("contain", "Football Highlights")
    })
})