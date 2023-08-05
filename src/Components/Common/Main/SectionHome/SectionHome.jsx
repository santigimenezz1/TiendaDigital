import { useEffect, useState } from "react";
import "../SectionHome/sectionHome.css";
import TarjetaProductos from "../Tarjetas/TarjetaProductos/TarjetaProductos";
import Carrusel from "../Carrusel/Carrusel";
import TarjetaOfertas from "../Tarjetas/TarjetaOfertas/TarjetaOfertas";
import ImagenesGrid from "../ImagenesGrid/ImagenesGrid";
import MiniSectionFlex from "../MiniSectionFlex/MiniSectionFlex";
import { productsHome } from "../../../../ProductsMoksHome";
import FormaDePago from "../FormaDePago/FormaDePago";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import LogoEmpresas from "../LogoEmpresas/LogoEmpresas";
import BotonWhatsapp from "../BotonWhatsapp/BotonWhatsapp";

const SectionHome = () => {
  const [data, setData] = useState([]);

  //PETICION A FIREBASE PARA QUE ME FILTRE BAJO ESA CONDICION Y LO GUARDE EN EL ESTADO
  useEffect(() => {
    let productsCollection = collection(db, "products"); //traeme una colleccion, de esa db y la colleccion products
    let consulta = query(productsCollection, where("home", "==", true)); //peticion a todos los productos, si categoria == a categoria (useParams). filtra solo esos objetos que cumplen
    getDocs(consulta).then((res) => {
      //.then manejo la promesa. tengo que mapear el res.docs y retornar un nuevo objeto, {id:doc.id ...doc.data} porque el id no viene junto con el objeto doc.data, lo tengo que incluir
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setData(productos); //y lo guardo en mi estado
    });
  }, []);
  //ACA FILTRO POR CATEGORIAS PARA LUEGO MAPEAR CADA VARIABLE Y PODER RENDERIZAR LOS PRODUCTOS DE LA MISMA CATEGORIA
  const filtradoNotebook = data.filter(
    (notebook) => notebook.categoria === "notebook"
  );
  const filtradoMonitores = data.filter(
    (monitor) => monitor.categoria === "monitores"
  );
  const filtradoFuentes = data.filter(
    (fuente) => fuente.categoria === "fuentes"
  );
  const filtradoRegrigeracion = data.filter(
    (refrigeracion) => refrigeracion.categoria === "regrigeracion"
  );
  const filtradoGabinetes = data.filter(
    (gabinete) => gabinete.categoria === "gabinetes"
  );

  return (
    <div style={{ overflow: "hidden" }}>
      <Carrusel />
      <FormaDePago />

      {data.length > 0 ? (
        <>
          <div className="container-primerosProductos">
            <h1 className="tituloTarjetaProductos">
              Relacionado con Notebooks
            </h1>
            <div className="tarjetaProductosFlex">
              {filtradoNotebook.map((product) => (
                <TarjetaProductos key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="container-primerosProductos">
            <h1 className="tituloTarjetaProductos">
              Relacionado con Monitores
            </h1>
            <div className="tarjetaProductosFlex">
              {filtradoMonitores.map((product) => (
                <TarjetaProductos key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={"esqueleto-text"}>
            <Skeleton variant="text" width={250} height={40} />
          </div>
          <div className="esqueleto-tarjetaHome">
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
          </div>
          <div className={"esqueleto-text"}>
            <Skeleton variant="text" width={250} height={40} />
          </div>
          <div className="esqueleto-tarjetaHome">
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
          </div>
        </>
      )}
      <div className="tarjetaOfertaFlex">
        <Link
          className={"link-tarjetaOfertas"}
          to={"/Detalle/MJRGi0AFrlrELugIbIDB"}
        >
          <TarjetaOfertas
            dcto={20}
            producto={"Memoria Adata DDR4"}
            image={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1689894449/E-COMERCE%20CODER/compragamer_Imganen_general_36913_Memoria_Adata_DDR4_16GB__2x8GB__4133MHz_XPG_Spectrix_D60G_RGB_73bb84d3-grn_k2j8lg.jpg"
            }
          />
        </Link>
        <Link
          className={"link-tarjetaOfertas"}
          to={"/Detalle/ZmVa8nN2f4WvT4IYSNI1"}
        >
          <TarjetaOfertas
            dcto={20}
            producto={"LG 27 27GL650F 144hz"}
            image={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690400033/E-COMERCE%20CODER/Monitores/7/compragamer_Imganen_general_19484_Monitor_Gamer_LG_27__27GL650F_144hz_IPS_FHD_GSync_FreeSync_1e30b9f9-grn_pielws.jpg"
            }
          />
        </Link>
      </div>
      <ImagenesGrid />
      <MiniSectionFlex section={"ASD"} />
      {data.length > 0 ? (
        <>
          <div className="container-primerosProductos">
            <h1 className="tituloTarjetaProductos">
              Relacionado con Notebooks
            </h1>
            <div className="tarjetaProductosFlex">
              {filtradoFuentes.map((product) => (
                <TarjetaProductos key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="container-primerosProductos">
            <h1 className="tituloTarjetaProductos">
              Relacionado con Monitores
            </h1>
            <div className="tarjetaProductosFlex">
              {filtradoRegrigeracion.map((product) => (
                <TarjetaProductos key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={"esqueleto-text"}>
            <Skeleton variant="text" width={250} height={40} />
          </div>
          <div className="esqueleto-tarjetaHome">
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
          </div>
          <div className={"esqueleto-text"}>
            <Skeleton variant="text" width={250} height={40} />
          </div>
          <div className="esqueleto-tarjetaHome">
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
          </div>
        </>
      )}
      <div className="tarjetaOfertaFlex">
        <Link
          className={"link-tarjetaOfertas"}
          to={"/Detalle/SZ7N0jPw4uZyFeorOOIf"}
        >
          <TarjetaOfertas
            dcto={20}
            producto={"Cooler Fan Falcom AS-03"}
            image={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399946/E-COMERCE%20CODER/Refrigeracion/6/compragamer_Imganen_general_34364_Cooler_Fan_ID-Cooling_TF-12025-ARGB-SNOW_TRIO_7bd1d164-grn_hqn2ns.jpg"
            }
          />
        </Link>
        <Link
          className={"link-tarjetaOfertas"}
          to={"/Detalle/FX3jbgf3c1cNrUxTBGEs"}
        >
          <TarjetaOfertas
            dcto={20}
            producto={"GeForce RTX 3060"}
            image={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399812/E-COMERCE%20CODER/Placas%20de%20video/7/compragamer_Imganen_general_32951_Placa_de_Video_ASUS_GeForce_RTX_3070_Ti_8GB_GDDR6_ROG_STRIX_GAMING_OC_cbbbd3f6-grn_drzcyl.jpg"
            }
          />
        </Link>
      </div>
      {data.length > 0 ? (
        <>
          <div className="container-primerosProductos">
            <h1 className="tituloTarjetaProductos">
              Relacionado con Notebooks
            </h1>
            <div className="tarjetaProductosFlex">
              {filtradoGabinetes.map((product) => (
                <TarjetaProductos key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={"esqueleto-text"}>
            <Skeleton variant="text" width={250} height={40} />
          </div>
          <div className="esqueleto-tarjetaHome">
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
            <Skeleton variant="rectangular" width={220} height={300} />
          </div>
        </>
      )}
      <LogoEmpresas />
    </div>
  );
};

export default SectionHome;
