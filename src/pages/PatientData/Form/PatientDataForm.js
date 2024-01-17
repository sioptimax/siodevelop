import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';

import { PatientDataValidators } from "../validators/PatientDataValidators"

const PatientDataForm = () => {
    const formik = useFormik({
        initialValues: {
            patientName: '',
        },
        PatientDataValidators,
        onSubmit: patientData => {
            console.log(patientData);
        },
    });

    return (
        <Box
            sx={{ boxShadow: 3, borderRadius: 2, p: 2, m: 5 }}
            component="form"
            onSubmit={formik.handleSubmit}
        >
            <TextField
                id="name"
                name="name"
                label="Nombre"
                type="text"
                variant="outlined"
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
            />
            
            <Button
                sx={{ mt: 2 }}
                type="submit"
                variant="outlined"
            >
                Enviar
            </Button>
        </Box>
    );
};

export default PatientDataForm;