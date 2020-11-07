import React from "react";
import styled from "styled-components";

export const TopList = (props) => {

    const className = props.className

    const data = props.data

    const title = props.title

    return (
        <div className={`col ${className}`}>

            <div>
                    <h3>
                        {title}
                    </h3>
            </div>

            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Like</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>Mark</td>
                                <td>1</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )

}


export default TopList

