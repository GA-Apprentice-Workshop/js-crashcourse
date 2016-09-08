# Post-Graduate Skill Workshop: Javascript

Learning Goals:
* Objects
* Functions
* Prototypes

## LESSON 1: Objects

* objects = mutable
* primitives = immutable (boolean, string, number, undefined and null)

_Object Literals_
`var obj = {};`

_Object Constructor_
`var obj = new Object();`

_Constructor Pattern_
```js
function MyObject (prop1, prop2, prop3) {
    this.propertyOne = prop1;
    this.propertyTwo = prop2;
    this.propertyThree = prop3;
    
    this.getName = function() {
        return this.name;
    }
}
```

_Prototype Pattern_
```js
function MyObject() {
}

MyObject.prototype.prop1 = 'Property One';
MyObject.prototype.prop2 = 'Property Two';
```
