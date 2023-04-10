import React from 'react'
import { useState } from "react"
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../themes'
import { styled } from '@mui/system';


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, isSelected] = useState("Dashboard");

    const MyStyledBox = styled(Box)({
        "$ .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
            color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
            color: "#6870fa !important",
        },
    });

    return (
        <MyStyledBox>
            {/* USER */}
            {!isCollapsed && (
                <Box mb="25px">
                    <Box display="flex" justify-content="center" alignItems="center">
                        <img alt="profile-logo" width="100px" height="100px" src={`../../assets/thebksUser.png`} style={{ cursor: "pointer", borderRadius: "50%" }} />
                    </Box>
                    <Box textAlign="center">
                        <Typography varient="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>TheBks</Typography>
                        <Typography varient="h5" color={colors.greenAccent[500]}>CEO</Typography>
                    </Box>
                </Box>
            )}

            {/* MENU ITEMS */}
        </MyStyledBox>
    )
}

export default Sidebar;


// 1:04