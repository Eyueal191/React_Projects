/*
---

## 🔹 1. `loader` and `useLoaderData`

### ✅ What is a `loader`?

A `loader` is a function attached to a route that **fetches data** **before** rendering the route component.

```tsx
export const loader = async ({ params, request }) => {
  const data = await fetch(`/api/item/${params.id}`);
  return data.json(); // returned value is available to useLoaderData
};

```

### ✅ `useLoaderData()`

Inside your component, use this hook to access the data returned by the `loader`.

```tsx
import { useLoaderData } from "react-router-dom";

function Item() {
  const data = useLoaderData();
  return <div>{data.title}</div>;
}
```

---

## 🔹 2. `action` and `useActionData`

### ✅ What is an `action`?

An `action` handles **form submissions or mutations** (POST, PUT, DELETE) attached to a route.

```tsx
export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");

  const res = await fetch("/api/items", {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: { "Content-Type": "application/json" },
  });

  return { success: true };
};
```

### ✅ `useActionData()`

Use this hook to get the result of an `action` after a form submit.

```tsx
import { Form, useActionData } from "react-router-dom";

function CreateItem() {
  const result = useActionData();
  return (
    <Form method="post">
      <input name="title" />
      <button type="submit">Create</button>
      {result?.success && <p>Item created!</p>}
    </Form>
  );
}
```

---

## 🔹 3. `errorElement` and `useRouteError`

### ✅ `errorElement`

Add this to your route definition to **display a fallback UI** when `loader` or `action` throws an error.

```tsx
function ErrorPage() {
  const error = useRouteError();
  return <div>Error: {error.message}</div>;
}
```

Use it in the route:

```tsx
{
  path: "/item/:id",
  element: <Item />,
  loader,
  errorElement: <ErrorPage />,
}
```

---

## 🔹 4. `RouterProvider`, `createBrowserRouter`, `createRoutesFromElements`

### ✅ Setup Example

```tsx
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Item, { loader as itemLoader } from "./Item";
import CreateItem, { action as createAction } from "./CreateItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="item/:id" element={<Item />} loader={itemLoader} />
      <Route path="create" element={<CreateItem />} action={createAction} />
    </Route>
  )
);

function Root() {
  return <RouterProvider router={router} />;
}
```

---

## 🔹 5. `defer`, `Suspense`, and `await`

These are used for **lazy-loading data**.

### ✅ `defer()` — for streaming data

Use `defer()` to **return partial data immediately**, and load the rest lazily.

```tsx
import { defer } from "react-router-dom";

export const loader = async () => {
  return defer({
    post: fetch("/api/post").then(res => res.json()),
    comments: fetch("/api/comments").then(res => res.json()),
  });
};
```

### ✅ `<Suspense>` and `<Await>`

Use these in your component to handle async data streams.

```tsx
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

function PostPage() {
  const { post, comments } = useLoaderData();

  return (
    <div>
      <Suspense fallback={<p>Loading post...</p>}>
        <Await resolve={post}>{data => <h1>{data.title}</h1>}</Await>
      </Suspense>

      <Suspense fallback={<p>Loading comments...</p>}>
        <Await resolve={comments}>
          {data => data.map(c => <p key={c.id}>{c.text}</p>)}
        </Await>
      </Suspense>
    </div>
  );
}
```

---

## 🔹 6. Getting Params (dynamic and query) in `loader` and `action`

### ✅ Dynamic Params (`:id`, etc.)

They’re available via the `params` argument.

```tsx
export const loader = async ({ params }) => {
  const id = params.id; // from route like /item/:id
  return fetch(`/api/item/${id}`).then(res => res.json());
};
```

### ✅ Query Params

Use the `request.url` object.

```tsx
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  return fetch(`/api/items?search=${search}`).then(res => res.json());
};
```

---

## ✅ Summary Cheat Sheet

| Feature                | Usage                                |
| ---------------------- | ------------------------------------ |
| `loader`               | Preloads data for the route          |
| `useLoaderData()`      | Access loader return value           |
| `action`               | Handles form submissions             |
| `useActionData()`      | Access result of last action         |
| `errorElement`         | Fallback UI for loader/action errors |
| `useRouteError()`      | Get error info                       |
| `defer()`              | Stream data parts                    |
| `<Suspense>`           | Wrap async UI                        |
| `<Await>`              | Resolve deferred data                |
| `params.id`            | Dynamic URL param                    |
| `new URL(request.url)` | Access query params                  |

---

Would you like a working example or a full project template using all of this?


50 React Router Data Layer API questions:
---

## ✅ TRUE / FALSE (15 Questions)

### QUESTIONS:

1. React Router loaders run before the route component is rendered.
2. `action` functions are used to perform mutations like POST and PUT requests.
3. `useLoaderData()` can be used outside a route component.
4. The `Form` component from `react-router-dom` triggers the route’s `action`.
5. You must wrap `Await` in `Suspense`.
6. `defer()` allows partial data to load while UI renders.
7. `useActionData()` returns data returned by the most recent action.
8. Loaders are run only once during the application lifecycle.
9. `errorElement` handles errors thrown from `loader`, `action`, or component rendering.
10. The `params` object in loader/action includes dynamic route params.
11. `request.url` is used in a loader to extract query parameters.
12. A route can have both a `loader` and an `action` defined.
13. Nested routes cannot have their own `loader`.
14. The `RouterProvider` component is required for using the data layer APIs.
15. Deferred data must be awaited synchronously in the loader.

### ANSWERS:

1. ✅ True
2. ✅ True
3. ❌ False
4. ✅ True
5. ✅ True
6. ✅ True
7. ✅ True
8. ❌ False
9. ✅ True
10. ✅ True
11. ✅ True
12. ✅ True
13. ❌ False
14. ✅ True
15. ❌ False

---

## 🟦 MULTIPLE CHOICE (20 Questions)

### QUESTIONS:

16. What does `useLoaderData()` return?
    A. JSX
    B. Route object
    C. Data returned by the loader
    D. Props

17. Which function handles form submissions?
    A. `loader`
    B. `action`
    C. `componentDidMount`
    D. `useEffect`

18. Which of the following is used to render async data?
    A. `await`
    B. `Suspense`
    C. `Await`
    D. All of the above

19. Where do you define your routes with loaders?
    A. `createBrowserRouter`
    B. `BrowserRouter`
    C. `HashRouter`
    D. `Link`

20. How do you access query parameters in a `loader`?
    A. `params.query`
    B. `request.queryParams`
    C. `new URL(request.url).searchParams`
    D. `useSearchParams()`

21. What hook provides the error thrown from a loader?
    A. `useRouteError()`
    B. `useLoaderError()`
    C. `useErrorBoundary()`
    D. `getError()`

22. What type of HTTP methods do `action` functions generally handle?
    A. GET
    B. HEAD
    C. POST, PUT, DELETE
    D. OPTIONS

23. What component must wrap `Await`?
    A. `Form`
    B. `Suspense`
    C. `ErrorBoundary`
    D. `Loader`

24. What does `defer()` do?
    A. Postpones route rendering
    B. Sends chunked data to `Await`
    C. Delays actions
    D. Prevents re-render

25. What’s passed to a loader?
    A. Component props
    B. Route config
    C. `{ request, params }`
    D. Only `id`

26. Which hook fetches the result of an `action`?
    A. `useActionData()`
    B. `useFormResult()`
    C. `useActionResult()`
    D. `usePostData()`

27. What’s needed to support loaders in your app?
    A. `<BrowserRouter>`
    B. `createBrowserRouter()` and `<RouterProvider />`
    C. `Link`
    D. `Navigate`

28. Which type of route should use an `index` prop?
    A. Top-level routes
    B. Routes with path
    C. Default nested routes
    D. Routes with `defer()`

29. What causes `useActionData()` to update?
    A. Any render
    B. Loader update
    C. Form submission
    D. Query change

30. What must a `loader` or `action` return?
    A. JSX
    B. A `Response` object
    C. Any serializable data
    D. DOM element

31. What happens if a `loader` throws an error?
    A. App crashes
    B. `errorElement` renders
    C. It silently fails
    D. Page refreshes

32. Which method allows "lazy" data loading?
    A. `setTimeout`
    B. `defer()`
    C. `delay()`
    D. `async/await`

33. What type of component is `Form` in `react-router-dom`?
    A. HTML wrapper
    B. Submit handler
    C. React-enhanced form that integrates with `action`
    D. AJAX form

34. In which of these would you NOT use `useLoaderData()`?
    A. Component inside routed element
    B. Loader
    C. Index route
    D. Page component with a loader

35. How do you specify an error UI for a route?
    A. `fallbackElement`
    B. `errorHandler`
    C. `errorElement`
    D. `onError`

### ANSWERS:

16. C
17. B
18. D
19. A
20. C
21. A
22. C
23. B
24. B
25. C
26. A
27. B
28. C
29. C
30. C
31. B
32. B
33. C
34. B
35. C

---

## ✏️ FILL IN THE BLANK (15 Questions)

### QUESTIONS:

36. The function used to fetch data before rendering a route is called a **`________`**.
37. The `action` function handles form submissions and **\_\_\_\_\_\_\_\_**.
38. The hook used to access data returned from a loader is **`________`**.
39. To handle errors from a loader, we use **`________`** in the route config.
40. **`________`** is used to catch route-level errors in the component.
41. The `Form` component triggers the **`________`** function on submit.
42. To create routes with a data API, we use **`________`** instead of `BrowserRouter`.
43. We wrap the router in **`________`** to initialize it.
44. For loading partial data asynchronously, use the **`________`** utility.
45. When deferring data, use the **`________`** component to render it.
46. The `Suspense` component is used to wrap **`________`**.
47. To extract query parameters in a loader, use **`new URL(request.url).________`**.
48. Dynamic params like `:id` are accessed in loaders via the **`________`** object.
49. In a route path `/user/:id`, `params.id` would contain the **`________`** value.
50. The hook used to get the most recent form submission result is **`________`**.

### ANSWERS:

36. `loader`
37. `mutations`
38. `useLoaderData`
39. `errorElement`
40. `useRouteError`
41. `action`
42. `createBrowserRouter`
43. `RouterProvider`
44. `defer`
45. `Await`
46. `Await`
47. `searchParams`
48. `params`
49. `dynamic`
50. `useActionData`

---

