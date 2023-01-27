# React error handling with react-error-boundary ☄️

Errors are bound to happen in our applications, whether they’re server-related errors, edge cases, or others. As such, many methods have been developed to prevent these errors from interfering with user and developer experience. In React, one such method is the use of error boundaries.

- ## Error boundaries in React 🟡
Error boundaries were introduced in React 16 as a way to catch and handle JavaScript errors that occur in the UI parts of our component. So error boundaries only catch errors that occur in a lifecycle method, render method, and inside Hooks like <code>useEffect</code>. According to the React documentation, error boundaries do not handle errors in:
- Event handlers
- Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
- Server-side rendering
- Errors thrown in the error boundary itself (rather than its children)

So basically, error boundaries only handle errors in the parts of our code that involve React.

<br>
To create an error boundary, we simply have to create a class component and define a state variable for determining whether the error boundary has caught an error. Our class component should also have at least three methods:

- A static method called getDerivedStateFromError, which is used to update the error boundary’s state
- A componentDidCatch lifecycle method for performing operations when our error boundaries catch an error, such as logging to an error logging service
- A render method for rendering our error boundary’s child or the fallback UI in case of an error
  
Here’s an example (taken from the React docs) of what our simple error boundary should look like: