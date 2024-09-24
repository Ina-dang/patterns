import { useContext } from "react";
import { FlyOutContext } from "./Flyout";
import PropTypes from "prop-types";

/**
 * List 컴포넌트
 *
 * Flyout 메뉴의 리스트를 렌더링합니다. Flyout 메뉴가 열려 있을 때만 리스트를 표시합니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 props
 * @param {React.ReactNode} props.children - 리스트 항목으로 렌더링될 자식 컴포넌트
 * @returns {JSX.Element|null} Flyout가 열려 있을 때 리스트 항목들을 렌더링하는 JSX, 그렇지 않으면 null
 */
export const List = ({ children }) => {
  const { open } = useContext(FlyOutContext);
  return open && <ul>{children}</ul>;
};

List.propTypes = {
  children: PropTypes.node.isRequired, // children 필수로 정의
};

/**
 * Item 컴포넌트
 *
 * Flyout 메뉴 내에서 각각의 항목을 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 props
 * @param {React.ReactNode} props.children - 리스트 항목의 콘텐츠로 렌더링될 자식 컴포넌트
 * @returns {JSX.Element} 리스트 항목을 렌더링하는 JSX
 */
export const Item = ({ children }) => {
  return <li>{children}</li>;
};

Item.propTypes = {
  children: PropTypes.node.isRequired, // children 필수로 정의
};

export default List;
