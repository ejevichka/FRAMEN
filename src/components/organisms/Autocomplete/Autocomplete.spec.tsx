import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_AUTOCOMPLETE_OPTIONS } from "../../../apollo/Operations/Client/Queries/autocomplete.queries";
import "@testing-library/jest-dom";
import AutocompleteInput from "./index";

const mocks = [
    {
        request: {
            query: GET_AUTOCOMPLETE_OPTIONS,
            variables: { searchTerm: "Test" },
        },
        result: {
            data: {
                search: {
                    nodes: [
                        {
                            id: "MDEwOlJlcG9zaXRvcnk2MTcyNTQ5Nw==",
                            nameWithOwner: "NewLifeX/X",
                            __typename: "Repository",
                        },
                    ],
                },
            },
        },
    },
];

describe("AutocompleteInput", () => {
    test("loads and displays AutocompleteInput", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <AutocompleteInput />
            </MockedProvider>,
        );
        expect(await screen.getByLabelText("Search")).toBeInTheDocument();
        expect(await screen.getByText("ID")).toBeInTheDocument();
        expect(await screen.getByText("Name with Owner")).toBeInTheDocument();
    });
});
