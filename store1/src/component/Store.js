import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import storeItems from "../data/storeItems.json"
import StoreItem from './StoreItem'

const Store = () => {
  return (
    <Row lg={3} md={2} xs={1} className="g-3">
     {storeItems.map((item)=>(
      <Col key={item.id}>
        <StoreItem {...item}/>
      </Col>
     ))}
    </Row>
  )
}


export default Store
