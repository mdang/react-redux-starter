export const actionTypes = {
  USER_SELECTED: 'USER_SELECTED'
};

export const selectUser = (user) => {
  console.log('You clicked on user: ', user);

  return {
    type: actionTypes.USER_SELECTED,
    payload: user
  }
};
