/* eslint-disable no-console */
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { IToggleMenu } from "./ToggleMenu";

export const BurgerMenu = (props: IToggleMenu) => {
    const { toggleMenu } = props;

    return (
        <IconButton data-testid="BurgerMenu" onClick={() => toggleMenu()}>
            <MenuIcon />
        </IconButton>
    );
};
