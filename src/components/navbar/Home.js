import React from "react";
import HomeImg from '../../assets/home-img.svg'

function Home() {
    return (
        <>
            <section id="home" className="home-container">
                <article className="d-flex justify-content-between align-items-center">
                    <article>
                        <h1 className="fs-72 m-0">I'm Poornima</h1>
                        <p className="fs-2 mt-3 mb-0 text-capitalize">Fron-End developer</p>
                        <p className="fs-5 m-0 text-capitalize">Turning ideas into interactive reality</p>
                        <ul className="mb-0 mt-3 d-flex list-unstyled">
                            <li><a href="https://github.com/Poornima545" className="fs-3 me-3 icon" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a></li>
                            <li><a href="https://linkedin.com/in/poornima545" className="fs-3 me-3 icon" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a></li>
                            <li><a href="https://x.com/Poornima545" className="fs-3 icon" target="_blank"><i class="bi bi-twitter" rel="noreferrer"></i></a></li>
                        </ul>
                    </article>
                    <div className="homeImge">
                        <img src={HomeImg} className="home-img" alt="Home Image" />
                    </div>
                </article>
            </section>
        </>
    )
}

export default Home;