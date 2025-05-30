import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.scss'

import { MdOutlineProductionQuantityLimits, MdOutlineWebhook } from 'react-icons/md'
import { FaCode, FaHome, FaUser } from 'react-icons/fa'
import { IoIosInformationCircle } from 'react-icons/io'
import { SiGoogletasks } from 'react-icons/si'
import { RxSwitch } from 'react-icons/rx'
import ValuePackage from '../Context/ValuePackage'
import { AiFillApi } from 'react-icons/ai'
import Us1 from '../Us1/Us1'
import { MdOutlineDynamicFeed } from "react-icons/md";


const Header = () => {
  const list = ['/us1','/us2']

  const location = useLocation()
  
  const { Modal, setModel } = useContext(ValuePackage)
  
  const ab = useNavigate()

  if(list.includes(location.pathname)){
    return null
  }
  return (
    <div className="header-container" >
      <div className="header-m">
        <div className="menu-title">Daily Task <SiGoogletasks /> </div> 
        <ul className="header-list">
          <li>
            <button onClick={() => ab('/UserCard')} title="UserCard">
             UserCard <FaUser /></button>
          </li>
          <li>
            <button onClick={() => ab('/ButtonScss')} title="Button Styling">
              ButtonComp.Style <RxSwitch />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/ProductDetails')} title="Product Details">
             Product Detials <MdOutlineProductionQuantityLimits />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/content')} title="Home Page">
              Home Page <FaHome />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/content2')} title="About Page">
              About Page <IoIosInformationCircle />
            </button>
          </li>
         
        </ul>
      </div>
      <div className="header-m">
        <div className="menu-title">Use State <FaCode /></div> 
        <ul className="header-list">
          <li>
            <button onClick={() => ab('/Us1')} title="ex-1">
              UseState1 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us2')} title="ex-2">
              UseState2 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us3')} title="ex-3">
              UseState3 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us4')} title="ex-4">
              UseState4 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us5')} title="ex-5">
              UseState5 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us6')} title="ex-6">
              UseState6 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us7')} title="Basic useState Usage">
              UseState7 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us8')} title="Updating State Based on Previous State">
              UseState8 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us9')} title="Handling Objects in State">
              UseState9 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us10')} title="To-Do List">
              UseState10 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us11')} title="Login Form">
              UseState11 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us12')} title="Lazy Initialization in useState">
              UseState12 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us13')} title="Frequently Asked Questions">
              UseState13 <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Us14')} title="Shopping Cart">
              UseState14 <MdOutlineWebhook size={15} />
            </button>
          </li>
        </ul>
      </div>

      <div className="header-m">
        <div className="menu-title">Use Effect<FaCode /></div> 
        <ul className="header-list">
          <li>
            <button onClick={() => ab('/Ue1')} title="UseEffect-1">
              UseEffect1 ex<MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Ue2')} title="UseEffect-2">
              Ueffect Practice <MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/LSS1')} title="Local & Session Storage">
              Local & Session Strge <MdOutlineWebhook size={15} />
            </button>
          </li>
        </ul>
      </div>

      <div className="header-m">
        <div className="menu-title">Code Practice<FaCode /></div> 
        <ul className="header-list">
          <li>
            <button onClick={() => ab('/CP1')} title="Code Practice-1">
              Use Context<MdOutlineWebhook size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Api')} title="API">
             API<AiFillApi size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/NestingJson')} title="Nesting">
             Nesting<AiFillApi size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Toypage')} title="Nesting">
             UsePrams<MdOutlineDynamicFeed size={15} />
            </button>
          </li>
          <li>
            <button onClick={() => ab('/Inqform')} title="Nesting">
             Inquryform<MdOutlineDynamicFeed size={15} />
            </button>
          </li>
        </ul>
      </div>
     
    </div>



  )
}

export default Header