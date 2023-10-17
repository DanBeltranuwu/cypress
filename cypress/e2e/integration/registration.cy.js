describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('https://angular-6-registration-login-example.stackblitz.io/register')
        cy.wait(7000)
    })
    it('Test links between registration and login page', () => {
        cy.get('span._aacl._aaco._aacw._aad0._aad7').click()
        cy.url().should('eq', 'https://https://www.instagram.com/accounts/emailsignup/')
        cy.get('<a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd" href="/accounts/login/?source=auth_switcher" role="link" tabindex="0">Inicia sesión</a>').click()
        cy.url().should('eq', 'https://angular-6-registration-login-example.stackblitz.io/register')
    })
    it('Test form feedback', () => {
        cy.get('button.btn.btn-primary').click()
        cy.wait(1000)
        cy.get('div.invalid-feedback').then(($divs)=>{
            expect($divs.length).to.equal(4)
        })
    })
    it('Create an user and login', ()=>{
        cy.get('form').within(() => {
            cy.get('input[formcontrolname="firstName"]').type('Monitor')
            cy.get('input[formcontrolname="lastName"]').type('Pruebas')
            cy.get('input[formcontrolname="username"]').type('pruebas')
            cy.get('input[formcontrolname="password"]').type('MISO4208')
            cy.get('button.btn.btn-primary').click()
        })
        cy.wait(1000)
        //Redirected to login
        cy.get('div.alert.alert-success').should('be.visible')  
        cy.get('form').within(() => {
            cy.get('input[formcontrolname="username"]').type('pruebas')
            cy.get('input[formcontrolname="password"]').type('MISO4208')
            cy.get('button.btn.btn-primary').click()
        })
        cy.wait(1000)
        //logged in
        cy.get('h1').then(($header)=>{
            expect($header[0].innerText).to.equal('Hi Monitor!')
        })  
    })
  })