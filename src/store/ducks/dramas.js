// 액션 타입 정의
const FILL_DRAMAS = "dramas/FILL_DRAMAS";

// 액션 생섬함수 정의
export const fillDramas = dramas => ({ type: FILL_DRAMAS, dramas });

// **** 초기상태 정의
const initialState = {
  dramas: []
};

// **** 리듀서 작성
export default function dramas(state = initialState, action) {
  switch (action.type) {
    case FILL_DRAMAS:
      return {
        ...state,
        dramas: action.dramas
      };
    default:
      return state;
  }
}
