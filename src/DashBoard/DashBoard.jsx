import { productsHome } from "../ProductsMoksHome";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { products } from "../productsMoks";

const DashBoard = () => {
  const rellenar = () => {
    products.forEach((product) => {
      let refProduct = collection(db, "products");
      addDoc(refProduct, product);
    });
  };
  return <button onClick={rellenar}>Rellenar base de datos</button>;
};

export default DashBoard;
