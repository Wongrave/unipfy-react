import React from 'react'
import { Link } from 'react-router-dom'

import "./styles/global.css"
import "./styles/landing.css"

export default function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <main>
                    <h1>
                        As melhores músicas atualizadas em um só lugar
                    </h1>
                    <p>
                        Busque suas músicas favoritas para literalmente bombar no seu navegador
                    </p>
                    <div className="plan">
                        <h1>UnipfY</h1>
                        <br />
                        <span>Planos a partir de R$54,90</span>
                    </div>
                    <Link to="/home" className="button">
                        Experimente grátis no primeiro dia!
                    </Link>
                </main>
            </div>
        </div>
    )
}