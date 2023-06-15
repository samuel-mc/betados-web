import { createBrowserRouter } from "react-router-dom";

import AdminTemplate from "./admin/AdminTemplate";
import HomeAdmin from "./admin/HomeAdmin";
import Sports from "./admin/Sports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/admin",
    element: (
      <AdminTemplate>
        <HomeAdmin />
      </AdminTemplate>
    ),
  },
  {
    path: "/admin/sports",
    element: (
      <AdminTemplate>
        <Sports />
      </AdminTemplate>
    ),
  },
]);

export default router;
