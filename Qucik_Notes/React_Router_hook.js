Sure! Here’s an **expanded version** of your React Router v6 note, with deeper explanations, more examples, and a full set of **100 questions** divided into True/False, Multiple Choice, and Fill-in-the-Blanks — all related to React Router v6 features, usage, hooks, patterns, and nuances.

---

# React Router v6 — Expanded Notes & 100 Questions

---

## Overview

React Router v6 is a modern, declarative routing library for React applications. It manages the navigation and rendering of components based on URL changes and offers powerful support for nested routes, route parameters, layouts, and hooks-based APIs.

It replaces some legacy concepts from v5 and earlier with a simpler, more intuitive API that leverages React’s component model and hooks.

---

## Key Concepts and Features

### 1. Simplified Route Definitions

* Routes are declared inside `<Routes>` components, replacing the older `<Switch>`.
* Use the `element` prop to specify what component or JSX should render, rather than `component` or `render` props.
* Supports nested routes by nesting `<Route>` components.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### 2. Nested Routes and Layouts

* Nested `<Route>` components correspond to nested UI.
* Use `<Outlet />` in parent components to render child routes.
* Great for layouts, sidebars, and dashboards.

```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Render child routes here */}
    </div>
  );
}
```

### 3. Route Matching & Ranking

* React Router v6 uses a deterministic ranking system that sorts routes by specificity.
* Partial matching is automatic, so no more `exact` prop.
* Catch-all routes use `path="*"` for 404 pages.

### 4. Navigation Components and Hooks

* `<Link>` and `<NavLink>` replace traditional anchor tags for client-side navigation.
* `<NavLink>` applies active styles automatically.
* Programmatic navigation uses the `useNavigate()` hook.
* Access route params with `useParams()`.
* Get the current location with `useLocation()`.
* Match routes with `useMatch()`.

---

## Important Components & APIs

| Component/Hook    | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `<BrowserRouter>` | Wraps your app enabling HTML5 history API routing |
| `<Routes>`        | Wraps and selects the best matching `<Route>`     |
| `<Route>`         | Defines a route path and component to render      |
| `<Link>`          | Navigates without page reloads                    |
| `<NavLink>`       | Like `<Link>`, but applies active styling         |
| `<Outlet>`        | Placeholder to render child routes                |
| `useNavigate()`   | Programmatically navigate                         |
| `useParams()`     | Access URL parameters                             |
| `useLocation()`   | Access current location object                    |
| `useMatch()`      | Match a pattern against the current URL           |

---

## Examples

### Basic Routing

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Nested Routes with Outlet

```jsx
function Users() {
  return (
    <div>
      <h2>Users List</h2>
      <Outlet /> {/* Nested route renders here */}
    </div>
  );
}

<Routes>
  <Route path="users" element={<Users />}>
    <Route path=":id" element={<UserProfile />} />
  </Route>
</Routes>
```

### Redirects with `<Navigate>`

```jsx
import { Navigate } from 'react-router-dom';

<Route path="/old-home" element={<Navigate to="/" replace />} />
```

### Programmatic Navigation

```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // after login success
    navigate('/dashboard');
  }

  return <button onClick={handleLogin}>Log In</button>;
}
```

---

## Advanced Topics

### Route Parameters

* Access via `useParams()`.
* Example: `/users/:userId`

```jsx
function UserProfile() {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
}
```

### URL Query Parameters

* React Router does not parse query params.
* Use `useLocation()` and `URLSearchParams`:

```jsx
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  return <div>Search query: {query}</div>;
}
```

### Using `useMatch()` to Conditionally Render UI

```jsx
const match = useMatch('/users/:id');

if (match) {
  console.log('Matched user ID:', match.params.id);
}
```

---

## 100 Questions on React Router v6

---

### True or False (40 questions)

1. React Router v6 replaced `<Switch>` with `<Routes>`.
2. The `component` prop is used on `<Route>` in v6.
3. `useNavigate()` allows programmatic route changes.
4. Nested routes require nested `<Routes>` inside components.
5. `<Outlet />` is used to render child routes.
6. The `exact` prop is required to avoid partial matches in v6.
7. `useParams()` returns an object with URL params.
8. `<NavLink>` automatically applies an `active` class when matched.
9. `path="*"` matches all unmatched routes for 404 pages.
10. `<Link>` uses anchor tags internally.
11. React Router v6 supports route ranking to prioritize routes.
12. `useLocation()` returns the current URL location object.
13. You cannot redirect programmatically in React Router v6.
14. `useMatch()` checks if a path matches the current URL.
15. The `replace` prop in `<Navigate>` replaces the current history entry.
16. React Router v6 supports data loaders natively.
17. `<BrowserRouter>` must wrap the entire React app.
18. React Router v6 supports relative routing with `to` props.
19. `useNavigate()` returns a function to change routes.
20. Nested routes always require their own `<BrowserRouter>`.
21. `<Routes>` allows only one child `<Route>`.
22. Route parameters are always strings.
23. `<Navigate>` is a component used to redirect declaratively.
24. You can access route params in components with `useParams()`.
25. React Router v6 supports lazy loading routes out of the box.
26. You can define nested layouts using nested routes.
27. `<Route>` can accept children routes as an array prop.
28. Query parameters are accessible directly via `useParams()`.
29. `useLocation()` changes whenever navigation occurs.
30. React Router uses the History API for navigation.
31. `<NavLink>` supports custom active class names.
32. `useMatch()` returns null if no match found.
33. `<Routes>` renders all matching routes by default.
34. React Router v6 removed support for HashRouter.
35. `useNavigate()` can be used inside class components.
36. The default route matching is partial in v6.
37. `<Outlet />` can be nested multiple levels.
38. You can create dynamic routes with parameters in the path.
39. React Router v6 supports server-side rendering.
40. `<Link>` triggers a full page reload by default.

