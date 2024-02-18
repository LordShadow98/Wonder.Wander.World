import Swal from "sweetalert2";

const showAlert = (position, type, title, text, timer) => {
  Swal.fire({
    position: position,
    icon: type,
    title: title,
    text: text,
    timer: timer,
  });
};

export default showAlert;