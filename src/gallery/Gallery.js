// import React from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// const Gallery = () => {

//     // const [tours, setTours] = useState([])

//     // function getData() {
//     //     // fetch("https://jsonplaceholder.typicode.com/todos/")
//     //     //     .then(response => response.json())
//     //     //     .then(info => {
//     //     //         setTours(info)
//     //     //     })
//     //     axios.get("https://jsonplaceholder.typicode.com/todos/")
//     //         .then(response => setTours(response.data))
//     // }

//     // useEffect(getData, [])

//     const [books, setBooks] = useState(null);

//     const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

//     const fetchData = async () => {
//         const response = await axios.get(apiURL)

//         setBooks(response.data)
//     }


//     return (
//         <div className='home'>
//             {/* <div className="container" style={{padding:"60px"}}>



//     <h1>gallery page</h1>

//         <button onClick={()=> getData()}>Get data</button>
//     </div> */}

//             { books &&
//                 books.map((book, index) => {
//                     const cleanedDate = new Date(book.released).toDateString();
//                     const authors = book.authors.join(', ');

//                     return (
//                         <div className="book" key={ index }>
//                             <h3>Book { index + 1 }</h3>
//                             <h2>{ book.name }</h2>

//                             <div className="details">
//                                 <p>👨: { authors }</p>
//                                 <p>📖: { book.numberOfPages } pages</p>
//                                 <p>🏘️: { book.country }</p>
//                                 <p>⏰: { cleanedDate }</p>
//                             </div>
//                         </div>
//                     );
//                 }) }
//         </div>
//     )
// }

// export default Gallery;




// ---------



import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { Link } from "react-router-dom";

function Gallery() {
    const [books, setBooks] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
            "https://www.anapioficeandfire.com/api/books?pageSize=30"
        );

        setBooks(response.data);
    };

    return (
        <div className="home">


            <div className="container">
                <h1>There are books</h1>


                <div>
                    <button className="fetch-button" onClick={ fetchData }>
                        get books
                    </button>
                    <br />

                </div>
                <li ><Link style={{color:"white"} } to="/">To main</Link></li>


                <div className="books">
                    { books &&
                        books.map((book, index) => {
                            const cleanedDate = new Date(book.released).toDateString();
                            const authors = book.authors.join(", ");

                            return (
                                <div className="book" key={ index }>
                                    <h3>Book { index + 1 }</h3>
                                    <h2>{ book.name }</h2>

                                    <div className="details">
                                        <p>{ authors }</p>
                                        <p>{ book.numberOfPages } pages</p>
                                        <p>🏘{ book.country }</p>
                                        <p>{ cleanedDate }</p>
                                    </div>
                                </div>
                            );
                        }) }
                </div>
            </div>
        </div>
    );
}


export default Gallery;