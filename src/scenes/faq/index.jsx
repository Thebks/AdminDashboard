import React from 'react'
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../themes"

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequent Questions Page (MockData)" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">
                        How can an admin create new users and manage their access levels within a dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        An admin can create new users and manage their access levels by using the user management tools provided by the dashboard. This may involve setting up user accounts, assigning roles and permissions, and restricting access to certain features or data.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">
                        How can users access their tasks and prioritize their workload within a dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Users can access their tasks by logging into the dashboard and viewing their task list or dashboard overview. They can then prioritize their workload based on due dates, importance, or other factors. Some dashboards may also allow users to set reminders or notifications for upcoming tasks.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">
                        How are tasks assigned to different users within a dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Tasks can be assigned to different users by using the task management tools provided by the dashboard. This may involve creating new tasks, assigning them to specific users or teams, and tracking their progress and completion.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">
                        How can an admin monitor user activity and performance within a dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        An admin can monitor user activity and performance by using the reporting and analytics tools provided by the dashboard. This may involve generating reports on user activity, tracking metrics such as task completion rates or response times, and identifying areas for improvement or optimization.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">
                        How can users submit complaints or feedback within a dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Users can submit complaints or feedback by using the feedback or support tools provided by the dashboard. This may involve filling out a support ticket, sending an email, or using a chat or messaging feature to communicate with the admin or support team.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">
                        How can an admin customize the dashboard to meet the specific needs of their organization or business?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        An admin can customize the dashboard by using the customization tools provided by the dashboard. This may involve modifying the layout or design of the dashboard, adding or removing features, and integrating with other tools or systems used by the organization or business.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