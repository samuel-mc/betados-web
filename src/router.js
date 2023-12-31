import { createBrowserRouter } from "react-router-dom";

import AdminTemplate from "./admin/AdminTemplate";
import HomeAdmin from "./admin/HomeAdmin";
import Sports from "./admin/Sports";
import Countries from "./admin/Countries";
import Leagues from "./admin/Leagues";

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
  {
    path: "/admin/countries",
    element: (
      <AdminTemplate>
        <Countries />
      </AdminTemplate>
    ),
  },
  {
    path: "/admin/leagues",
    element: (
      <AdminTemplate>
        <Leagues />
      </AdminTemplate>
    ),
  },
]);

export default router;
