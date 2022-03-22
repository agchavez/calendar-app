import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Event } from "react-big-calendar";
interface IFormEventProps {
  onSubmit: (event: Event) => void;
  initialValues?: Event;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("El titulo es requerido"),
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
        <div className="form-floating mt-3">
          <textarea
            className={`form-control ${
              errors.describe && touched.describe ? "is-invalid" : ""
            }`}
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            value={values.describe}
            onChange={handleChange}
            style={{
              height: "100px",
            }}
          ></textarea>
          <label>Descripcion</label>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="describe">Fecha de inicio</label>
          <DatePicker
            selected={values.start}
            className={`form-control ${
              errors.start && touched.start ? "is-invalid" : ""
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
          {errors.start && touched.start && (
            <span className="invalid-feedback">
              {errors.start && touched.start ? errors.start : ""}
            </span>
          )}
        </div>

        <div className="form-group mt-3">
          <label htmlFor="describe">Fecha de final</label>
          <DatePicker
            selected={values.end}
            className={`form-control ${
              errors.end && touched.end ? "is-invalid" : ""
            }`}
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
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            style={{
              backgroundColor: "#0a1929",
              borderColor: "#0a1929",
            }}
          >
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};
