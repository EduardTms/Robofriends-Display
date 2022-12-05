import React from "react";

const Card = ({ name, email, id }) => {
    return(
        <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-2">
            <img className="x" src={`https://robohash.org/4${id}?size=250x250`} alt="profilePicture" />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;