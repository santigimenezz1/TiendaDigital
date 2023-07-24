import React from "react";
import '../Enlaces/enlaces.css'
import { Link } from "react-router-dom";

const Enlaces = ()=> {
   return (
    <ul className="container-enlaces">
    <Link className="enlaces" to={"/categoria"}><a href="#">PRODUCTOS</a></Link>
    <Link className="enlaces" to={"/categoria/notebook"}><a href="#">NOTEBOOKS</a></Link>
    <Link className="enlaces" to={"/categoria/placaVideo"}><a href="#">PLACAS DE VIDEO</a></Link>
    <Link className="enlaces" to={"/Ayuda"}><a href="#">AYUDA</a></Link>
  </ul>   ) 
}
export default Enlaces