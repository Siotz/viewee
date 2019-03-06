// 액션 타입 정의
const CHANGE_PAGE = "page/CHANGE_PAGE";

// 액션 생섬함수 정의
export const changePage = page => ({ type: CHANGE_PAGE, page });

// **** 초기상태 정의
const initialState = {
  page: "main"
};

// **** 리듀서 작성
export default function page(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    default:
      return state;
  }
}
