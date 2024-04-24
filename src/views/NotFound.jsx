import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const goToIndex = () => {
    navigate('/')
  }

  return (
    <div>
      <div className='container-fluid col-7 pt-5 text-center'>
        <img src='/Notfound.jpg' />
        <h3 className='pt-4'>No hemos encontrado la página!</h3>
        <h5 className='py-4'>¡Te invitamos a revisar nuestras variedades y deja que nuestros maestros pizzeros te rorprendan!</h5>
        <button className='btn btn-secondary ms-auto me-auto d-flex' type='button' onClick={goToIndex}><p className='m-0'>Ver nuestras Pizzas</p></button>
      </div>
    </div>
  )
}

export default NotFound
