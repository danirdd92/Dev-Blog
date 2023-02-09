---
title: 'Migrating to TypeScript: Is It Right for Your Team?'
description: "According to State of JS 2022, we're still not using typescript in 100% of our codebase, it's time to change that"
author: 'Daniel Rashba'
tags: 'Typescript'
pubDate: 'Feb 09 2023'
heroImage: '/scifi-wonderland.webp'
---

According to the [2022 State of JS survey](https://2022.stateofjs.com/en-US/), around 34% of participants reported that they use TypeScript in less than half of their codebase, if at all. However, if you are part of this group, it is worth considering making the switch to TypeScript. This article will explore the reasons why you should consider migrating to TypeScript and the disadvantages you should consider.

### What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It is still plain old JavaScript during runtime, but with extra syntax and a vastly improved developer experience during development. TypeScript helps developers create more complex apps at larger scale more safely, catching bugs at compile time, and delivering products to market faster.

## Why Should You Migrate to TypeScript?

1.  **Fewer Errors** - By using TypeScript, teams can reduce the number of errors in their codebase. TypeScript's type system helps catch mistakes such as typos, undefined properties, and incorrect function calls during compilation, saving developers time and effort. This also leads to a reduction in unit tests as TypeScript takes care of many of the error checks during the development process. This results in fewer tests for developers to write, allowing them to focus on delivering the product.

2.  **Effective Onboarding for New Employees** - New employees can get up to speed more quickly with TypeScript. Thanks to TypeScript's clear documentation and language server protocol (LSP), new developers can understand the codebase more efficiently and avoid making common mistakes. This helps reduce the incubation period for new hires and allows them to start contributing to the project sooner.

3.  **Improved Development Experience** - TypeScript provides developers with a more comfortable and efficient development experience. With automatic code completion and recognition of object structures, writing code in TypeScript is faster and safer. TypeScript also makes it easier to discover and use external tools and libraries in the project.

4.  **Popularity** - TypeScript is one of the most popular and well-loved programming languages in the JavaScript ecosystem, with wide support from industry giants. With over 88k stars on GitHub, it is a safe investment for the long term.

## What Disadvantages Should You Consider?

1.  **Learning Curve** - There is a learning curve associated with any new technology, and TypeScript is no exception. However, the learning curve is relatively low. A developer with prior experience with static languages can start using TypeScript in less than one day, while a developer with no experience in static languages may take a few days to get up to speed. It's important to have at least one team member who is an expert in TypeScript and can help configure the project and answer questions from other team members.

2.  **Mindset Change** - When working with TypeScript, teams need to adopt a different mindset and plan their code more carefully. Teams must consider the types of variables, parameters, and return values from functions. This change in work patterns can be a challenge for teams that rely on the flexibility and dynamic nature of JavaScript. Teams should assess whether they are ready for this change before adopting TypeScript.

3.  **False Sense of Security** - TypeScript only provides checks during the development process, and these checks are not present at runtime. Teams must be careful when using any external source that interacts with their software including 3rd party APIs and user input and check them strictly. TypeScript does not solve all problems, so extra attention must be paid to issues that arise during runtime.

In conclusion, TypeScript is an important milestone in the web world, thanks to its capabilities and amazing development experience. It is a durable technology that will continue to be used in the coming decades and is worth considering for your team. Please check out this [cheatsheet](https://github.com/danirdd92/ts-cheatsheet) I made to help newcomers get up and running with Typescript in 5-10 minutes.
