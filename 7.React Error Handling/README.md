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

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

- ## react-error-boundary 🔵

react-error-boundary is a wrapper around React’s error boundary that allows developers to implement error boundaries in code without building them from scratch. With react-error-boundary, we can simply wrap components where we expect errors with the provided 
<code>ErrorBoundary</code> component and pass in some extra props to customize our error boundary’s behavior.

- ## ErrorBoundary component 🔴

The ErrorBoundary component is the main component available in react-error-boundary. It allows us to implement the typical React error boundary with less code.

Here’s a very basic use case of <code>ErrorBoundary</code>:

```jsx
function App(){
  ...
  return (
    <ErrorBoundary
          FallbackComponent={OurFallbackComponent}
        >
          <ComponentThatMightThrowAnError/>
    </ErrorBoundary>
  );
}

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
```

In the above component, we simply wrap our component with the <code>ErrorBoundary</code> component and pass in our fallback component to the <code>FallbackComponent</code> prop so that if there’s an error (that can be caught and handled by react-error-boundary), our fallback component will be rendered; otherwise, our component will be rendered.

We also have the <code>fallbackRender</code> prop, which is a render prop-based API for specifying our fallback component in an inline manner. Here’s the above code block using the <code>fallbackRender</code> prop:

```jsx
function App(){
  ...
  return (
    <ErrorBoundary
      fallbackRender =  {({error, resetErrorBoundary, componentStack}) => (
          <div>
          <h1>An error occurred: {error.message}</h1>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
    >
      <ComponentThatMightThrowAnError/>
    </ErrorBoundary>
  );
}
```

The ErrorBoundary also has an onError prop, which acts as a listener that is triggered when our error boundary catches and handles an error in its child components. It is from this place that we might choose to log such errors to whatever error logging service we might be using.

```jsx
function App(){
  ...

  return (
    <ErrorBoundary
      onError = {(error, componentStack) => {
        logToErrorLoggingService(error, componentStack);
      }}
      ...
    >
      <ComponentThatMightThrowAnError/>
    </ErrorBoundary>
  );
}
```