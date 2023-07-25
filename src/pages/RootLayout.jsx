import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Outlet />
    </div>
  );
}
