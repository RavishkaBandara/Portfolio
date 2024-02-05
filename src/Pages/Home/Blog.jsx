import React, { useState } from 'react';
import data from "../../data/index.json";

export default function MyBlog() {

    return (
        <section className="portfolio--section" id="MyBlog">
            <div className="portfolio--container">
                <p className="section--title">Articles</p>
                <h2 className="skills--section--heading">My Blog</h2>
            </div>

            

            <div className="portfolio--section--container">
                {data?.blog?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <div className="portfolio--section--card--btn">
                                <a href={item.preview} target="_blank" className="text-sm portfolio--preview">Read</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
        