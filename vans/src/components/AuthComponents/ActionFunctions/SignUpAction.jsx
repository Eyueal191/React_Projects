import { redirect } from "react-router-dom";

async function SignUpAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const username = formData.get("username");

  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username, phone }),
    });

    const data = await res.json();

    // Return both message and success flag to the component
    return {
      message: data.message,
      success: data.success,
    };
  } catch (error) {
    return {
      message: "Something went wrong. Please try again.",
      success: false,
    };
  }
}

export default SignUpAction;
