import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { IResponceData } from "components/organisms/Autocomplete/Autocomplete.types";
import { ITableContent } from "./Table.types";

const TableComponent = (props: ITableContent) => {
    const { responseData = [] } = props;
    return (
        <TableContainer
            component={Paper}
            data-testid="TableContent"
            sx={{ margin: "20px 0" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name with Owner</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {responseData.map((item: IResponceData) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.nameWithOwner}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
