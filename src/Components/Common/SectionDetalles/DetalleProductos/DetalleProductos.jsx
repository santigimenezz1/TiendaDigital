import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TarjetaDetalle from "../../Main/Tarjetas/TarjetaDetalle/TarjetaDetalle";
import { CartContext } from "../../../../Context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../../firebaseConfig";
import {
  getDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import TarjetaProductos from "../../Main/Tarjetas/TarjetaProductos/TarjetaProductos";
import { Skeleton } from "@mui/material";
import LogoEmpresas from "../../Main/LogoEmpresas/LogoEmpresas";

const DetalleProductos = () => {
  const { addToCart, calcularFinal, calcularTotalProductosId } =
    useContext(CartContext);
  const [data, setData] = useState({});
  const { id } = useParams();
  const [dataFiltrado, setDataFiltrado] = useState([]);

  //FUNCION QUE HACE LA PETICION A FIREBASE, SEGUN LA CATEGORIA
  let totalProductosId = calcularTotalProductosId(id);
  const fetchDataFiltrado = (categoria) => {
    let productsCollection = collection(db, "products");
    let consulta;
    if (categoria) {
      consulta = query(productsCollection, where("categoria", "==", categoria));
      getDocs(consulta).then((res) => {
        let productos = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setDataFiltrado(productos);
      });
    }
  };

  //ACA SE APLICA A LA PRIMERA PETICION POR ID LA FUNCION fetchDataFiltrado PARA HACER LA SEGUNDA PETICION,
  //Y LE PASAMOS COMO PARAMETRO PRODUCTO.PROPIEDAD, PARA QUE PUEDA HACER LA PETICION CORRECTAMENTE
  useEffect(() => {
    let productsColeccion = collection(db, "products");
    let productRef = doc(productsColeccion, id);
    getDoc(productRef).then((res) => {
      let producto = { ...res.data(), id: res.id };
      setData(producto);
      fetchDataFiltrado(producto.categoria); // Llamar a la función para obtener los productos filtrados
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...data, cantidad: cantidad };
    addToCart(productCart);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: true,
      timer: 1500,
    });
    toast.success("producto agregado");
    calcularFinal();
  };

  return (
    <>
      <TarjetaDetalle
        producto={data}
        onAdd={onAdd}
        totalProductosId={totalProductosId}
        data={data}
      />
      {dataFiltrado && Object.keys(dataFiltrado).length > 0 ? (
        // Si hay datos en el estado data, mostrar el contenido aquí
        <>
          <div
            style={{ width: "100%", paddingLeft: "100px", marginTop: "70px" }}
          >
            <h1 style={{ fontSize: "30px", color: "black", fontFamily:"Nunito", letterSpacing:"2px" }}>
              Productos similares
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            {dataFiltrado.map((productos) => (
              <TarjetaProductos key={productos.id} product={productos} />
            ))}
          </div>
          <LogoEmpresas />
        </>
      ) : (
        // Si no hay datos en el estado data, mostrar el contenido aquí
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Skeleton variant="rectangular" width={250} height={300} />
            <Skeleton variant="rectangular" width={250} height={300} />
            <Skeleton variant="rectangular" width={250} height={300} />
            <Skeleton variant="rectangular" width={250} height={300} />
            <Skeleton variant="rectangular" width={250} height={300} />
          </div>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default DetalleProductos;
