// useReducer Hook

/*
🔹 The `useReducer` hook is used to manage complex state logic in React functional components.

📌 Syntax:
const [state, dispatch] = useReducer(reducer, initialState);
challenges: recreate the syntaxt with reflection 10 times.
1. const [state, dispatch] = useReducer(reducer, initialState);
2. const [state, dispatch] = useReducer(reducer, initialState);
3. const [state, dispatch] = useReducer(reducer, initialState);
4. const [state, dispatch] = useReducer(reducer, initialState);
5. const [state, dispatch] = useReducer(reducer, initialState);
6. const [state, dispatch] = useReducer(reducer, initialState);
7. const [state, dispatch] = useReducer(reducer, initialState);
8. const [state, dispatch] = useReducer(reducer, initialState);
9. const [state, dispatch] = useReducer(reducer, initialState);
10. const [state, dispatch] = useReducer(reducer, initialState);
- `reducer`: A pure function that receives the current `state` and an `action` object, and returns the updated state based on the action type.
- `dispatch`: A function used to send an action to the reducer. When you call `dispatch`, React runs the reducer with the current state and the dispatched action, then updates the state with the reducer’s return value.

✨ In essence, the reducer function acts as a blueprint that describes how the state should change in response to different actions.

---

## ✅ Complete Quiz Pack: 30 Questions to Master useReducer

### Section 1: True or False (10 questions)

1. `useReducer` is only used for global state management.  F
2. The reducer function must always return the new state.  F
3. `useReducer` can be used as a replacement for `useState`.  T
4. The initial state passed to `useReducer` must always be an object. F 
5. The `dispatch` function is used to send actions to the reducer.  T
6. Every action object must include a `type` property.  T
7. The reducer function must be defined inside the component.  F
8. `useReducer` is part of React’s core API.  T
9. You can use multiple `useReducer` hooks within the same component.  T
10. State updates with `useReducer` are synchronous.  F

---

### Section 2: Multiple Choice (10 questions)

11. What does `useReducer` return?  
  A. `[reducer, dispatch]`  
  B. `[state, setState]`  
  C. `[state, dispatch]`  
  D. `[reducer, state]`  
Answer:C.
12. Which argument is NOT passed to the reducer function?  
  A. Current state  
  B. Previous state  
  C. Action  
  D. None of the above  
Answer: B
13. What does the `dispatch` function do?  
  A. Directly updates the state  
  B. Sends an action to the reducer  
  C. Calls another hook  
  D. Sets a timer  
Answer:B.
14. When should you prefer `useReducer` over `useState`?  
  A. For static UI components  
  B. For complex state transitions  
  C. Only in class components  
  D. When using context  
Answer:B.
15. What is required inside an action object?  
  A. `id`  
  B. `state`  
  C. `type`  
  D. `payload`  
Answer:C.
16. Which hook pairs well with `useReducer` for global state sharing?  
  A. `useState`  
  B. `useRef`  
  C. `useContext`  
  D. `useEffect`  
Answer:C.
17. What is a common use case for `useReducer`?  
  A. Toggling a boolean  
  B. Managing a simple input field  
  C. Handling form state or complex updates  
  D. Fetching data only  
Answer:C.
18. Which problem can `useReducer` help avoid?  
  A. Unnecessary imports  
  B. Prop drilling  
  C. JSX usage  
  D. Babel configurations  
Answer:B.
19. What happens if the reducer returns `undefined`?  
  A. React throws an error  
  B. State resets  
  C. Nothing updates  
  D. Component re-renders endlessly  
Answer:A.
20. What is the first parameter passed to `useReducer()`?  
  A. Initial state  
  B. Dispatch function  
  C. Reducer function  
  D. JSX element  
Answer:C.
---

### Section 3: Fill in the Blank (10 questions)

21. The `useReducer` hook is imported from the `___react______` package.  
22. The `reducer` function must be a _pure_______ function.  
23. The `dispatch()` function sends _____action___ to the reducer.  
24. `useReducer` helps manage complex state ____logic____.  
25. The initial state is passed as the ____second____ argument to `useReducer`.  
26. In `dispatch({ type: 'increment' })`, `'increment'` is the _type of the action.  
27. A reducer function must return the _valid state.  
28. The syntax `[state, dispatch] = useReducer(...)` uses ________ destructuring.  
29. Reducer functions commonly use a _switch statement to handle action types.  
30. The most common alternative to `useReducer` for managing component state is `__useState`.  

---

## 🗝️ Answer Key

### Section 1: True or False

1. False — `useReducer` is often used for local component state, not just global state.  
2. True  
3. True  
4. False — Initial state can be any type: object, array, number, etc.  
5. True  
6. True  
7. False — Reducers can be defined outside components for reuse.  
8. True  
9. True  
10. False — State updates are asynchronous like `useState`.

---

### Section 2: Multiple Choice

11. C. `[state, dispatch]`  
12. B. Previous state (the reducer gets the current state, no separate previous state argument)  
13. B. Sends an action to the reducer  
14. B. For complex state transitions  
15. C. `type`  
16. C. `useContext`  
17. C. Handling form state or complex updates  
18. B. Prop drilling  
19. A. React throws an error  
20. C. Reducer function  

---

### Section 3: Fill in the Blank

21. `react`  
22. pure  
23. actions  
24. logic  
25. second  
26. action type  
27. new  
28. array  
29. switch  
30. `useState`  

---

Would you like me to help you convert this into flashcards or an interactive quiz?  
*/

