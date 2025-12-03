# Erik Shaver – Portfolio Website
## Overview
This is my personal portfolio site built with React + Vite.I implemented a blog posting system that uses Firebase Firestore. When posts are created, they are stored in the database. My project then pulls from the database to show the posts on the notes page. This is an ongoing project; I plan to keep improving it throughout my life, but this is the first iteration of my project. Enjoy!
Url of my video: https://youtu.be/L1ZZTL8XF5s

## Features
- React-based single-page application
- Dynamic notes system
- Create and/or read notes implemented with Firebase
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
  3. Set up Firebase
  4. Start the development server:
  ```
  npm run dev
  ```
  5. Open the link Vite gives you
If Firebase isn't set up, the site will loa,d but the notes will not work

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

## Files
### app.jsx
This is the main frontend/backend logic for my website. Looking through the file, we can see a function that shows up on every page, and that is the App() function. This function sets up the navbar and sets up the logic for linking to separate pages using it. This file also sets up the routes, so when you click the navbar link it will show the function on the App.jsx. 

This brings us to the `Home()` function. This function is the first page that you see when you open the website. It sets up the hero section and the sections below. Right now, the included sections are: Hero, Projects, and a contact section. Plans are to include a skills section and a certificates section (CS50) to show my skills. 

The next important function in this file is `New_note()`. This function holds part of my backend logic for storing notes in the Firebase Firestore database. We set useStates for the title of the note, the text of the note, and the creator of the note, and the useState that we use is a string (because it becomes a string). We then await addDoc in an asynchronous function to wait for the user to post the note, and once the note is created, we then store the title, posttext, author, and the time of the note created. We then navigate to the notes after it was created, so you are able to see your note right after it was created.

Finally, we have `Notes()`, which displays the notes on the website. Using getDocs() we fetch the notes from our Firebase Firestore, and then we display them by returning html.

### ThemeToggle.jsx
This site uses a dark/light mode theme toggle with a glitch effect to add style to the website. First, this file checks whether we are in light or dark mode, and it also checks local storage to check if you were in light/dark mode before, and adjusts based on that. Then, if dark is true, it'll apply a dark/light theme to all HTML elements in the site. Finally, the toggle function at the end of the file uses document.startViewTransition, and if the web browser supports startViewTransition() then it will animate the theme change. At the end of this function, we have a button, this button toggles the theme effects and actually changes the website from light to dark mode. The button will show a sun icon when in light mode, and show a moon icon when in dark mode. The styling for this element is inline to make it a small round icon in the top-right of the site.


## Roadmap
- Plan to add accounts to be able to sign in from google
- Add/delete your own posts
- Add a Full about me page so you can get to know me better :)
- add my skills onto the website
- And many more implementations in the future!

Thank you, this was CS50.
