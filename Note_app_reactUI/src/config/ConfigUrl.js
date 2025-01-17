const API_BASE_URL = process.env.REACT_APP_API_URL;

const endpoints = {
  LOG_IN: `${API_BASE_URL}/api/user/login`, 
  GET_NOTES_LIST: `${API_BASE_URL}/api/note/getAllNote`, 
  ADD_NOTE: `${API_BASE_URL}/api/note/addNote/`,
  UPDATE_NOTE_BY_ID: `${API_BASE_URL}/api/note/updateNoteById`,
  DELETE_NOTE_BY_ID: `${API_BASE_URL}/api/note/deleteNoteById`,
};

export default endpoints;
