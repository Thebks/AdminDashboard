import React from 'react'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../themes'
import { IconButton, InputBase } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material'
import { styled } from '@mui/system';
import Box from '@mui/material/Box';



const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const MySearchBox = styled(Box)`
    display: flex;
    background-color: ${colors.primary[400]};
    border-radius: 3px;
    `;
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BOX */}
            <MySearchBox>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </MySearchBox>
            <IconButton sx={{ display: "flex" }}></IconButton>
        </Box>
    )
}

export default Topbar