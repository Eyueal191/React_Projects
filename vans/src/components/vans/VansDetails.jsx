import React from "react";
import { useLoaderData } from "react-router-dom";

function VansDetail() {
  // Getting data from the loader
  const data = useLoaderData();

  // If no data is available, show an error message
  if (!data) {
    return <p>Sorry, we couldn't load the van details.</p>;
  }

  return (
    <div>
      <figure>
        {/* Descriptive alt text for better accessibility */}
        <img src={data.imageUrl} alt={`Image of ${data.name}`} />
        <figcaption>{data.name}</figcaption>
        <h1>{data.type}</h1>
        <p>{data.description}</p>
      </figure>
    </div>
  );
}

export default VansDetail;
