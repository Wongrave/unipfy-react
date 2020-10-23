import React from 'react'
import { FaPlay, FaHeart } from 'react-icons/fa'

import Sidebar from '../components/Sidebar'

import "./styles/global.css"
import "./styles/home.css"

export default function Home() {
    return (
        <div id="home">
            <div className="page">
                <Sidebar />
                <div className="musics">
                    <h1>
                        Músicas recomendadas
                    </h1>
                    <div className="music">
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <h1>
                        Minhas músicas
                    </h1>
                    <h1>
                        Amigos escutaram
                    </h1>
                </div>
            </div>
        </div>
    )
}