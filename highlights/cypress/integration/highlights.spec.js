describe("When I load the page", function() {
    it("Displays a heading", function() {
        cy.visit('/')
        cy.get("#heading").should("contain", "Football Highlights")
    })

    it("Displays a sub-heading", function() {
        cy.visit('/')
        cy.get("#subheading").should("contain", "Select a team to see their highlights")
    })

    it("Displays the first dropdown with inital message", function() {
        cy.visit('/')
        cy.get("#dropdown-1").should("have.value", "Select the home team")
    })

    it("Displays the second dropdown with inital message", function() {
        cy.visit('/')
        cy.get("#dropdown-2").should("have.value", "Select the away team")
    })

    it("Displays the search button", function() {
        cy.visit('/')
        cy.get("#search").should("have.value", "Search")
    })
})

xdescribe("Selecting an option", function() {
    it("Selects Liverpool", function() {
        cy.visit('/')
        cy.get("#dropdown").select("Liverpool")
        cy.get("#dropdown").should("have.value", "Liverpool")
    })
})

describe("Displaying the video", function() {
    it("Embeds video", function() {
        cy.visit('/')
    })
})