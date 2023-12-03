import { Outlet } from "react-router-dom";
import { Footer } from "../components";

export const Layout = () => {


  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
};
