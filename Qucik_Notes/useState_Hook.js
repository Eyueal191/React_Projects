// 1. useState Hook

/*
🔹 The useState Hook is used to create a state in functional components.
    - It stores dynamic data that can change over time.
    - Whenever the state changes, the component automatically re-renders to reflect those changes.

🔸 What kind of data is stored in state?
useState is commonly used to store:

1. User state      → Data provided by the user (e.g. form input) that needs to be rendered or sent to a backend.
2. Backend state   → Data received from a backend/API that needs to be displayed in the UI.
3. Loading state   → Boolean state used to show a loading indicator while fetching data.
4. Error state     → Used to store error messages if data fetching fails.

🧠 In simple terms:
useState helps manage any piece of data that needs to be shown in the UI and can change due to user actions or backend responses.

Got it! Here’s a set of **30 questions** about the **useState hook** based on your description, divided into True/False, MCQ, and Fill-in-the-Blanks to help you master the fundamentals.

---

# **True or False (10 questions)**

1. `useState` is used to create and manage state inside functional components.
2. Changing the state with `useState` does not cause the component to re-render.
3. You can only store primitive values like strings and numbers with `useState`.
4. `useState` can be used to manage loading state in an application.
5. Backend data fetched from an API is commonly stored in state using `useState`.
6. The state created by `useState` can only be updated once during the component's lifecycle.
7. The initial state value passed to `useState` can be a function that returns the initial value.
8. `useState` returns an array with two elements: the current state value and a function to update it.
9. State updates via the setter function returned by `useState` are asynchronous.
10. State created with `useState` is local to the component and cannot be accessed directly by other components.

---

# **Multiple Choice Questions (10 questions)**

1. What does the `useState` hook return?
   a) A single value
   b) An array with current state and setter function
   c) A function only
   d) An object with all states

2. Which of the following can be stored in `useState`?
   a) Primitive values like numbers and strings
   b) Objects and arrays
   c) Functions
   d) All of the above

3. When does a component re-render with respect to `useState`?
   a) When the setter function is called
   b) When the initial state is created
   c) When props change only
   d) When a child component updates

4. Which of the following is a correct way to update state based on the previous state?
   a) `setCount(count + 1)`
   b) `setCount(prevCount => prevCount + 1)`
   c) Both a and b
   d) Neither

5. What kind of state would you use `useState` for when showing a loading spinner?
   a) Error state
   b) Backend state
   c) Loading state
   d) User state

6. Which is true about the setter function returned by `useState`?
   a) It replaces the entire state value
   b) It merges the new state with the previous state
   c) It only works with primitive types
   d) It triggers a component re-render

7. If you want to initialize state with a heavy computation, what should you do?
   a) Pass the value directly to `useState`
   b) Use a function to lazy initialize the state
   c) Initialize state inside `useEffect`
   d) Use `useRef` instead

8. How can you reset a piece of state to its initial value?
   a) Call the setter with the initial value
   b) Call the setter with `null`
   c) Call `useState` again
   d) Use `useEffect` to reset

9. Which hook would you use to run side effects after a state update?
   a) `useState`
   b) `useEffect`
   c) `useRef`
   d) `forwardRef`

10. What happens if you call the setter function returned by `useState` with the same value as the current state?
    a) Component re-renders
    b) React skips the re-render
    c) Component crashes
    d) State becomes undefined

---

# **Fill in the blanks (10 questions)**

1. The React hook used to create and manage state in functional components is called `__________`.
2. `useState` returns an array where the first element is the `__________` and the second element is a `__________`.
3. When you call the state setter function, React schedules a `__________` of the component.
4. You should use `useState` to store dynamic data that needs to be shown in the `__________`.
5. To update state based on the previous state, you can pass a `__________` to the setter function.
6. `useState` can store any JavaScript data type, including objects, arrays, and `__________`.
7. The `__________` state is used to show a spinner or progress indicator while waiting for data.
8. State is local to a component, meaning it cannot be accessed directly by `__________` components.
9. The initial value for `useState` can be a function to provide a `__________` initialization.
10. Calling the setter function returned by `useState` triggers a component `__________`.

---

If you want, I can provide the **answers** for these as well! Would you like me to?
Here are the answers for the **useState** questions:

---

### True or False Answers

1. True
2. False — changing state **does** cause re-render
3. False — you can store objects, arrays, functions, etc.
4. True
5. True
6. False — state can be updated multiple times
7. True
8. True
9. True — state updates are asynchronous
10. True

---

### Multiple Choice Answers

1. b) An array with current state and setter function
2. d) All of the above
3. a) When the setter function is called
4. c) Both a and b
5. c) Loading state
6. d) It triggers a component re-render
7. b) Use a function to lazy initialize the state
8. a) Call the setter with the initial value
9. b) useEffect
10. b) React skips the re-render

---

### Fill in the blanks Answers

1. useState
2. current state, setter function
3. re-render
4. UI
5. function
6. functions
7. Loading
8. other
9. lazy
10. re-render

---

Feel free to let me know if you want these in a quiz or flashcard format to practice daily!


*/
