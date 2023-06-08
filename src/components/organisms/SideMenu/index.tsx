import React from "react";
import { useLocation } from "react-router-dom";
import { Drawer } from "@mui/material";
import { renderMenuItem } from "components/molecules/MenuItemSideBar";
import List from "@mui/material/List";
import { SideMenuProps } from "./SideMenu.types";
import { menuItems } from "./constants";

const SideMenu: React.FC<SideMenuProps> = ({ isMenuOpen, toggleMenu }) => {
    const location = useLocation();

    return (
        <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
            <List
                sx={{ width: "100%", maxWidth: 560, marginTop: "50px" }}
                data-testid="sidebar"
                component="nav"
                aria-labelledby="nested-list-subheader">
                {menuItems.map(item => renderMenuItem(item, location.pathname))}
            </List>
        </Drawer>
    );
};

export default SideMenu;
