import { combineReducers } from "redux";
import page from "./page";
import editorState from './editorState';
import dramas from './dramas';
// import 기능별모듈.js파일 from '파일경로';

export default combineReducers({
    page,
    editorState,
    dramas
});
