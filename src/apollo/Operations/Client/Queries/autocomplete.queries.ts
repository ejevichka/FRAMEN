import { gql } from "@apollo/client";

export const GET_AUTOCOMPLETE_OPTIONS = gql`
    query GetAutocompleteOptions($searchTerm: String!) {
        search(query: $searchTerm, type: REPOSITORY, first: 10) {
            nodes {
                ... on Repository {
                    id
                    nameWithOwner
                }
            }
        }
    }
`;
