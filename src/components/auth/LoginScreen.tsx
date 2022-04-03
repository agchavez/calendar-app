import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { startLogin } from "../../state/action-creators";
import "./login.css";
import { startRegister } from "../../state/action-creators/authActionCreators";
import { useSelectorApp } from "../../hooks/redux";

interface InitailValues {
  email: string;
  password: string;
}

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelectorApp((state) => state.auth);
  const onLogin = (values: InitailValues) => {
    dispatch(startLogin(values.email, values.password));
  };

  const {
    handleBlur,
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  const formikRegister = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      passwordConfirm: "",
    },
    validationSchema: new Yup.ObjectSchema({
      email: Yup.string()
        .email("Email no valido")
        .required("Email es requerido"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es requerida"),
      firstName: Yup.string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .required("El nombre es requerido"),
      lastName: Yup.string()
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .required("El apellido es requerido"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
        .required("La confirmacion de la contraseña es requerida"),
    }),
    onSubmit: (values) => {
      const { passwordConfirm, ...data } = values;
      dispatch(startRegister(data, handleClear));
    },
  });

  const handleClear = () => {
    formikRegister.resetForm();
  };
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Correo"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Contraseña"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
                disabled={loading}
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={formikRegister.handleSubmit}>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="firstName"
                value={formikRegister.values.firstName}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
              />
              {formikRegister.errors.firstName &&
                formikRegister.touched.firstName && (
                  <span className="text-danger">
                    {formikRegister.errors.firstName}
                  </span>
                )}
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="lastName"
                value={formikRegister.values.lastName}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
              />
              {formikRegister.errors.lastName &&
                formikRegister.touched.lastName && (
                  <span className="text-danger">
                    {formikRegister.errors.lastName}
                  </span>
                )}
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={formikRegister.values.email}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
              />
              {formikRegister.errors.email && formikRegister.touched.email && (
                <span className="text-danger">
                  {formikRegister.errors.email}
                </span>
              )}
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={formikRegister.values.password}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
              />
              {formikRegister.errors.password &&
                formikRegister.touched.password && (
                  <span className="text-danger">
                    {formikRegister.errors.password}
                  </span>
                )}
            </div>

            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="passwordConfirm"
                value={formikRegister.values.passwordConfirm}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
              />
              {formikRegister.errors.passwordConfirm &&
                formikRegister.touched.passwordConfirm && (
                  <span className="text-danger">
                    {formikRegister.errors.passwordConfirm}
                  </span>
                )}
            </div>

            <div className="form-group mt-3">
              <input
                type="submit"
                className="btnSubmit"
                value="Crear cuenta"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
