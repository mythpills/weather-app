describe("renders page on load", () => {
  it("Renders the header", () => {
    cy.visit("/");
    cy.get("header h1").should("be.visible");
    cy.get("header h1").contains("Peakon Challenge - Manager Live Search");
  });
  it("Renders the custom select", () => {
    cy.visit("/");
    cy.get("label").should("be.visible");
    cy.get("label").contains("Manager");
    cy.get(".dropdown__selected").should("be.visible");
    cy.get(".glyphicon-chevron-down").should("be.visible");
  });

  it("When user clicks into the input field, he/she sees the full list of managers", () => {
    cy.visit("/");
    cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".optionContainer").should("be.visible");
        cy.get(".optionContainer").should("have.length", 9);
        cy.get(".item-0 .optionContainer .initials").contains("HM");
        cy.get(".item-0 .optionContainer .employeeDetailsContainer .employeeName").contains("Harriet McKinney");
        cy.get(".item-0 .optionContainer .employeeDetailsContainer .employeeNameEmail").contains("harriet.mckinney@kinetar.com");
      });
  });

  it("When user starts typing into the input field, matching results appear in the list", () => {
    cy.visit("/");
    cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".dropdown__menu_search").type('eu');
        cy.get(".optionContainer").should("have.length", 1);
        cy.get(".item-3 .optionContainer .initials").contains("EW");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeName").contains("Eugene Wong");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeNameEmail").contains("eugene.wong@kinetar.com");        
      });
  });
  
  it("Managers are filtered on both first name and last name.", () => {
    cy.visit("/");
    cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".dropdown__menu_search").type('Eugene');
        cy.get(".optionContainer").should("have.length", 1);
        cy.get(".item-3 .optionContainer .initials").contains("EW");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeName").contains("Eugene Wong");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeNameEmail").contains("eugene.wong@kinetar.com");        
      });
      cy.get("label").click();
      cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".dropdown__menu_search").type('Wong');
        cy.get(".optionContainer").should("have.length", 1);
        cy.get(".item-3 .optionContainer .initials").contains("EW");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeName").contains("Eugene Wong");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeNameEmail").contains("eugene.wong@kinetar.com");        
      });

  });
  it("Managers are filtered on both first name and last name.", () => {
    cy.visit("/");
    cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".dropdown__menu_search").type('eugene');
        cy.get(".optionContainer").should("have.length", 1);
        cy.get(".item-3 .optionContainer .initials").contains("EW");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeName").contains("Eugene Wong");
        cy.get(".item-3 .optionContainer .employeeDetailsContainer .employeeNameEmail").contains("eugene.wong@kinetar.com");        
      });
      
  });

  it("Managers are filtered across first name and last name", () => {
    cy.visit("/");
    cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".dropdown__menu_search").type('tMc');
        cy.get(".optionContainer").should("have.length", 1);
        cy.get(".item-0 .optionContainer .initials").contains("HM");
        cy.get(".item-0 .optionContainer .employeeDetailsContainer .employeeName").contains("Harriet McKinney");
        cy.get(".item-0 .optionContainer .employeeDetailsContainer .employeeNameEmail").contains("harriet.mckinney@kinetar.com");        
      });
      
  });

  it("When user confirms the selection, full name is displayed in the input field and the list of available managers hides.", () => {
    cy.visit("/");
    cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".dropdown__menu_search").type('tMc');
        cy.get(".optionContainer").should("have.length", 1);
        cy.get(".item-0 .optionContainer").click();    
        cy.get(".dropdown input").should("have.value", "Harriet McKinney");
        cy.get(".optionContainer").should("have.length", 0);
      });
      
  });

  it("When the input loses focus, the list of available managers disappears and the entered value is being kept.", () => {
    cy.visit("/");
    cy.get(".dropdown__selected")
      .click()
      .then(async () => {
        cy.get(".dropdown__menu_search").type('tMc');
        cy.get(".item-0 .optionContainer").click();    
        cy.get(".dropdown input").should("have.value", "Harriet McKinney");        
      });
      cy.get(".dropdown__selected").click();
      cy.get("label").click();
      cy.get(".optionContainer").should("have.length", 0);
      cy.get(".dropdown input").should("have.value", "Harriet McKinney");   
  });



});
