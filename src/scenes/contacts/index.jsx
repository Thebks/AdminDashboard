import React from 'react';

import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import { dummyDataContacts } from '../../data/dummyData';
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "NAME", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "AGE", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "PHONE NUMBER", flex: 1 },
        { field: "email", headerName: "EMAIL", flex: 1 },
        { field: "address", headerName: "ADDRESS", flex: 1 },
        { field: "city", headerName: "CITY", flex: 1 },
        { field: "zipCode", headerName: "ZIP CODE", flex: 1 },
    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts" />
            <Box m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        borderName: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    }
                }}
            >
                <DataGrid checkboxSelection rows={dummyDataContacts} columns={columns} components={{ toolbar: GridToolbar }} />
            </Box>
        </Box>
    )
}

export default Contacts