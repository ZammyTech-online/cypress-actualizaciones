class BasePage {
    navigateTo(url) {
        cy.visit(url);
    }

    getElement(selectorType, selectorValue) {
        if (selectorType === 'name') {
            return cy.get(`[name="${selectorValue}"]`);
        } else if (selectorType === 'xpath') {
            return cy.xpath(selectorValue);
        } else {
            throw new Error(`Unsupported selector type: ${selectorType}`);
        }
    }

    clickElement(selectorType, selectorValue) {
        this.getElement(selectorType, selectorValue).click();
    }

    typeText(selectorType, selectorValue, text) {
        this.getElement(selectorType, selectorValue).type(text);
    }
}

export default BasePage;
