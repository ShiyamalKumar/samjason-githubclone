import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/Details.css';

const Details = () => {
    const { repoId } = useParams();
    const [repoDetails, setRepoDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`https://api.github.com/repositories/${repoId}`)
            .then((response) => {
                setRepoDetails(response.data);
            })
            .catch((error) => {
                console.error("Error fetching repo details:", error);
            });
    }, [repoId]);

    if (!repoDetails) {
        return <div className="details-container">Loading...</div>;
    }

    return (
        <div className="details-container">
            <h2 className="details-title">Repository Details</h2>
            <h3 className="repo-name">{repoDetails.name}</h3>
            <p className="repo-description">Description: {repoDetails.description || "No description"}</p>
            <p className="owner-stats">
                Owner: {repoDetails.owner.login}
                <br />
                <span className="stats-label">Stars:</span> {repoDetails.stargazers_count}
                <br />
                <span className="stats-label">Forks:</span> {repoDetails.forks}
            </p>
            <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
            </a>
        </div>
    );
};

export default Details;
