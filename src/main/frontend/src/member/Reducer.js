// 세션 관리를 위한 액션 타입 정의
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const UPDATE_MEMBER_INFO = 'UPDATE_MEMBER_INFO';

// 액션 생성자 함수
export const login = (userData) => ({
    type: LOGIN,
    payload: userData,
});

export const logout = () => ({
    type: LOGOUT,
});

export const updateMemberInfo = (newMemberInfo) => ({
    type: UPDATE_MEMBER_INFO,
    payload: newMemberInfo,
});

// 초기 상태
const initialState = {
    isLoggedIn: false,
    userData: null,
    memberInfo: {},
};

// 리듀서
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: true,
                userData: action.payload,
                memberInfo: action.payload.memberInfo || {},
            };
        case LOGOUT:
            return {
                isLoggedIn: false,
                userData: null,
                memberInfo: {}, // 로그아웃 시 memberInfo 초기화
            };
        case UPDATE_MEMBER_INFO:
            return {
                ...state,
                memberInfo: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;
