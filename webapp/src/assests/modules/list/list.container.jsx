import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CardList from "./card-list.jsx";

const ListContainer = () => {

    const data = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    const size = 10

    let [listType, setListType] = useState("list")

    return (

        <div className="container">

            <div
                style={{
                    textAlign: "end"
                }}
                className="mt-3">

                <span className="mr-3">정렬</span>

                <select>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </select>

                <div className="ml-3"
                     style={{
                         display: "inline-block"
                     }}>
                    <button
                        style={{}}
                        onClick={() => {
                            const type = listType === "square" ? "list" : "square"
                            setListType(type)
                        }}>
                        <FontAwesomeIcon icon={['fas', listType]}/>
                        <span className="ml-2">
                            {
                                listType === "square" ? "Card" : "List"
                            }
                        </span>
                    </button>
                </div>

                <CardList payload={{data: data, size: size}}/>

            </div>


        </div>
    )

}

export default ListContainer
