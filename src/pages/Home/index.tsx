import React from "react";
import PageTitle from "components/atoms/PageTitle";
import { StandardTemplate } from "components/templates";
import AutocompleteInput from "components/organisms/Autocomplete";
import Box from "@mui/material/Box";

const Home = () => {
    return (
        <StandardTemplate>
            <PageTitle Title="Welcome - React Boilerplate" />
            <Box sx={{ width: "100%", padding: "20px" }}>
                <AutocompleteInput />
            </Box>
        </StandardTemplate>
    );
};

export default Home;
