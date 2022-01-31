const INITIAL_STATE = {
  items: [],
};

const TodoReducer = (state = INITIAL_STATE, action) => {
  let items = [];

  switch (action.type) {
    case "ADD_TODO":
      items = state.items;
      items.push(action.payload);
      return { ...state, items: items };
    case "REMOVE_TODO":
      items = state.items;

      const index = items.indexOf(action.payload);
      if (index > -1) {
        items.splice(index, 1);
      }

      return { ...state, items: items };
    case "CHECK_TODO":
      items = state.items;
      items = items.map(el => {
          let checked = el.checked || false;

          if(el.id === action.payload.id) {
            checked = !el.checked;
          }

          return {...el, checked: checked}
      });

      return { ...state, items: items };
    default:
      return state;
  }
};

export default TodoReducer;
