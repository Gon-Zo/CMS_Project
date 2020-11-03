import React from "react";
import styled from "styled-components";

export const TopList = () => {

    const ListWrap = styled.ul`
    list-style:none;
    margin-bottom : 0;
    `;

    const ListItem = styled.li`
    `;

    return (
        <div className="col">
            <div>
                    <span>
                       Most Best 5
                    </span>
            </div>

            <ListWrap className="mt-2">
                <ListItem>TEST1</ListItem>
                <ListItem>TEST2</ListItem>
                <ListItem>TEST3</ListItem>
                <ListItem>TEST4</ListItem>
                <ListItem>TEST5</ListItem>
            </ListWrap>
        </div>
    )

}


export default TopList

