import React from 'react'
import { useState } from "react"
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../themes'
import { styled } from '@mui/system';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, isSelected] = useState("Dashboard");

    const MyStyledBox = styled(Box)({
        "& .pro-sidebar-inner": {
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
            <ProSidebar>
                <Menu iconShape='square'>
                    {/* MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography varient="h3" color={colors.grey[100]}>ADMIN</Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justify-content="center" alignItems="center">
                                <img
                                    alt="profile-logo"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/thebksUser.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography varient="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>TheBks</Typography>
                                <Typography varient="h5" color={colors.greenAccent[500]}>CEO</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                </Menu>
            </ProSidebar>
        </MyStyledBox>
    )
}

export default Sidebar;


