class Header {
    clickProfileMenu() {
        cy.get('#profile-menu').click();
    }

    verifyLoggedUser(username) {
        cy.contains(username).should('be.visible');
    }
}

export default Header;
