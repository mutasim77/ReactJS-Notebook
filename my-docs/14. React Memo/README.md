# React Memo 🪀

One of the benefits of using React is it’s improved performance, which allows your web applications to load faster and allows you to navigate from one page to another without having to wait so long. This built-in performance optimization has some drawbacks that you can work on to improve the performance of your web applications.

One of the most common and reliable methods for optimizing the performance of your React application is to "memoize" the code you write in your React components using React Memo. This allows you to avoid unnecessary re-renders, enhancing the performance of your React application.

> ? WHAT IS MEMOIZATION?
> 
> Memoization is a form of caching used to store results of expensive functions and avoid repeated calls, leading to repetitive computation of results.

## What is React Memo? 🤓

Components in React are designed to re-render whenever the state or props value changes. However, this can impact your application's performance because, even if the change is only intended to affect the parent component, every other child component attached to the parent component will re-render. When a parent component re-renders, so do all of its child components.

React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings. This improves performance because it memoizes the result and skips rendering to reuse the last rendered result.

There are two ways you can wrap your component with ```React.memo()```. It is either you wrap the actual component directly without having to create a new variable to store the memoized component:

```jsx
const myComponent = React.memo((props) => {
    /* render using props */
});

export default myComponent;
```

Another option is to create a new variable to store the memoized component and then export the new variable:

```jsx
const myComponent = (props) => {
    /* render using props */
};

export const MemoizedComponent = React.memo(myComponent);
```

In the example above, **myComponent** outputs the same content as **MemoizedComponent**, but the difference between both is that **MemoizedComponent** render is memoized. This means that this component will only re-render when the props change.

> Note: A memoized component will only re-render when there is a change in props value or when the state and context of the component change.


## When to use React Memo? 🙃
You now know what it means to memoize a component and the advantages of optimization. But this doesn’t mean you should memoize all your components to ensure maximum performance optimization of performance.

It is important to know when and where to memoize your component else it would not fulfill its purpose. For example, React Memo is used to avoid unnecessary re-renders when there is no change to the state or context of your component. If the state and content of your component will ALWAYS change, React Memo becomes useless. Here are other points:

- Use React Memo if your component will render quite often.
- Use it when your component often renders with the *same props*. This happens to child components who are forced to re-render with the same props whenever the parent component renders.
- Use it in pure **functional components** alone. If you are using a class component, use the **React.PureComponent**.
- Use it if your component is big enough (contains a decent amount of UI elements) to have props equality check.


## When to avoid using React Memo ? 🙂
You now understand how to use React Memo, but it is important to note that you should not use it in all situations because it does not always work as expected. Performance-related changes that are implemented incorrectly can even harm performance.

When you need to remember the values of a function or an object, you can use hooks like ```useMemo()``` and ```useCallback()```. Also, avoid using React Memo if the component is light and renders with multiple props.

Finally, never use React Memo to wrap a class-based component; instead, extend ```PureComponent``` or implement the ```shouldComponentUpdate()``` method.