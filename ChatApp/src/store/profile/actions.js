export const TOGGLE_SHOW_NAME = "TOGGLE_SHOW_NAME";
export const SET_NAME = "SET_NAME";

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME
};

export const setName = (newName) => ({
  type: SET_NAME,
  name: newName
});