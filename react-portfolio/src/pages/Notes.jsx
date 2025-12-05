import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config.js";

export default function Notes() {
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