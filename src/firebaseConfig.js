import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCP4H3aSw2o9zEXFSWIcQdF5mra5w2dp3g",
  authDomain: "tiendadigital-ef01b.firebaseapp.com",
  projectId: "tiendadigital-ef01b",
  storageBucket: "tiendadigital-ef01b.appspot.com",
  messagingSenderId: "872100707625",
  appId: "1:872100707625:web:4de7aa590c0cea65990b38"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)