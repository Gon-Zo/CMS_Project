import React from "react";
import styled from 'styled-components'
import test3 from "../../images/test3.jpg";

const ImageWrap = styled.div`
width: 200px;
height: 200px;
`;

const Image = styled.img`
width: 200px;
height: 200px;
bject-fit: cover;
`

const ContentWrap = styled.div`
width: 55rem;
height: 200px;
display: inline-block;
`;

const ContentHeaderWrap = styled.div`
text-indent: 10px;
`;

const ContentHeader = styled.h3`
text-align: start;
`;

const ContentBox = styled.div`
text-align: start;
text-indent: 10px;
height: 7rem;
`;

const ImageList = props =>{

    const data = props.payload

    return(
        <div className="container mb-3">
            {
                data.map((d , i) => (
                    <ImageItem key={i} payload={d}/>
                ))
            }
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block">more items</button>
            </div>
        </div>
    )
}


const ImageItem = props =>{

    const payload = props.payload

    return (
        <div
            style={{
                    margin : "auto"
                }}
            className="row mt-3 mb-3">
            <ImageWrap>
                <Image src={test3} alt={"img"}/>
            </ImageWrap>
            <ContentWrap>
                <ContentHeaderWrap>
                    <ContentHeader>
                        {payload.title}
                    </ContentHeader>
                </ContentHeaderWrap>
                <ContentBox>
                    <span>{payload.content}</span>
                </ContentBox>
                <div className="mr-2">
                    <button className="btn btn-primary">
                        Go somewhere
                    </button>
                </div>
            </ContentWrap>
        </div>
    )
}

export default ImageList


