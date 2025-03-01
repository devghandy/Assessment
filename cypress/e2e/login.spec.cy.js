
describe('Example Test', () => {
        
    it('valid login', () => {
        cy.get('[data-test=username]').fill('standard_user')
        cy.get('[data-test=password]').fill('secret_sauce')
        cy.get('[data-test=login-button]').click()
    });

    it('Invalid Login - Incorrect Username', () => {
        cy.get('[data-test=username]').fill('invalid_user')
        cy.get('[data-test=password]').fill('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').should('contain', 'Username and password do not match')
    });

    it('Invalid Login - Locked-out Username', () => {
        cy.get('[data-test="username"]').fill('locked_out_user');
        cy.get('[data-test="password"]').fill('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
          .and('contain', 'Sorry, this user has been locked out.');
    });

    it('Invalid Login - No Username', () => {
        cy.get('[data-test="password"]').fill('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible')
          .and('contain', 'Username is required');
    });


    it('Invalid Login - No Passord', () => {
        cy.get('[data-test="username"]').fill('standard_user');
        cy.get('[data-test="login-button"]').click();

        // Verify error message
        cy.get('[data-test="error"]').should('be.visible')
          .and('contain', 'Password is required');
    });

});
        