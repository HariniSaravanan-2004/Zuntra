import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <div className='navbar'>

      <h1 className='logo'>Pinterest</h1>

      <div className='nav-links'>

        <Link to='/'>Home</Link>

        <Link to='/create'>Create Pin</Link>

        <Link to='/login'>Login</Link>

      </div>

    </div>

  )

}

export default Navbar