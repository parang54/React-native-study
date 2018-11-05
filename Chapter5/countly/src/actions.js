import Dispatcher from './Dispatcher';

export const increment = () => {
    //액션 생성자 만들기
    const action = { 
        type: 'INCREMENT'
    };
    //디스패처로 GoGo
    Dispatcher.dispatch(action);
};
export const decrement = () => {
    const action = { 
        type: 'DECREMENT'
    };
    Dispatcher.dispatch(action);
};


export const zero = () => {
    const action = { 
        type: 'ZERO'
    };
    Dispatcher.dispatch(action);
};
