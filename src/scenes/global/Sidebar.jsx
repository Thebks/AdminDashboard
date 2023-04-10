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

        </MyStyledBox>
    )
}

export default Sidebar;