// https://docs.cypress.io/api/introduction/api.html

describe('p3', () => {

  let post = {
    title: 'My First Test Blog Post',
    author: 'Antonie Kowal'
  };

  it('visits the homepage', () => {
    cy.visit('/');
    cy.contains('p', 'Welcome to my crappy landing page!');
  })

  it('shows all posts', () => {
    cy.visit('posts');

    // cy.contains('[data-test="post-title"]', post.title);
    cy.get('[data-test="post-title"]').should('have.gte.length', 5);

    cy.get('[data-test="post-title"]').contains(post.title).click();

    cy.contains('[data-test="author"]', post.author);
  })

  it('login with dev credentials, create new post, view all', () => {
    cy.visit('account');

    cy.get('[data-test="toggle-form"]').click();

    cy.get('[data-test="email"]').type('test@harvard.edu');

    cy.get('[data-test="password"]').type('12345678');

    cy.get('[data-test="login-button"]').click().wait(2000);

    cy.get('[data-test="create post"]').click();

    cy.get('[data-test="author"]').type('Cypress');

    cy.get('[data-test="title"]').type('Cypress e2e test');

    cy.get('[data-test="post-content"]').type('This post was created with a Cypress e2e test.');

    cy.get('[type="radio"]').first().check();

    cy.get('[data-test="submit-post"]').click().wait(2000);

    cy.visit('account');

    cy.get('[data-test="logout"]').click();

  })
})
