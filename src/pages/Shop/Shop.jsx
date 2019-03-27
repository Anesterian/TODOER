import React from 'react'

const tradeThings = [
  {
    id: 1,
    title: 'Thing1',
    description: 'Description for Thing1',
    cost: '30'
  },
  {
    id: 2,
    title: 'Thing2',
    description: 'Description for Thing2',
    cost: '45'
  },
  {
    id: 3,
    title: 'Thing3',
    description: 'Description for Thing3',
    cost: '20'
  },
  {
    id: 4,
    title: 'Thing4',
    description: 'Description for Thing4',
    cost: '130'
  },
  {
    id: 5,
    title: 'Thing5',
    description: 'Description for Thing5',
    cost: '5'
  },
  {
    id: 6,
    title: 'Thing6',
    description: 'Description for Thing6',
    cost: '500'
  },
]
const Shop = () => {
  return(
    <Shop>
      <Shop.List>
        {tradeThings.map(item =>
        <Shop.Item key={item.id}>
          <Shopitem
            title={item.title}
            description={item.description}
            cost={item.cost}
            />
        </Shop.Item>
      )
    }
      </Shop.List>
    </Shop>
  )
}

export default Shop
