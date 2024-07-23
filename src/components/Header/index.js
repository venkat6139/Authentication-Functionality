import {Link} from 'react-router-dom'

const Header = () => {
  console.log('In Home')

  return (
    <>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/about">About</Link>
    </>
  )
}

export default Header
