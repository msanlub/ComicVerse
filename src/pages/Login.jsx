import { useContext, useEffect} from 'react'
import { login } from '../config/Firebase'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab'

/**
 * Página de inicio de sesión que permite a los usuarios autenticarse.
 * Realiza validaciones de los campos de entrada y maneja la lógica de inicio de sesión.
 * 
 * @returns {JSX.Element} El componente renderizado que muestra el formulario de inicio de sesión.
 */
const Login = () => {
    const {user} = useContext(UserContext); //obtener contexto

    const navigate = useNavigate() //reedirigir a usuario una vez autenticado

    useEffect(() => {
        if(user) navigate ("/usuario")
    }, [user])

     /**
     * Maneja el envío del formulario de inicio de sesión.
     *
     * @param {Object} values - Valores del formulario.
     * @param {string} values.name - Nombre del usuario.
     * @param {string} values.email - Correo electrónico del usuario.
     * @param {string} values.password - Contraseña del usuario.
     * @param {Object} formikHelpers - Ayudantes de Formik para manejar el estado del formulario.
     * @param {function} formikHelpers.setSubmitting - Función para establecer el estado de envío.
     * @param {function} formikHelpers.setErrors - Función para establecer errores en el formulario.
     * @param {function} formikHelpers.resetForm - Función para reiniciar el formulario.
     */
    const onSubmit = async ({name,email,password},{setSubmitting, setErrors, resetForm }) => {
        try{
            await login({name,email,password})
            console.log("User logged in")
            resetForm()

        }catch (error) {
            if(error.code === "auth/invalid-credential")
                return setErrors({credentials:"Credenciales inválidas"})
            
        }
        finally {
            setSubmitting(false)
        }
        
    }

    const validationSchema = Yup.object().shape({
        name:Yup.string().trim().required("El nombre es requerido"),
        email: Yup.string()
            .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|es)$/,
            'El correo debe tener un formato correcto'
            )
            .required('El correo electrónico es obligatorio'),
        password: Yup.string()
            .trim()
            .min(8, "La contraseña debe tener al menos 8 caracteres")
            .matches(/^(?=.*[a-z])/, "Debe contener al menos una letra minúscula")
            .matches(/^(?=.*[A-Z])/, "Debe contener al menos una letra mayúscula")
            .matches(/^(?=.*[0-9])/, "Debe contener al menos un número")
            .required("El campo password es requerido")
    })

  return (
    <section className='registro__formulario'>
        <Box sx={{mt:"1rem",maxWidth:"400px",textAlign:"center"}}>
        <Avatar sx={{mx:"auto",bgcolor:"#111"}}>
            <LoginIcon/>
        </Avatar>
        <Typography
            variant='h5'
            component="h1"
        >Login
        </Typography>
        <Formik
            initialValues={{name:'',email:'',password:''}}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                ({ values, handleChange, handleSubmit, isSubmitting, handleBlur, errors, touched })=>(
                <Box 
                    sx={{mt:1}}
                    component={'form'}
                    onSubmit={handleSubmit}>

                    <TextField
                        type='text'
                        placeholder='nombre'
                        value={values.name}
                        onChange={handleChange}
                        name='name'
                        onBlur={handleBlur}
                        id='name'
                        label='Introduce el nombre'
                        fullWidth
                        sx={{mb:3}}
                        error={errors.name && touched.name}
                        helperText={errors.name && touched.name && errors.name}
                    />    
                    <TextField
                        type='text'
                        placeholder='email@email.com'
                        value={values.email}
                        onChange={handleChange}
                        name='email'
                        onBlur={handleBlur}
                        id='email'
                        label='Introduce el email'
                        fullWidth
                        sx={{mb:3}}
                        error={errors.email && touched.email}
                        helperText={errors.email && touched.email && errors.email}
                    />
                    
                    <TextField
                        type='password'
                        placeholder='password'
                        value={values.password}
                        onChange={handleChange}
                        name='password'
                        onBlur={handleBlur}
                        id='password'
                        label='Introduce el password'
                        fullWidth
                        sx={{mb:3}}
                        error={errors.password && touched.password}
                        helperText={errors.password && touched.password && errors.password}
                    />

                    <LoadingButton
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        loading={isSubmitting}
                        fullWidth
                        sx={{mb:3}}
                    >
                        Acceder
                    </LoadingButton>
                
                    <Button 
                        fullWidth
                        component={Link}
                        to={"/registro"}
                        type='submit' 
                        disabled={isSubmitting}
                    >¿No tienes cuenta? Registrate
                    </Button>

                    {
                    errors.credentials && <p>{errors.credentials}</p>
                    }
                </Box>
                )
            } 
        </Formik>     
    </Box>
    </section>
    
  )
}

export default Login