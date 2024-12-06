import { Outlet } from "react-router-dom";
import { MenuItem } from "../interfaces/menuItem";
import Menu from "./Menu";

interface LayoutProps {
  menuItems: MenuItem[];
}

export default function Layout({ menuItems }: LayoutProps) {
  return (
    <>
      <Menu items={menuItems} />
      <Outlet />
    </>
  );
}
