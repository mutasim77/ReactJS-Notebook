---
id: fragments
title: Fragments
sidebar_position: 4
---

# React Fragments

## What is a React fragment?

Fragments are syntax that allow us to add multiple elements to a React component without wrapping them in an extra DOM node.
Let’s take a look at the following code:

```jsx
const App = () => {
  return (
    <h1>This is heading1 text</h1>
  )
}

export default App
```

This is a simple React component. When we return only one JSX in a component, we can avoid wrapping the JSX in another wrapper element as seen above. However, when we add more than one JSX element like so:

```jsx
const App = () => {
  return (
    <h1>This is heading1 text</h1>
    <p>This is paragraph text</p>
  )
}

export default App
```

We will encounter a SyntaxError. And thus, crashing our application in development.


In React, when a component returns multiple elements, we must wrap them in a container element like div for the code to work:
```jsx
const App = () => {
  return (
    <div>
      <h1>This is heading1 text</h1>
      <p>This is paragraph text</p>
    </div>
  )
}

export default App;
```
While this is fine, it may however cause unintended issues in our components.


## React fragment vs ```div```

There is no problem with ```div``` containers if they serve a purpose like adding styles to the JSX. However, they are not always needed to wrap our **JSX**. In this case, when we do, they become extra nodes that clutter the DOM tree.


Sometimes when we work with nested components, these wrappers can cause anomaly in the code. For instance, the div can cause the layout to break when working with the CSS Flexbox and Grid. We may also experience invalid HTML for elements that must follow a specific structure like **```ul > li```** and **```table > tr > td```**.

Having said that, we will take a look at some of these issues in practice and see how the React Fragment solves them. Starting with the CSS layout with Flexbox.

## Using div wrapper in a *CSS* layout

Consider the following example to create a simple layout of rows and columns using Flexbox:

```jsx
import "./styles.css";

const Row = ({ children }) => <div className="row">{children}</div>;

const Column = ({ children }) => <div className="col">{children}</div>;

const Box = ({ color }) => (
  <div className="box" style={{ backgroundColor: color }}></div>
);

export default function App() {
  return (
    <Row>
      <Column>
        <Box color="#007bff" />
      </Column>
      <Column>
        <Box color="#fc3" />
      </Column>
      <Column>
        <Box color="#ff3333" />
      </Column>
    </Row>
  );
}
```

Each Row renders a div, enclosing content aligned in a single row, and a Column renders enclosing content in a vertical fashion. Inside every Column, there is a Box component that renders a simple div with a fixed-width container and a background color passed as props to it:

```css
/* styles.css */
.row {
  display: flex;
}
.col {
  flex: 1;
}
.box {
  min-width: 100px;
  min-height: 100px;
}
```
The above code renders three columns in a single row, as shown below:

