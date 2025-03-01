it('Valid Product Addition and Checkout', () => {
    cy.get('[data-test=username]').fill('standard_user');
    cy.get('[data-test=password]').fill('secret_sauce');
    cy.get('[data-test=login-button]').click();

    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test=checkout]').click();

    cy.get('[data-test=firstName]').fill('John');
    cy.get('[data-test=lastName]').fill('Doe');
    cy.get('[data-test=postalCode]').fill('12345');
    cy.get('[data-test=continue]').fill();
    cy.get('#finish').click();

    cy.get('.complete-header').should('contain', 'Thank you for your order');
    it('Invalid Checkout - Missing Information', () => {
        cy.get('[data-test=username]').fill('standard_user');
        cy.get('[data-test=password]').fill('secret_sauce');
        cy.get('[data-test=login-button]').click();
        
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test=checkout]').click();
        
        cy.get('[data-test=continue]').click();
        cy.get('[data-test=error]').should('contain', 'Error: First Name is required');
    });

    it('Invalid Checkout - Remove Product Before Checkout', () => {
        cy.get('[data-test=username]').fill('standard_user');
        cy.get('[data-test=password]').fill('secret_sauce');
        cy.get('[data-test=login-button]').click();

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test=remove-sauce-labs-backpack]').click();
        cy.get('[data-test=checkout]').should('be.disabled');
    });
});