import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import List, { Item } from "./List";

/**
 * FlyOutContext
 *
 * @typedef {Object} FlyOutContext
 * @property {boolean} open - Flyout 메뉴가 열려 있는지 여부
 * @property {Function} toggle - Flyout 메뉴 열림 상태를 토글하는 함수
 */
export const FlyOutContext = createContext();

/**
 * Flyout 컴포넌트
 *
 * Flyout 메뉴를 제공하는 컨테이너 컴포넌트입니다.
 * 내부적으로 상태를 관리하며, 자식 컴포넌트에 컨텍스트를 제공합니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 props
 * @param {React.ReactNode} props.children - Flyout 내부에 렌더링될 자식 컴포넌트
 * @returns {JSX.Element} Flyout 컴포넌트 JSX
 */
export const Flyout = (props) => {
  const [open, toggle] = useState(false);
  const providerValue = { open, toggle };

  return (
    <div>
      <FlyOutContext.Provider value={providerValue}>
        {props.children}
      </FlyOutContext.Provider>
    </div>
  );
};

Flyout.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Toggle 컴포넌트
 *
 * Flyout 메뉴의 열림/닫힘을 제어하는 토글 버튼입니다.
 *
 * @returns {JSX.Element} Toggle 컴포넌트 JSX
 */
const Toggle = () => {
  const { open, toggle } = useContext(FlyOutContext);
  return (
    <div onClick={() => toggle(!open)}>
      <p>누르는곳</p>
    </div>
  );
};

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.Item = Item;

export default Flyout;
