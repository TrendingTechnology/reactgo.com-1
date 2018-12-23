---
title: Two ways to remove a property or key from a Javascript Object
date: '2018-12-09'
tags: ['javascript']
---

In this tutorial, we are going to learn about two different ways to remove a property from the JavaScript object.



### First way

`delete` keyword in JavaScript helps us to remove a property from the objects.


```js

let bike = {
    color: "red",
    model: "150ac"
}


delete bike.color

// bike.color property is removed from the object


console.log(bike);

//output {model: "150ac"}

```

This is also a valid syntax.

```js
delete bike['color']

delete bike['model']
```


### Second way

`Reflect.deleteProperty()` method is also used to remove a property from the javascript objects.


```js

let bike = {
    color: "green",
    model: "150edc"
}


Reflect.deleteProperty(bike,'color')

console.log(bike)

//output {model: "150edc"}

```

`Reflect.deleteProperty()` method accepts two arguments which are the  `target` and   `propertyKey`.

**target**: On which object you need to remove the property.

**propertyKey**: name of the property you want to remove.