---

### Multiple Choice (40 questions)

1. What component replaced `<Switch>` in React Router v6?
   a) `<Router>`
   b) `<Routes>`
   c) `<Route>`
   d) `<Link>`

2. Which hook allows programmatic navigation?
   a) `useParams`
   b) `useLocation`
   c) `useNavigate`
   d) `useRouteMatch`

3. How do you render nested routes in a parent component?
   a) `<ChildRoute />`
   b) `<Outlet />`
   c) `props.children`
   d) `useRoutes()`

4. What is the purpose of the `replace` prop in `<Navigate>`?
   a) Reload the page
   b) Replace current history entry
   c) Do nothing
   d) Delay navigation

5. Which hook returns URL parameters?
   a) `useLocation`
   b) `useMatch`
   c) `useParams`
   d) `useNavigate`

6. How does React Router v6 handle partial matching?
   a) Requires `exact` prop
   b) Partial matching is default
   c) Matches only root route
   d) Does not support partial matching

7. What does `<NavLink>` provide over `<Link>`?
   a) Faster navigation
   b) Active styling support
   c) Page reloads
   d) Anchor tags

8. How do you catch all unmatched routes?
   a) `<Route path="/" />`
   b) `<Route path="*" />`
   c) `<Route path="**" />`
   d) `<Route path="" />`

9. Which component provides routing context to the app?
   a) `<RouterProvider>`
   b) `<BrowserRouter>`
   c) `<Routes>`
   d) `<Route>`

10. How do you access the current location object?
    a) `useParams()`
    b) `useLocation()`
    c) `useNavigate()`
    d) `useMatch()`

11. What does `useMatch('/users/:id')` return when matched?
    a) Boolean `true`
    b) Object with params and path info
    c) Null
    d) Throws error

12. Which component would you use for declarative redirects?
    a) `<Redirect>`
    b) `<Navigate>`
    c) `<Link>`
    d) `<Switch>`

13. Can you nest routes indefinitely in React Router v6?
    a) No, max 3 levels
    b) Yes, unlimited nesting
    c) Only 2 levels allowed
    d) Only 1 level allowed

14. Which prop on `<Route>` specifies what to render?
    a) `component`
    b) `render`
    c) `element`
    d) `children`

15. How do you define a route with parameters?
    a) `/users/:id`
    b) `/users/{id}`
    c) `/users/*id`
    d) `/users/id`

16. What hook would you use to navigate programmatically after a form submit?
    a) `useLocation`
    b) `useMatch`
    c) `useNavigate`
    d) `useParams`

17. What React Router v6 hook gives access to the current navigation path?
    a) `useLocation`
    b) `useParams`
    c) `useMatch`
    d) `useNavigate`

18. How do you handle 404 pages?
    a) `<Route path="/404" />`
    b) `<Route path="*" element={<NotFound />} />`
    c) `<Route path="/notfound" />`
    d) Use `useNavigate()` in every route

19. Which component is used to enable routing based on URL?
    a) `<BrowserRouter>`
    b) `<Routes>`
    c) `<Route>`
    d) `<Navigate>`

20. How can you pass state when navigating programmatically?
    a) `navigate('/path', { state: { from: 'home' }})`
    b) `navigate('/path', { replace: true })`
    c) `navigate('/path', { params: { id: 1 }})`
    d) `navigate('/path', { query: 'id=1' })`

21. Which of the following is NOT a React Router hook?
    a) `useNavigate`
    b) `useLocation`
    c) `useDispatch`
    d) `useParams`

22. How do you declare a nested route for user details under `/users`?
    a) `<Route path="/users" children={[{ path: ':id', element: <User /> }]} />`
    b) `<Route path="/users"><Route path=":id" element={<User />} /></Route>`
    c) `<Route path="/users/:id" element={<User />} />`
    d) Both b) and c)

23. What happens if you use `<Link to="/home" replace />`?
    a) Navigates normally
    b) Replaces current history entry
    c) Reloads page
    d) Does nothing

