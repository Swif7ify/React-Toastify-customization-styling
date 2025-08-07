import { toastSuccess, toastError, toastWarning, toastInfo } from "@/utils/toast";

export default function ToastTest() {
  const showToastSuccess = () => {
		toastSuccess("This is React Toastify", "This is customized by Swif7ify");
	};
  const showToastError = () => {
		toastSuccess("This is React Toastify", "This is customized by Swif7ify");
	};
  const showToastWarning = () => {
		toastSuccess("This is React Toastify", "This is customized by Swif7ify");
	};
  const showToastInfo = () => {
		toastSuccess("This is React Toastify", "This is customized by Swif7ify");
	};

  return (
    	<button onClick={showToastSuccess}>Show Success</button>
    	<button onClick={showToastError}>Show Error</button>
    	<button onClick={showToastWarning}>Show Warning</button>
    	<button onClick={showToastInfo}>Show Info</button>
  )
}

