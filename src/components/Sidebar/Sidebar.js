import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { BiMenu, BiMenuAltLeft, BiBorderOuter } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { GrStackOverflow } from "react-icons/gr";
import { RiShoppingBasketFill } from "react-icons/ri";

import React from "react";

import "./Sidebar.css";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const [toggleSidebar, setToggleSidebar] = React.useState(false);

  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <ProSidebar collapsed={toggleSidebar}>
      <Menu iconShape="square">
        <MenuItem
          iconShape={"round"}
          onClick={() => handleClick()}
          icon={toggleSidebar ? <BiMenu /> : <BiMenuAltLeft />}
        >
          <div style={{ padding: "0.5rem" }}>
            <h1 style={{ color: "#fff" }}>Sidebar</h1>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => history.push("/")}
          iconShape="circle"
          icon={<MdDashboard />}
        >
          Dashboard
        </MenuItem>

        {/* <SubMenu title="Pages" icon={<GrStackOverflow />}>
          <MenuItem
            onClick={() => history.push("/pages")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Pricing
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/pages")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Timeline
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/pages")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Login Page
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/pages")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Register Page
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/pages")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Lock Screen Page
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/pages")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            User Profile
          </MenuItem>
        </SubMenu> */}

        <SubMenu title="Components" icon={<GrStackOverflow />}>
          <MenuItem
            onClick={() => history.push("/button")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Buttons
          </MenuItem>
          {/* <MenuItem
            onClick={() => history.push("/")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Grid System
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Panels
          </MenuItem> */}
          <MenuItem
            onClick={() => history.push("/sweet-alert")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Sweet Alert
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/panels")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Panels
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/notification")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Notifications
          </MenuItem>
          {/* <MenuItem
            onClick={() => history.push("/")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Icons
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Typography
          </MenuItem> */}
        </SubMenu>

        <SubMenu title="Forms" icon={<GrStackOverflow />}>
          <MenuItem
            onClick={() => history.push("/regular-form")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Regular Forms
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/extended-form")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Extended Forms
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/form")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Validation Forms
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/wizard")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Wizard
          </MenuItem>
        </SubMenu>

        <SubMenu title="Tables" icon={<GrStackOverflow />}>
          <MenuItem
            onClick={() => history.push("/regular-tables")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Regular Tables
          </MenuItem>

          <MenuItem
            onClick={() => history.push("/data-table")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            DataTables
          </MenuItem>

          <MenuItem
            onClick={() => history.push("/mui-table")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            MUI Table
          </MenuItem>
        </SubMenu>

        <SubMenu title="Maps" icon={<RiShoppingBasketFill />}>
          {/* <MenuItem
            onClick={() => history.push("/")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Google Maps
          </MenuItem>
          <MenuItem
            onClick={() => history.push("/")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Full Screen Map
          </MenuItem> */}
          <MenuItem
            onClick={() => history.push("/vector-map")}
            iconShape="round"
            // icon={<HiDocumentText />}
          >
            Vector Map
          </MenuItem>
        </SubMenu>

        {/* <MenuItem
          onClick={() => history.push("/")}
          iconShape="circle"
          icon={<MdDashboard />}
        >
          Widgets
        </MenuItem>
        <MenuItem
          onClick={() => history.push("/")}
          iconShape="circle"
          icon={<MdDashboard />}
        >
          Charts
        </MenuItem> */}
        <MenuItem
          onClick={() => history.push("/calendar")}
          iconShape="circle"
          icon={<MdDashboard />}
        >
          Calendar
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
