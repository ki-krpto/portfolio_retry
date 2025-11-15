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

function Home() {
  return (
    <>
    <div className="container circle-wrapper">
      <img src={Logo} alt="Logo" className="Hero-Logo circular-image"/>
    </div>
    <div className="container">
      <div className="hero-text">
        <h1 className="hero-header">Hi, I'm Erik Shaver</h1>
        <p className="hero-subheader">Web Developer & Aspiring Pentester</p>
        <button className="btn btn-primary contact-button">Contact</button>
        <button className="btn btn-primary projects-button">Projects</button>
      </div>
    </div>
    </>
  )
}

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
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <footer className="footer">
        <p>© 2025 Erik Shaver. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;