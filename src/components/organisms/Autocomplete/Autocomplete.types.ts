export interface IResponceData {
    __typename: string;
    id: string;
    nameWithOwner: string;
}

export interface AutocompleteData {
    search: {
        nodes: IResponceData[];
    };
}

export interface AutocompleteVariables {
    searchTerm: string;
}
