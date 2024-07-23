import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  onSuccess = jwt => {
    Cookies.set('jwt_token', jwt, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLogin = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    console.log('In Login Route')
    const jwt = Cookies.get('jwt_token')
    console.log(jwt)

    if (jwt !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <h1>Please Login</h1>
        <button onClick={this.onLogin} type="button">
          Login with Sample Creds
        </button>
      </>
    )
  }
}

export default Login