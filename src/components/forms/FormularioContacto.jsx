import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Avatar, Box, TextField, Typography, FormControlLabel, Checkbox } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { LoadingButton } from '@mui/lab';

/**
 * Componente formulario para contacto
 * @returns los parámetros indicados por el usuario
 */
const FormularioContacto = () => {
  const estadoInicial = {
    email: '',
    name: '',
    message: '',
    acceptTerms: false,
  };

  const [todo, setTodo] = useState(estadoInicial);
  

  const onSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
      await setTodo(values);
      console.log(values);
      resetForm(estadoInicial);
    } catch (error) {
      if (error.code === "auth/invalid-credential")
        return setErrors({ credentials: "Credenciales inválidas" });
    } finally {
      setSubmitting(false);
    }
  };

  // validaciones de correo,nombre,mensaje y checkbox
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|es)$/,
      'El correo debe tener un formato correcto'
    )
    .required('El correo electrónico es obligatorio'),
    name: Yup.string().trim().required("El campo nombre es requerido"),
    message: Yup.string().trim().required("El campo mensaje es requerido"),
    acceptTerms: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
  });

  return (
    <Box sx={{ mt: "1rem", maxWidth: "400px", textAlign: "center" }}>
      <Avatar sx={{ mx: "auto", bgcolor: "#111" }}>
        <QuestionAnswerIcon />
      </Avatar>
      <Typography variant='h5' component="h1">
        Contacto
      </Typography>
      <Formik
        initialValues={estadoInicial}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, handleBlur, errors, touched }) => (
          <Box sx={{ mt: 1 }} component={'form'} onSubmit={handleSubmit}>
            <TextField
              type='text'
              placeholder='Introduce tu nombre'
              value={values.name}
              onChange={handleChange}
              name='name'
              onBlur={handleBlur}
              id='name'
              label='Nombre'
              fullWidth
              sx={{ mb: 3 }}
              error={errors.name && touched.name}
              helperText={errors.name && touched.name && errors.name}
            />
            <TextField
              type='email'
              placeholder='Introduce tu email'
              value={values.email}
              onChange={handleChange}
              name='email'
              onBlur={handleBlur}
              id='email'
              label='Email'
              fullWidth
              sx={{ mb: 3 }}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />
            <TextField
              type='text'
              placeholder='Escribe tu mensaje aquí'
              value={values.message}
              onChange={handleChange}
              name='message'
              onBlur={handleBlur}
              id='message'
              label='Mensaje'
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 3 }}
              error={errors.message && touched.message}
              helperText={errors.message && touched.message && errors.message}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.acceptTerms}
                  onChange={handleChange}
                  name="acceptTerms"
                />
              }
              label="Acepto los términos y condiciones"
            />
            {errors.acceptTerms && touched.acceptTerms && (
              <Typography color="error" variant="caption" display="block">
                {errors.acceptTerms}
              </Typography>
            )}
            <LoadingButton
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              fullWidth
              sx={{ mb: 3 }}
            >
              Enviar
            </LoadingButton>
            {errors.credentials && <p>{errors.credentials}</p>}
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default FormularioContacto;