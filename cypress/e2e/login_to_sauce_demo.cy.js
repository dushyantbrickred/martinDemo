describe('Add items to a cart', () => {
    it('should navigate to saucedemo', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.url().should('contain','saucedemo')
    })

    it('should login to sauce demo', () =>{
        cy.get("#user-name").clear();
        cy.get("#user-name").type("standard_user")
        cy.get("#password").clear()
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.url().should('contain','inventory')
    })

    it('should select low to high on the drop down',() => {
        cy.get(".product_sort_container").select("Price (low to high)");
    })

    it('should buy the lowest price item', ()=> {
        cy.get("#add-to-cart-sauce-labs-onesie").click();
        cy.get("#remove-sauce-labs-onesie").should('be.visible');
    })

    it('should buy the highest price item', () => {
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
        cy.get("#remove-sauce-labs-fleece-jacket").should('be.visible');
    })

    
})