Future Workshops:
* Building a library
* NPM
* Deployment and Build Building
* Debugging

Sources:
* http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting

TODO: constructors, IIFE

OBJECTS
-------
What are they?
- Unordered list of _primitive data_
- List of properties (keys) with values
- 

Reference data type vs primitive data type
`var one = 'one'; var ref = one; var one = 'two'` 
Literals vs contructors
`var obj = {}` vs `var obj = new Object();`
Variable hoisting
`a = 'one'; var a;` == `var a; a = 'one'`
Currying
Variadic functions
Sync vs async
Enumeration
Inheritance

```
function Furniture (name, material, color) {
    this.name = name
    this.material = material
    this.color = color
}

var chair = new Furniture('chair', 'birch', 'brown')
```

IIFE

# Software Engineering Workshop
* version control
* shell scripting
* databases
* testing