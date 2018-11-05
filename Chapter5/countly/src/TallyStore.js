//tally를 저장하는 스토어

//EventEmitter => 뷰와 스토어를 동기화 
//                스토어가 변경될때 뷰가 통보 받도록
import EventEmitter from 'EventEmitter';
import Dispatcher from './Dispatcher';

const tally = {
  count: 0
};

const increment = () => {
  tally.count += 1;
};

const decrement = () => {
  tally.count -= 1;
};

const zero = () => {
  tally.count = 0;
};

class TallyStore extends EventEmitter {
  getTally() {
    return Object.assign({}, tally);
  }
  addChangeListener(callback) {
    this.addListener('CHANGE', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
  emitChange() {
    this.emit('CHANGE');
  }
}

//**********무슨말인지 모르겠 */
//Tally변수의 값은 기본 타입의 숫자이며 불변값이므로 바로 리턴하면된다.
//그러나 tally변수가 가변의 자바스크립트 객체에 저장되어 있다면, 객체 자체가 아닌 객체의 사본을 리턴해야 한다.
//그렇게 해야 다른 컴포넌트에서 어플리케이션의 상태를 우연히 변경하는 상황을 막을 수 있다.
const instance = new TallyStore();
export default instance;


// 액션을 받고 그 액션에 따른 내부 함수를 호출
const handleAction = (action) => {
  switch (action.type) {
    case 'INCREMENT':
      increment();
      break;
    case 'DECREMENT':
      decrement();
      break;
    case 'ZERO':
      zero();
      break;
    default:
      // 아무것도 하지 않음
  }
  instance.emitChange();
};

Dispatcher.register(handleAction);
