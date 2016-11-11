

# Declarative Style Of Writing Software 

> :heart: A programmer’s dream is to write code, 
and be able to re-use it with little effort!

:thumbsup: Code that can be repeatedly used with little effort

:thumbsup: Code that can be tested easily

:thumbsup: Code that can express themself

--------------------------------------------------------



# Let's Try it!
```javascript
var fruits = [
	{ name: 'apple',  price: 5 }, 
	{ name: 'orange', price: 10 }, 
	{ name: 'lemon',  price: 15 }
]
```

> **Get Sum Of Fruit Price**
```javascript
// Your Code ....
```

> **My First Way To Get Sum**
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

### Second Way To Get Sum
```javascript
request('magicURL')
	.then(selectKeyOf('price'))
	.then(priceMethod('sum'))
	.then((result)=>{
		console.log(result) // 30
	})
```


If you have choosen the second way to handle this problem, **you have become a good programmer because ...**


- [x]  [Human Term]  Code that can be repeatedly used with little effort
- [x]  [Human Term]  Code that can be tested easily
- [x]  [Human Term]  Code that can express themself
- [x]  [Geek Term]  DRY
- [x]  [Geek Term]  Abstractions
- [x]  [Geek Term]  Encapsulation

### Good Job!
> You are telling your program **WHAT** to do instead of **HOW** to do it!!


## DEMO
```javascript
let students = [
	{name: 'cw',    age: 27, gender:'M', allowance: 1000, department:'IT', 	  salary: 60000.56},
	{name: 'ken',   age: 31, gender:'M', allowance: 2000, department:'IT',    salary: 44000.32},
	{name: 'ck',    age: 35, gender:'M', allowance: 3000, department:'IT',    salary: 55000.11},
	{name: 'Ting',  age: 22, gender:'F', allowance: 4000, department:'sales', salary: 70000.85},
	{name: 'Linda', age: 27, gender:'F', allowance: 3000, department:'sales', salary: 40000.49}
]
```

### Get the age average API
```javascript
whenDataLoaded
	.then(selectObjKeyOf('age'))
	.then(priceMethod('average'))
	.then((result)=>{
		console.log(result) // 28.4
	})
```
	
### Get the average IT salary API
```javascript
whenDataLoaded
	.then(getDepartmentOf('IT'))
	.then(selectObjKeyOf('salary'))
	.then(priceMethod('average'))
	.then(showDecimalsPoint(0))
	.then((result)=>{
		console.log(result) // 53000
	})
```

### Get Female, and output only Name and Allowance

```javascript
whenDataLoaded
	.then(getGenderOf('F'))
	.then(addAllowance(5000))
	.then(removeObjKeyOf('gender'))
	.then(removeObjKeyOf('department'))
	.then(removeObjKeyOf('age'))
	.then(removeObjKeyOf('salary'))
	.then((result)=>{
		console.log(result) 
		// [ { name: 'Ting', allowance: 9000 },{ name: 'Linda', allowance: 8000 } ]
	})
```

### Next Step

You can go to my test file and play with things inside ^_^ Goood luck!!
You can contact me if you would like to know more about this.
My email is chaoweichiu@gmail.com