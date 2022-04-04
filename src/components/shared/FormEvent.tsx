import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Event } from "react-big-calendar";
import { CalendarData } from "../../interfaces/Calendar";
import { useDispatch } from "react-redux";
import {
  startAddNewEvent,
  editEvent,
} from "../../state/action-creators/eventsCreators";
interface IFormEventProps {
  onSubmit: (event: CalendarData) => void;
  initialValues?: CalendarData | null;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("El titulo es requerido"),
  start: Yup.date().required("La fecha de inicio es requerida"),
  end: Yup.date().required("La fecha de fin es requerida"),
});

export const FormEvent = ({ onSubmit, initialValues }: IFormEventProps) => {
  const dispatch = useDispatch();
  const handleSave = (event: CalendarData) => {
    initialValues?._id
      ? dispatch(editEvent(event))
      : dispatch(startAddNewEvent(event, handleReset));
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik<CalendarData>({
    initialValues: initialValues || {
      title: "",
      notes: "",
      start: new Date(),
      end: new Date(),
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);

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
            showTimeSelect
            dateFormat="Pp"
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
            showTimeSelect
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
            dateFormat="Pp"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="describe">Notas</label>
          <textarea
            name="notes"
            id="notes"
            className={`form-control ${
              errors.notes && touched.notes ? "is-invalid" : ""
            }`}
            value={values.notes}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.notes && touched.notes && (
            <span className="invalid-feedback">
              {errors.notes && touched.notes ? errors.notes : ""}
            </span>
          )}
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
            {initialValues ? "Editar" : "Guardar"}
          </button>
        </div>
      </form>
    </>
  );
};
