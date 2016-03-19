# strong-pass
Simple javascript password checker.
It calculates password strength based on [Password Meter](http://www.passwordmeter.com/) algorithm.

## Installation

```sh
$ npm install strong-pass --save
```

## Usage

Basic example 

```javascript
let strength = StrongPass("Ifdsk6tew") //answer = 3
```

## Return values

Result value is number from 1 to 5

| value | strength    |  
|-------|-------------|
|   1   | Very weak   |
|   2   | Weak        |
|   3   | Good        |
|   4   | Strong      |
|   5   | Very Strong |

## Configuration

Minimum length for password

```javascript
let strength = StrongPass("Ifdsk6tew", { minLength: 6 }) //answer = 4
```