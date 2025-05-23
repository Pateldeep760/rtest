import React from 'react'
import { useParams } from 'react-router-dom'

const Use = () => {

    const data = [
        {
            id: 1,
            title: 't-shirt',
            img: 'https://m.media-amazon.com/images/I/71jMR9GA9pL._SY879_.jpg'
        },
        {
            id: 2,
            title: 'jeans',
            img: 'https://m.media-amazon.com/images/I/71xl79-e3JL._SY879_.jpg'
        },
        {
            id: 3,
            title: 'shirt',
            img: 'https://m.media-amazon.com/images/I/81p3GvZlKJL._SY879_.jpg'
        },
        {
            id: 4,
            title: 'pant',
            img: 'https://m.media-amazon.com/images/I/71jMR9GA9pL._SY879_.jpg'
        }
    ]
    const { name } = useParams()
    return (
        <div>
            {
                data
                    .filter(i => i.title === name)
                    .map((data) => {
                        return (
                            <div key={data.id}>
                                <h1>{data.title}</h1>
                                <img src={data.img} alt="" height={150} width={150} />
                            </div>
                        )
                    })
            }

        </div>
    )
}

export default Use