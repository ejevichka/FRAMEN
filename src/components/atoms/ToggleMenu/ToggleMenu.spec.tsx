import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BurgerMenu } from "./index";

test("loads and displays greeting", async () => {
    render(<BurgerMenu toggleMenu={jest.fn()} />);
    await screen.getByTestId("BurgerMenu");
    expect(screen.getByTestId("BurgerMenu")).toBeVisible();
});
