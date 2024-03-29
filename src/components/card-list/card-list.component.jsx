import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = props => (
  <div className="card-list">
    {props.monesters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
