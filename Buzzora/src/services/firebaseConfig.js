import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

const firebaseConfig = {
    apiKey: "AIzaSyDzNpvQi0VtQeuFYe3oNfBr8n4Hk4fg2SI",
    authDomain: "internship-projects-1b23f.firebaseapp.com",
    databaseURL: "https://internship-projects-1b23f-default-rtdb.firebaseio.com",
    projectId: "internship-projects-1b23f",
    storageBucket: "internship-projects-1b23f.firebasestorage.app",
    messagingSenderId: "807922696335",
    appId: "1:807922696335:web:c3eec4c53c0e5b436ab0fa",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
