import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CardList from "./card-list.jsx";
import {LIST_TYPE} from "./list-type";
import ImageList from "./img-list.jsx";

const ListContainer = () => {

    let [listType, setListType] = useState(LIST_TYPE.L)

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
                            const type = isNotCard(listType) ? LIST_TYPE.L : LIST_TYPE.C
                            setListType(type)
                        }}>
                        <FontAwesomeIcon icon={['fas', listType]}/>
                        <span className="ml-2">
                            {
                                isNotCard(listType) ? "Card" : "List"
                            }
                        </span>
                    </button>
                </div>
                {
                    isNotCard(listType) ?
                        <ImageList payload={card}/> :
                        <CardList payload={{data: card, size: card.length}}/>
                }
            </div>
        </div>
    )

}

const isNotCard = type => type === LIST_TYPE.C

const card = [
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        "title" : "Card title",
        "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
]

export default ListContainer
