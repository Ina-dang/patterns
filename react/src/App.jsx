import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="App">
      <aside id="sidebar">
        <div>
          <h2>패턴</h2>
        </div>
        <nav>
          <details>
            <summary>디자인패턴</summary>
            <ul>
              <li>
                <Link to="/design/singleton">싱글톤(Singleton)</Link>
              </li>
            </ul>
          </details>
          <details>
            <summary>리액트 디자인패턴</summary>
            <ul>
              <li>
                <Link to="/react/compound-component">
                  합성 컴포넌트(Compound Component)
                </Link>
              </li>
            </ul>
          </details>
        </nav>
      </aside>
      <div id="detail">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
