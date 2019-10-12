import React from "react";
import { Link } from "react-router-dom";
import Item from "../Atoms/items-menu-component";

const MenuToStep = () => (
  <>
    <div className="row">
      <div className="col-3">
        <div className="card">
            <div className="card-body">
                <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
                >
                <Item url="/" nameItem="Paso 1" />
                <Item url="/" nameItem="Paso 2" />
                <Item url="/" nameItem="Paso 3" />
                <Item url="/" nameItem="Paso 4" />
                </div>
            </div>
        </div>
      </div>
      
    </div>
  </>
);

export default MenuToStep;
