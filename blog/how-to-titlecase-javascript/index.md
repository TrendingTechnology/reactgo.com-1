---
title: How to title case the string in JavaScript
description: "JavaScript doesn't offer any inbuilt methods to capitalize the first letter of the string.Let's write our function to convert the string to title case."
date: "2018-12-03"
logo: ''
image:  "titleCase-javascript.png"
tags: ['javascript']
---

JavaScript doesn't offer any inbuilt methods to capitalize the first letter of the string.
Let's write our function to convert the string to title case.

1. convert the string to lowerCase.
2. split the single string into an array of strings.
3. create an array.
4. loop through the array of strings and capitalize the first letter in every string.
5. return the title case string.


```js
function titleCase(str){

   str = str.toLowerCase().split(' ');

   let final = [ ];

    for(let  word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }

  return final.join(' ')

}


titleCase('this is a title case string');

//"This Is A Title Case String"

```

There is another way to title Case the string by using the CSS.


```css

.main{
    text-transform:captialize;
}

```

Happy coding...

