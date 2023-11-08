import{test, expect} from '@playwright/test'
import{LoginPage} from '../pages/login'

test('Login', async({page}) => {

    const Login = new LoginPage(page)

    //as async is used here, we have to use await keyword
    await Login.launchLogin()
    await Login.login('tomsmith','SuperSecretPassword!')

})