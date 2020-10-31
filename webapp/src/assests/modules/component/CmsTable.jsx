import React from "react";
import {_onUpdateToHeader} from "../actions/user_table.action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default ({data, header, dispatch}) => {
    return (
        <div>
            <div style={{
                textAlign: "end"
            }}>
                <button>Reset</button>
            </div>
            <Table data={data}
                   header={header}
                   dispatch={dispatch}
            />
        </div>
    )
}

const Table = ({header, data , dispatch}) => {

    return (
        <table className="table mt-3">
            <thead>
            <tr>
                <th scope="col">#</th>
                {
                    header.map((col, idx) => (
                        <th key={idx}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <div style={{
                                    cursor : "pointer"
                                }}
                                     onClick={()=>{
                                         console.log("Header click")
                                         col.show = true
                                         col.sort = "A"
                                         dispatch(_onUpdateToHeader(header))
                                     }}
                                >
                                    {col.columnName}
                                </div>
                                <div>
                                    <button
                                        style={{
                                            display: col.show ? "inline" : "none",
                                        }}
                                        onClick={()=>{
                                            console.log("success")
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={['fas', col.sort === "A" ? 'chevron-up' : "chevron-down"]}/>
                                    </button>
                                </div>
                            </div>
                        </th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {
                data.map((payload, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        {
                            header.map( (h , j ) => (
                                <td key={j}>
                                    <CheckBox val={payload[h.columnId]}/>
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

const CheckBox = ({val}) =>{
    if(typeof val === "boolean"){
        return <input type="checkbox" defaultChecked={val} defaultValue={val}/>
    }
    return <span>{val}</span>
}
