import React from 'react'
import { Navbar,
    Nav,NavItem,NavbarBrand,Container
 } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
           <Container>
               <NavbarBrand href="/">My team</NavbarBrand>
               <Nav>
                   <NavItem>
                       <Link to="/add" className="btn btn-info">Add User</Link>
                   </NavItem>
               </Nav>
           </Container>
        </Navbar>
    )
}
