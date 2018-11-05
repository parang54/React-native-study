// 간단한 작동방식을 보는 의미에서의 코드이다.
//페이스북의 오픈소스 플럭스 저장소에 있는 디스패처는 더 강력하며, 앱으로 출시할때 이용 권장
class Dispatcher{

    constructor() {
        this.isDispatching = false;
        this.actionHandlers = [];
      }
    
      //액션 핸들러 
      register(actionHandler) {
        this.actionHandlers.push(actionHandler);
      }

    dispatch(action) {
        if (this.isDispatching) { 
            throw new Error('현재 실행중입니다.'); //('Cannot dispatch in the middle of a dispatch');
        }
        this.isDispatching = true;

        //액션을 스토어로 전달
        this.actionHandlers.forEach(handler => handler(action));

        this.isDispatching = false;

    }
}
//클래스의 인스턴스를 esport한다.
//앱전체의 모든 액션들을 관리하는 singleton 디스패처를 만들기 위해서이다. 
export default new Dispatcher(); 

