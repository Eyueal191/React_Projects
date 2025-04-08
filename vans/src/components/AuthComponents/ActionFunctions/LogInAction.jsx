import { json, redirect } from "react-router-dom";

export async function loginAction({ request }) {
  const formData = new FormData(request.formData());
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone"); // You can add phone if it's necessary for login

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        phone,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Store the token in localStorage or state
      localStorage.setItem("authToken", data.authToken);
      return redirect("/"); // Redirect to a protected route after login
    } else {
      const errorData = await response.json();
      return json({
        error: errorData.message || "Something went wrong!",
      });
    }
  } catch (error) {
    return json({
      error: error.message || "Something went wrong!",
    });
  }
}
