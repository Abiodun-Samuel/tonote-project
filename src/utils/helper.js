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

export const randomString = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
