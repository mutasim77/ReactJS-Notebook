# React Children 👻

The most obvious and common prop that developers work with within React is the <code>children</code> prop. In the majority of cases, there is no need to understand how the <code>children</code> prop looks like. But in some cases, we want to inspect the <code>children </code>prop to maybe wrap each child in another element/component or to reorder or slice them. In those cases inspecting how the <code>children</code> prop looks like becomes essential.

<hr>

You can use props.children in React in order to access and utilize what you put inside the open and closing tags when you are creating an instance of a component.

For example, if I have a Button component, I can create an instance of it like this: ```<Button>```HI!```<Button>``` and then inside of the Button component, I could access that text with props.children. You can also use this to create components that wrap other components ```<Container><Button /></Container>``` for example.


```jsx
function Button (props) {
  return <button>{props.children}</button>
}
```