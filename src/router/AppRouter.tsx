import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { useSelectorApp } from "../hooks/redux";

export const AppRouter = () => {
  const access = useSelectorApp((state) => state.auth.checking);
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <PrivateRoute access={!access} path="/">
              <LoginScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute access={!!access} path="/login">
              <CalendarScreen />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </>
  );
};
