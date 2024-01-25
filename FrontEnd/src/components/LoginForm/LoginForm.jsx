import React, { useState } from 'react';
import LoginFormStyles from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'El nombre debe tener al menos 5 caracteres')
    .max(15, 'El nombre no puede tener más de 15 caracteres')
    .matches(/^[a-zA-Z0-9]+$/, 'El nombre solo puede contener letras y números')
    .required('El nombre es obligatorio'),
  password: Yup.string()
    .min(5, 'La contraseña debe tener al menos 5 caracteres')
    .max(15, 'La contraseña no puede tener más de 15 caracteres')
    .matches(/^[a-zA-Z0-9]+$/, 'La contraseña solo puede contener letras y números')
    .required('La contraseña es obligatoria'),
});

const LoginForm = () => {
  const [values, setValues] = useState({
    name: '',
    password: '',
  });
  

  const handleSubmit = async (values) => {
    try {

      console.log('Valores del formulario:', values);

      const response = await fetch('/api/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        // El usuario ha iniciado sesión correctamente
        // Redirige al usuario a la página principal
        // Aquí debes implementar la lógica de redirección
        // (puedes utilizar React Router, useHistory, etc.)
        console.log('Inicio de sesión exitoso');
      } else {
        // El usuario no ha iniciado sesión correctamente
        // Muestra un mensaje de error
        console.error('Credenciales incorrectas');
      }
    } catch (error) {
      // Maneja el error
      console.error('Error al conectar con el backend', error);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={LoginFormStyles.formTwoImputs}>
        <div className={LoginFormStyles.containerNameInput}>
          <label htmlFor="name"></label>
          <Field type="text" id="name" name="name" placeholder="Ingrese el nombre de usuario" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div className={LoginFormStyles.containerPasswordInput}>
          <label htmlFor="password"></label>
          <Field type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>
        <button type="submit" className={LoginFormStyles.buttonSingIn}>Iniciar sesión</button>
      </Form>
    </Formik>
   
  );
};

export default LoginForm;



