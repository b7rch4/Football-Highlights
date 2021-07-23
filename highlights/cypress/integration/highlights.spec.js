describe("When I load the page", function() {
    it("Displays a heading", function() {
        cy.visit('/')
        cy.get("#heading").should("contain", "Football Highlights")
    })

    it("Displays a sub-heading", function() {
        cy.visit('/')
        cy.get("#subheading").should("contain", "Select teams to see the match highlights")
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

describe("Selecting an option", function() {
    it("First dropdown selects Argentina", function() {
        cy.visit('/')
        cy.get("#dropdown-1").select("Argentina")
        cy.get("#dropdown-1").should("have.value", "Argentina")
    })

    it("Second dropdown selects Brazil", function() {
        cy.visit('/')
        cy.get("#dropdown-2").select("Brazil")
        cy.get("#dropdown-2").should("have.value", "Brazil")
    })
})

describe("Displaying the video", function() {
    it("Embeds video", function() {
        cy.visit('/')
        cy.get("#dropdown-1").select("Argentina")
        cy.get("#dropdown-2").select("Brazil")
        cy.get("#search").click()
        cy.get("#video").should("be.visible")
    })
})