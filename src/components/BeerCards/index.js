import React from "react";

const styles = {
    card: {
        width: "18rem",
        margin: "10rem"
    }
}

function BeerCard(props) {
    return (
        <div className="card" style={styles.card}>
        <div className="card-body">
        <img class="card-img-top" src={props.image} alt={props.name} />
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.type}</h6>
            <p className="card-text">{props.description}</p>
            <h6 className="card-subtitle mb-2 text-muted">{props.abu}</h6>
        </div>
    </div>
    )
}

export default BeerCard;