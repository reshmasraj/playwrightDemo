exports.LoginPage = class LoginPage {
    // adding exports for importing this class from other files
    //we cannot pass directly page, same page should be passed from the test. for that we are creating a constructor
    //constructor
    constructor(page) {
        this.page = page //creating a class variable page and the value will be the passed value
        //making class variables
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
    }

    async launchLogin(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
//commit check
}