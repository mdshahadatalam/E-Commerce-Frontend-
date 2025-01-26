import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './../DB/Firebase';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../Feuature/Slice/LoginSlice';
import logoG from '../assets/images/logo/logoG.jpg'



export const Google = () => {
  // Initialize Firebase app (only if not already initialized)
  initializeApp(firebaseConfig);
  const dispatch = useDispatch()

  const navigate = useNavigate(); // Hook for navigation
  const provider = new GoogleAuthProvider();

  const handleLoginGoogle = () => {
    const auth = getAuth();
    auth.languageCode = 'it'; // Set language to Italian
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Login successful:', result);
        dispatch(loggedInUser(result?.user))
        console.log(result);
        
        localStorage.setItem("user",JSON.stringify(result?.user))
        navigate('/'); // Navigate to home page or desired route
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
      });
  };

  return (
    <>
      <div className="text-center">
        <h2 className='or'>Or</h2>
        <button onClick={handleLoginGoogle} className="google">
          <img src={logoG} className='img-fluid logoG' alt="" />
          Login with Google
        </button>
      </div>



      
    </>
  );
};
