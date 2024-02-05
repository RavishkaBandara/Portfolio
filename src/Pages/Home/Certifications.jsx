import React, { useState } from 'react';
import data from "../../data/index.json";

export default function certifications() {
    const [category, setCategory] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [showAllProjects, setShowAllProjects] = useState(false);

    const filteredcertifications = data?.certifications?.filter(item => {
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
        <section className="certifications--section" id="Certifications">
            <div className="certifications--container">
                <p className="section--title">Achievements</p>
                <h2 className="skills--section--heading">My Certificates</h2>
            </div>

            <div className="certifications--container--cat">
                <button
                    onClick={() => setCategory('all')}
                    className={`btn btn-primary ${category === 'all' ? 'active' : ''}`}
                >
                    All
                </button>
                <button
                    onClick={() => setCategory('cloud')}
                    className={`btn btn-primary ${category === 'cloud' ? 'active' : ''}`}
                >
                    Cloud
                </button>
                <button
                    onClick={() => setCategory('programming')}
                    className={`btn btn-primary ${category === 'programming' ? 'active' : ''}`}
                >
                   Programming
                </button>
                <button
                    onClick={() => setCategory('database')}
                    className={`btn btn-primary ${category === 'database' ? 'active' : ''}`}
                >
                    Database
                </button>
                <button
                    onClick={() => setCategory('google')}
                    className={`btn btn-primary ${category === 'google' ? 'active' : ''}`}
                >
                    Google
                </button>
            </div>

            <div className="certifications--section--container">
                {filteredcertifications?.slice(0, showAllProjects ? filteredcertifications.length : visibleProjects).map((item, index) => (
                    <div key={index} className="certifications--section--card">
                        <div className="certifications--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="certifications--section--card--content">
                            <div>
                                <h3 className="certifications--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <div className="certifications--section--card--btn">
                             <a href={item.link} target="_blank" className="text-sm certifications--link">
                                    View In Site
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
                                <a href={item.preview} target="_blank" className="text-sm certifications--preview">Preview</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredcertifications.length > visibleProjects && (
                <div className="certifications--view-more">
                    <button onClick={toggleShowAllProjects} className="btn btn-primary">
                        {showAllProjects ? 'View Less' : 'View More'}
                    </button>
            </div>
            )}
        </section>
    );
}
