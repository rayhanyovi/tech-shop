import Swal from "sweetalert2";

export const popUpAlert = (message: string) => {
  Swal.fire({
    text: message || "Oops.. something wrong happened",
    icon: "error",
    confirmButtonText: "Ok",
  });
};
