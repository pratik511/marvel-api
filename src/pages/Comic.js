import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const Comic = () => {
    const [user, setUser] = useState([]);
     
    useEffect(() => {
        axios.get('https://gateway.marvel.com/v1/public/comics?ts=1&hash=866ddc8bf8343c53f45a710a0deb34c0&apikey=8b0c1cf5084a6b18d0034b1096ece30d').then(result => setUser(result.data.data.results))
    }, [])
    console.log("user",user);
    return (
        <div>
             {
               user.map(item => <div key={item.id} className='card-item'>
                   
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={item.images[0]?item.images[0].path + ".jpg": ""} className="card-img-top" alt='demoimg' />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            {/* <p className="card-text">{item.description} <br /> {item.pageCount}</p> */}
                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Comic
