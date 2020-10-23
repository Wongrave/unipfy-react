import React from 'react'

import { FaHeadphonesAlt, FaUserCircle, FaUsers, 
    FaStream, FaHeart, FaEllipsisV } from 'react-icons/fa'

import "../pages/styles/global.css"
import "../pages/styles/home.css"

export default function Sidebar() {
    return (
        <aside>
            <header>
                <div className="logo">
                    <FaHeadphonesAlt size={42} className="logo-icon" /><span>nipfY</span>
                </div>
                <ul>
                    <li><span className="item"> <FaUserCircle size={18} /> {'\u00A0'} Lauro <span className="edit">editar</span> </span></li>
                    <li><span className="item"> <FaUsers size={18} /> {'\u00A0'} Amigos </span></li>
                    <li><span className="item"> <FaStream size={18} /> {'\u00A0'} Playlist </span></li>
                    <li><span className="item"> <FaHeart size={18} /> {'\u00A0'} Preferidas </span></li>
                    <li><span className="item"> <FaEllipsisV size={18} /> {'\u00A0'} Outras </span></li>
                </ul>
            </header>
            <hr />
            <div className="categories">
                <span className="category-type"> Gêneros </span>
                <ul className="types">
                    <li>Rock</li>
                    <li>Sertanejo</ li>
                    <li>Funk</li>
                    <li>Forró</li>
                    <li>Folk</li>
                    <li>Pop</li>
                    <li>Eletrônica</li>
                    <li>K-pop</li>
                    <li>Axé</li>
                    <li>Hip-hop</li>
                    <li>House</li>
                    <li>Rap</li>
                    <li>Pagode</li>
                    <li>MPB</li>
                    <li>Blues</li>
                    <li>Jazz</li>
                    <li>Screamo</li>
                </ul>
            </div>
        </aside>
    )
}