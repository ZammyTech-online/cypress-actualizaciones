import LoginFlow from '../../pages/flows/LoginFlow';

describe('Smoke Test Suite - OrangeHRM', () => {
    const loginFlow = new LoginFlow();

    it('Should login successfully to OrangeHRM', () => {
        const username = 'Admin';
        const password = 'admin123';

        // Usar el flujo de login
        loginFlow.login(username, password);

        // Verificar que el usuario haya iniciado sesión correctamente
        cy.contains('Dashboard').should('be.visible');
    });
});
