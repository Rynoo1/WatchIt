import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Footer() {
  const admin = localStorage.getItem("admin");
  const [loggedIn, setLoggedIn] = useState();
  const [normal, setNormal] = useState();
  const [loggedOut, setLoggedOut] = useState();

  console.log(admin);

  useEffect(() => {
    if (admin === "true") {
      setLoggedIn(true);
      setLoggedOut(false);
      setNormal(false);
    } else if (admin === "false") {
      setLoggedIn(false);
      setLoggedOut(false);
      setNormal(true);
    }else {
      setLoggedIn(false);
      setLoggedOut(true);
      setNormal(false);
    };
  }, []);

  const handleLog = (e) => {
    localStorage.clear();
    window.location = '/';
  }

  return (
    <div className='backgblue'>
      {/* Footer for Admin */}
{ loggedIn && <Row className='w-100 py-3 mt-3'>
                  <Col> <NavLink to="/" className='linkaccent'> <h1 className='prime'>Watch<span className='accent'>It</span></h1> </NavLink>  </Col>
                  <Col sm={{span:3 }} className='pt-2'> <NavLink to="/orders" className='linkaccent'><h2 className='roboto white'>Orders</h2></NavLink> </Col>
                  <Col sm={3} className='pt-2'> <NavLink to="/inventory" className='linkaccent'><h2 className='roboto white'>Inventory</h2></NavLink> </Col>
                  <Col sm={3} className='pt-2'> <NavLink onClick={handleLog} className='linkaccent'><h2 className='roboto white'> Logout </h2></NavLink> </Col>
              </Row>}

     {/* Footer for User */}
{ normal && <Row className='w-100 py-3 mt-3'>
                  <Col> <NavLink to="/" className='linkaccent'> <h1 className='prime'>Watch<span className='accent'>It</span></h1> </NavLink>  </Col>
                  <Col sm={{span:2, offset:1 }} className='pt-2'> <NavLink to="/allprod" className='linkaccent'><h2 className='roboto white'>Products</h2></NavLink> </Col>
                  <Col sm={3} className='pt-2'> <NavLink to="/checkout" className='linkaccent'><h2 className='roboto white'> Checkout </h2></NavLink> </Col>
                  <Col sm={3} className='pt-2'> <NavLink onClick={handleLog} className='linkaccent'><h2 className='roboto white'> Logout </h2></NavLink> </Col>
              </Row>}

      {/* Footer for not logged in */}
{ loggedOut && <Row className='w-100 py-3 mt-3'>
                  <Col> <NavLink to="/" className='linkaccent'> <h1 className='prime'>Watch<span className='accent'>It</span></h1> </NavLink>  </Col>
                  <Col sm={{span:2, offset: 4}} className='pt-2'> <NavLink to="/signup" className='linkaccent'><h2 className='roboto white'> Sign Up </h2></NavLink> </Col>
                  <Col sm={3} className='pt-2'> <NavLink to="/signup" className='linkaccent'><h2 className='roboto white'> Log In </h2></NavLink> </Col>
              </Row>}

    </div>
  )
}

export default Footer