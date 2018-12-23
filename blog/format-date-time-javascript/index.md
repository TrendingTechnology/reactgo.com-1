---
title: How to format the date and time in JavaScript
date : "2018-12-08"
tags: ['javascript']
image: "javascript-format-date-time.png"
---


 In the last tutorial we have seen [how to get the current date and time](/currentdate-time-javascript/).In this tutorial, we are going to learn about how to format the date and time in JavaScript.


JavaScript Date object comes with different type of [date and time methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).But we are using `toLocaleDateString()` and `toLocaleTimeString()` methods.


### Formatting date

- toLocaleDateString() method accepts two arguments  locales  and options.

These are some options we are using to format the date.

weekday: possible values are `narrow` `short`, `long`.

year : possible values are `numeric`, `2-digit`.

month: possible values are `numeric`, `2-digit`, `narrow`, `short`, `long`.

day: possible values are `numeric`, `2-digit`.


```js

const options = {
     weekday: "long",
     year: "numeric",
     month:"long",
     day:"numeric"}


new Date().toLocaleDateString("hi",options);

// output -> "शनिवार, 8 दिसंबर 2018"


new Date().toLocaleDateString("ja-JP-u-ca-japanese",options);

// output -> "30年12月8日土曜日"

new Date().toLocaleDateString("en-US",options);

//output - > "Saturday, December 8, 2018"

```

Now we are changing the option values from `long` to `short`.

```js
const options = {
     weekday: "short",
     year: "numeric",
     month:"short",
     day:"2-digit"
     }

new Date().toLocaleDateString("en-US",options);

//output ->  "Sat, Dec 08, 2018"

const options = {
     year: "2-digit",
     month:"2-digit",
     day:"2-digit"
     }

new Date().toLocaleDateString("en-US",options);

//output  "12/08/18"


const options = {
       weekday:"short",
       day:"2-digit"
    }

new Date().toLocaleDateString("en-US",options);

 //  "08 Sat"

```


### Formatting time

- toLocaleTimeString() method also accepts two arguments  locales  and options.


timeZone : [Iana time zones List](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

hour12 : `true` or `false`.(true is 12 hour time ,false is 24hr time)

hour: `numeric`, `2-digit`.

minute: `numeric`, `2-digit`.

second: `numeric`, `2-digit`.



```js

const options = {
       timeZone:"Africa/Accra",
       hour12 : true,
       hour:  "2-digit",
       minute: "2-digit",
      second: "2-digit"
    }

new Date().toLocaleTimeString("en-US",options);

//-> Africa timezone with 12hr time  "8:09:19 AM"

```


```js
const options = {
       timeZone:"Asia/Kolkata",
       hour12 : false,
       hour:  "2-digit",
       minute: "2-digit",
      second: "2-digit"
    }

new Date().toLocaleTimeString("en-US",options);

//Asia/Kolkata timezone with 24hr time  "13:42:31"
```

```js
const options = {
       timeZone:"Canada/Central",
       hour12 : true,
       hour:  "numeric",
       minute: "numeric",seconds:"numeric"
    }

new Date().toLocaleTimeString("en-US",options);

// Canada/Central timezone -> "2:17 AM"

```


You can also get only hour.

```js
const options = {
       timeZone:"Canada/Central",
       hour:  "numeric",
    }

new Date().toLocaleTimeString("en-IN",options);

//output   "2 AM"


new Date().toLocaleTimeString("ko-KR",options);

//output  "오전 2시"

```


Happy coding...