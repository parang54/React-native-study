import { createStore } from 'redux';

const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) => {
                      //현재의 상태, 디스패치된 액션
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'ZERO':
      return {
        count: 0
      };
    default:
      //아무것도 하지 않아도 액션이 오면 새로 그려줘야된다
      return state; 
  }
};

export default createStore(countReducer);
