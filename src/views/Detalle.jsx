import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Detalle = () => {
  const { id } = useParams()
  const { pizzasData, pizzaData, setPizzaData, addItem } = useContext(MyContext)

  const navigate = useNavigate()
  setPizzaData(pizzasData.find((element) => element.id === id))

  const goBack = () => {
    navigate('/')
  }

  return (
    <>
      <div className='container-fluid col-8 border d-flex flex-row mt-5 align-items-center bg-light-subtle'>
        <div className='col-5 p-3'>
          <img className='w-100' src={pizzaData.img} />
        </div>
        <div className='p-3'>
          <h3>{pizzaData.name.toUpperCase()}</h3>
          <hr />
          <p>{pizzaData.desc}</p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <h5>Ingredientes:</h5>
              <ul className='ps-0'>
                {pizzaData.ingredients.map((element, index) => {
                  return (
                    <li key={'ingrediente-' + index}><i className='fa-solid fa-pizza-slice pe-2' />{element}</li>)
                })}
              </ul>
            </li>
          </ul>
          <div className='d-flex flex-row '>
            <h2>Precio: $5.990</h2>
            <button className='ms-auto btn btn-success d-flex align-items-center justify-content-center' type='button' onClick={() => addItem(pizzaData.id)}><p className='m-0'>Añadir</p><i className='fa-solid fa-cart-plus ps-2' /></button>
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <button className='btn btn-secondary ms-auto me-auto d-flex' type='button' onClick={goBack}><p className='m-0'>Regresar</p></button>
      </div>
    </>
  )
}

export default Detalle
