// import React from 'react';
// import { getAuth, signInWithPopup, FacebookAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import firebaseConfig from '../DB/Firebase';


// // Initialize Firebase only once
// const app = initializeApp(firebaseConfig);

// export const Facebook = () => {
//   const handleLoginFacebook = () => {
//     const auth = getAuth(app); // Pass the initialized app instance
//     auth.languageCode = 'it';
//     signInWithRedirect(auth);
//     getRedirectResult(auth)
//     const provider = new FacebookAuthProvider();

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log('User signed in successfully:', result.user);
//       })
//       .catch((error) => {
//         console.error('Error during Facebook sign-in:', error.message);
//       });
//   };

//   return (
//     <div className="text-center pt-3">
//       <button
//         onClick={handleLoginFacebook}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         Login with Facebook
//       </button>
//     </div>
//   );
// };