![picture](https://user-images.githubusercontent.com/96326525/212539105-7b7be163-9d79-40cf-861e-20f631b69211.png)

Let’s refactor the above code to separate the first two columns into a different component called ChildComponent. Imagine this as a reusable component that you might want to decouple:

```javascript
export default function App() {
  return (
    <Row>
      <ChildComponent />
      <Column>
        <Box color="#ff3333" />
      </Column>
    </Row>
  );
}

const ChildComponent = () => (
  <div>
    <Column>
      <Box color="#007bff" />
    </Column>
    <Column>
      <Box color="#fc3" />
    </Column>
  </div>
);
```

The expected result should be the same as before, but it isn’t. Decoupling the first two columns in a separate component, ChildComponent, breaks the layout:

![picture](https://user-images.githubusercontent.com/96326525/212539219-b8cf8345-fc0e-4820-afef-843e1283e884.png)

The ChildCompoent has a div wrapping all its JSX elements to group them together. However, the extra div causes a break in the layout because the browser thinks it’s a part of the layout.

Your browser doesn’t know that you’ve added the ```div``` to avoid running into an error and it is used as merely a wrapper for your enclosing HTML.

As the component tree nests deeper, it can be difficult to debug and trace where the extra nodes are coming from. Similarly, if we’re using CSS grids to style and design our layouts, unnecessary divs can cause the layout to break.

## Why do we use fragments in React?

React fragments serve as a cleaner alternative to using unnecessary divs in our code. These fragments do not produce any extra elements in the DOM, which means that a fragment’s child components will render without any wrapping DOM node.

React fragments enable us to group multiple sibling components without introducing any unnecessary markup in the rendered HTML.

## Using fragment in CSS Flexbox layout

Now, back to our code, we can fix the layout issue by wrapping the component’s JSX in a React fragment instead of a div:

```jsx
import React from 'react';

const ChildComponent = () => (
  <React.Fragment>
    <Column>
      <Box color="#007bff" />
    </Column>
    <Column>
      <Box color="#fc3" />
    </Column>
  </React.Fragment>
);
```

## Creating and rendering fragments in React

There are many ways to create and render fragments. You can create a fragment by using the Fragment property on the imported React object, as shown above. You can also import a fragment from React as a React component and use it in a similar fashion:

```jsx
import React, {Fragment} from 'react';

const ChildComponent = () => (
  <Fragment>
    <Column>
      <Box color="#007bff" />
    </Column>
    <Column>
      <Box color="#fc3" />
    </Column>
  </Fragment>
);
```

Finally, you can create a React fragment on the fly using the shorthand syntax to wrap components using an empty HTML element like syntax, ```< >< /> ```. This is the cleanest and easiest way to use fragments; it almost feels like you’re using a regular HTML element:

```jsx
const ChildComponent = () => (
  <>
    <Column>
      <Box color="#007bff" />
    </Column>
    <Column>
      <Box color="#fc3" />
    </Column>
  </>
)
```
Using any of the above three methods brings back the original layout because it eliminates the pointless div in the DOM.

## Rendering lists in a div wrapper

Let’s look at another common use case for fragments. Let’s say you want to render a list of items on the page. This list could be static, generated from a local JSON file, or retrieved from an API.

For brevity’s sake, we’ll use a static list:

```jsx
import React from 'react';

const items = ["Item 1", "Item 2", "Item 3"];

const ItemRenderer = ({ item }) => (
  <div>
    <p>Rendering item:</p>
    <p>{item}</p>
  </div>
);

const renderItem = () => items.map((item, index) =>
  <ItemRenderer key={index} item={item} />
)
```

Here, you’re simply looping through the items array and passing each item as props to the ItemRenderer component, which renders every single item on the page. If you inspect the above code on a browser, you’ll have the following DOM structure:

```html
<div>
  <p>Rendering item:</p>
  <p>Item 1</p>
</div>
<div>
  <p>Rendering item:</p>
  <p>Item 2</p>
</div>
<div>
  <p>Rendering item:</p>
  <p>Item 3</p>
</div>
```

Each item gets rendered in a parent div that has no significance as a wrapper. Since there is no styling or data attached to the enclosing div, it can be safely replaced by a React fragment.

## Rendering lists with React fragments

Let’s replace the div wrapper with a React fragment like so:

```jsx
import React from 'react';

const items = ["Item 1", "Item 2", "Item 3"];

const ItemRenderer = ({ item }) => (
  <>
    <p>Rendering item:</p>
    <p>{item}</p>
  </>
);

const renderItem = () => items.map((item, index) =>
  <ItemRenderer key={index} item={item} />
)
```

The DOM structure looks much cleaner now:

```html
  <p>Rendering item:</p>
  <p>Item 1</p>

  <p>Rendering item:</p>
  <p>Item 2</p>

  <p>Rendering item:</p>
  <p>Item 3</p>
```

This is a very simplified use case where you might be rendering an extra ```div``` on your DOM. The larger your lists are, the more significant the impact.

As your application becomes larger in size and complex in architecture, you might find yourself rendering a significant amount of unnecessary divs to render large lists in your application. This could bloat your HTML, causing performance issues on older devices.

It may not be that significant at all, but rendering unnecessary HTML elements is always a bad practice. If you have a generic list component for your application, consider using fragments as wrappers to avoid abstracting away from clean code and semantics.


## Using the ```key``` prop with React fragments
Some scenarios require the use of key props in a fragment. Let’s take a look at the following code:

```jsx
const items = [
  {name: "Ibas", title: "developer"},
  {name: "John", title: "teacher"},
];

const App = () => (
  <>
    <h1>List of all items:</h1>
    {items.map(({name, title}, index) => (
      <div key={index}>
        <p>{name}</p>
        <p>{title}</p>
      </div>
    ))}
  </>
);

export default App;
```

The focus here is on the iteration with the map() method. As we know, whenever we map items in React to render a list, React uses the key prop to identify which of the items changed, were removed, or added.

Also, whenever we map through items to render multiple JSX, we must wrap the JSX in a container element.

In the code above, we wrapped the JSX with a div and assigned the required key prop. It works fine, but let’s assume the ```div``` is redundant in the DOM tree and we don’t want to render it. As you can guess, we must replace it with a fragment.

But, using the shorthand notation ```<> </>``` will not work here because it cannot take an attribute. Instead, we can use React.Fragment or Fragment syntax. Be aware that this syntax only accepts the key prop for now.

So by applying the key prop on the fragment, our code now looks like this:

```jsx
import React from "react";

const App = () => (
  <>
    <h1>List of all items:</h1>
    {items.map(({ name, title }, index) => (
      <React.Fragment key={index}>
        <p>{name}</p>
        <p>{title}</p>
      </React.Fragment>
    ))}
  </>
)

export default App;
```

## Conclusion

Fragments allow you to write cleaner, readable and maintainable code. They are not a replacement for divs in your HTML, but they offer a better approach to structuring and rendering your markup if you’re using unnecessary divs in your code.

You can avoid issues that break your layouts or potentially optimize your markup rendering time using fragments. However, you should only use them when needed. If you need a wrapper to your JSX for styling, use a div instead.

