import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Inicio, Detalle, NotFound, Cart } from './views'

const App = () => {
  return (
    <>
      <div className='container-fluid border bg-primary vh-100 overflow-hidden p-0 m-0'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/:id' element={<Detalle />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
/*

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<Detalle />} />
        <Route path='*' element={<NotFound />} />
        </Routes>  */
