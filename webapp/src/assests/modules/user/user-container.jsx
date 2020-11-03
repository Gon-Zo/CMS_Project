import React from "react";
import {useDispatch, useSelector} from "react-redux";
// import CmsTable from "../../component/cms-table";

const UserContainer = () => {

    const userTable = useSelector(state => state.UserTable)

    const dispatch = useDispatch()

    return (
        <div>
            <span>User</span>
            {/*<CmsTable data={userTable.data}*/}
            {/*          header={userTable.column}*/}
            {/*          dispatch={dispatch}*/}
            {/*/>*/}
        </div>
    )
}

export default UserContainer
