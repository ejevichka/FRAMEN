import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Home from "./index";

const theme = {
    colors: { white: "#fff" },
    bg: "white",
};

jest.mock("components/organisms/Autocomplete", () => () => (
    <div data-testid="mocked-autocomplete" />
));

jest.mock("components/organisms/SideMenu", () => () => (
    <div data-testid="mocked-sideMenu" />
));

describe("Home", () => {
    test("renders the Home component with mocked StandardTemplate", async () => {
        render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>,
        );
        await expect(screen.getByTestId("mocked-autocomplete")).toBeInTheDocument();
        await expect(screen.getByTestId("mocked-sideMenu")).toBeInTheDocument();
    });
});
