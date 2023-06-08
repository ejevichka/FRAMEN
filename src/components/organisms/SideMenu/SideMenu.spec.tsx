import React from "react";
import { render, screen } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";
import SideMenu from "./index";

jest.mock("react-router-dom", () => {
    const actualModule = jest.requireActual("react-router-dom");
    return { ...actualModule, useLocation: jest.fn(), useNavigate: jest.fn() };
});

test("loads and displays SideMenu", async () => {
    const { getComputedStyle } = window;
    window.getComputedStyle = elt => getComputedStyle(elt);
    (useLocation as jest.Mock).mockReturnValue({ pathname: "/example" });
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    render(<SideMenu isMenuOpen toggleMenu={jest.fn()} />);
    await screen.getByTestId("sidebar");
    expect(screen.getByTestId("sidebar")).toBeVisible();
});
