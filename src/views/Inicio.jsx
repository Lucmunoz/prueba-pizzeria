import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  const { pizzasData, addItem } = useContext(MyContext)
  const navigate = useNavigate()

  const goToDetail = (id) => {
    navigate(`/pizza/${id}`)
  }

  return (
    <>
      <div className='pizza-container container-fluid overflow-auto pb-3'>
        <header className='d-flex justify-content-center align-items-center text-center'>
          <section className='hero-header-text'>
            <h1>¡Bienvenido! </h1>
            <h4>¿Buscar una pizza? El mejor sabor en el menor tiempo lo encuentras acá!</h4>
          </section>
        </header>

        <div className='container pt-5'>
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            {pizzasData.map((element, index) => {
              return (
                <div key={'pizza-' + index} className='col'>
                  <div className='card h-100 bg-light-subtle '>
                    <img src={element.img} className='card-img-top' alt='...' />
                    <div className='card-body '>
                      <h4 className='card-title m-0 p-0 text-center'>{element.name.toUpperCase()}</h4>
                      <hr />
                      <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                          <h5>Ingredientes:</h5>
                          <ul className='ps-0'>
                            {element.ingredients.map((element, index) => {
                              return (
                                <li key={'ingrediente-' + index}><i className='fa-solid fa-pizza-slice pe-2' />{element}</li>)
                            })}
                          </ul>
                        </li>
                      </ul>
                      <hr />
                      <h3 className='text-center pb-2'>${(element.price / 1000).toFixed(3)}</h3>
                      <div className='d-flex justify-content-center gap-3'>
                        <button className='btn btn-secondary col-5 d-flex align-items-center justify-content-center' type='button' onClick={() => goToDetail(element.id)}><p className='m-0'>Ver Más</p><i className='fa-solid fa-circle-info ps-2' /></button>
                        <button className='btn btn-success col-5 d-flex align-items-center justify-content-center' type='button' onClick={() => addItem(element.id)}><p className='m-0'>Añadir</p><i className='fa-solid fa-cart-plus ps-2' /></button>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default Inicio
