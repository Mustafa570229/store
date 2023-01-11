import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Container, Navbar as NavbarBS, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
    const {openCart,cartQuantity}=useShoppingCart()
    return (
        <NavbarBS sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button variant='outline-primary' className='rounded-circle'
                    style={{ width: "3rem", height: "3rem", position: "relative",}} onClick={openCart}>
                    <FaShoppingCart style={{fontSize:"20px"}}/>
                    <div className='rounded-circle bg-danger d-flex 
                    justify-content-center align-items-center ps-1 pe-1'
                    style={{position:'absolute',color:"#fff", right:"0px",height:"1.3rem",width:"1.3rem"}}>{cartQuantity}</div>
                </Button>


            </Container>
        </NavbarBS>
    )
}

export default Navbar
