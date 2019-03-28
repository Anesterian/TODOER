import React, {useState, useEffect} from 'react'
import {Shops} from './styled'
import { Shopitem } from './internal'

const tradeThings = [
  {
    id: 1,
    title: 'Thing 1',
    description: 'Description for Thing 1',
    price: 30
  },
  {
    id: 2,
    title: 'Thing 2',
    description: 'Description for Thing 2',
    price: 45
  },
  {
    id: 3,
    title: 'Thing 3',
    description: 'Description for Thing 3',
    price: 20
  },
  {
    id: 4,
    title: 'Thing 4',
    description: 'Description for Thing 4',
    price: 130
  },
  {
    id: 5,
    title: 'Thing 5',
    description: 'Description for Thing 5',
    price: 5
  },
  {
    id: 6,
    title: 'Thing 6',
    description: 'Description for Thing 6',
    price: 500
  },
]

const Shop = () => {
  const [inBasket, setinBasket] = useState(initialValue)
  const initialValue = () => window.localStorage.getItem('inBasket')
  useEffect(() => {
    window.localStorage.setItem('inBasket', inBasket)
    setb([...b, inBasket])
  }, [inBasket])
  const [b, setb] = useState([])
  localStorage.setItem("b", JSON.stringify(b))
  var storeditems = JSON.parse(localStorage.getItem("b"))
  return(
    <Shops>
      <Shops.List>
        {tradeThings.map(item =>
        <Shops.Item key={item.id}>
          <Shopitem
            checked={item.id === inBasket}
            title={item.title}
            description={item.description}
            price={item.price}
            onClick = {() => setinBasket(item.id)}
            />
        </Shops.Item>
      )
    }
    <ul>
      {storeditems.length > 2 ? storeditems.map((shopitem, i) =>
      <li key={i}>{shopitem}</li>) : ''}
    </ul>
      </Shops.List>
    </Shops>
  )
}

export default Shop
