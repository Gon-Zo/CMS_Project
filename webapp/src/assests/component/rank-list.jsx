import React from 'react'
import test3 from '../images/test3.jpg'
import styled from 'styled-components'

const TopRankWrap = styled.div`
  background-color: #fff;
  width: 34rem;
`;

const TopRankHeader = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 3rem;
`;

const TopRankTitle = styled.h4`
  line-height: 3rem;
  text-indent: 1rem;
  color: #fff;
`;

const TopRankContent = styled.div`
  display: inline-block;
`;

const RankList = props => {

    const color = "#b48ead"

    const title = "PointLeader"

    return (
        <TopRankWrap>
            <TopRankHeader className="top-rank-header" color={color}>
                <TopRankTitle>{title}</TopRankTitle>
            </TopRankHeader>

            <TopRankContent className="p-3">
                <RankItem color={color}/>
            </TopRankContent>

        </TopRankWrap>
    )

}


const RankItem = props => {

    const color = props.color

    return(
        <TopRankItem color={color} className="p-1 card-1 m-2 ">
            <ImgItem className="p-1">
                <Img src={test3}/>
            </ImgItem>
            <RankBody>
                <div>This is Title</div>
                <div>
                    <span>TESTER</span>
                    <span>2020-10-10</span>
                </div>
            </RankBody>
            <RankNum >1</RankNum>
        </TopRankItem>
    )

}

const Card1 = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  &:hover {
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const TopRankItem = styled(Card1)`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 30rem;
  border: 1px solid #c9c9c9;
  cursor: pointer;
  &:hover {
      background-color:  ${props => props.color};
      border-color:  ${props => props.color};
    }
`;

const ImgItem = styled.div`
  width: 80px;
  height: 80px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const RankNum = styled.div`
  height: 100%;
  font-size: 30px;
`;

const RankBody = styled.div`
  width: 20rem;
  height: 100%;
`;

export default RankList
