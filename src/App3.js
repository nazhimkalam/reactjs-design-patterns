import React from 'react'
import { Modal } from './components/Modal'
import { LargeProductListItem } from './components/products/LargeProductListItem'
import { products } from './data'

const App = () => {
  return (
    <Modal>
			<LargeProductListItem product={products[0]} />
		</Modal>
  )
}

export default App
