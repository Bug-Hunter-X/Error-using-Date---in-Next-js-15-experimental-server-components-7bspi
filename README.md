# Next.js 15 Server Components Date() Error

This repository demonstrates a potential issue when using the experimental server components feature in Next.js 15.  Specifically, it highlights a problem encountered when using methods like `Date()` within server components.  These methods, which rely on browser APIs, are not directly supported in the server-side execution environment of server components.

## Problem Description:

The `pages/about.js` file attempts to use `new Date()` to display the current date and time. When using the experimental server components, this results in an error because the `Date()` constructor is not available in the server-side context.

## Solution:

The issue is resolved by either moving the date-related logic to the client-side (e.g., in a `useEffect` hook within a client component) or by using a different approach that doesn't rely on browser-specific APIs in the server component.