import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button onClick={onLogout} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)