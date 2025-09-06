
---

### 🔹 1. **Primitives**

Basic data types in JS: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
👉 Example:

```js
let age = 20;   // number
let name = "Pavan"; // string
```

---

### 🔹 2. **Scopes & Hoisting**

* **Scope**: Where a variable can be accessed (inside function, block, or global).
* **Hoisting**: JS moves declarations (`var`, functions) to the top.
  👉 Example:

```js
console.log(x); // undefined
var x = 5;      // hoisted
```

---

### 🔹 3. **Closures**

A function that “remembers” variables from its parent scope, even after the parent has finished running.
👉 Example:

```js
function outer() {
  let count = 0;
  return function inner() { count++; return count; }
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

### 🔹 4. **Execution Context**

The environment where JS code runs (global or inside a function). It decides what variables/functions are available.

---

### 🔹 5. **Variables (var, let, const)**

* `var`: old, function-scoped, hoisted.
* `let`: modern, block-scoped.
* `const`: block-scoped, cannot be reassigned.

---

### 🔹 6. **Operators**

Symbols for actions: `+` (add), `-` (subtract), `*` (multiply), `===` (strict compare), `&&` (and).

---

### 🔹 7. **Type Conversions**

Changing data types:
👉 Example:

```js
Number("123");   // 123
String(456);     // "456"
Boolean(0);      // false
```

---

Great! Let’s continue with the **next set of JavaScript fundamentals** from your snippet:

---

### 🔹 8. **Arrays + methods**

An array stores multiple values in one variable.
👉 Example:

```js
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");   // add at end
fruits.pop();            // remove last
console.log(fruits.length); // count items
```

---

### 🔹 9. **Objects + methods**

Objects store data in key–value pairs.
👉 Example:

```js
let car = {
  brand: "Tesla",
  speed: 120,
  drive() { return "Vroom!"; }
};
console.log(car.brand);  // Tesla
console.log(car.drive()); // Vroom!
```

---

### 🔹 10. **Functions + Arrow functions**

Functions group reusable code. Arrow functions are shorter.
👉 Example:

```js
function greet(name) { return "Hello " + name; }
const greetArrow = (name) => "Hello " + name;

console.log(greet("Sam"));
console.log(greetArrow("Sam"));
```

---

### 🔹 11. **Try Catch & Error handling**

Used to safely handle errors without breaking the program.
👉 Example:

```js
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Something went wrong!");
}
```

---

### 🔹 12. **Strict mode**

Makes JS more secure and prevents “bad practices.”
👉 Example:

```js
"use strict";
x = 3.14; // ❌ Error (must declare variable)
```

---

### 🔹 13. **Timeout & Interval**

Run code after a delay or repeatedly.
👉 Example:

```js
setTimeout(() => console.log("Hello after 2s"), 2000);
setInterval(() => console.log("Repeats every 1s"), 1000);
```

---

### 🔹 14. **Classes**

Blueprints for creating objects with shared properties and methods.
👉 Example:

```js
class Person {
  constructor(name) { this.name = name; }
  greet() { return "Hi, I'm " + this.name; }
}
let user = new Person("Pavan");
console.log(user.greet()); // Hi, I'm Pavan
```

---




