import React from 'react';

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import { dummyDataTeam } from '../../data/dummyData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header"

const Team = () => {
    const theme = useTheme();

    return (
        <Box>
            <Header title="TEAM" subtitle="Manage Teams here" />
            <Box>
                <DataGrid checkboxSelection rows={dummyDataTeam} />
            </Box>
        </Box>
    )
}

export default Team