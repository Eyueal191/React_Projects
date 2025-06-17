// useContext() hook
/*
The purpose of useContext() is to avoid prop drilling.

What is Prop Drilling?
Prop drilling is the process of passing data (props) from a parent component
down through multiple intermediate child components to reach a deeply nested
component that actually needs that data.

Example component tree:
-----------------------
App
 └─ Parent
     └─ Child
         └─ GrandChild
-----------------------

To avoid passing props through every intermediate component,
we create a context to provide that data.

Example:

// 1. Create context
let MaxContext = React.createContext();

function App() {
  const name = 'Alice';

  // 2. Provide the context value to the tree
  return (
    <MaxContext.Provider value={name}>
      <Parent />
    </MaxContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  // 3. Consume the context value directly
  const name = React.useContext(MaxContext);
  return <div>Hello, {name}!</div>;
}

Absolutely! Here are **30 questions** based on your useContext explanation, divided into:

* **10 True/False**
* **10 Multiple Choice Questions (MCQs)**
* **10 Fill in the Blank**

---

## True or False (10)

1. Prop drilling means passing props directly from parent to child only.
2. The useContext() hook helps avoid prop drilling.
3. Context must be created with `React.createContext()`.
4. You can only provide a string value in context.
5. The `Provider` component wraps children components to give them access to context.
6. Every component in the tree automatically consumes context without using useContext().
7. The value passed to `Provider` can be any JavaScript data type.
8. Context values can be updated using useState inside the Provider.
9. You cannot consume context in class components.
10. `useContext()` hook can only be used inside functional components.

---


## Multiple Choice Questions (10)

1. What is the main purpose of the useContext() hook?
   a) To create new components
   b) To avoid prop drilling
   c) To fetch data from API
   d) To style components

2. How do you create a new context?
   a) `React.createState()`
   b) `React.createContext()`
   c) `useContext()`
   d) `React.useState()`

3. Where should you place the Provider component?
   a) Anywhere inside the app
   b) At the top of the component tree where context is needed
   c) Only inside the child components
   d) Inside the CSS file

4. What type of value can be passed to the Provider?
   a) Only strings
   b) Only objects
   c) Any JavaScript data type
   d) Only numbers

5. Which hook is used to consume the context inside a functional component?
   a) useState()
   b) useEffect()
   c) useContext()
   d) useReducer()

6. If you want to share a user’s name across multiple components without passing props through every level, which is the best way?
   a) Pass props manually through all components
   b) Use useContext() hook with a context provider
   c) Use local state only in the parent
   d) Use CSS

7. What happens when the context value changes?
   a) No component re-renders
   b) Only the Provider re-renders
   c) All components consuming the context re-render
   d) The entire app reloads

8. Can you consume context without wrapping components inside the Provider?
   a) Yes, always
   b) No, Provider must wrap the components
   c) Only if the context is global
   d) Only in class components

9. What is the correct syntax to consume context in a component?
   a) `const value = React.useContext(ContextName);`
   b) `const value = React.useState(ContextName);`
   c) `const value = React.createContext(ContextName);`
   d) `const value = React.Provider(ContextName);`

10. Which of these is NOT a benefit of using context?
    a) Avoiding prop drilling
    b) Sharing data globally
    c) Reducing the need for Redux in some cases
    d) Increasing prop drilling

---

## Fill in the Blank (10)

1. The useContext() hook is used to avoid \_\_\_\_\_\_\_\_\_\_ in React.
2. Prop drilling refers to passing props through \_\_\_\_\_\_\_\_\_\_ child components.
3. To create a context, you use the method \_\_\_\_\_\_\_\_\_\_.
4. The component that provides context values is called the \_\_\_\_\_\_\_\_\_\_.
5. The context value can be any \_\_\_\_\_\_\_\_\_\_ data type.
6. The function used to consume context inside a functional component is \_\_\_\_\_\_\_\_\_\_.
7. The context provider uses the prop called \_\_\_\_\_\_\_\_\_\_ to pass the value.
8. In the example, `MaxContext.Provider` wraps the component \_\_\_\_\_\_\_\_\_\_.
9. Without context, props must be passed down through every \_\_\_\_\_\_\_\_\_\_ component.
10. The method `useContext` can only be used inside \_\_\_\_\_\_\_\_\_\_ components.

---
Here are the answers for your 30 questions on `useContext` and prop drilling!

---

## True or False (Answers)

1. **False** — Prop drilling involves passing props through many levels, not just parent to direct child.
2. **True** — `useContext()` helps avoid prop drilling.
3. **True** — Context is created with `React.createContext()`.
4. **False** — Context can hold any data type, not just strings.
5. **True** — `Provider` wraps components to give them access to context.
6. **False** — Components must use `useContext` or `Context.Consumer` to consume context.
7. **True** — Context value can be any JavaScript data type.
8. **True** — You can update context value using state in the Provider.
9. **False** — Class components can consume context using `Context.Consumer`.
10. **True** — `useContext()` works only in functional components.

---

## Multiple Choice Questions (Answers)

1. **b)** To avoid prop drilling
2. **b)** `React.createContext()`
3. **b)** At the top of the component tree where context is needed
4. **c)** Any JavaScript data type
5. **c)** useContext()
6. **b)** Use useContext() hook with a context provider
7. **c)** All components consuming the context re-render
8. **b)** No, Provider must wrap the components
9. **a)** `const value = React.useContext(ContextName);`
10. **d)** Increasing prop drilling

---

## Fill in the Blank (Answers)

1. prop drilling
2. multiple (intermediate)
3. React.createContext()
4. Provider
5. JavaScript
6. useContext
7. value
8. Parent (or the wrapped child component)
9. intermediate (or every)
10. functional

---

If you want, I can help create explanations for any of these answers too!


*/

