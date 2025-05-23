import React, { use } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Toypage.scss'

const Toypage = () => {
    const ab = useNavigate()
    
    const cardata = [

        {
            id: 1,
            title: 'diecast',
            img: 'https://m.media-amazon.com/images/I/51pGit1uTFL._SX679_.jpg',
            price: 1000,
            description: 'GRAPHENE 1:32 Scale DieCast Metal Pull-Back Action',
        },

        {
            id: 2,
            title: 'diecast',
            img: 'https://m.media-amazon.com/images/I/61W5lgZ5tGL._SX679_.jpg',
            price: 1000,
            description: 'Diecast 1:36 Defender Toy Car Metal Body Openable Doors',
        },
        {
            id: 3,
            title: 'diecast',
            img: 'https://m.media-amazon.com/images/I/61LMzjxqdTL._SX679_.jpg',
            price: 1000,
            description: 'Die-Cast Tesla CyberTruck with Pick-Up Trailer',
        },

        {
            id: 4,
            title: 'barbie',
            img: 'https://m.media-amazon.com/images/I/814XPCZPbxL._SY879_.jpg',
            price: 1000,
            description: 'Doll with Moveable Arms, Legs, Elbow & Knee for Girls',

        },
        {
            id: 5,
            title: 'barbie',
            img: 'https://m.media-amazon.com/images/I/719TyPZpUpL._SY879_.jpg',
            price: 1000,
            description: 'Beautiful Doll Toy Set with Movable Joints and Accessories Party Girl',

        },
        {
            id: 6,
            title: 'barbie',
            img: 'https://m.media-amazon.com/images/I/713rfWupdYL._SX679_.jpg',
            price: 1000,
            description: 'Toys Treasure We Deliver Smiles Long Hair Doll Set with Fashion Accessories and Beads',

        },


    ]

    const { pagename } = useParams()
    return (
        <div className='main'>
            
            <div className='sidebar'>
                   
                <button onClick={() => ab('/diecast')}>Die Cast Car</button>    
                <button onClick={() => ab('/barbie')}>Barbie Doll</button>    
            </div>

            <div className='toypage'>
                {
                    cardata
                        .filter(i => i.title === pagename)
                        .map((cardata) => {
                            return (
                                <div className='toycard'>
                                    <h1>{cardata.title}</h1>
                                    <img className='toy-image' src={cardata.img} alt="" height={150} />
                                    <h2>{cardata.price}</h2>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Toypage