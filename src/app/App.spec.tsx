import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import App from "./index";

describe("App Component", () => {
    test("renders App Component", async () => {
        const { getByTestId } = render(
            <MockedProvider mocks={[]} addTypename={false}>
                <App />
            </MockedProvider>,
        );

        const linkElement = getByTestId("TableContent");
        expect(linkElement).toBeInTheDocument();
    });
});
