/*
    Hi! funny seeing you here.
    this is the main file where most of the logic lives, feel free to poke around its fun in here.
    Anyways...
    Ai assistance disclosure yahoo!
    I used Ai tools to help develop this project (Chatgpt/Windsurf)
      -Guidance while structuring react components
      -Clarification on error handling approaches
      -Helped guide through my main bug (kept forgetting to put my routes around line 268) as well as importing images/assets dynamically
      rather than locally src/assets

      All final code, logic, and design decisions were written and implemented by me
*/

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Routes } from 'react-router-dom';
import Logo from './assets/Logo.webp';
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase-config.js";
import { useNavigate } from "react-router-dom";
import About from "./pages/About";
import Notes from "./pages/Notes";
import New_note from "./pages/New_Note";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navigation-bar w-100">
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
            src={Logo}
            alt="Logo"
            className="logo me-3"
            />
            <span>Erik Shaver</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
              <Nav.Link as={Link} to="/notes" className="nav-link">Notes</Nav.Link>
              <Nav.Link as={Link} to="/new_note" className="nav-link">New Note</Nav.Link>
              <Nav.Link as={Link} to="/Projects" className="nav-link">Projects (Full)</Nav.Link>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/ki-krpto">
                  Github
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <ThemeToggle />
        </div>
      </Navbar>
      <Routes>
        <Route path="/new_note" element={<New_note />} />
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <footer className="footer">
        <p> 2025 Erik Shaver. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;