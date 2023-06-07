describe('Testando menção das notas', () => {
    it('Deve exibir a menção correta para cada nota', () => {
      cy.visit('/'); // Supondo que a página inicial do sistema seja a rota '/'
  
      // Verificar a menção para a nota 9.5
      cy.get('[data-testid="nota-input"]').type('9.5');
      cy.get('[data-testid="calcular-button"]').click();
      cy.get('[data-testid="mencao"]').should('have.text', 'SS - Superior');
  
      // Verificar a menção para a nota 7.8
      cy.get('[data-testid="nota-input"]').clear().type('7.8');
      cy.get('[data-testid="calcular-button"]').click();
      cy.get('[data-testid="mencao"]').should('have.text', 'MS - Médio Superior');
  
      // Verificar a menção para a nota 6.3
      cy.get('[data-testid="nota-input"]').clear().type('6.3');
      cy.get('[data-testid="calcular-button"]').click();
      cy.get('[data-testid="mencao"]').should('have.text', 'MM - Médio');
  
      // Verificar a menção para a nota 4.2
      cy.get('[data-testid="nota-input"]').clear().type('4.2');
      cy.get('[data-testid="calcular-button"]').click();
      cy.get('[data-testid="mencao"]').should('have.text', 'MI - Médio Inferior');
  
      // Verificar a menção para a nota 2.0
      cy.get('[data-testid="nota-input"]').clear().type('2.0');
      cy.get('[data-testid="calcular-button"]').click();
      cy.get('[data-testid="mencao"]').should('have.text', 'II - Inferior');
  
      // Verificar a menção para a nota 0
      cy.get('[data-testid="nota-input"]').clear().type('0');
      cy.get('[data-testid="calcular-button"]').click();
      cy.get('[data-testid="mencao"]').should('have.text', 'SR - Sem rendimento');
  
      // Verificar a menção para uma nota inválida
      cy.get('[data-testid="nota-input"]').clear().type('11');
      cy.get('[data-testid="calcular-button"]').click();
      cy.get('[data-testid="mencao"]').should('have.text', 'Nota inválida');
    });
  });
  