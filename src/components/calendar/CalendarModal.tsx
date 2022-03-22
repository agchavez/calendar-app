import React from "react";
import { Modal } from "react-bootstrap";
import { FormEvent } from "../shared/FormEvent";

interface CalendarModalProps {
  show: boolean;
  onHide: () => void;
  event: any;
}
export const CalendarModal = ({ show, onHide }: CalendarModalProps) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar nuevo evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormEvent onSubmit={(event: any) => {}} />
        <hr />u
      </Modal.Body>
    </Modal>
  );
};
