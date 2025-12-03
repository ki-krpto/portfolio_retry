import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Routes } from 'react-router-dom';
import Logo from './assets/Logo.webp';
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase-config.js";
import {useNavigate} from "react-router-dom";

function New_note() {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")
  const [author, setAuthor] = useState("")

  const postCollectionRef = collection(db, "posts")
  let navigate = useNavigate();
  const CreatePost = async () => {
    await addDoc(postCollectionRef, {
      title, 
      postText,
      author,
      createdAt: serverTimestamp()
    });
    navigate("/notes")
  };

  return (
    <>
      <div className="CreatePostPage">
        <div className="cpContainer mt-5 pt-5">
          <h1>Create a note</h1>
          <div className="input-gp">
            <label> Title:</label>
            <input placeholder="Title" 
            onChange={(event) => {
              setTitle(event.target.value)
              }}
            />   
          </div>
          <div className="input-gp"> 
            <label className="Post"> Post:</label>
            <textarea placeholder="Post" 
            onChange={(event) => {
              setPostText(event.target.value)
            }}
            />
          </div>
          <div>
            <label> Author:</label>
            <input placeholder="Your Name" 
            onChange={(event) => {
              setAuthor(event.target.value)
              }}
            />
          </div> 
          <button onClick={CreatePost}>Submit Post</button>
        </div>
      </div>
    </>
  )
}

function Notes() {
  const [postLists, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const q = query(postCollectionRef, orderBy("createdAt", "desc"));
        const data = await getDocs(q);
        const posts = data.docs.map((doc) => ({ 
          ...doc.data(), 
          id: doc.id,
          createdAt: doc.data().createdAt?.toDate() || new Date()
        }));
        setPostList(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Error loading posts. Trying fallback method...");
        
        // Fallback to unordered fetch if there's an error
        try {
          const data = await getDocs(postCollectionRef);
          const posts = data.docs.map((doc) => ({ 
            ...doc.data(), 
            id: doc.id,
            createdAt: doc.data().createdAt?.toDate() || new Date()
          }));
          // Sort by createdAt on the client side
          posts.sort((a, b) => b.createdAt - a.createdAt);
          setPostList(posts);
          setError(null);
        } catch (fallbackError) {
          console.error("Fallback fetch failed:", fallbackError);
          setError("Failed to load posts. Please refresh the page or try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="postsContainer mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        postLists.map((post) => (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
                <p className="author">By: {post.author}</p>
              </div>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function About() {
  return (
    <>
      <div className="container">
        <div className="about-text">
          <h1 className="about-header">About</h1>
          <p className="about-subheader">I'm a web developer and aspiring pentester.</p>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <div className="container circle-wrapper">
        <img src={Logo} alt="Logo" className="Hero-Logo circular-image" />
      </div>

      <div className="container">
        <div className="hero-text">
          <h1 className="hero-header">Hi, I'm Erik Shaver</h1>
          <p className="hero-subheader">Web Developer & Aspiring Pentester</p>

          <button
            className="btn btn-primary contact-button"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
          >
            Contact
          </button>

          <button className="btn btn-primary projects-button">Projects</button>
        </div>
      </div>

      <div className="projects-section">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">
          <div className="project-card">
            <img src="/showcase1.png" alt="Project" className="project-image" />
            <h3 className="project-title">Exifuscator</h3>
            <p className="project-desc">
              Exifuscator is a tool that allows users to remove, and edit metadata from image files.
              It is written in python with PIL, and piexif. You can find it on my Github here!
            </p>
            <div className="project-links">
              <a href="https://github.com/fhs-codingclub/Exifuscator" className="glow-btn">
                See the Project!
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src="/showcase2.png" alt="Project" className="project-image" />
            <h3 className="project-title">Fallbrook HS Coding Club Website</h3>
            <p className="project-desc">
              The website for the Fallbrook High School Coding Club. It is a static website that is hosted on GitHub Pages.
            </p>
            <div className="project-links">
              <a href="https://fallbrookhs.tech" className="glow-btn">
                See the Project!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section" id="contact">
        <pre className="contact-terminal">
          {`> contact initialized...
> channels available:
             - email:    shaver.eriks@gmail.com
             - github:   github.com/ki-krpto
`}
          <span className="cursor">█</span>
        </pre>
      </div>
    </>
  );
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
              <Nav.Link as={Link} to="/About" className="nav-link">About</Nav.Link>
              <Nav.Link as={Link} to="/notes" className="nav-link">Notes</Nav.Link>
              <Nav.Link as={Link} to="/New_note" className="nav-link">New Note</Nav.Link>
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
        <Route path="/New_note" element={<New_note/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <footer className="footer">
        <p>© 2025 Erik Shaver. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;