import {SUCCESS} from "../../utils/action-type.util";

export const ACTION_TYPE = {
    UPDATE_DATA : "USER-TABLE/UPDATE_DATA",
    UPDATE_DATA2 : "USER-TABLE/UPDATE_DATA2",
    RESET : "USER-TABLE/RESET",
}

const initState = {
    data: [
        {
            create_date: "2020-01-01",
            update_date: "2020-01-01",
            activate: true,
            email: "test1",
            nickname: "test1"
        },
        {
            create_date: "2020-01-01",
            update_date: "2020-01-01",
            activate: true,
            email: "test1",
            nickname: "test1"
        },
        {
            create_date: "2020-01-01",
            update_date: "2020-01-01",
            activate: true,
            email: "test1",
            nickname: "test1"
        },
        {
            create_date: "2020-01-01",
            update_date: "2020-01-01",
            activate: true,
            email: "test1",
            nickname: "test1"
        }
    ],

    column: [
        {
            columnId: "email",
            columnName: "이메일",
            sort: "N",
            show: false
        },
        {
            columnId: "nickname",
            columnName: "닉네임",
            sort: "N",
            show: false
        },
        {
            columnId: "activate",
            columnName: "활성화",
            sort: "N",
            show: false
        },
        {
            columnId: "create_date",
            columnName: "가입날",
            sort: "N",
            show: false
        },
        {
            columnId: "update_date",
            columnName: "최근로그인",
            sort: "N",
            show: false
        },
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case SUCCESS(ACTION_TYPE.UPDATE_DATA):
            return {
                ...initState,
                data: action.payload
            };

        case SUCCESS(ACTION_TYPE.UPDATE_DATA2):
            return {
                ...initState,
                header: action.payload
            };

        case ACTION_TYPE.RESET:
            return {
                ...initState
            }
        default:
            return state
    }
}

