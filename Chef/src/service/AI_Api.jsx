import { Client } from "@gradio/client";
import showdown from "showdown"; // Import showdown

export async function getRecipe(ingredientsArray) {
  // Convert the ingredients array to a string
  const formattedIngredients = ingredientsArray.join(", ");
  console.log("Sending to Gradio:", formattedIngredients);

  try {
    // Connect to the Gradio model
    const client = await Client.connect("Ashikan/dut-recipe-generator");
    console.log("Connected to Gradio");

    // Call the Gradio model to get the recipe
    const result = await client.predict("/generate_recipe", {
      ingredients: formattedIngredients,
    });

    console.log("Gradio result:", result);

    // Ensure the result has the expected structure
    if (result && result.data && result.data[0].value) {
      // Create a new showdown converter
      const converter = new showdown.Converter();

      // Convert the returned markdown (value) to HTML using showdown
      const htmlString = converter.makeHtml(result.data[0].value);
      console.log("Generated HTML:", htmlString);

      // Return the HTML string or a fallback message
      return htmlString || "No recipe returned.";
    } else {
      throw new Error("Invalid response structure from Gradio.");
    }
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Sorry, there was an error generating the recipe.";
  }
}
