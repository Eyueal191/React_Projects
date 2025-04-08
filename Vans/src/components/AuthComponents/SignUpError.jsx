import { useRouteError } from "react-router-dom";

function SignupError() {
  const error = useRouteError(); // This will get the error passed by the router

  // Check if the error is an instance of Error (you may want to handle different types of errors)
  const errorMessage = error?.message || "An unexpected error occurred!";

  return (
    <div>
      <h2>Signup Error</h2>
      <p>{errorMessage}</p> {/* Display the error message */}
    </div>
  );
}

export default SignupError;
