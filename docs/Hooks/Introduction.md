---
id: react-hooks
title: Introduction
description: Quick introduction
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# React Hooks 🎣

React Hooks are a powerful feature introduced in React 16.8 that allows developers to add state and other React features to functional components. Prior to the introduction of hooks, state management and other complex logic could only be implemented in class components using lifecycle methods. With hooks, developers can now write more concise and reusable code by leveraging functions instead of classes.

Hooks provide several benefits in React development. Firstly, they simplify the management of component state. With the "useState" hook, you can add state to a functional component, eliminating the need for a class-based component. This results in cleaner and more readable code.

Secondly, hooks enable the reuse of logic across components. The "useEffect" hook allows you to perform side effects such as data fetching, subscriptions, or manually changing the DOM after rendering. By encapsulating such logic in a custom hook, you can easily share it across different components, improving code maintainability and reducing duplication.

Another advantage of hooks is the ability to create custom hooks. Custom hooks are functions that combine multiple built-in hooks and encapsulate complex logic into reusable units. This promotes code modularity and makes it easier to share code between projects or within a team.

Here is a list of some commonly used React hooks:

<DocCardList items={useCurrentSidebarCategory().items}/>

These hooks cover a wide range of functionality and help streamline the development process in React. 
