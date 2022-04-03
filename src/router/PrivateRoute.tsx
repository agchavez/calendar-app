import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  access: boolean;
  children: React.ReactNode;
  path: string;
}
export const PrivateRoute = ({ access, children, path }: Props) => {
  return <>{access ? children : <Navigate to={path} />}</>;
};
