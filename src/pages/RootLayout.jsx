import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { AppContext } from "../context/contextApi";

export default function RootLayout() {
  return (
    <AppContext>
      <div className="flex flex-col h-full">
        <Header />
        <Outlet />
      </div>
    </AppContext>
  );
}
