import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PageTitle from "components/atoms/PageTitle";
import { StandardTemplate } from "components/templates";
import { Item } from "components/atoms";
import { IDefaultPage } from "./DefaultPage.types";

const DefaultPage = (props: IDefaultPage) => {
    const { text } = props;
    return (
        <StandardTemplate>
            <PageTitle Title="Welcome - React Boilerplate" />
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2}>
                    <Item>{text}</Item>
                </Stack>
            </Box>
        </StandardTemplate>
    );
};

export default DefaultPage;
