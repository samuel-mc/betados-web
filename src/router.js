import { createBrowserRouter } from "react-router-dom";

import AdminTemplate from "./admin/AdminTemplate";
import HomeAdmin from "./admin/HomeAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/admin",
    element: (
      <AdminTemplate>
        <HomeAdmin/>
      </AdminTemplate>
    ),
  },
]);

export default router;
