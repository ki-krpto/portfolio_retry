import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Routes } from 'react-router-dom';
import Logo from './assets/Logo.webp';


function Blog() {
  return (
    <>
      <h1>Blog</h1>
    </>
  )
}

function About() {
  return (
    <>
      <h1>About</h1>
    </>
  )
}

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navigation-bar">
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
            src={Logo}
            alt="Logo"
            className="logo"
            />
            <span>Erik Shaver</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">About</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link">Projects</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="nav-link">Blog</Nav.Link>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/ki-krpto">
                  Github
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Routes>
        <Route path="/blog" element={<Blog/>} />
        <Route path="/" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;