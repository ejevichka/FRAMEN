import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IResponceData } from "components/organisms/Autocomplete/Autocomplete.types";
import TableComponent from "./index";

// Define mocked data and queries
const mocks: IResponceData[] = [
    {
        __typename: "Repository",
        id: "MDEwOlJlcG9zaXRvcnkzNjMyMzUwNjg=",
        nameWithOwner: "eodkoedkoedkeodkekd/dcdcdcdcdc",
    },
];

test("loads and displays greeting", async () => {
    render(<TableComponent responseData={mocks} />);
    await screen.getByRole("table");
    expect(screen.getByRole("table")).toBeVisible();
});
