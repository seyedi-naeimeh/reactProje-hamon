import Hamon from "pages/hamon/Hamon";
import Main from "pages/main/Main";
import NewStore from "pages/nakhl/NewStore";
import React from "react";
import { Route, Routes } from "react-router-dom";


function RoutePages() {
  const RoutePage = [
    {
      path: "/",
      name: "hamon",
      id: "hamon",
      element: <Main />,
    },
    {
      path: "/hamon",
      name: "hamon",
      id: "hamon",
      element: <Hamon />,
    }
  ];

  
  return (
    <div>
      <Routes>
        {RoutePage.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
       
      </Routes>
    </div>
  );
}

export default RoutePages;
