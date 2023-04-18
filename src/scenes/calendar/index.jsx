import React, { useState } from 'react'
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../themes";


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvent, setCurrentEvent] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for an event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
    }


    return (
        <Box>
            <Header title="Calendar" subtitle="Calendar and Events Planner" />


        </Box>
    )
}

export default Calendar