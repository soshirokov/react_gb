import { onChildAdded, onChildRemoved } from "@firebase/database";
import { chatsRef, messagesRef } from '../../utils/firebase';

export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";

export const addMessage = (messageParams) => ({
  type: ADD_MESSAGE,
  payload: messageParams
});

export const addChat = (id) => ({
  type: ADD_CHAT,
  payload: id
});

export const deleteChat = (idToDelete) => ({
  type: DELETE_CHAT,
  payload: idToDelete
});

export const initChatsTracking = () => (dispatch) => {
  onChildAdded(chatsRef, (snapshot) => {
    dispatch(addChat({
      id: snapshot.val().id,
      name: snapshot.val().name
    }));
  });

  onChildRemoved(chatsRef, (snapshot) => {
    dispatch(deleteChat(snapshot.val().id));
  });
}

export const initMessagesTracking = (chatId) => (dispatch, state) => {
  onChildAdded(messagesRef(chatId), (snapshot) => {
    if (state().chats[chatId].messages.findIndex((msg) => msg.id === snapshot.val().id) === -1) {
      dispatch(addMessage({...snapshot.val(), chatId: chatId}));
    }
  });
}