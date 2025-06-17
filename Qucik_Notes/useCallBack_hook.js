// 5. useCallback Hook

/*
🔹 The `useCallback` Hook is used to **memoize functions** in React.

When you pass a function as a prop to a child component, it can trigger unnecessary re-renders unless the function identity is stable. `useCallback` helps avoid that by **returning a memoized version of the function** that only changes when its dependencies do.

📌 Syntax:
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependency]);

🔸 How the dependency array works:

1. ✅ Empty array `[]`:
   → The function is memoized **once** and stays the same across renders.

2. ✅ With dependencies `[value1, value2]`:
   → The function is recreated **only when one of the dependencies changes**.

3. ❌ Without `useCallback`:
   → A **new function** is created on **every render**, which can cause child components to re-render unnecessarily.

---

🔸 Common Use Cases:

1. ✅ **Preventing unnecessary re-renders**
   → Especially important when passing callbacks to child components wrapped with `React.memo()`.

2. ✅ **Stable function references in event handlers**
   → Avoids reattaching event handlers unnecessarily.

3. ✅ **Using functions as dependencies in `useEffect`**
   → Ensures the function reference is stable and doesn't cause infinite loops.

---

🧠 Summary:

`useCallback` is your go-to tool for:
- **Memoizing event handlers or callbacks**
- **Improving performance** when functions are passed as props
- **Maintaining stable function identity** between renders

⚠️ Always remember:
- Use it only **when necessary**—premature optimization can add unnecessary complexity.
- The dependencies must include **everything the function uses from outside its scope**.

---

# **True or False (10 questions)**

1. `useCallback` returns a memoized version of a function.
2. You should always use `useCallback` for every function in your component.
3. The dependency array tells React when to recreate the memoized function.
4. If you pass an empty dependency array, the callback never changes.
5. `useCallback` is helpful when passing functions to memoized child components.
6. Using `useCallback` always improves performance, no matter what.
7. A new function is created on each render if `useCallback` is not used.
8. `useCallback` is similar to `useMemo`, but specifically for memoizing values.
9. A memoized function with `useCallback` still has access to updated state or props.
10. The callback returned by `useCallback` is re-created when dependencies change.

---

# **Multiple Choice Questions (10 questions)**

1. What does `useCallback` do?
   a) Memoizes the return value of a function  
   b) Memoizes the function itself  
   c) Memoizes a component  
   d) Renders a callback  

2. When should you consider using `useCallback`?
   a) To avoid calling a function  
   b) To prevent unnecessary function recreations  
   c) To cache data from an API  
   d) To mutate the DOM directly  

3. What does the dependency array in `useCallback` control?
   a) The arguments the function receives  
   b) When the function is executed  
   c) When the memoized function is recreated  
   d) The return value of the function  

4. If you omit the dependency array in `useCallback`, what happens?
   a) The function is never updated  
   b) The function updates after every render  
   c) An error is thrown  
   d) React ignores the callback  

5. Which hook works closely with `useCallback` for performance optimization?
   a) useState  
   b) useRef  
   c) React.memo  
   d) useContext  

6. What happens if you use a stale value inside a `useCallback` function?
   a) React warns you  
   b) The function may behave incorrectly  
   c) The function throws an error  
   d) It works correctly anyway  

7. Which of these is NOT a benefit of `useCallback`?
   a) Avoid unnecessary re-renders  
   b) Avoid re-creating functions  
   c) Store persistent values  
   d) Stabilize function identity  

8. What is a correct reason to avoid overusing `useCallback`?
   a) It causes memory leaks  
   b) It slows down your app  
   c) It adds unnecessary complexity  
   d) It prevents re-renders completely  

9. Which of the following pairs are often used together?
   a) useCallback and useReducer  
   b) useCallback and useEffect  
   c) useCallback and React.memo  
   d) useCallback and useRef  

10. In which situation is `useCallback` LEAST helpful?
    a) Passing functions to deeply nested components  
    b) Inline event handlers in simple components  
    c) Custom hooks with internal callbacks  
    d) Optimizing child component rendering

---

# **Fill in the blanks (10 questions)**

1. The `__________` hook is used to memoize functions in React.
2. Passing a callback to a memoized child without `useCallback` may cause extra `__________`.
3. The second argument to `useCallback` is the `__________` array.
4. If the dependency array is empty, the memoized function will never `__________`.
5. `useCallback` helps maintain the same function `__________` between renders.
6. Without `useCallback`, a `__________` function is created on each render.
7. `useCallback` is often used with the `__________` function to optimize component rendering.
8. You should include all `__________` used inside the callback in the dependency array.
9. Overusing `useCallback` can lead to unnecessary `__________` in the codebase.
10. `useCallback` only re-creates the function if one of the `__________` has changed.

---


Great! Here are the **answers** for the `useCallback` quiz:

---

### ✅ **True or False Answers**

1. ✅ True
2. ❌ False — Only use it when needed for optimization
3. ✅ True
4. ✅ True
5. ✅ True
6. ❌ False — It can sometimes **hurt** performance if overused
7. ✅ True
8. ❌ False — `useCallback` is **not** executed during render; it's memoized
9. ✅ True
10.✅ True

---

### ✅ **Multiple Choice Answers**

1. **b)** Memoizes the function itself
2. **b)** To prevent unnecessary function recreations
3. **c)** When the memoized function is recreated
4. **b)** The function updates after every render
5. **c)** React.memo
6. **b)** The function may behave incorrectly
7. **c)** Store persistent values — that’s what `useRef` or `useMemo` are for
8. **c)** It adds unnecessary complexity
9. **c)** useCallback and React.memo
10. **b)** Inline event handlers in simple components

---

### ✅ **Fill in the blanks Answers**

1. `useCallback`
2. `re-renders`
3. `dependency`
4. `change`
5. `identity`
6. `new`
7. `React.memo`
8. `dependencies`
9. `complexity`
10. `dependencies`

---
*/

