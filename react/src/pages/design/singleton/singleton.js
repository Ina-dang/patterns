let exSingletonCounter = 0;

export class ExSingletonCounter {
  getInstance() {
    return this;
  }

  getCount() {
    return exSingletonCounter;
  }

  increment() {
    return ++exSingletonCounter;
  }

  decrement() {
    return --exSingletonCounter;
  }
}
// const exSingletonCounter1 = new ExSingletonCounter();
// const exSingletonCounter2 = new ExSingletonCounter();

// console.log(
//   exSingletonCounter1.getInstance() === exSingletonCounter2.getInstance()
// ); // false

let singletonInstance;
let counter = 0;
export class SingletonCounter {
  constructor() {
    if (singletonInstance) {
      throw new Error("하나의 인스턴스만 생성이 가능합니다");
    }
    singletonInstance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
// new SingletonCounter();
// new SingletonCounter(); // throw Error

const singletonCounter = Object.freeze(new SingletonCounter());
export default singletonCounter;

/**
 * 객체 리터럴로 표현
 *
 * let count = 0;
 *
 * const counter = {
 *   increment() {
 *     return ++count;
 *   },
 *   decrement() {
 *     return --count;
 *   }
 * };
 *
 * Object.freeze(counter);
 * export { counter };
 */
