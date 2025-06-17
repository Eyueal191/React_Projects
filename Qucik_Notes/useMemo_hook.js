// 6. useMemo Hook

/*
🔹 The `useMemo` Hook is used to **memoize the result of a computation**.

It helps **optimize performance** by **caching expensive calculations** so they are **only re-evaluated when their dependencies change** — rather than on every render.

📌 Syntax:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

🔸 How the dependency array works:

1. ✅ Empty array `[]`:
   → The value is computed **once** on initial render and never recalculated.

2. ✅ With dependencies `[a, b]`:
   → The function is only re-executed when **one of the dependencies changes**.

3. ❌ Without `useMemo`:
   → The computation will re-run **on every render**, potentially slowing down your app.

---

🔸 Common Use Cases:

1. ✅ **Expensive Computations**
   → When you need to perform CPU-intensive operations (e.g. filtering, sorting, or heavy math).
   → Example: Filtering a large list only when the search input changes.

2. ✅ **Referential Equality for Props**
   → Prevents unnecessary re-renders when passing computed values to memoized components (`React.memo`).
   → Example: A sorted array passed to a child component.

3. ✅ **Avoiding Unnecessary Re-renders**
   → Works with memoized child components that only re-render if their props change by reference.

---

🧠 Summary:

`useMemo` is your go-to tool for:
- **Optimizing expensive calculations**
- **Avoiding recomputation on every render**
- **Stabilizing derived values** to prevent unnecessary renders

⚠️ Always remember:
- Don’t overuse it — only use it when there is a **clear performance bottleneck**.
- The dependencies must cover **all variables used in the memoized function**.

---

# **True or False (10 questions)**

1. `useMemo` is used to memoize values, not functions.
2. `useMemo` can help avoid expensive recalculations on every render.
3. You must include all external dependencies inside the dependency array.
4. Omitting the dependency array means the value is recomputed on every render.
5. An empty dependency array means the value is computed only once.
6. `useMemo` returns a memoized function.
7. `useMemo` is ideal for caching async API calls.
8. `useMemo` ensures that a value doesn’t change unless its dependencies change.
9. `useMemo` and `useCallback` are interchangeable.
10. `useMemo` helps avoid unnecessary renders by stabilizing computed prop values.

---

# **Multiple Choice Questions (10 questions)**

1. What does `useMemo` do?
   a) Creates a new component  
   b) Memoizes a function  
   c) Memoizes the return value of a function  
   d) Fetches data from APIs  

2. When is `useMemo` useful?
   a) For storing component styles  
   b) For saving API responses  
   c) For expensive computations  
   d) For defining routes  

3. Which of the following is TRUE about `useMemo`?
   a) It reruns the function every time regardless of dependencies  
   b) It memoizes values based on dependencies  
   c) It causes unnecessary re-renders  
   d) It replaces `useState`  

4. What happens if you provide no dependency array?
   a) The function never runs  
   b) The value is memoized forever  
   c) The function runs on every render  
   d) React throws an error  

5. Which pair of hooks is commonly used for performance optimization?
   a) useEffect + useState  
   b) useMemo + useCallback  
   c) useRef + useState  
   d) useMemo + useContext  

6. When would `useMemo` **not** be helpful?
   a) Filtering a large list  
   b) Returning primitive values like numbers or strings  
   c) Sorting a large dataset  
   d) Caching derived objects  

7. Which hook is better for memoizing functions?
   a) useMemo  
   b) useCallback  
   c) useState  
   d) useEffect  

8. What must be included in the dependency array?
   a) Only state variables  
   b) Any external variables used inside the memo function  
   c) Nothing, it's optional  
   d) Only props  

9. Which of these would most benefit from `useMemo`?
   a) Statically defined strings  
   b) Lightweight render logic  
   c) Expensive map/filter operations  
   d) Inline event handlers  

10. What does `useMemo` return?
    a) A new function  
    b) A cleanup function  
    c) The cached result of a function  
    d) A reference to the DOM

---

# **Fill in the blanks (10 questions)**

1. The `__________` hook is used to memoize computed values.
2. `useMemo` takes a computation function and a `__________` array.
3. Without `useMemo`, the computation runs on every `__________`.
4. With an empty dependency array, `useMemo` runs the function only `__________`.
5. `useMemo` is especially useful when dealing with `__________` calculations.
6. It prevents re-rendering of memoized components by stabilizing `__________` values.
7. You should include all `__________` used inside the function in the dependency array.
8. Overusing `useMemo` can add unnecessary `__________` to the codebase.
9. `useMemo` helps improve performance by avoiding redundant `__________`.
10. You can pair `useMemo` with `React.__________` to avoid unnecessary renders.

---

Would you like the **answers** now?
*/

