import React from "react";

const styles = {
    card: {
        width: "18rem",
        margin: "10rem"
    }
}

function HelloBootstrap() {
    return (
        <div>
            {/* Put a navbar on the page */}
            <nav className="navbar navbar-light bg-light justify-content-between" />
            <a className="navbar-brand" href="www.google.com">Navbar</a>
            <form className="form-inline" />
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

            {/* Put a jumbotron on the page */}

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Check this cool stuff out</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>

            {/* Put a few cards on the page */}
            <div className="row">

                    {/* Cards go here */}

                    {/* Card one */}

                    <div className="card" style={styles.card}>
                        <div className="card-body">
                        <img class="card-img-top" src="..." alt="beer image" />
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>

                    {/* Card two */}

                    <div className="card" style={styles.card}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>

                    {/* Card three */}

                    <div className="card" style={styles.card}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>

                    </div>
            </div>

        </div>
    )
}

export default HelloBootstrap;