import { redirect } from "react-router-dom";

async function SignUpAction({ request }) {
  let formdata = await request.formData();
  let email = formdata.get("email");
  let password = formdata.get("password");
  let phone = formdata.get("phone");
  let username = formdata.get("username");

  let res = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username, phone }),
  });

  let data = await res.json();
  return data.message;
}

export default SignUpAction;
