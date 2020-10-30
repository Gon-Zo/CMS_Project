import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MENU_TYPE} from "../../utils/app.eumns";
import {COLOR} from "../../utils/app.color";

export default (props) =>{

    const theme = props.theme;

    const name = props.name;

    const data = props.data;

   return(
       <SidebarWrap className="p-5" theme={theme}>
          <SidebarHeader theme={theme}>
             <SidebarName theme={theme}>
                 {name}
             </SidebarName>
          </SidebarHeader>

          <ul className="list-unstyled mt-3">
              <MenuItem theme={theme} data={data}/>
          </ul>
       </SidebarWrap>
   )
}

const MenuItem = (props) => {

    const theme = props.theme

    const data = props.data

    console.log(JSON.stringify(data))

    return (
        <MenuItems>
            {
                data.map((d , idx) => (
                    <Link key={idx} to={d.to}>
                        <IconBox>
                            <FontAwesomeIcon style={{
                                width: "30px",
                                height: "30px",
                                color: "#1479FF"
                            }} icon={d.icon}/>
                        </IconBox>

                        <IconName className="mt-3">
                            <span>{d.name}</span>
                        </IconName>
                    </Link>
                ))
            }
        </MenuItems>
    )
}


const SidebarWrap = styled.div`
  background-color: ${props => props.theme === MENU_TYPE.U ? COLOR.Ebony : "#fff" };
  padding-top: 2em !important;
  height: 100vh;
  overflow-y: auto;
  transition: .5s ease;
`

const SidebarHeader = styled.div`
text-align: center;
`

const SidebarName = styled.h5`
      font-weight: bold;
      color : ${props => props.theme === MENU_TYPE.U ? COLOR.TurquoiseBlue : COLOR.LIGTH_BLUE} ;
`

const MenuItems = styled.li`
      position: relative;
      width: 8em;
      height: 8em;
      margin: auto;
      padding-top: 1.5em;
`
const IconBox = styled.div`
        background-color: rgba(20, 121, 255, 0.04);
        width: 4em;
        height: 4em;
        border-radius: 1em;
        margin: auto;
        text-align: center;
        line-height: 5em;
        border: 1.5px solid rgba(20, 121, 255, 0.04);
`

const IconName = styled.div`
 text-align: center;
 font-size: 15px;
 color: #193b68;
`
