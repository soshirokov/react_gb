import { onChildChanged, onValue } from 'firebase/database';
import { profileRef, profilesRef } from '../../utils/firebase';

export const TOGGLE_SHOW_NAME = "TOGGLE_SHOW_NAME";
export const SET_NAME = "SET_NAME";

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME
};

export const setName = (newName) => ({
  type: SET_NAME,
  payload: newName
});

export const initNameTracking = (userUid) => (dispatch) => {
  onChildChanged(profilesRef, (snapshot) => {
    dispatch(setName(snapshot.val().name));
  });
}

export const getNameFB = (userUid) => dispatch => {
  onValue(profileRef(userUid), (snapshot) => {
    dispatch(setName(snapshot.val().name));
  });
}