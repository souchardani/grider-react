import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import SideBar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import classNames from "classnames";
import { useState } from "react";

function App() {
  const mainClasses = classNames(
    "container mx-auto grid grid-cols-6 gap-4 mt-4"
  );

  return (
    <div className={mainClasses}>
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
