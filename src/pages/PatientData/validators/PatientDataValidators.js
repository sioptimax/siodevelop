
import * as Yup from 'yup';

export const PatientDataValidators = Yup.object({
    
    name: Yup.string()
        .max(40, 'El Nombre del Paciente no debe superar los 40 caracteres')
        .required('El Nombre del Paciente es requerido'),

});
