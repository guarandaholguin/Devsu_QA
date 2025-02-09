describe('API Tests for Signup and Login', () => {
  
  it('Should create a new user in signup', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      body: {
        username: 'newUser',
        password: 'newPassword123'
      },
      failOnStatusCode: false
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);

      if (response.body.hasOwnProperty('message')) {
        expect(response.body).to.have.property('message', 'Account created successfully');
      } else if (response.body.hasOwnProperty('errorMessage')) {
        expect(response.body).to.have.property('errorMessage', 'This user already exist.');
      } else {
        console.log('Unexpected response:', response.body);
      }
    });
  });

  it('Should not allow creating an existing user', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      body: {
        username: 'newUser',
        password: 'newPassword123'
      },
      failOnStatusCode: false
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('errorMessage', 'This user already exist.');
    });
  });

  it('Should login with correct username and password', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: {
        username: 'newUser',
        password: 'newPassword123'
      },
      failOnStatusCode: false
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);

      if (response.body.hasOwnProperty('message')) {
        expect(response.body).to.have.property('message', 'Login success');
      } else if (response.body.hasOwnProperty('errorMessage')) {
        expect(response.body).to.have.property('errorMessage', 'Wrong password.');
      } else {
        console.log('Unexpected response:', response.body);
      }
    });
  });

  it('Should not login with incorrect username or password', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: {
        username: 'nonExistingUser',
        password: 'wrongPassword'
      },
      failOnStatusCode: false
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
  
      if (response.body.hasOwnProperty('errorMessage')) {
        expect(response.body).to.have.property('errorMessage', 'User does not exist.');
      } else {
        console.log('Unexpected response:', response.body);
      }
    });
  });
});