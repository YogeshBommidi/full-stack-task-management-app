import React from "react";
import "./TaskCards.css";

const TaskCards = ({ cards }) => {
  const date = new Date(cards.created_at);
  const formattedDate = date.toISOString().split("T")[0];
  const truncatedDescription =
    cards.description.length > 100
      ? cards.description.substring(0, 100) + "..."
      : cards.description;

  return (
    <div className="cardsWrapper">
      <div className="card-title">
        <span className="primaryText">{cards.title}</span>
        <span className={`status ${cards.status ? "true" : "false"}`}>
          {cards.status ? "true" : "false"}
        </span>
      </div>
      <div className="card-details">
        <span className="secondaryText">{truncatedDescription}</span>
        <span className="secondaryText">Created At : {formattedDate}</span>
      </div>
    </div>
  );
};

export default TaskCards;
