## What is Currying 

**Currying is a way of constructing functions that allows partial application of a function’s arguments**




> Standard Javascript

```javascript
const greet = function(greeting, name) {
  console.log(greeting + ", " + name)
}
greet('Hello', 'Ting')  // 'Hello, Ting'
``` 

> First Currying 

```javascript 
const greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ', ' + name)
  }
}

const greetHello = greetCurried("Hello")
greetHello('Ting') // 'Hello, Ting'
greetHello('Chiu') // 'Hello, Chiu'
```



## Why Curry Can Help!

**Before we talk about how, let's talk about why**


> **Imperative Style** -> You told computer "How" to do it

> **Declarative Style** -> You told computer "What" to do


--------------------------------------------------------


> :cold_sweat: **(Imperative Style)**

```javascript
var numbers = [1,2,3,4,5]
  , doubled = []

for (var i=0; i< numbers.length; i++){
	var newNumber = numbers[i] * 2
	doubled.push(newNumber)
}
console.log(doubled) // [2,4,6,8,10]
```

> :kissing_heart: **(Declarative Style)**

```javascript
var numbers = [1,2,3,4,5]
var doubled = numbers.map( n => n * 2 )
console.log(doubled) // [2,4,6,8,10]
```

> :cold_sweat: It is a litte bit hard to reason about
the block **(Imperative Style)** at the first glacne.


> :kissing_heart: It is easier to read what is going on 
with these code at one glance**(Declarative Style)**



--------------------------------------------------------



## How Curry Can Help!

> Imperative Style -> You told computer "How" to do it

> Declarative Style -> You told computer "What" to do

> **Declarative Style With Currying** -> You told computer "What" to do




> :shipit: **Here is the fruits list!**


```javascript
var fruits = [
	{ name: 'apple' ,  price: 5  }, 
	{ name: 'orange',  price: 10 }, 
	{ name: 'lemon' ,  price: 15 }
]
```

> :shipit: **You can get the fruit list by ...**


```javascript
request('magicURL')
	.then((fruits)=>{
		console.log(fruits) // return fruits list
	})
```


--------------------------------------------------------


> :dizzy_face:**(Imperative Style)** to get Sum of price

```javascript

request('magicURL')
	.then((fruits)=>{
		var sum = ''
		for (var i=0; i< fruits.length; i++){
    		sum = sum + fruits[i].price
		}
		return sum
	}
	.then((result)=>{
		console.log(result) // return 30
	})

```


> :kissing_smiling_eyes:**(Declarative Style)** to get Sum of price

```javascript
request('magicURL')
	.then((fruits)=>{
		return fruits.reduce((acc, fruit)=>acc+=fruit.price,0)
	})
	.then((result)=>{
		console.log(result) // 30
	})
```


