

# Declarative Style V.S. Imperative Style

> :heart: A programmer’s dream is to write code, 
and be able to re-use it with little effort!

:thumbsup: Code that can be repeatedly used with little effort

:thumbsup: Code that can be tested easily

:thumbsup: Code that can express themself

--------------------------------------------------------



# Let's Try!

```javascript
var fruits = [
	{ name: 'apple',  price: 5 }, 
	{ name: 'orange', price: 10 }, 
	{ name: 'lemon',  price: 15 }
]
```

> **Get Sum Of Fruit Price**
```javascript
request('magicURL')
	.then((fruits)=>{
		// Your Code ...
	})
	.then((result)=>{
		console.log(result) // return 30
	})
```

--------------------------------------------------------


> **(Imperative Style)**

```javascript
request('magicURL')
	.then((fruits)=>{
		fruits
			.map((fruit)=fruit.price)
			.reduce((acc, price)=>acc+=price,0)
	})
	.then((result)=>{
		console.log(result) // 30
	})
```
--------------------------------------------------------


> **(Declarative Style)**

```javascript
request('magicURL')
	.then(selectKeyOf('price'))
	.then(priceMethod('sum'))
	.then((result)=>{
		console.log(result) // 30
	})
```
--------------------------------------------------------


## The difference between Imperative Style and Declarative Style?

> **Imperative Style** -> You told computer "How" to do it

> **Declarative Style** -> You told computer "What" to do




## Let's Get Dirty!

```javascript
var students = [
	{name: 'cw',    age: 27, gender:'M', allowance: 1000, department:'IT', 	  salary: 60000.56},
	{name: 'ken',   age: 31, gender:'M', allowance: 2000, department:'IT',    salary: 44000.32},
	{name: 'ck',    age: 35, gender:'M', allowance: 3000, department:'IT',    salary: 55000.11},
	{name: 'Ting',  age: 22, gender:'F', allowance: 4000, department:'sales', salary: 70000.85},
	{name: 'Linda', age: 27, gender:'F', allowance: 3000, department:'sales', salary: 40000.49}
]

// Pretended AJAX call from third party API
var whenDataLoaded = New Promise((resolve, reject)=>{
	resolve(students)
})

// then you have fake API call by ...
whenDataLoaded
	.then((result)=>{
		console.log(result) // Students Array
	})
```
--------------------------------------------------------


> **Stduent Age Average**

```javascript
var goal = 28.4 // Stduent Age Average

whenDataLoaded
	.then(selectObjKeyOf('age'))
	.then(priceMethod('average'))
	.then((result)=>{
		console.log(result === goal) // return true
	})
```
--------------------------------------------------------
	

> **Average IT's Salary**

```javascript
var goal = 53000
whenDataLoaded
	.then(getDepartmentOf('IT'))
	.then(selectObjKeyOf('salary'))
	.then(priceMethod('average'))
	.then(showDecimalsPoint(0))
	.then((result)=>{
		console.log(result === goal) // return true
	})
```

--------------------------------------------------------



> **Get Female only, display Name and Allowance**

```javascript
var goal = [ 
	{ name: 'Ting', allowance: 9000 },
	{ name: 'Linda', allowance: 8000 } 
]

whenDataLoaded
	.then(getGenderOf('F'))
	.then(addAllowance(5000))
	.then(removeObjKeyOf('gender'))
	.then(removeObjKeyOf('department'))
	.then(removeObjKeyOf('age'))
	.then(removeObjKeyOf('salary'))
	.then((result)=>{
		console.log(result === goal) // return true
	})
```

--------------------------------------------------------

### Next Step

You can go to my test file and play with things inside ^_^ Goood luck!!
You can contact me if you would like to know more about this.
My email is chaoweichiu@gmail.com