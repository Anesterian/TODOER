import React, {useState} from 'react'
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
  const [inBasket, setinBasket] = useState()
  return(
    <Shops>
      <Shops.List>
        {tradeThings.map(item =>
        <Shops.Item key={item.id}>
          <Shopitem
            title={item.title}
            description={item.description}
            price={item.price}
            onClick = {setinBasket}
            />
        </Shops.Item>
      )
    }
      </Shops.List>
    </Shops>
  )
}

export default Shop
