import React from 'react'

const Nesting = () => {
    const data=[
        
        {
            id:1,
            name:'student1',
            nesting:[
                {
                    id:1,
                    name:"low-tudent1"
                },

                
                    {
                        id:2,
                        name:"low-tudent2"
                    }
            ]
        },

        {
            id:2,
            name:'student2',
            nesting:[
                {
                    id:1,
                    name:"low-tudent1"
                },

                
                    {
                        id:2,
                        name:"low-tudent2"
                    },
                    {
                        id:3,
                        name:"low-tudent3"
                    }
            ]
        }
    ]
  return (
    <div>
        {
            data.map((o)=>{
                return(
                    <div>

                        <h1>{o.name}</h1>

                        {
                            o.nesting.map((o1)=>{
                                return(
                                    <div>
                                        <h2>{o1.name}</h2>
                                    </div>
                                )
                            })
                        }

                        </div>
                )
            })
        }
    </div>
  )
}

export default Nesting