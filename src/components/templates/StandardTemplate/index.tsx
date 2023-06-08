import React, { ReactNode, useState, useCallback } from "react";
import { Header, SideMenu } from "components/organisms";
import { Body, Container } from "./styles";

const StandardTemplate = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prevState => !prevState);
    }, [isMenuOpen]);

    return (
        <Container>
            <Header toggleMenu={toggleMenu} />
            <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Body>{children}</Body>
        </Container>
    );
};

export default StandardTemplate;
