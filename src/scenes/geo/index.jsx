import React from 'react'
import { Box } from "@mui/material"
import Header from "../../components/Header"
import GeoChart from '../../components/GeoChart'
import { tokens } from '../../themes'
import { useTheme } from '@mui/material'

const Geo = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="25px" >
            <Header title="Map" subtitle="World Map" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geo