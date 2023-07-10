import React from "react";
import '../Enlaces/enlaces.css'
import { Link } from "react-router-dom";

const Enlaces = ()=> {
   return (
    <ul className="container-enlaces">
    <Link className="enlaces" to={"/"}><a href="#">TODOS</a></Link>
    <Link className="enlaces" to={"/Categoria/gamaBaja"}><a href="#">GAMA BAJA</a></Link>
    <Link className="enlaces" to={"/Categoria/gamaMedia"}><a href="#">GAMA MEDIA</a></Link>
    <Link className="enlaces" to={"/Categoria/gamaAlta"}><a href="#">GAMA ALTA</a></Link>
    <Link className="enlaces" to={"/Categoria/ofertas"}><a href="#">OFERTAS</a></Link>
  </ul>   ) 
}
export default Enlaces