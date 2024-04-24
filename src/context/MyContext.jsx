import { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

const MyContextProvider = ({ children }) => {
  const [pizzasData, setPizzasData] = useState([])
  const [pizzaData, setPizzaData] = useState([])
  const [cartData, setCartData] = useState([])
  const [total, setTotal] = useState(0)

  const addItem = (id) => {
    // https://stackoverflow.com/questions/70104545/react-ui-not-updating-although-im-changing-the-state
    const cartDataItem = [...cartData]
    const objectIndex = cartDataItem.findIndex(obj => obj.id === id)
    cartDataItem[objectIndex].cantidad += 1
    setCartData(cartDataItem)
    let tempTotal = 0
    cartDataItem.forEach(element => {
      tempTotal = tempTotal + (element.cantidad * element.price)
    })
    setTotal(tempTotal)
  }

  const removeItem = (id) => {
    const cartDataItem = [...cartData]
    const objectIndex = cartDataItem.findIndex(obj => obj.id === id)

    if (cartDataItem[objectIndex].cantidad !== 0) {
      cartDataItem[objectIndex].cantidad -= 1
      let tempTotal = 0
      cartDataItem.forEach(element => {
        tempTotal = tempTotal + (element.cantidad * element.price)
      })
      setTotal(tempTotal)
    }

    setCartData(cartDataItem)
  }

  const getPizzaData = async () => {
    const response = await fetch('/pizzas.json')
    const data = await response.json()
    setPizzasData(data)

    setCartData(data.map((element) => {
      return { ...element, cantidad: 0 }
    }))
  }

  useEffect(() => {
    getPizzaData()
  }, [])

  return (
    <MyContext.Provider value={{ pizzasData, pizzaData, setPizzaData, cartData, setCartData, addItem, removeItem, total, setTotal }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
