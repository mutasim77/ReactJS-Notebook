# React refs 🖇

As is the case with many other UI libraries, React offers a way to rethink a view as the result of a state of a component. This is a big pivot away from how we usually build applications.

When we become familiar with some of these new concepts, we discover how easy it is to solve simple problems in the frontend world that used to cause us some trouble. Part of that benefit comes from creating views with the abstraction mechanisms that React and JSX expose, instead of doing it through DOM spec methods.

Still, the React team did something smart: they provided escape hatches and kept the library open for situations beyond the ones they were specifically designing for, as well as situations the model may not work for.

These escape hatches are refs, which allow us to access DOM properties directly. Normally, React uses state to update the data on the screen by re-rendering the component for us. But there are certain situations where you need to deal with the DOM properties directly, and that’s where refs come in clutch.

An example of this would be auto-focusing a text box when a component renders. React doesn’t provide an easy way to do this, so we can use refs to access the DOM directly and focus the text box for us whenever the component renders on the screen.

In this article, we’re going to investigate why React, a framework meant to abstract your code away from DOM manipulation, leaves the door open for developers to access it.