import { EditorState } from 'draft-js';

// 액션 타입 정의
const CHANGE_CONTENT = "editorState/CHANGE_CONTENT";

// 액션 생섬함수 정의
export const changeContent = editorState => ({ type: CHANGE_CONTENT, editorState });

// **** 초기상태 정의
const initialState = {
    editorState: EditorState.createEmpty(),
};

// **** 리듀서 작성
export default function editorState(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CONTENT:
            return {
                ...state,
                editorState: action.editorState,
            };
        default:
            return state;
    }
}