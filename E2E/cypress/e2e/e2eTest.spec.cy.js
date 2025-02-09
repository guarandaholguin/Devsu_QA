describe('Flujo de compra en Saucedemo', () => {
  it('debe completar el flujo de compra', () => {
    cy.visit('https://www.saucedemo.com/');
    
    // Iniciar sesión
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"]').type('secret_sauce');
    cy.get('input[type="submit"]').click();
    
    // Agregar productos al carrito
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.inventory_item').eq(1).find('button').click();
    
    // Ver el carrito
    cy.get('.shopping_cart_link').click();
    
    // Completar la compra
    cy.get('.checkout_button').click();
    cy.get('input[name="firstName"]').type('Carlos');
    cy.get('input[name="lastName"]').type('Guaranda');
    cy.get('input[name="postalCode"]').type('12345');
    cy.get('input.submit-button').click();
    cy.get('[data-test="finish"]').click();

    // Esperar un poco (ajusta el tiempo si es necesario)
    cy.wait(2000); // Esperar 2 segundos para dar tiempo al mensaje

    cy.get('.complete-header').should('contain', 'Thank you for your order!').should('be.visible');
  });
});