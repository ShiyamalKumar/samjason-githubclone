import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../styles/Listing.css";

const Listing = ({ darkMode }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.github.com/users/nodejs/repos")
            .then((response) => {
                setRepos(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    const cardClasses = classNames("card", "mb-4", {
        "text-light bg-dark": darkMode,
        "text-dark bg-light": !darkMode,
    });

    return (
        <div className="listing-container">
            <h2 className={`listing-title ${darkMode ? "text-light" : "text-dark"}`}>
                GitHub Repositories
            </h2>
            <div className="row">
                {repos.map((repo) => (
                    <div className="col-md-4 col-lg-3" key={repo.id}>
                        <div className={cardClasses}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link
                                        to={`/repos/${repo.id}`}
                                        className={`repo-link ${darkMode ? "text-light" : "text-dark"}`}
                                    >
                                        {repo.name}
                                    </Link>
                                </h5>
                                <p
                                    className={`card-text ${darkMode ? "text-light" : "text-dark"}`}
                                >
                                    {repo.description || "No description"}
                                </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li
                                    className={`list-group-item ${darkMode ? "bg-dark text-light" : "bg-light text-dark"
                                        }`}
                                >
                                    <strong>Stars:</strong> {repo.stargazers_count}
                                </li>
                                <li
                                    className={`list-group-item ${darkMode ? "bg-dark text-light" : "bg-light text-dark"
                                        }`}
                                >
                                    <strong>Languages:</strong> {repo.language || "N/A"}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listing;
