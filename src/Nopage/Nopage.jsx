import { MdOutlineErrorOutline } from 'react-icons/md'
import './Nopage.scss'
import { TbFaceIdError } from 'react-icons/tb'


const Nopage=()=>{

    return(
        <div class = "Nopage">
            <TbFaceIdError size={80}  />
            <h1>Erorr 404 </h1>
        </div>
    )
}

export default Nopage