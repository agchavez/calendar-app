import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Event } from "react-big-calendar";
interface IFormEventProps {
  onSubmit: (event: Event) => void;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("El titulo es requerido"),
  describe: Yup.string().required("La descripción es requerida"),
  start: Yup.date().required("La fecha de inicio es requerida"),
  end: Yup.date().required("La fecha de fin es requerida"),
  allDay: Yup.boolean().required("El campo todo el día es requerido"),
});

export const FormEvent = ({ onSubmit }: IFormEventProps) => {
  const handleSave = (event: Event) => {
    console.log(event);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        title: "",
        describe: "",
        start: new Date(),
        end: new Date(),
        allDay: false,
      },
      validationSchema,
      onSubmit: (values) => {
        handleSave(values);
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            className={`form-control ${
              errors.title && touched.title ? "is-invalid" : ""
            }`}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title && (
            <span className="invalid-feedback">
              {errors.title && touched.title ? errors.title : ""}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="describe">Fecha de inicio</label>
          <DatePicker
            selected={values.start}
            className={`form-control ${
              errors.title && touched.title ? "is-invalid" : ""
            }`}
            
            onChange={(date: Date) => {
              handleChange({
                target: {
                  name: "start",
                  value: date,
                },
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="describe">Fecha de final</label>
          <DatePicker
            selected={values.end}
            onChange={(date: Date) => {
              handleChange({
                target: {
                  name: "end",
                  value: date,
                },
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </>
  );
};
