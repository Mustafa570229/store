import React from 'react'
import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from "../component/CartItem"
import formatCurrency from './formatCurrency'
import storeItems from "../data/storeItems.json"

const ShoppingCart = ({isOpen}) => {
    const {cartItems,closeCart,}=useShoppingCart()
    
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Stack gap={3}>
              {cartItems.map((item)=>(
                    <CartItem key={item.id} {...item}/>
                ))}
               <div className=' fw-bold fs-5 text-success'>
                Total{" : "}
               {formatCurrency(
                    cartItems.reduce((total,CartItem)=>{
                        const item=storeItems.find((i)=>i.id===CartItem.id)
                        return total +(item?.price || 0)*CartItem.quantity
                    },0)
                )}
               </div>
              </Stack>
              
            </Offcanvas.Body>


        </Offcanvas>
    )
}

export default ShoppingCart
