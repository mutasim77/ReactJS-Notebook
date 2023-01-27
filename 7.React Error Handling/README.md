# React error handling with react-error-boundary ☄️

Errors are bound to happen in our applications, whether they’re server-related errors, edge cases, or others. As such, many methods have been developed to prevent these errors from interfering with user and developer experience. In React, one such method is the use of error boundaries.

- ## Error boundaries in React 🟡
Error boundaries were introduced in React 16 as a way to catch and handle JavaScript errors that occur in the UI parts of our component. So error boundaries only catch errors that occur in a lifecycle method, render method, and inside Hooks like <code>useEffect</code>. According to the React documentation, error boundaries do not handle errors in:
- Event handlers
- Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
- Server-side rendering
- Errors thrown in the error boundary itself (rather than its children)