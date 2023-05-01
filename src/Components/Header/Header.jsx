import React from 'react'
import { Container, Row } from 'react-bootstrap';
import './Header.css';
import { Cart } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className='py-3 bg-light shadow-sm'>
        <Container>
            <Row>
                <div className="col-2">
                    <h4 className='m-0 text-primary'>Product</h4>
                </div>
                <div className="col-10 d-flex align-items-center justify-content-end">
                    <nav>
                        <ul className='p-0 m-0 list-unstyled d-flex'>
                            <li>
                                <NavLink to='/' className='text-decoration-none text-primary px-3'>Home</NavLink>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-primary px-3'>About</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-primary px-3'>Contact</a>
                            </li>
                            <li>
                                <NavLink to='/cart' className='text-decoration-none text-primary px-3'>
                                    <Cart/>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Row>
        </Container>
      </header>
    </div>
  )
}

export default Header
