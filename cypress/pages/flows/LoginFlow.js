import BasePage from '../../support/POM/BasePage';

class LoginFlow extends BasePage {
    login(username, password) {
        // Navegar a la página de login
        this.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        // Llenar los campos de nombre de usuario y contraseña
        this.typeText('name', 'username', username);
        this.typeText('name', 'password', password);

        // Hacer clic en el botón de submit
        this.clickElement('xpath', '//button[@type="submit"]');
    }
}

export default LoginFlow;
