import { useRef } from "react";
import singletonCounter from "./singleton";
import { useEffect } from "react";
const SingletonPage = () => {
  const countRef = useRef(null);
  const updateUI = () => {
    if (countRef.current) {
      countRef.current.innerText = singletonCounter.getCount();
    }
  };

  const increment = () => {
    singletonCounter.increment();
    updateUI(); // 상태 변경 후 UI 업데이트
  };

  const decrement = () => {
    singletonCounter.decrement();
    updateUI(); // 상태 변경 후 UI 업데이트
  };

  useEffect(() => {
    updateUI();
  }, []);
  return (
    <main className="design singleton-page">
      <h2>싱글톤 패턴</h2>
      <section>
        <p>
          싱글톤 패턴은 한 번 인스턴스화할 수 있고 전역에서 접근 가능한 클래스를
          말한다. 애플리케이션 전역에서 단일 인스턴스를 공유할 수 있으므로 전역
          상태 관리에 적합하다.
        </p>
        <p>
          React에선 전역상태관리를 위해 싱글톤객체를 만드는 것 대신 리덕스나
          Context를 사용한다. 싱글톤과 유사해보이지만 싱글톤은 인스턴스의 값을
          직접 수정할 수 있는 반면 해당 상태관리 도구들은 읽기 전용 상태를
          제공한다. 컴포넌트가 직접 상태를 업데이트하게 두는 대신 컴포넌트에서
          디스패쳐를 통해 넘긴 액션에 대해 실행된 순수함수 리듀서를 통해서만
          업데이트가 가능한 것이다.
        </p>
      </section>

      <section>
        <h3>장점</h3>
        <ul>
          <li>
            메모리 절약: 인스턴스를 하나만 만들어 메모리 공간을 절약할 수 있음
          </li>
          <li>애플리케이션 전역에서 상태를 공유 가능</li>
        </ul>

        <h3>단점</h3>
        <ul>
          <li>안티패턴으로 간주될 수 있음</li>
          <li>
            JavaScript에서는 오버 엔지니어링일 수 있음 (객체 리터럴로도 구현
            가능)
          </li>
        </ul>
      </section>

      <section>
        <h3>카운트 테스트</h3>
        <div className="counter-display">
          <button onClick={decrement} aria-label="decrease count">
            -
          </button>
          <span
            ref={countRef}
            style={{ padding: "0 10px", fontSize: "1.5rem" }}
          >
            0
          </span>
          <button onClick={increment} aria-label="increase count">
            +
          </button>
        </div>
      </section>
    </main>
  );
};

export { SingletonPage };
