/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbarStyles.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokemonLogo from '../../assets/images/pokemon-logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function NavBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function inputHandler(e) {
    setInput(e.target.value)
  }

  function searchHandler(e) {
    navigate(`/pokemon/${input}`)
  }

  console.log(inputHandler);

  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img className='poke-logo' src={pokemonLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', display: "flex", gap: "0.5rem" }}
            navbarScroll
          >
            {/* <Nav.Link href="/">Home</Nav.Link> COMO BOOTSTRAP */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Home{" "}
            </NavLink>

            <NavLink to="/sobrenosotros" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Sobre Nosotros{" "}
            </NavLink>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              style={{ marginLeft: "1.22rem" }}
              type="search"
              placeholder="Ingresa un nombre"
              className="me-2"
              aria-label="Search"
              onChange={e => inputHandler(e)}
            />
            <Button variant="outline-success" onClick={(e) => searchHandler(e)}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
  )
}
