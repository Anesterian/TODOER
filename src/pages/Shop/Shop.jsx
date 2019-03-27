import React from 'react'
import {Shops} from './styled'
import { Shopitem } from './internal'

const tradeThings = [
  {
    id: 1,
    title: 'Thing 1',
    description: 'Description for Thing1',
    price: 30
  },
  {
    id: 2,
    title: 'Thing2',
    description: 'Description for Thing2',
    price: 45
  },
  {
    id: 3,
    title: 'Thing3',
    description: 'Description for Thing3',
    price: 20
  },
  {
    id: 4,
    title: 'Thing4',
    description: 'Description for Thing4',
    price: 130
  },
  {
    id: 5,
    title: 'Thing5',
    description: 'Description for Thing5',
    price: 5
  },
  {
    id: 6,
    title: 'Thing6',
    description: 'Description for Thing6',
    price: 500
  },
]
const Shop = () => {
  return(
    <Shops>
      <Shops.List>
        {tradeThings.map(item =>
        <Shops.Item key={item.id}>
          <Shopitem
            title={item.title}
            description={item.description}
            price={item.price}
            onClick = {console.log('1')}
            />
        </Shops.Item>
      )
    }
      </Shops.List>
    </Shops>
  )
}

export default Shop
