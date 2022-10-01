# Next bigger number with the same digits

> https://www.codewars.com/kata/55983863da40caa2c900004e

## Description

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

```
12 ==> 21
513 ==> 531
2017 ==> 2071
```

```javascript
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
```

If the digits can't be rearranged to form a bigger number, return `-1` (or `nil` in Swift):

```
9 ==> -1
111 ==> -1
531 ==> -1
```

```javascript
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
```

## Solution

See the `.js` file

---

#### My first attempt

From right to left, if i>i+1, we swap their place in the array

![attempt1](https://img001.prntscr.com/file/img001/CLyY5mIcTrSnRY3ee7FcTg.jpeg)

#### My second attempt

from right to left, we move the last number to its left, if the new number > the original, break

![attempt2](https://img001.prntscr.com/file/img001/lkoXWJGtSlys0J5ohIJNnQ.jpeg)
