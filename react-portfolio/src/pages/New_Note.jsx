import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config.js";

export default function New_note() {
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