import { Client } from "@gradio/client";

export async function getRecipe(ingredientsArray) {
  const formattedIngredients = ingredientsArray.join(", ");
  console.log("Sending to Gradio:", formattedIngredients);

  try {
    const client = await Client.connect("Ashikan/dut-recipe-generator");
    console.log("Connected to Gradio");

    const result = await client.predict("/generate_recipe", {
      ingredients: formattedIngredients,
    });

    console.log("Gradio result:", result);

    return result.data || "No recipe returned.";
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Sorry, there was an error generating the recipe.";
  }
}
