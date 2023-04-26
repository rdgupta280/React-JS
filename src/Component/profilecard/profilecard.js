import React from "react";
import "./profilecard.css";

function ProfileCard(props) {
  const { imageSrc, name, designation, jobDescription } = props;

  function SeeMoreClick() {
    alert(name);
  }

  return (
    <div className="profile-card">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <h3>{designation}</h3>
      <p>{jobDescription}</p>
      <button className="btn" onClick={SeeMoreClick}>
        See More
      </button>
    </div>
  );
}

export default ProfileCard;
