import React from 'react'
import './App.css'

import './index.css'
import Bear from './images/image.png'
import Twitter from './images/twitter.svg'
import Tik from './images/tiktok.svg'
import Btn from './images/btn-round.svg'
import Reddit from './images/reddit.svg'
import Face from './images/face.svg'
import Insta from './images/insta.svg'


import { Link } from 'react-router-dom'

import Clients from './Clients/Clients'

const Main = () => {
    return (
        <div className='wrapper'>
            <div className="home">
                <div className="menu">
                    <div className="name">
                        <h3>Koala</h3>
                        <input className="search" placeholder={ +996 } type="text" />
                        <a href>
                            <div className="pointer" />
                        </a>
                        <div className="result">
                        </div>
                    </div>
                    <div className="elements">
                        <a className="a1">HOME</a>
                        <a className="a2" >

                        <Link to='/gallery'>
                            BOOKS
                        </Link>
                        </a>
                        <a className="a3" >
                            <Link to="/clients">CLIENTS</Link>
                        </a>
                        <a className='a4'>
                        <Link to="/about">ABOUT</Link>
                        </a>                       
                    </div>

                </div>
                <div className="container">
                    <div className="box">
                        <h6 className="white">KOALA <span className="green"><a href>INTELLEGENCE</a></span> AGENCY</h6>
                        <p>A collection of 10,000 worldly Koalas each with their unique skillsets. Their mission is to protect
                            the world from evil.</p>
                        <a href> <img className="butn" src={Btn} alt />
                        </a>
                    </div>
                    <img className="image" src={Bear} alt />
                    {/* <img className="bear" src="images/bearb.png" alt /> */}
                </div>
                <div className="social">
                    <div className="twitter">
                        <a className="margin" href><img src={Twitter} /></a>
                    </div>
                    <div className="reddit">
                        <a className="margin" href><img src={Reddit} alt /></a>
                    </div>
                    <div className="insta">
                        <a className="margin" href><img src={Insta}alt /></a>
                    </div>
                    <div className="face">
                        <a className="margin" href><img src={Face}/></a>
                    </div>
                    <div className="tiktok">
                        <a className="margin" href><img src={Tik} /></a>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Main