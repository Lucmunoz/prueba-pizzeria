import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartData, addItem, removeItem, total } = useContext(MyContext)
  const navigate = useNavigate()
  if (typeof (cartData) === 'undefined') {
    return <></>
  }

  const goBack = () => {
    navigate('/')
  }

  let cartElements = 0

  cartData.forEach((element) => (cartElements = cartElements + element.cantidad))

  const carroVacio = () => {
    return (
      <>
        <div className='container-fluid col-7'>
          <div className='mt-5 p-5 bg-light-subtle border d-flex flex-row align-items-center'>
            <img src='public/emptyCart.png' alt='Imagen carro vacío' />
            <div className='d-flex flex-column'>
              <h3>Tu carro está vacío</h3>
              <h5 className='pb-4'>No pierdas tiempo, revisa y disfruta de nuestra amplia oferta de pizzas!</h5>
              <button type='button ' className='btn btn-secondary col-4 me-auto ms-auto' onClick={goBack}>Ver pizzas</button>
            </div>
          </div>
        </div>
      </>

    )
  }

  const showCartData = () => {
    return (
      <>
        <div className='container-fluid col-7'>
          <div className='mt-5 p-5 bg-light-subtle border'>
            <ul className='list-group list-group-flush'>
              {cartData.map((element, index) => {
                return element.cantidad !== 0
                  ? (
                    <li key={'pizaCart' + index} className='list-group-item'>
                      <div className='d-flex flex-row align-items-center'>
                        <img className='img-thumbnail border-0' src={element.img} />
                        <h5 className='ps-2 m-0'>{element.name[0].toUpperCase() + element.name.slice(1)}</h5>
                        <h5 className='ms-auto pe-2 m-0'>${(element.price / 1000).toFixed(3)}</h5>
                        <button type='button ' className='btn btn-danger cart-qty-button m-0' onClick={() => removeItem(element.id)}>-</button>
                        <h5 name='qty' className='px-3 m-0 qty-text text-center'>{element.cantidad}</h5>
                        <button type='button ' className='btn btn-secondary cart-qty-button' onClick={() => addItem(element.id)}>+</button>
                      </div>
                    </li>
                    )
                  : ''
              })}
            </ul>
            <hr />
            <div className='text-center'>
              <h2 className='pb-3'>{`Total: ${total !== 0 ? (total / 1000).toFixed(3) : 0}`}</h2>
              <button type='button ' className='btn btn-secondary'>Ir a Pagar</button>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (cartElements !== 0 ? showCartData() : carroVacio())
}

export default Cart
