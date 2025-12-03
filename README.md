# Erik Shaver – Portfolio Website
## Overview
This is my personal portfolio site built with react + vite
I implemented a blog posting system which uses Firebase Firestore. When posts are created they are stored in the database. My project then pulls from the database to show the posts on the notes page.
This is an ongoing project, I plan to keep improving it throughout my life, but this is the first iteration of my project, enjoy!

## Features
- React based single-page, application
- Dynamic notes system
- Create and/or read notes implemented with firebase
- Themed ui light/dark mode (whichever you prefer)

## Technologies used
- React
- Vite
- Firebase Firestore
- React Router
- Bootstrap
- Javascript/Jsx
- HTML/CSS

## How to run the project locally
  1. Clone the repo
  2. Install dependencies with:
  ```
  npm install
  ```
  3. Setup Firebase
  4. Start the development server:
  ```
  npm run dev
  ```
  5. Open the link Vite gives you
If Firebase isn't set up the site will load but the notes will not work

## Firebase Setup
The project uses Firebase Firestore for storing notes
My actual API keys are ignored with gitignore for security

To run the project with your own Firebase Setup:
  1. Create a Firebase project in the Firebase console
  2. Enable Firestore
  3. Create a Web app and get your configuration keys
  4. Create a file: firebase-config.js inside src/ with the code given by Firebase IE:
     ```
     import { initializeApp } from "firebase/app";
     import { getFirestore } from "firebase/firestore";
    
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_BUCKET",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID",
     };
    
     const app = initializeApp(firebaseConfig);
     export const db = getFirestore(app);
    ```
  5. Then save the file and run the project normally

## Roadmap
- Plan to add accounts to be able to sign in from google
- Add/delete your own posts
- Add a Full about me page so you can get to know me better :)
- add my skills onto the website
- And many more implementations in the future!

Thank you, this was CS50.
