// import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header";


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };
    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) =>
                (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}>
                            <TextField
                                fullWidth
                                label="First Name"
                                type="text"
                                variant="filled"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                                name="firstName"
                            />
                            <TextField
                                fullWidth
                                label="Last Name"
                                type="text"
                                variant="filled"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.LastName}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                                name="lastName"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                name="email"
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                name="contact"
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                name="address"
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

const phoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("Enter your First Name"),
    lastName: yup.string().required("Enter your Last Name"),
    email: yup.string().email("Enter a valid Email").required("Enter a valid Email"),
    contact: yup.string().matches(phoneRegex, "Enter a valid Phone Number").required("Phone number is required"),
    address: yup.string().required("Please add your address"),
});

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

export default Form