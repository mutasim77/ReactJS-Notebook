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

> Note: ```lazy()``` used this way returns a ```Promise``` object. That promise resolves to a module that contains a React component we want to lazy load in its ```default``` export.