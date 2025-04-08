# Cluad Chef Smart Recipe Assistant.
 
 claud chef is smart recipe assistant that generate recipe based on the entered list of ingredients by user. The App connects to the Gradio API. which use an AI model to generate recipes and returns the recipe in the Markdown format. then it convert markdown to the htmlstring using shadowdown library. which is then insterted to jsx using dangerouslySetInnerHTML.
## Table of Contents
 -[Installation] (#Installation)
 -[Usage] (#Usage)
 -[Api Integration](#Api-Integration)
 -[Technology Used](#technologyused)

   
## Installation  
 Follow these steps to get your local development environment setup:
 1. ```git clone  ```
 2. cd chef
 3. npm install
 4. npm run dev
 
## Usage
 1. Enter a list of ingredients into the input field.
 2. Click the Add button to add the Entered ingredient to the list.
 3. Click getRecipe button to generate the custome recipe generated from the list you entered.
 4. click to clearAll button to clear the generated custome recipe, listed-ingredeints, and the input field and start over.
 
## Api-Integration 
 The App connects to the AI-end point called Gardio API. It use the following endpoints:
  -**Api_Name**: Ashikan/dut-recipe-generator.
  -**Required-Input**:A comma separated list of ingredients (e.g. "Tomato, Chicken, Onion").
  -**Returns**: A recipe in the Markdown format.
## How it works:
  1. The ingredients are sent to the Gardio API.
  2. The recipe returns in Markdown format.
  3. The markdown converted to htmlString by showdown library and displayed using using dangerouslySetInnerHtml attribute.
  
  You can explore Gardio-Model here: [Gradio Recipe Generator](https://huggingface.co/Ashikan/dut-recipe-generator).
 
## Technology Used
-**React**: frontend UI Library.
-**Gardio**: A recipe generator AI-end point.
-**Tailwindcss**: Css library.
-**Vite**: Next-generation build tool.
