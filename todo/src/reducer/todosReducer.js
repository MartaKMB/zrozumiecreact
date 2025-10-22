export function todosReducer(state, action) {
  switch (action.type) {
    case 'delete':
      return state.filter((todo) => todo.id !== action.id);
    case 'finish':
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return { ...todo, done: true };
      });
    case 'add':
      return [
        ...state,
        {
          name: action.newTodo,
          done: false,
          id: Math.random(),
        },
      ];
    case 'move': {
      const newIndex = action.index + action.direction;
      if (newIndex < 0 || newIndex >= state.length) return state;
      const newItems = [...state];
      const [movedItem] = newItems.splice(action.index, 1);
      newItems.splice(newIndex, 0, movedItem);
      return newItems;
    }
    case 'edit':
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return { ...todo, name: action.newName };
      });
    default:
        throw new Error("Action not supported");
  }
}