> :innocent:**(Declarative Style with [currying](https://hughfdjackson.com/javascript/why-curry-helps/))** to get Sum of price

```javascript
request('magicURL')
	.then(selectKeyOf('price'))
	.then(priceMethod('sum'))
	.then((result)=>{
		console.log(result) // 30
	})
```

> :dizzy_face: I feel like my brain is all over the place now...

> :kissing_smiling_eyes: It is very easy to know what the code is doing, but can I make it **human readable**?

> :innocent: It is so easy to reason about my code. Also, I can re-use the code all over my program!

--------------------------------------------------------





## Let's Get Dirty!


> :shipit: **Here is the list of students**


```javascript
var students = [
	{name: 'cw',    age: 27, gender:'M', allowance: 1000, department:'IT', 	  salary: 60000.56},
	{name: 'ken',   age: 31, gender:'M', allowance: 2000, department:'IT',    salary: 44000.32},
	{name: 'ck',    age: 35, gender:'M', allowance: 3000, department:'IT',    salary: 55000.11},
	{name: 'Ting',  age: 22, gender:'F', allowance: 4000, department:'sales', salary: 70000.85},
	{name: 'Linda', age: 27, gender:'F', allowance: 3000, department:'sales', salary: 40000.49}
]
```


> :shipit: **You can get the students list by ...**


```javascript
whenDataLoaded
	.then((result)=>{
		console.log(result) // Students Array
	})

// -------------------Implementation------------------- \\
var Promise = require('bluebird')						\\
var whenDataLoaded = New Promise((resolve, reject)=>{	\\
	resolve(students)									\\
})														\\
// ---------------------------------------------------- \\

```

> :shipit: **I want you to do three things...**

> :question: **Stduent Age Average**

> :question: **IT's Average Salary**

> :question: **Display students' Name and Allowance who are female**


```javascript
var goal_1 = 28.4
var goal_2 = 53000
var goal_3 = [ 
	{ name: 'Ting', allowance: 9000 },
	{ name: 'Linda', allowance: 8000 } 
]
```

--------------------------------------------------------


> :cold_sweat: **(Imperative Style)** 

```javascript
// Goal_1 -> 28.4  -> Age Average
// Goal_2 -> 53000 -> IT Salary Average
// Goal_3 -> [{name:'Ting',allowance:9000},{name:'Linda',allowance:8000}]

// Goal_1
whenDataLoaded
	.then((students)=>{
		var ageSum = 0
		  , ageAvg = 0
		for (var i=0; i< students.length; i++){
		    ageSum = ageSum + students[i].age
		}
		ageAvg = ageSum / (students.length + 1)
		return ageAvg
	})
	.then((result)=>{
		console.log(result === Goal_1) // return true
	})

// Goal_2
whenDataLoaded
	.then((students)=>{
		// Code to remove IT .....
		// Code to remove IT .....
		// Code to remove IT .....
	})
	.then((ITs)=>{
		var ageSum = 0
		  , ageAvg = 0
		for (var i=0; i< ITs.length; i++){
		    ageSum = ageSum + ITs[i].salary
		}
		ageAvg = ageSum / (ITs.length + 1)
		return ageAvg
	})
	.then((result)=>{
		console.log(result === Goal_2) // return true
	})

// Goal_3
whenDataLoaded
	.then((students)=>{
		// Code to ... Good luck with this!!
	})
	.then((result)=>{
		console.log(result === Goal_3)
	})
```

> :kissing_closed_eyes: **(Declarative Style)** 

```javascript
// Goal_1 -> 28.4  -> Age Average
// Goal_2 -> 53000 -> IT Salary Average
// Goal_3 -> [{name:'Ting',allowance:9000},{name:'Linda',allowance:8000}]

// Goal_1
whenDataLoaded
	.then((students)=>{
		return students.reduce((acc, student)=>acc+=student.age,0)
	})
	.then((result)=>{
		console.log(result === Goal_1) // return true
	})

// Goal_2
whenDataLoaded
	.then((students)=>{
		return students
				.filter((student)=>student.department==='IT')
				.reduce((acc, student)=>acc+=student.age,0)
	})
	.then((result)=>{
		console.log(result === Goal_2) // return true
	})

// Goal_3
whenDataLoaded
	.then((students)=>{
		return students
			.filter((student)=>student.gender==='F')
			.reduce((acc, student)=>{
				acc.push({name:student.name, allowance:student.allowance})
				return acc
			},0)
	})
	.then((result)=>{
		console.log(result === Goal_3) // return true
	})	
```


> :innocent: **(Declarative Style with [currying](https://hughfdjackson.com/javascript/why-curry-helps/))**  



```javascript
// Goal_1 -> 28.4  -> Age Average
// Goal_2 -> 53000 -> IT Salary Average
// Goal_3 -> [{name:'Ting',allowance:9000},{name:'Linda',allowance:8000}]

// Goal_1
whenDataLoaded
	.then(selectObjKeyOf('age'))
	.then(priceMethod('average'))
	.then((result)=>{
		console.log(result === Goal_1) // return true
	})

// Goal_2
whenDataLoaded
	.then(getGenderOf('F'))
	.then(addAllowance(5000))
	.then(removeObjKeyOf('gender'))
	.then(removeObjKeyOf('department'))
	.then(removeObjKeyOf('age'))
	.then(removeObjKeyOf('salary'))
	.then((result)=>{
		console.log(result === Goal_2) // return true
	})

// Goal_3
whenDataLoaded
	.then(getDepartmentOf('IT'))
	.then(selectObjKeyOf('salary'))
	.then(priceMethod('average'))
	.then(showDecimalsPoint(0))
	.then((result)=>{
		console.log(result === Goal_3) // return true
	})
```
> :cold_sweat: I can see there is a huge benefit to wrtie code in **Declarative Style** 

> :kissing_closed_eyes: Wow! I did not know that I can make the code that is so close to human language!! 

> :innocent: By combining **Curry** with **Declarative Style**, everyone can understand my code without me telling them!!


--------------------------------------------------------


> Please check out test folder to see how I implement 
**(Declarative Style with Currying)**.
If there is something that is not clear, or you want me to 
explain more about it. Please email me at chaoweichiu@gmail.com


> This topic was inspired by [Real World Currying of JavaScript Functions](https://www.youtube.com/watch?v=fvJ9yWqXcZI)
and [Why Curry Helps](https://hughfdjackson.com/javascript/why-curry-helps/).


## About me

> :fire: Full Stack Web Developer

I am a freelance full-stack web developer, and I get so 
excited whenever there is a chance that I can challenge
myself and become a better software developer.


> :fire: Test Nerd

Few months age, I have exposed to TDD(test-driven development) way
of writing a software. Since then, I have fallen in love with that.
I was inspired by [MPJ](https://www.youtube.com/watch?v=TWBDa5dqrl8)
and [his video](https://www.youtube.com/watch?v=vqAaMVoKz1c)


> :fire: Reusable Code

:heart: Code that can be repeatedly used with little effort

:heart: Code that can be tested easily

:heart: Code that can express themself


------------------------------------------


## Extra Link

> [Custom Real World Functions](https://github.com/CHAOWEICHIU/ccw-custom-functions)

```javascript
decimalPlaces('.05') 	  		 // return 2
toTitleCase('hoW aRe yOU') 		 // return 'How Are You'
truncateString("how are you", 5) // return how a ...
validZipcode('48326')   		 // return true
// More ...
```

## My Work

### [Food Recipes Application](https://github.com/CHAOWEICHIU/favorite-food-recipe)

>It is an application where has all recipes around the world. You would be able to see what ingredient that you need, what steps that you need to take in order to make the dish.

