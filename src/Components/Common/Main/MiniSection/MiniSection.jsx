import React from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import  '../MiniSection/miniSectionn.css'


const MiniSection = ({icon,section})=>{
    return (
        
        <div className="cointainer-miniSection">
         <div className="icon">
         {icon}
         </div>
        <h2 className="titulo-miniSection">{section}</h2>
        </div>
       
    )
}

export default MiniSection