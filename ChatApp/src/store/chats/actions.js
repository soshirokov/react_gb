export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";

export const addMessage = (messageParams) => ({
  type: ADD_MESSAGE,
  payload: messageParams
});

export const addChat = {
  type: ADD_CHAT
};

export const deleteChat = (idToDelete) => ({
  type: DELETE_CHAT,
  payload: idToDelete
});

export const addMessageThunk = (messageParams) => (dispatch) => {
  dispatch(addMessage(messageParams));
  if(messageParams.author !== 'Bot') {
    setTimeout(() => {
      dispatch(addMessage({
        chatId: messageParams.chatId,
        author: 'Bot',
        message: `Hello ${messageParams.author}!`
      }))
    }, 1000);
  }
}