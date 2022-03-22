import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent } from "../shared/FormEvent";
import { RootState } from "../../state/reducers/index";
import { ActionTypes } from "../../state/types/types";
import { useSelectorApp, useAppDispatch } from "../../hooks/redux";

export const CalendarModal = () => {
  const show = useSelector((state: RootState) => state.ui.modalOpen);
  const dispatch = useAppDispatch();

  const { event } = useSelectorApp((state: RootState) => state.event);

  const handleClose = () => {
    dispatch({
      type: ActionTypes.EVENTSELECTED,
      payload: null,
    });
    dispatch({
      type: ActionTypes.UIMODALCLOSE,
      payload: {
        open: false,
      },
    });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar nuevo evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormEvent initialValues={event} onSubmit={(event: any) => {}} />
        <hr />u
      </Modal.Body>
    </Modal>
  );
};
