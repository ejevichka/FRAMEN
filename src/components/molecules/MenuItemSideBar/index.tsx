import React, { useState } from "react";
import { ListItemButton, List, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "components/organisms/SideMenu/SideMenu.types";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const renderMenuItem = (item: MenuItem, locationPath: string) => {
    const { label, icon, to, children, id } = item;
    const isSelected = to === locationPath;
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickItem = () => {
        navigate(to);
    };

    if (children) {
        return (
            <React.Fragment key={id}>
                <ListItemButton onClick={handleClick} key={id}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding data-testid="MenuItemSideBar">
                        {children.map(child => renderMenuItem(child, locationPath))}
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }

    return (
        <ListItemButton
            sx={{ pl: 4 }}
            onClick={handleClickItem}
            key={id}
            selected={isSelected}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};
