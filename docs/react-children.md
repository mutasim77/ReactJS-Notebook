---
id: react-children
title: Children
sidebar_position: 10
---

# Children Props 👻

The most obvious and common prop that developers work with within React is the <code>children</code> prop. In the majority of cases, there is no need to understand how the <code>children</code> prop looks like. But in some cases, we want to inspect the <code>children </code>prop to maybe wrap each child in another element/component or to reorder or slice them. In those cases inspecting how the <code>children</code> prop looks like becomes essential.

You can use props.children in React in order to access and utilize what you put inside the open and closing tags when you are creating an instance of a component.

For example, if I have a Button component, I can create an instance of it like this: ```<Button>```HI!```<Button>``` and then inside of the Button component, I could access that text with props.children. You can also use this to create components that wrap other components ```<Container><Button /></Container>``` for example.


```jsx
function Button (props) {
  return <button>{props.children}</button>
}
```

I can then instantiate the component with ```<Button>Click Me!</Button>``` and then a button with the text click me would display on the page.

For a layout, I could do something like:

```jsx
function Container ({ children }) {
  return <div style={{ maxWidth: 800px, margin: 0 auto }}>{children}</div>
}
```

Note: in this example, I'm destructuring the props object, so I can use children directly.

And then to instantiate it I could do:

```jsx
<Container>
  <h1>Welcome to my App</h1>
  <p>Hello, hi, this is my paragraph</p>
</Container>
```

Normally in order to pass props from one component to another, you need to do ```<Button label="hello" />``` and then use <code>props.label</code> in the component, but React children is more flexible and allows you to mirror HTML more closely within your JSX.

