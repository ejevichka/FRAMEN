import React, { useState, ChangeEvent } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { useLazyQuery } from "@apollo/client";
import { TextField, Alert } from "@mui/material";
import TableComponent from "components/organisms/Table";
import { GET_AUTOCOMPLETE_OPTIONS } from "../../../apollo/Operations/Client/Queries/autocomplete.queries";
import { Container } from "./styles";
import {
    IResponceData,
    AutocompleteData,
    AutocompleteVariables,
} from "./Autocomplete.types";

const AutocompleteInput: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [getAutocompleteOptions, { loading, data }] = useLazyQuery<
        AutocompleteData,
        AutocompleteVariables
    >(GET_AUTOCOMPLETE_OPTIONS);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        getAutocompleteOptions({ variables: { searchTerm: event.target.value } });
    };

    const options: IResponceData[] = data?.search.nodes || [];

    const getLabel = (option: IResponceData | unknown) =>
        option ? (option as IResponceData).nameWithOwner : "";

    return (
        <Container>
            <Autocomplete
                options={options}
                data-testid="Autocomplete-field"
                getOptionLabel={option => getLabel(option)}
                loading={loading}
                renderInput={(params: unknown) => (
                    <TextField
                        {...(params as Record<string, unknown>)}
                        label="Search"
                        variant="outlined"
                        onChange={handleInputChange}
                        style={{ height: "55px" }}
                        InputProps={{
                            style: {
                                height: "55px",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                textAlign: "center",
                                height: "55px",
                                alignItems: "center",
                            },
                        }}
                    />
                )}
            />
            {options.length === 0 && searchTerm !== "" && !loading && (
                <Alert severity="error" sx={{ margin: "20px 0 0 0" }}>
                    {`Sorry, we couldn't find any result for ${searchTerm}`}
                </Alert>
            )}
            <TableComponent responseData={options} />
        </Container>
    );
};

export default AutocompleteInput;
