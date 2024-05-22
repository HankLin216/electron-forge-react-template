import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
