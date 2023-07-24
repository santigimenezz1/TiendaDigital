import { Link } from 'react-router-dom';
import MiniSection from '../MiniSection/MiniSection'
import '../MiniSectionFlex/miniSectionFlex.css'
import ComputerIcon from '@mui/icons-material/Computer';
const MiniSectionFlex = () => {
  return (
    <div className='miniSectionFlex'>
   <Link to={"/categoria/notebook"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/procesadores"} className='linkMiniSection'><MiniSection section={"Procesadores"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/mothers"} className='linkMiniSection'><MiniSection section={"mothers"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/placaVideo"} className='linkMiniSection'><MiniSection section={"placaVideo"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/memoriaRam"} className='linkMiniSection'><MiniSection section={"memoriaRam"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/almacenamiento"} className='linkMiniSection'><MiniSection section={"almacenamiento"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/refrigeracion"} className='linkMiniSection'><MiniSection section={"refrigeracion"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/gabinetes"} className='linkMiniSection'><MiniSection section={"gabinetes"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/fuentes"} className='linkMiniSection'><MiniSection section={"fuentes"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/monitores"} className='linkMiniSection'><MiniSection section={"monitores"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/monitores"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/notebook"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/notebook"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/notebook"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<ComputerIcon fontSize='large'/>} /></Link> 


    </div>
  )
}

export default MiniSectionFlex