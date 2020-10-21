import React from 'react'

import { FaHeadphonesAlt } from 'react-icons/fa'

import "./styles/global.css"
import "./styles/home.css"

export default function Home() {
    return (
        <div id="home">
            <div className="page">
                <aside>
                    <header>
                        <div className="logo">
                            <FaHeadphonesAlt size={42} className="logo-icon" /><span>nipfY</span>
                        </div>
                        <ul>
                            <li><span className="item"> O {'\u00A0'} Lauro <span className="edit">editar</span> </span></li>
                            <li><span className="item"> O {'\u00A0'} Amigos </span></li>
                            <li><span className="item"> O {'\u00A0'} Playlist </span></li>
                            <li><span className="item"> O {'\u00A0'} Preferidas </span></li>
                            <li><span className="item"> O {'\u00A0'} Outras </span></li>
                        </ul>
                    </header>
                </aside>
            </div>
        </div>
    )
}