24. What is the role of `<Outlet />` in React Router?
    a) Render fallback UI
    b) Render nested route components
    c) Provide navigation links
    d) Redirect to another route

25. Which API allows declarative route definitions with data loaders?
    a) `<Route loader>` (React Router v6.4+)
    b) `useLoaderData` hook
    c) `createBrowserRouter`
    d) All of the above

26. How can you programmatically navigate with replacing the current entry?
    a) `navigate('/path', { replace: true })`
    b) `navigate('/path', { reload: true })`
    c) `navigate.replace('/path')`
    d) `navigate('/path')`

27. Which hook gives access to the current URL's pathname, search, and hash?
    a) `useParams`
    b) `useLocation`
    c) `useMatch`
    d) `useNavigate`

28. How do you declare a fallback or “not found” route?
    a) `<Route path="*" element={<NotFound />} />`
    b) `<Route path="/404" element={<NotFound />} />`
    c) `<Route path="/" element={<NotFound />} />`
    d) `<Route path="**" element={<NotFound />} />`

29. What’s the difference between `<Link>` and `<NavLink>`?
    a) `<Link>` navigates; `<NavLink>` doesn’t
    b) `<NavLink>` adds active styles automatically
    c) `<Link>` reloads page; `<NavLink>` doesn’t
    d) No difference

30. How can you lazy load route components in React Router v6?
    a) Using React.lazy and Suspense with `element` prop
    b) Using `lazyLoad` prop on `<Route>`
    c) Using dynamic imports inside route config
    d) Both a) and c)

31. Can you nest `<Routes>` inside route components?


```
a) Yes, to handle nested routes  
b) No, only one `<Routes>` per app  
c) Yes, but only once  
d) No, use `<Switch>` instead
```

32\. How do you prevent navigation?
a) Use `Prompt` component (v5 only)
b) Use `useBlocker` hook (new API)
c) Override `<Link>` behavior
d) Not supported

33. What will `<Route path="/" element={<Home />} />` match?
    a) Only root URL `/`
    b) Any URL starting with `/`
    c) Only `/home`
    d) No URLs

34. Which component must wrap your app for React Router to work properly?
    a) `<BrowserRouter>`
    b) `<Route>`
    c) `<Routes>`
    d) `<Link>`

35. How to read query parameters from URL?
    a) Use `useParams()`
    b) Use `useLocation()` + `URLSearchParams`
    c) Use `useQuery()` hook
    d) Use `useMatch()`

36. Which method is used to programmatically go back in history?
    a) `navigate(-1)`
    b) `goBack()`
    c) `navigate.back()`
    d) `history.go(-1)`

37. Can you use React Router with React Native?
    a) Yes, React Router supports React Native
    b) No, React Router is web-only
    c) Only in Expo projects
    d) Yes, but with special adapters

38. How do you render a component only when a route is matched?
    a) Use `useMatch()` hook
    b) Wrap in `<Route>` with `element` prop
    c) Use `<Outlet />`
    d) Both a) and b)

39. What’s the advantage of React Router v6 route ranking?
    a) More predictable route matching
    b) Routes render in defined order only
    c) Supports regex paths
    d) Eliminates need for nested routes

40. How do you pass parameters programmatically to a route?
    a) Embed in URL string
    b) Pass as second arg to `navigate()` (not supported)
    c) Use `useParams()` to send params
    d) Use query strings only

---

### Fill in the Blanks (20 questions)

1. In React Router v6, the component used to wrap the entire routing context is `<__________>`.
2. The component that replaced `<Switch>` in v6 is `<__________>`.
3. To define a route’s content, we use the `__________` prop on `<Route>`.
4. To access dynamic route parameters, use the hook `__________`.
5. To navigate programmatically, we use the hook `__________`.
6. The component used to navigate declaratively without reloading the page is `<__________>`.
7. To render child routes inside a parent component, we use the `<__________>` component.
8. For routes that don’t match any defined path, we use the path `__________`.
9. To access the current URL location object, use the hook `__________`.
10. React Router v6 automatically performs `__________` matching by default.
11. The hook `__________` returns `null` if the current URL doesn’t match the specified pattern.
12. You can programmatically redirect by rendering the `<__________>` component.
13. Query parameters can be accessed via `__________` combined with `useLocation()`.
14. The `__________` prop in `<Navigate>` controls whether to replace the current history entry.
15. Nested routes are declared by nesting `<__________>` components inside another `<Route>`.
16. To add active styling to links, use `<__________>`.
17. React Router v6 uses the `__________` API to manipulate browser history.
18. To create lazy-loaded routes, use `React.lazy` combined with the `__________` prop.
19. The hook `__________` can be used to get match details for a path.
20. To programmatically navigate back one step in history, call `navigate(__________)`.

---

If you want, I can generate the **answers** as well, or provide explanations for any questions you want. Would you like me to do that?

