import React from "react";
import test3 from "../../images/test3.jpg";

const CardList = (props) => {

    const payload = props.payload

    const data = payload.data

    const size = payload.size

    return (
        <div className="container mb-3">
            <div className="row">
                {
                    data.map((d, i) => (
                        <Card key={i}/>
                    ))
                }
            </div>
            {
                size > 9 ?
                    <div>
                        <button type="button" className="btn btn-primary btn-lg btn-block">more items</button>
                    </div>
                    : null
            }
        </div>
    )

}

const Card = () =>{

    return (
        <div className="col p-3">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={test3} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make
                        up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )

}

export default CardList
