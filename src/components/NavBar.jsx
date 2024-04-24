import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const navBar = () => {
  const { total } = useContext(MyContext)
  return (
    <>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid col-10'>
          <div className='navbar-brand'>
            <NavLink className='nav-link' to='/'><img src='./pizza-svgrepo-com.svg' height='30' />Pizzería Mamma Mía</NavLink>
          </div>
          <NavLink className='nav-link d-flex flex-row align-items-center' to='/cart'><img src='./shopping-cart-svgrepo-com.svg' height='30' /><h5 className='m-0 ps-2'>${total !== 0 ? (total / 1000).toFixed(3) : 0}</h5></NavLink>
        </div>
      </nav>
    </>
  )
}

export default navBar
