import React, { useEffect, useState } from 'react'
import { FaPlay, FaHeart, FaBackward, FaForward, FaVolumeUp, FaPlus } from 'react-icons/fa'

import Sidebar from '../components/Sidebar'
import api from '../services/api'

import "./styles/global.css"
import "./styles/home.css"

export default function Home() {
    const [musicas, setMusicas] = useState([])
    useEffect(() => {
        api.get('musicas/returnAll').then(resposta => {
            setMusicas(resposta.data)
        })
    }, [])

    return (
        <div id="home">
            <div className="page">
                <Sidebar />
                <div className="musics">
                    <h1>
                        Músicas recomendadas
                    </h1>
                    {
                        musicas.map(musica => {
                            return (
                                <div className="music" key={musica.id}>
                                    <img src={musica.artista.imagem}
                                        alt={musica.artista.nome} className="music-image" />
                                    <span className="music-name"> {musica.nome} </span>
                                    <span className="music-artist"> {musica.artista.nome} </span>
                                    <div className="music-buttons">
                                        <div className="music-duration"> {musica.duracao} </div>
                                        <FaPlay size={14} />
                                        <FaHeart size={14} />
                                    </div>
                                </div>
                            )
                        })
                    }


                    <h1>
                        Minhas músicas
                    </h1>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>

                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <h1>
                        Amigos escutaram
                    </h1>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <h1>
                        Amigos escutaram
                    </h1>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                    <div className="music">
                        <img src='https://3.bp.blogspot.com/-ha49Q8OMvIg/VMowTN5HLVI/AAAAAAAAFjw/leOuwq00SvM/s1600/linkin-park1.jpg'
                            alt="Linkin Park" className="music-image" />
                        <span className="music-name"> Numb </span>
                        <span className="music-artist"> Linkin Park </span>
                        <div className="music-buttons">
                            <div className="music-duration"> 03:21 </div>
                            <FaPlay size={14} />
                            <FaHeart size={14} />
                        </div>
                    </div>
                </div>
                <div className="player">
                    <div className="player-buttons">
                        <FaBackward size={24} />
                        <FaPlay size={24} />
                        <FaForward size={24} />
                        <FaVolumeUp size={24} />
                        <div className="volume"> {'\u00A0'} </div>
                    </div>
                </div>
            </div>
            <div className="add-music">
                <FaPlus size={32} />
            </div>
        </div>
    )
}