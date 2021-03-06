import Dashboard from "containers/Pages/dashBoard";
import Departament from "containers/Pages/departament";
import Employees from "containers/Pages/employees";
import FinancialMoviments from "containers/Pages/financialMoviments";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-home",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/departament",
    name: "Departamento",
    icon: "pe-7s-note2",
    component: Departament,
    layout: "/admin"
  },
  {
    path: "/employees",
    name: "Funcionários",
    icon: "pe-7s-id",
    component: Employees,
    layout: "/admin"
  },
  {
    path: "/financialMoviments",
    name: "Movimentações",
    icon: "pe-7s-piggy",
    component: FinancialMoviments,
    layout: "/admin"
  }
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
