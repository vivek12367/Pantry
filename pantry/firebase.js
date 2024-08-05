import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBJbZnVEkxjc6FPR242rnWy9oLDcIRscKQ",
  authDomain: "pantry-app-33759.firebaseapp.com",
  projectId: "pantry-app-33759",
  storageBucket: "pantry-app-33759.appspot.com",
  messagingSenderId: "258431404390",
  appId: "1:258431404390:web:6e5059119a8dec8fe6a0a7",
  measurementId: "G-18YHVWV9KY"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const analytics = getAnalytics(app)
export{app,firestore}