import LoginFlow from '../../pages/flows/LoginFlow';

describe('Regression Test Suite - OrangeHRM', () => {
    const loginFlow = new LoginFlow();

    it('Should login and verify user profile', () => {
        const username = 'Admin';
        const password = 'admin123';

        // Usar el flujo de login
        loginFlow.login(username, password);

        // Verificar que el Dashboard sea visible
        cy.contains('Dashboard').should('be.visible');

        // Verificar la URL actual después del login
        cy.url().should('include', '/dashboard');
    });
});
