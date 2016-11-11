# Functional Programming
> A programmer’s dream is to write code, and be able to use it with little effort, because we are **LAZY**(or maybe I am very lazy)

# You are a good programmer if ...
- [ ] Code that can be repeatedly used with little effort
- [ ] Code that can be tested easily
- [ ] Code that can express themself


# A simple way to tell if you are a good programmer
```javascript
var fruits = [
	{ name: 'apple',  price: 5 }, 
	{ name: 'orange', price: 10 }, 
	{ name: 'lemon',  price: 15 }
]
```

### First Way To Get Sum
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


- [x] -Human Term- Code that can be repeatedly used with little effort
- [x] -Human Term- Code that can be tested easily
- [x] -Human Term- Code that can express themself
- [x] -Geek Term- DRY
- [x] -Geek Term- Abstractions
- [x] -Geek Term- Encapsulation

### Tip:
> Good Job! You are telling your program **WHAT** to do instead of **HOW** to do it!!


## DEMO

Data Provided
```javascript
let students = [
	{name: 'cw',    age: 27, gender:'M', allowance: 1000, department:'IT', 	  salary: 60000.56},
	{name: 'ken',   age: 31, gender:'M', allowance: 2000, department:'IT',    salary: 44000.32},
	{name: 'ck',    age: 35, gender:'M', allowance: 3000, department:'IT',    salary: 55000.11},
	{name: 'Ting',  age: 22, gender:'F', allowance: 4000, department:'sales', salary: 70000.85},
	{name: 'Linda', age: 27, gender:'F', allowance: 3000, department:'sales', salary: 40000.49}
]
```


### 1. Exercise 1 -> Get the average of students age


####Imperative programming
```javascript
whenDataLoaded
	.then((stduents)=>{
		stduents
			.map((student)=>student.age)
			.reduce((acc, age)=>{acc+=age},0)
	})
	.then((result)=>{
		console.log(result) // 28.4
	})
```

####Declarative programming
```javascript
whenDataLoaded
	.then(selectObjKeyOf('age'))
	.then(priceMethod('average'))
	price((result)=>{
		console.log(result) // 28.4
	})
```
	
### 2. Exercise 1 -> Get the average of students age
	