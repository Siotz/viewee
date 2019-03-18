// 액션 타입 정의
const CHANGE_MODAL = "modalState/CHANGE_MODAL";

// 액션 생성함수 정의
export const changeModal = modal => ({
  type: CHANGE_MODAL,
  modal
});

// **** 초기상태 정의
const initialState = {
  modal: "none"
};

// **** 리듀서 작성
export default function modal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        modal: action.modal
      };
    default:
      return state;
  }
}
