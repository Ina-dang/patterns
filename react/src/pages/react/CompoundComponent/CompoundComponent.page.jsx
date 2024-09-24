import Flyout from "./Flyout";

const CompoundComponentPage = () => {
  return (
    <main className="react compound-component-page">
      <h2>합성 컴포넌트 패턴</h2>
      <p>
        headless component로 기능은 있으나 스타일이 없는 컴포넌트이다. `props`를
        사용하지 않고 내부에서 데이터를 처리할 수 있고 비슷한 디자인의
        컴포넌트가 필요할 때 새로운 컴포넌트를 들지 않고 사용 가능하다. 이를통해
        **유연하고 재사용 가능한 컴포넌트를 설계할 수 있고, 가독성과
        유지보수성을 높일 수 있다.**
      </p>
      <FlyoutMenu />
    </main>
  );
};

/**
 * FlyoutMenu 컴포넌트
 *
 * Flyout 컴포넌트를 활용하여 메뉴 토글 버튼과 옵션 목록을 렌더링합니다.
 *
 * @returns {JSX.Element} - Flyout 메뉴 컴포넌트 JSX
 */
const FlyoutMenu = () => {
  return (
    <Flyout>
      {/* 토글 버튼 */}
      <Flyout.Toggle />
      {/* Flyout 메뉴 목록 */}
      <Flyout.List>
        <Flyout.Item>Edit</Flyout.Item>
        <Flyout.Item>Delete</Flyout.Item>
      </Flyout.List>
    </Flyout>
  );
};

export { CompoundComponentPage };
