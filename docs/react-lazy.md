---
id: react-lazy
title: Lazy
sidebar_position: 13
---

# React Lazy 🦥

Lazy loading is not a new concept. It has been available for quite some time. In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching.

Talking about React specifically, it bundles the complete code and deploys all of it at the same time. Now, usually, that's not a bad idea, since React SPAs (Single page application) are quite small and do not affect the performance. But what if we have a gigantic application, like a content management system with a customer portal, admin portal etc. In such a case, it does not seem like a smart idea to load the complete application.

- It will be a huge application and will cost a lot of unnecessary data transfer which can lead to slow loading of the website.
- A customer login, will not have access to admin specific features, so loading it is a waste of memory and time.
In this post, I will try to explain the advantages of lazy loading and how to implement it in React.


### Advantages
In situations where we know that certain code/features will not be accessible to all the users or the user does not access it frequently, it is best to load them when the user requests for it. This improves user experience as well as initial loading time.

For example, let's consider that our application has two sections, A and B. Size of A is 1 MB and its loading time is approximately 1 second. Size of B is also 1 MB and so its loading time is also 1 second. And we know that a user will access either of the sections, or a user accessing section A will rarely access section B and vice versa. If we were to load the complete application at the starting of our application, it would cost the user 2 MB of data and the loading time will also be 2 seconds. The user might not like to wait for 2 seconds or won't be happy that a site is costing them a lot of data. This can be improved and halved with proper lazy loading.

### Getting Started

Suppose we have our React application, and we imported the ```About``` component into the ```Home```:

```jsx
import AboutUs from './About';

const Home = () => {
   return (
      <div className="App">
         <h1>Home Page</h1>
         <AboutUs />
      </div>
   );
};
export default Home;
```

We can now implement lazy loading by importing ```lazy``` from react:

```jsx
import { lazy } from 'react';

// Lazy loading 
const AboutUs = lazy(() => import('./About'));

const Home = () => {
   return (
      <div className="App">
         <h1>Home Page</h1>
         <AboutUs />
      </div>
   );
};
export default Home;
```

:::success Note: 
```lazy()``` used this way returns a ```Promise``` object. That promise resolves to a module that contains a React component we want to lazy load in its ```default``` export.
:::

We've implemented lazy loading using ```lazy()```, but the code above will always throw an error saying that our *“React component suspended while rendering, but no fallback UI was specified”*. This can be fixed by wrapping the component with **React.Suspense's fallback** and attaching the fallback props as we explained earlier:

```jsx
import { lazy, Suspense } from 'react';
const AboutUs = lazy(() => import('./About'));

const Home = () => {
   return (
      <div className="App">
         <h1>Home Page</h1>
         <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
         </Suspense>
      </div>
   );
};
export default Home;
```
:::success Note: 
The fallback prop can take a component to show before the original content loads up.
:::

### How to Implement Lazy Loading With React Router ? 

Lazy routing is actually a good practice for routes that have a lot of content and may slow down your application's load time. Implementing lazy loading for React routes is almost identical to what we did earlier when lazy loading dynamically imported components.

Lazy loading React routes refers to dynamically importing a component only when it's needed. For example, say we have two routes in our application and two components representing those routes. If we implement mentioned routing in the following way, each component will be loaded only when we navigate to the corresponding route:

```jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Products = lazy(() => import('./Products'));

function App() {
   return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </Suspense>
        </Router>
   );
}
export default App;
```

# Dynamic imports 🔴

This is a modern JavaScript feature that imports our files almost like a promise.

Before:

```js
import Login from "Pages/Login.js";
import Home from "Pages/Home.js";
import About from "Pages/About.js";
import Contact from "Pages/Contact.js";
import Blog from "Pages/Blog.js";
import Shop from "Pages/Shop.js";
```

The code snippets above import our files using static import. When webpack comes across this syntax, it bundles all the files together. This is because we want to statically include them together.

After:

```js
const module = await import('/modules/myCustomModule.js');
```

Unlike static imports, which are synchronous, dynamic imports are asynchronous. This enables us to import our modules and files on demand.
Once webpack comes across this syntax, it immediately starts code splitting our application.


## Conclusion 💡
From this note, we learned what lazy loading and code splitting are, how to implement them, and that the best place to implement lazy loading is with routes. This avoids rendering the entire page at once, which may result in a slower load time when dealing with pages with large amounts of content.