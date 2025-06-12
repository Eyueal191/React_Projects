// 2. useEffect Hook

/*
🔹 The `useEffect` Hook is used to run side effects in functional components.

Side effects are any operations that interact with external systems or perform tasks outside the normal React rendering process — such as data fetching, DOM manipulation, timers, or subscriptions.

📌 Syntax:
useEffect(() => {
  // side-effect logic (runs after render)
  
  return () => {
    // optional cleanup logic (runs on unmount or before re-run)
  };
}, [dependency]);

🔸 How the dependency array controls when useEffect runs:

1. ❌ No dependency (omit the second argument):
   → useEffect runs **after every render** (both initial and every update).

2. ✅ Empty array `[]`:
   → useEffect runs **only once**, right after the **first render** (equivalent to `componentDidMount` in class components).

3. ✅ With dependencies `[value1, value2]`:
   → useEffect runs on **initial mount** and again **whenever any dependency value changes**.

---

🔸 Common Use Cases:

1. ✅ **Fetching Data from a Backend**
   → Useful for loading API data when a component mounts.
   Example: Fetch user profile on load and store it in state.

2. ✅ **DOM / BOM Event Handling (Event-Driven Interactions)**
   → Adding listeners to the window, document, or specific DOM elements.
   ➕ Always include a **cleanup function** to remove the event listener.
   🔁 Cleanup runs:
       - before the effect re-runs (on dependency change)
       - and when the component unmounts
   ✅ This prevents **memory leaks** and **duplicate registrations**.

3. ✅ **Real-Time Subscriptions or Timers**
   → You can use it to create WebSocket connections, intervals (`setInterval`), or observers.
   → Cleanup stops the connection or timer when the component unmounts.

---

🧠 Summary:

`useEffect` is your go-to tool for:
- Running logic that **needs to happen after render**
- Talking to the **outside world** (network, DOM, subscriptions)
- **Cleaning up** anything that lives beyond the component

⚠️ Always remember:
- Declare all variables from outer scope used in the effect inside the dependency array.
- Use cleanup functions for anything that allocates resources or adds event listeners.

Sure! Here’s a set of **30 questions about the useEffect hook**, divided into True/False, MCQ, and Fill-in-the-Blanks, plus the answers to help you master the fundamentals.

---

# **True or False (10 questions)**

1. `useEffect` runs after every render by default.
2. You can use `useEffect` to perform side effects such as fetching data or subscribing to events.
3. The dependency array in `useEffect` controls when the effect runs.
4. If the dependency array is empty, the effect runs only once after the first render.
5. Returning a function from `useEffect` defines a cleanup that runs before the next effect or when the component unmounts.
6. `useEffect` can only be used for API calls, not for DOM manipulation.
7. If you omit the dependency array, the effect runs after every render, which can cause performance issues.
8. `useEffect` is called synchronously during the rendering phase.
9. Effects inside `useEffect` run asynchronously after the DOM updates.
10. You can use multiple `useEffect` hooks inside a single component.

---

# **Multiple Choice Questions (10 questions)**

1. When does the cleanup function inside `useEffect` run?
   a) Before the component mounts
   b) After every render
   c) Before the next effect runs or on unmount
   d) It never runs

2. What is the purpose of the dependency array in `useEffect`?
   a) To declare which variables the effect depends on
   b) To stop the effect from running
   c) To store state values
   d) To cache data

3. How do you run an effect only once after the component mounts?
   a) Omit the dependency array
   b) Pass an empty dependency array `[]`
   c) Pass `[true]` as dependency
   d) Use `useState` instead

4. What happens if you include a state variable in the dependency array?
   a) The effect runs only once
   b) The effect runs every time that state variable changes
   c) The effect never runs
   d) The state variable resets

5. Which of the following is NOT a valid use case for `useEffect`?
   a) Fetching data from an API
   b) Updating the DOM directly
   c) Managing subscriptions or event listeners
   d) Declaring component styles

6. What is the equivalent lifecycle method for `useEffect` with an empty dependency array?
   a) componentDidUpdate
   b) componentWillUnmount
   c) componentDidMount
   d) shouldComponentUpdate

7. What happens if you forget to include a dependency in the dependency array?
   a) React will throw an error
   b) The effect might use stale data or behave incorrectly
   c) The effect will run twice
   d) The effect will not run at all

8. What is a common performance optimization related to `useEffect`?
   a) Avoid using it entirely
   b) Use a dependency array to limit when effects run
   c) Use multiple `useState` hooks
   d) Call setState inside the effect

9. Which hook runs **before** the DOM is painted, useful for measuring layout?
   a) useEffect
   b) useLayoutEffect
   c) useState
   d) useMemo

10. Which of the following can cause infinite loops when using `useEffect`?
    a) Using an empty dependency array
    b) Not specifying a dependency array
    c) Adding state setters inside the dependency array
    d) Only updating state inside event handlers

---

# **Fill in the blanks (10 questions)**

1. The React hook used to perform side effects in functional components is called `__________`.
2. The second argument to `useEffect` is called the `__________` array.
3. Passing an empty dependency array to `useEffect` causes the effect to run only `__________`.
4. Cleanup functions in `useEffect` run before the next effect or when the component `__________`.
5. To run an effect after specific state or prop changes, list them in the `__________` array.
6. If you don’t provide a dependency array, `useEffect` runs after every `__________`.
7. Effects inside `useEffect` run asynchronously, meaning they run after the `__________` updates.
8. You can return a `__________` function from `useEffect` for cleanup.
9. Using multiple `useEffect` hooks inside a component helps separate `__________`.
10. To prevent infinite loops in `useEffect`, carefully manage the `__________` array.

---

Would you like me to provide the **answers** too?
Here are the answers for the **useEffect** questions:

---

### True or False Answers

1. True
2. True
3. True
4. True
5. True
6. False — `useEffect` can be used for any side effect, including DOM manipulation
7. True
8. False — `useEffect` runs **after** rendering, asynchronously
9. True
10. True

---

### Multiple Choice Answers

1. c) Before the next effect runs or on unmount
2. a) To declare which variables the effect depends on
3. b) Pass an empty dependency array `[]`
4. b) The effect runs every time that state variable changes
5. d) Declaring component styles
6. c) componentDidMount
7. b) The effect might use stale data or behave incorrectly
8. b) Use a dependency array to limit when effects run
9. b) useLayoutEffect
10. b) Not specifying a dependency array

---

### Fill in the blanks Answers

1. useEffect
2. dependency
3. once
4. unmounts
5. dependency
6. render
7. DOM
8. cleanup
9. concerns (or effects)
10. dependency

---
*/

