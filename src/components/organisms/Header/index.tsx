import React from "react";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "react-i18next";

import { BurgerMenu } from "../../atoms/ToggleMenu";
import { HeaderProps } from "./Header.types";
import { Container } from "./styles";

const Header = (props: HeaderProps) => {
    const { toggleMenu } = props;

    return (
        <Container>
            <BurgerMenu toggleMenu={toggleMenu} />
            <img
                src="https://global-uploads.webflow.com/6364e4e0baec60a3a1eff938/6387823376153765a32a51a5_framen_logo_color.png"
                loading="lazy"
                width="133"
                sizes="(max-width: 479px) 100vw, 133px"
                alt=""
            />
            <Avatar src="/broken-image.jpg" />
        </Container>
    );
};

export default Header;
