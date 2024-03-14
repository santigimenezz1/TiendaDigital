import { Link } from 'react-router-dom';
import MiniSection from '../MiniSection/MiniSection'
import '../MiniSectionFlex/miniSectionFlex.css'
import ComputerIcon from '@mui/icons-material/Computer';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MicNoneIcon from '@mui/icons-material/MicNone';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AppleIcon from '@mui/icons-material/Apple';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import BuildIcon from '@mui/icons-material/Build';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FolderIcon from '@mui/icons-material/Folder';
import GoogleIcon from '@mui/icons-material/Google';
import InboxIcon from '@mui/icons-material/Inbox';
const MiniSectionFlex = () => {
  return (
    <div className='miniSectionFlex'>
   <Link to={"/categoria/notebook"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<ComputerIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/procesadores"} className='linkMiniSection'><MiniSection section={"Procesadores"} icon={<HeadphonesIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/mothers"} className='linkMiniSection'><MiniSection section={"mothers"} icon={<PhoneAndroidIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/placaVideo"} className='linkMiniSection'><MiniSection section={"placaVideo"} icon={<MicNoneIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/memoriaRam"} className='linkMiniSection'><MiniSection section={"memoriaRam"} icon={<DeviceHubIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/almacenamiento"} className='linkMiniSection'><MiniSection section={"almacenamiento"} icon={<AppleIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/refrigeracion"} className='linkMiniSection'><MiniSection section={"refrigeracion"} icon={<AudiotrackIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/gabinetes"} className='linkMiniSection'><MiniSection section={"gabinetes"} icon={<BuildIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/fuentes"} className='linkMiniSection'><MiniSection section={"fuentes"} icon={<CameraAltIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/monitores"} className='linkMiniSection'><MiniSection section={"monitores"} icon={<CastConnectedIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/monitores"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<CreditCardIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/notebook"} className='linkMiniSection'><MiniSection section={"Notebooks"} icon={<FolderIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/notebook"} className='linkMiniSection displayMiniSection'><MiniSection section={"Notebooks"} icon={<GoogleIcon fontSize='large'/>} /></Link> 
   <Link to={"/categoria/notebook"} className='linkMiniSection displayMiniSection'><MiniSection section={"Notebooks"} icon={<InboxIcon fontSize='large'/>} /></Link> 


    </div>
  )
}

export default MiniSectionFlex