import { useNavigate } from 'react-router-dom'
import './Content.scss'


const Content=()=>{
    const navigate=useNavigate()

    return(
        <div className='content'>
        <h1>Home Page</h1>
        <h2>Welcome to the Home Page</h2>
        <li onClick={()=>navigate('/t-shirt')}>t-shirt</li>
        <li onClick={()=>navigate('/pant')}>pant</li>
        <li onClick={()=>navigate('/t-shirt')}>shirt</li>
        <li onClick={()=>navigate('/t-shirt')}>jeans</li>
        </div>
       
    )
}

export default Content