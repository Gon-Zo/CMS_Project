import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #61dafb;
`;

const AwesomeComponent = (props) => {

    let color = props.color

    if (typeof color == 'undefined') color = "#f00"

    return (
        <div className="load-wrap">
            <RingLoader
                css={override}
                size={150}
                color={color}
                loading={true}
            />
        </div>
    )

}

export default AwesomeComponent
