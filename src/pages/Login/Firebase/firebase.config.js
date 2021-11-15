const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_FIREBASE_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyBK9KLgvKZj-2ag7hzeBtRSioSZ_lkbQGA",
//   authDomain: "niche-products-bc75a.firebaseapp.com",
//   projectId: "niche-products-bc75a",
//   storageBucket: "niche-products-bc75a.appspot.com",
//   messagingSenderId: "536369593109",
//   appId: "1:536369593109:web:c4b9ff9780a944b7b1071c"
// };
export default firebaseConfig;