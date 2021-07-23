describe("When I load the page", function() {
    it("Displays a heading", function() {
        cy.visit('/')
        cy.get("#heading").should("contain", "Football Highlights")
    })

    it("Displays a sub-heading", function() {
        cy.visit('/')
        cy.get("#sub-heading").should("contain", "Select two teams to see the match highlights")
    })

    it("Displays the first dropdown with an initial message", function() {
        cy.visit('/')
        cy.get("#dropdown-1").should("have.value", "Select the home team")
    })

    it("Displays the second dropdown with initial message", function() {
        cy.visit('/')
        cy.get("#dropdown-2").should("have.value", "Select the away team")
    })

    it("Displays the search button", function() {
        cy.visit('/')
        cy.get("#search").should("have.value", "Search")
    })
    
})