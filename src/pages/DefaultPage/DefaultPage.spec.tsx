import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import DefaultPage from "./index";

const theme = {
    colors: { white: "#BF4F74" },
    bg: "white",
};

jest.mock("components/organisms/Autocomplete", () => () => (
    <div data-testid="mocked-autocomplete" />
));

jest.mock("components/organisms/SideMenu", () => () => (
    <div data-testid="mocked-sideMenu" />
));

describe("Defaul Page", () => {
    test("renders the Defaul Page component with mocked StandardTemplate", async () => {
        render(
            <ThemeProvider theme={theme}>
                <DefaultPage text="Text" />
            </ThemeProvider>,
        );
        await expect(screen.getByText(/Text/)).toBeInTheDocument();
    });
});
