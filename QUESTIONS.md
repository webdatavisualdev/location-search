# Questions

Q1: Explain the output of the following code and why

```js
    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");
```

A1: 

```
  Output: 2 1
  Reason: Because this code used setTimeout function so that second log is printed and then 100ms later, first log is printed.
```

Q2: Explain the output of the following code and why

```js
    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);
```

A2: 

```
  Output: 10 9 8 7 6 5 4 3 2 1 0
  Reason: This is a recurring function. It means if the input value of the function is less than 10, the function is recalled with the increased (by 1) value as an input.
```

Q3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```

A3: 

```
  Potential issue: If the input value is `0` or `false`, response is still `5`.
```

Q4: Explain the output of the following code and why

```js
    function foo(a) {
      return function(b) {
        return a + b;
      }
    }
    var bar = foo(1);
    console.log(bar(2))
```

A4: 

```
  Output: 3
  Reason: This is a HoC function. So `bar` is another function to receive `b` as an input value and it returns `1 + b` as a response.
```

Q5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```

A5: 

```
  This function receives 2 input paramters so first one can be a number and second one is a function. If we call this function, 100ms later, it calls the second parameter function with the input value using first parameter.
  So it can be called like this:

  double(10, (a) => {
    console.log(a);
  })
```