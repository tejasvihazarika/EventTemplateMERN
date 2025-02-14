import React from 'react';
import './Sponsors.css'; 

const Sponsors = () => {
  const sponsors = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fiste-sc-manit&psig=AOvVaw0xIjkLV2JLhWLw3zJkDC_p&ust=1739596930396000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiPvtq1wosDFQAAAAAdAAAAABAE",
  ];

  return (
    <div className="sponsors-container">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <div className="logos">
        <div className="logos-slides">
          {sponsors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="sponsor-logo"
            />
          ))}
        </div>
        <div className="logos-slides">
          {sponsors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="sponsor-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
