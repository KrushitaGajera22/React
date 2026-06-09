import React from "react";
import { Circle, Star, ArrowUp } from "lucide-react";
import { HiUser, HiMapPin } from "react-icons/hi2";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="" />
          <div className="overlay">
            <div className="top">
              <span className="status">
                <Circle
                  size={10}
                  fill="#4ea8ff"
                  color="#4ea8ff"
                  strokeWidth={0}
                />
                {props.status}
              </span>

              <span className="menu">⋮</span>
            </div>

            <div className="center">
              <h2>{props.title}</h2>

              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill={index < props.rating ? "#FACC15" : "transparent"}
                    color={index < props.rating ? "#FACC15" : "#d1d5db"}
                  />
                ))}
              </div>

              <div className="info">
                <span>
                  <HiUser size={16} color="#d1d5db" />
                  {props.audienceType}
                </span>

                <span>
                  <HiMapPin size={16} color="#d1d5db" />
                  {props.locationCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <span className="count">{props.members}</span>
          <span className="growth">
            {props.growth}
            <ArrowUp size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
