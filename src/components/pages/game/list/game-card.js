import React from "react";
import { Link } from "react-router-dom";

const GameCard = () => {
  return (
    <div className="classes">
      <Link to="/game-details" className="img-thumb">
        <figure>
          <img src="images/use_img/course_img1.png" alt />
        </figure>
      </Link>
      <div className="classes-info">
        <div className="price">
          $55 <small />
        </div>
        <h3>
          <Link to="/game-details">Features Name Here Lorem ipsum dolor </Link>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <ul className="classes-time">
          <li>
            <span>2 - 5</span>
            Year old
          </li>
          <li>
            <span>24</span>
            Class Size
          </li>
          <li>
            <span>9:00 - 10:00</span>
            Class Duration
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameCard;

/*
import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  console.log(game);
  return (
    <div className="classes">
      <Link to="/game-details" className="img-thumb">
        <figure>
          <img src={game.imageurl} alt={game.title} />
        </figure>
      </Link>
      <div className="classes-info">
        <div className="price">
          $55 <small />
        </div>
        <h3>
          <Link to="/game-details"> {game.title} </Link>
        </h3>
        <p>{game.shortDesc}</p>
        <ul className="classes-time">
          <li>
            <span>{game.age}</span>
            Year old
          </li>
          <li>
            <span>24</span>
            Class Size
          </li>
          <li>
            <span>9:00 - 10:00</span>
            Class Duration
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameCard;

*
*/
