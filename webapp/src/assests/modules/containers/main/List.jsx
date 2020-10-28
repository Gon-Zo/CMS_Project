import React from "react";
import {TopList} from "./Main.jsx";

export default () =>{

    return (
        <div className="container">
            <div className="row mt-4">
               <TopList/>
               <TopList/>
               <TopList/>
            </div>
            <Table/>
        </div>
    )
}

const Table = () => {
    return (
        <div className="mt-4">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
            <button className="btn btn-dark btn-block">More</button>
        </div>
    )
}

