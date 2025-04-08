import React, { useState, useRef } from "react";
import { getRecipe } from "../service/AI_Api";

function ClaudChef() {
  const [ingredientlist, setIngredientlist] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const TextInput = useRef(null);

  function SubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ingredient = formData.get("ingredients");
    if (!ingredient.trim()) return;
    if (ingredientlist.includes(ingredient.trim().toLowerCase())) return;
    setIngredientlist((prev) => [...prev, ingredient.trim().toLowerCase()]);
    TextInput.current.value = "";
  }

  async function getRecipeHandler() {
    if (!ingredientlist.length) return;
    setIsLoading(true);
    const fetchedRecipe = await getRecipe(ingredientlist);
    setRecipe(fetchedRecipe);
    setIsLoading(false);
  }

  function clearIngredients() {
    setIngredientlist([]);
    setRecipe("");
  }

  return (
    <>
      <header className="bg-yellow-50 text-gray-900 p-6 shadow-md h-[15vh]">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-xl font-semibold">🍳 Claud Chef</div>
          <h1 className="text-3xl font-bold tracking-wide">
            Your Smart Recipe Assistant
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 min-h-[75vh]">
        <form
          onSubmit={SubmitHandler}
          className="flex flex-col gap-6 items-center justify-center mb-10"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Add Ingredients to Get a Custom Recipe
          </h2>

          <div className="w-full flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              ref={TextInput}
              placeholder="e.g. Tomato, Chicken, Onion"
              className="flex-1 p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 transition-all"
            >
              ➕ Add
            </button>
          </div>
        </form>

        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              📝 Ingredient List
            </h3>
            {ingredientlist.length > 0 && (
              <button
                onClick={clearIngredients}
                className="text-sm text-red-500 hover:underline"
              >
                Clear All
              </button>
            )}
          </div>

          {ingredientlist.length ? (
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {ingredientlist.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No ingredients added yet.</p>
          )}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={getRecipeHandler}
            disabled={isLoading}
            className={`${
              isLoading
                ? "bg-green-300 cursor-wait"
                : "bg-green-500 hover:bg-green-600"
            } text-white text-lg font-medium px-8 py-3 rounded-xl shadow-md transition-all`}
          >
            {isLoading ? "⏳ Generating..." : "🍽️ Get Recipe"}
          </button>
        </div>

        {recipe && (
          <div className="bg-white border border-green-100 shadow-xl rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-green-700">
              🍲 Your Recipe
            </h4>
            <p
              className="whitespace-pre-line text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: recipe }}
            ></p>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 h-[10vh]">
        &copy; 2025 Claud Chef. All rights reserved.
      </footer>
    </>
  );
}

export default ClaudChef;
