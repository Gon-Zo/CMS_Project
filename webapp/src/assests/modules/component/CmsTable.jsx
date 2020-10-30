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
                        <th scope="col" key={idx}>
                                <span>
                                    {col.columnName}
                                </span>
                            <div style={{
                                display: "inline-block",
                                float : "right",
                            }}>
                                <button onClick={()=>{
                                    if (col.sort === "N" || col.sort === "A") {
                                        col.sort = "D"
                                    } else {
                                        col.sort = "A"
                                    }
                                    dispatch(_onUpdateToHeader(header))
                                }}>
                                    <FontAwesomeIcon
                                        icon={['fas', col.sort === "A" || col.sort === "N" ? 'chevron-up' : "chevron-down"]}/>
                                </button>
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
