// 7. useLayoutEffect Hook

/*
🔹 The `useLayoutEffect` Hook is similar to `useEffect`, but it fires **synchronously after all DOM mutations** and **before the browser paints**.

This makes it ideal for **reading layout**, **measuring DOM elements**, or **performing DOM writes** before the screen updates.

📌 Syntax:
useLayoutEffect(() => {
  // synchronous effect logic (runs after render, before paint)
  
  return () => {
    // optional cleanup logic
  };
}, [dependency]);

---

🔸 Difference Between `useEffect` and `useLayoutEffect`

| Feature                  | `useEffect`                     | `useLayoutEffect`                |
|--------------------------|----------------------------------|----------------------------------|
| Timing                   | After paint (async)              | Before paint (sync)              |
| Blocking the paint?      | ❌ No                            | ✅ Yes                            |
| Use for layout reads?    | ❌ Not recommended               | ✅ Yes                            |
| Risk of visual flicker?  | ✅ Possible                      | ❌ Avoided                        |

⚠️ Be careful: Since `useLayoutEffect` blocks painting, heavy logic inside it can cause performance issues and **block the UI**.

---

🔸 Common Use Cases:

1. ✅ **Measuring DOM Elements**
   → Use when you need to measure size, offset, or position of elements **before the paint**.
   → Example: Get the height of an element before displaying a sibling.

2. ✅ **Synchronizing Scroll or Position**
   → Useful when scroll positions need to be adjusted based on DOM dimensions **immediately**.

3. ✅ **Immediate DOM Mutations**
   → Example: Apply styles or scroll to a position *before* the screen updates.

---

🧠 Summary:

`useLayoutEffect` is your go-to tool for:
- Running code **synchronously after DOM mutations**
- Avoiding **flicker or misaligned elements**
- Performing layout reads/writes **before** the browser paints

⚠️ Use it sparingly — for most side effects, prefer `useEffect`.

---

# **True or False (10 questions)**

1. `useLayoutEffect` runs after render but before the browser paints the screen.
2. It is better to use `useEffect` when performing async data fetches.
3. `useLayoutEffect` executes asynchronously after paint.
4. `useLayoutEffect` can block the UI if overused.
5. DOM measurements are more reliable inside `useLayoutEffect`.
6. You can use multiple `useLayoutEffect` hooks in the same component.
7. You should avoid doing expensive work inside `useLayoutEffect`.
8. `useLayoutEffect` is equivalent to `componentDidUpdate`.
9. `useLayoutEffect` can be used to apply styles before painting.
10. The order of `useLayoutEffect` hooks matches the order they're defined in the code.

---

# **Multiple Choice Questions (10 questions)**

1. What is the main difference between `useEffect` and `useLayoutEffect`?
   a) One uses hooks, the other doesn't  
   b) One runs synchronously before paint, the other after paint  
   c) One works only on server  
   d) Both are exactly the same  

2. When should you prefer `useLayoutEffect` over `useEffect`?
   a) When fetching API data  
   b) When measuring or modifying DOM layout  
   c) When logging state changes  
   d) When updating Redux state  

3. What happens if `useLayoutEffect` contains a long-running task?
   a) React skips it  
   b) It crashes the app  
   c) It blocks the browser paint and causes jank  
   d) Nothing  

4. Which lifecycle method is `useLayoutEffect` closest to in class components?
   a) componentDidMount  
   b) componentWillUnmount  
   c) componentDidUpdate  
   d) componentWillMount  

5. What does `useLayoutEffect` block until it’s done?
   a) The component mount  
   b) DOM updates  
   c) The paint phase of the browser  
   d) The render function  

6. Why is `useLayoutEffect` good for scroll position adjustments?
   a) Because it runs before effects  
   b) Because it modifies Redux state  
   c) Because it delays DOM writes  
   d) Because it’s async  

7. In React’s rendering lifecycle, `useLayoutEffect` runs:
   a) Before render  
   b) After render, before paint  
   c) After paint  
   d) Before commit phase  

8. Which of the following is NOT a good use case for `useLayoutEffect`?
   a) Animating layout changes  
   b) Reading element dimensions  
   c) Syncing scroll  
   d) Fetching server data  

9. What will happen if you use `useLayoutEffect` for network requests?
   a) It will fail silently  
   b) It will work but block UI  
   c) It will improve performance  
   d) It will automatically switch to `useEffect`  

10. How is `useLayoutEffect` cleaned up?
    a) It isn’t  
    b) Manually with window.remove  
    c) Via the return function, like in `useEffect`  
    d) Automatically by React

---

# **Fill in the blanks (10 questions)**

1. `useLayoutEffect` runs after render but before the browser ________.
2. It is a synchronous version of the `__________` hook.
3. You should use it only when you need to manipulate or measure the actual ________.
4. `useLayoutEffect` can prevent layout ________ during initial paint.
5. It can be useful for synchronizing scroll ________.
6. `useLayoutEffect` blocks the browser’s ________ process.
7. Use the ________ function inside `useLayoutEffect` to clean up effects.
8. Running expensive operations in `useLayoutEffect` can cause UI ________.
9. DOM measurement logic is best placed inside the `__________` hook.
10. If not needed, prefer `useEffect` to avoid blocking the ________.

---

Great! Here are the ✅ **answers** for the `useLayoutEffect` quiz:

---

### ✅ **True or False Answers**

1. ✅ True
2. ✅ True
3. ❌ False — `useLayoutEffect` runs **synchronously before paint**, not asynchronously
4. ✅ True
5. ✅ True
6. ✅ True
7. ✅ True
8. ❌ False — It’s closer to `componentDidMount` and `componentDidUpdate`
9. ✅ True
10. ✅ True

---

### ✅ **Multiple Choice Answers**

1. **b)** One runs synchronously before paint, the other after paint
2. **b)** When measuring or modifying DOM layout
3. **c)** It blocks the browser paint and causes jank
4. **c)** componentDidUpdate
5. **c)** The paint phase of the browser
6. **a)** Because it runs before effects
7. **b)** After render, before paint
8. **d)** Fetching server data
9. **b)** It will work but block UI
10. **c)** Via the return function, like in `useEffect`

---

### ✅ **Fill in the blanks Answers**

1. **paints**
2. **useEffect**
3. **DOM**
4. **flicker**
5. **positions**
6. **paint**
7. **cleanup**
8. **jank**
9. **useLayoutEffect**
10. **render**

---

Would you like to continue with the final essential hook: **`useImperativeHandle`**?

*/

