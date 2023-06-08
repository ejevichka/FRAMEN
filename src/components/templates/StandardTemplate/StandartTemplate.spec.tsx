import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import StandardTemplate from "./index";

const theme = {
    colors: { white: "#BF4F74" },
    bg: "white",
};

jest.mock("react-router-dom", () => {
    const actualModule = jest.requireActual("react-router-dom");
    return { ...actualModule, useLocation: jest.fn(), useNavigate: jest.fn() };
});

jest.mock("components/organisms/Autocomplete", () => () => (
    <div data-testid="mocked-autocomplete" />
));

jest.mock("components/organisms/SideMenu", () => () => (
    <div data-testid="mocked-sideMenu" />
));

test("loads and displays StandardTemplate", async () => {
    render(
        <ThemeProvider theme={theme}>
            <StandardTemplate>
                <div>Test</div>
            </StandardTemplate>
        </ThemeProvider>,
    );

    expect(screen.getByText(/Test/)).toBeInTheDocument();
});
