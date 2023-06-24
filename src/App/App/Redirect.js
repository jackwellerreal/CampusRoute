import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AppRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/app/home");
  }, []);

  return null;
}
