import React from "react";
import Swal from "sweetalert2";

const mostrarInformacion = (position, type, title, text, timer) => {
  Swal.fire({
    position: position,
    icon: type,
    title: title,
    text: text,
    timer: timer,
  });
};

export default mostrarInformacion;