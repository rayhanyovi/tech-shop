import Swal from "sweetalert2";

export const popUpAlert = (message: string, icon: any) => {
  Swal.fire({
    text: message || "Oops.. something wrong happened",
    icon: icon || "error",
    confirmButtonText: "Ok",
  });
};
