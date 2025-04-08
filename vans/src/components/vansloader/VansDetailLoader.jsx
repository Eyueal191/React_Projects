import { json } from "react-router-dom";
async function VansDetailLoader({ params }) {
  // Destructure the `id` from the params
  let { id } = params;

  try {
    let res = await fetch("/api/vans");
    if (!res.ok) {
      throw new Error("failed to load the data");
      return;
    }
    let data = await res.json();
    let vans = data.vans;
    let specificvan = vans.find((van) => {
      van.id == id;
    });
    return specificvan;
  } catch (err) {
    console.log(err);
  }
}

export default VansDetailLoader;
