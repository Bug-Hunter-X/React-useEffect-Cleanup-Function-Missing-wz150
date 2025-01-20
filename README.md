# React useEffect Cleanup Function Missing
This repository demonstrates a common mistake in React's `useEffect` hook:  omitting or incorrectly implementing the cleanup function.
The `useEffect` hook provides a way to perform side effects in functional components.  A common side effect is making an API call or setting up event listeners.  It's crucial to include a cleanup function within the `useEffect` hook to prevent memory leaks or unexpected behavior when the component unmounts.  The cleanup function is responsible for canceling any ongoing tasks, removing event listeners, or resetting state.

## The Bug
The provided `bug.js` file shows an example where the `useEffect` hook returns a function, but this function is empty. This means that any side effects started within `useEffect` are not properly cleaned up when the component is unmounted, leading to potential memory leaks and unexpected behavior.

## The Solution
The `bugSolution.js` file demonstrates the correct way to use a cleanup function within `useEffect`.
