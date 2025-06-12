// ✅ useRef Hook – DOM Manipulation & More

/*
🔹 The `useRef` Hook is used for two main purposes:

1. To store **mutable dynamic data** that persists across renders
   - Changing this data does **not cause re-renders**.
2. To get direct access to **DOM elements** for manipulation.

---

📌 Syntax:
const ref = useRef();
- By default, `ref` is { current: null }.
- After mounting, `ref.current` points to the DOM node.

---

🔸 Accessing a Single DOM Element:
const myRef = useRef();
<h1 ref={myRef}>This is useRef</h1>
- `myRef.current` now refers to the <h1> DOM element.

---

🔸 Accessing Multiple Elements:
const multiRef = useRef({ h1: null, p: null });

<h1 ref={el => multiRef.current.h1 = el}>Heading</h1>
<p ref={el => multiRef.current.p = el}>Paragraph</p>
- Access with `multiRef.current.h1`, `multiRef.current.p`.

---

🔸 forwardRef – Passing Refs to Child Components:
- Allows a parent to directly access a child’s DOM node.

const Child = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

const inputRef = useRef();
<Child ref={inputRef} />
- `inputRef.current` now refers to the child’s input DOM.

---

🔸 useImperativeHandle – Expose Custom Methods:
- Let a child component expose functions to the parent.

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    reset: () => inputRef.current.value = '',
  }));

  return <input ref={inputRef} />;
});

const inputRef = useRef();
<FancyInput ref={inputRef} />;
inputRef.current.focus();
inputRef.current.reset();

---

🔸 Programmatic DOM Triggers:
Once you have a ref to an element, you can trigger native DOM methods:

ref.current.focus();
ref.current.blur();
ref.current.scrollIntoView();
ref.current.click();

🔸 You can also register native events:
ref.current.addEventListener("click", handler);
ref.current.removeEventListener("click", handler);

---

🧠 Summary:

- `useRef` holds mutable values across renders without re-rendering.
- Enables direct access to DOM elements.
- `forwardRef` lets you pass refs from parent to child.
- `useImperativeHandle` exposes methods from child to parent.
- You can trigger native DOM methods like `.focus()`, `.click()`, or add/remove event listeners.
True or False (10 questions)
useRef can be used to persist a mutable value across renders without causing re-renders.

When you update a useRef value, the component automatically re-renders.

The forwardRef function allows a parent to pass a ref to a child component.

You can use useImperativeHandle without forwardRef to expose methods to a parent.

useImperativeHandle can be used to control exactly what is exposed via a ref.

useRef returns a mutable object with a .current property.

useImperativeHandle always exposes the entire DOM node to the parent ref.

Calling ref.current directly on a forwarded ref always returns a DOM element.

useImperativeHandle must return an object with functions or values to expose.

React discourages using refs for manipulating the DOM directly but allows it when necessary.

Multiple Choice Questions (10 questions)
What does useRef return?
a) A DOM node
b) An object with a .current property
c) A React component
d) A string value

What is the purpose of forwardRef?
a) To forward props to a child
b) To forward a ref to a child component
c) To force a component to re-render
d) To create a memoized component

How does useImperativeHandle work?
a) It exposes functions or values to a parent ref
b) It controls re-renders
c) It accesses local component state
d) It replaces the need for useRef

What is a common use case for useRef?
a) Storing a mutable variable without triggering re-render
b) Triggering a component re-render
c) Passing props down the tree
d) Styling components dynamically

What do you need to use useImperativeHandle properly?
a) React.memo
b) forwardRef
c) useState
d) useEffect

Which of these is true about ref forwarding?
a) Only works with class components
b) Allows parent components to get a child’s DOM node or methods
c) Forwards state updates automatically
d) Requires Redux to function

If you want to expose a custom method doSomething from a child component, you should:
a) Use useState
b) Pass a callback prop
c) Use useImperativeHandle inside a forwardRef component
d) Modify props directly

What does useRef NOT do?
a) Store a mutable value
b) Cause re-renders when updated
c) Keep a value between renders
d) Reference a DOM element

When you create a ref with useRef(null), what does the initial .current value equal?
a) undefined
b) null
c) 0
d) false

How do you expose methods from a functional component using refs?
a) Using useEffect
b) Using useImperativeHandle with forwardRef
c) Using setState
d) Using useCallback

Fill in the blanks (10 questions)
The React hook used to create a mutable ref object is called __________.

To forward a ref to a child component, you use the __________ function.

The property on the object returned by useRef that holds the mutable value is called __________.

To expose custom instance methods from a child to a parent, React provides the __________ hook.

useImperativeHandle must be used in conjunction with __________.

When you want to access a DOM node in a functional component, you use __________.

The __________ hook prevents a ref update from causing a re-render.

The callback function passed to useImperativeHandle must return an __________ with methods to expose.

Forwarding refs is necessary because functional components do not accept __________ by default.

You can access the current value stored in a ref using __________.

Yes, those are the complete answers for **all 30 questions** you asked about `useRef`, `useImperativeHandle`, and `forwardRef`. Here’s a quick recap:

---

### True or False (Answers 1-10)

1. True
2. False
3. True
4. False
5. True
6. True
7. False
8. False
9. True
10. True

---

### Multiple Choice (Answers 1-10)

1. b)
2. b)
3. a)
4. a)
5. b)
6. b)
7. c)
8. b)
9. b)
10. b)

---

### Fill in the blanks (Answers 1-10)

1. useRef
2. forwardRef
3. current
4. useImperativeHandle
5. forwardRef
6. useRef
7. useRef
8. object
9. ref
10. ref.current

---

If you want, I can help create a simple quiz format, flashcards, or reminders so you can review these daily. Just let me know!



