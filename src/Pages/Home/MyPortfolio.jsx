import React, { useState } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
    const [category, setCategory] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [showAllProjects, setShowAllProjects] = useState(false);

    const filteredPortfolio = data?.portfolio?.filter(item => {
        if (category === 'all') {
            return true;
        } else {
            return item.category.toLowerCase().includes(category.toLowerCase());
        }
    });

    const toggleShowAllProjects = () => {
        setShowAllProjects(prevState => !prevState);
    };

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container">
                <p className="section--title">Skills</p>
                <h2 className="skills--section--heading">My Portfolio</h2>
            </div>

            <div className="portfolio--container--cat">
                <button
                    onClick={() => setCategory('all')}
                    className={`btn btn-primary ${category === 'all' ? 'active' : ''}`}
                >
                    All
                </button>
                <button
                    onClick={() => setCategory('web')}
                    className={`btn btn-primary ${category === 'web' ? 'active' : ''}`}
                >
                    Web
                </button>
                <button
                    onClick={() => setCategory('mobile')}
                    className={`btn btn-primary ${category === 'mobile' ? 'active' : ''}`}
                >
                   Mobile
                </button>
                <button
                    onClick={() => setCategory('ui/ux')}
                    className={`btn btn-primary ${category === 'ui/ux' ? 'active' : ''}`}
                >
                    UI/UX
                </button>
                <button
                    onClick={() => setCategory('tools')}
                    className={`btn btn-primary ${category === 'tools' ? 'active' : ''}`}
                >
                    Tools
                </button>
            </div>

            <div className="portfolio--section--container">
                {filteredPortfolio?.slice(0, showAllProjects ? filteredPortfolio.length : visibleProjects).map((item, index) => (
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
                             <a href={item.link} target="_blank" className="text-sm portfolio--link">
                                    View In Github
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                            stroke="currentColor"
                                            strokeWidth="2.66667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <a href={item.preview} target="_blank" className="text-sm portfolio--preview">Preview</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredPortfolio.length > visibleProjects && (
                <div className="portfolio--view-more">
                    <button onClick={toggleShowAllProjects} className="btn btn-primary">
                        {showAllProjects ? 'View Less' : 'View More'}
                    </button>
            </div>
            )}
        </section>
    );
}
