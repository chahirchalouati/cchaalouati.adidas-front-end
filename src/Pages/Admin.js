import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminNav from "../Components/Navs/AdminNav";
import AdminAside from "../Components/Navs/Asides/AdminAside";
import AdminContainer from "../ComponentsAdmin/Containers/AdminContainer";

function Admin() {

    const { RX_SIZES, RX_AUTH } = useSelector((state) => state);
    const [openSearch, setOpenSearch] = useState(false);
    const [openSidebar, setOpenSideBar] = useState(false);
    const [showDashItem, setshowDashItem] = useState({ name: "product" });


    return (
        <>
            <AdminNav
                openSearch={openSearch}
                openSidebar={openSidebar}
                setOpenSearch={setOpenSearch}
                setOpenSideBar={setOpenSideBar}
            />
            <div
                className={
                    openSidebar
                        ? "side__bar__mobile showTop"
                        : "side__bar__mobile hideTop"
                }
            >
                <div className="admin_info">
                    <img
                        src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                    <div className="admin_name">Chahir chalouati</div>
                </div>
            </div>
            <AdminContainer />
            <AdminAside setshowDashItem={setshowDashItem} />
        </>
    );
}

export default Admin;
{
    /*
   <AdminNav
                  openSearch={openSearch}
                  openSidebar={openSidebar}
                  setOpenSearch={setOpenSearch}
                  setOpenSideBar={setOpenSideBar}
              />
              <div
                  className={
                      openSidebar
                          ? "side__bar__mobile showTop"
                          : "side__bar__mobile hideTop"
                  }
              >
                  <div className="admin_info">
                      <img
                          src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          alt=""
                      />
                      <div className="admin_name">Chahir chalouati</div>
                  </div>
              </div>
              <AdminContainer />
              <AdminAside setshowDashItem={setshowDashItem} /> */
}
