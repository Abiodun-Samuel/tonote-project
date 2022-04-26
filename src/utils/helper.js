import { toast } from "react-toastify";

export const toastMessage = (type, message) => {
  if (type === "error") {
    toast.error(
      <div>
        <span className="toastify">{message}</span>
      </div>
    );
  }
  if (type === "warning") {
    toast.warning(
      <div>
        <span className="toastify">{message}</span>
      </div>
    );
  }
  if (type === "success") {
    toast.success(
      <div>
        <span className="toastify">{message}</span>
      </div>
    );
  }
};
