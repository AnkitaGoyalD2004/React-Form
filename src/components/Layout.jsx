import { Outlet } from "react-router-dom";

const Layout = () => {
  console.log("Hello");
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
