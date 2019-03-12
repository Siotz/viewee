// 액션 타입 정의
const CHANGE_LOGINMODAL = "loginModalState/CHANGE_LOGINMODAL";

// 액션 생성함수 정의
export const changeLoginModal = loginModal => ({
  type: CHANGE_LOGINMODAL,
  loginModal
});

// **** 초기상태 정의
const initialState = {
  loginModal: false
};

// **** 리듀서 작성
export default function loginModal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOGINMODAL:
      return {
        ...state,
        loginModal: action.loginModal
      };
    default:
      return state;
  }
}
