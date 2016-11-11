# Functional Programming
Why I love it?
> A programmer’s dream is to write code, and be able to use it with little effort

How do become a good programmer’s?
- [ ] Code that can be repeatedly used with little effort
- [ ] Code that can be tested easily
- [ ] Code that can express themself


### Which way do you think that you prefer? 

### Data From API -> Get Sum?
var fruits = [
	{ name: 'apple',  price: 5 }, 
	{ name: 'orange', price: 10 }, 
	{ name: 'lemon',  price: 15 }
]

### First Way(Functional Way)
request('http://fruits.com/api')
				.then((fruits)=>{
					fruits
						.map((fruit)=fruit.price)
						.reduce((acc, price)=>acc+=price,0)
				})
				.then((result)=>{
					console.log(result) // 30
				})

### Second Way (Functional Way With Declarative Style)
request('http://fruits.com/api')
				.then(selectKeyOf('price'))
				.then(priceMethod('sum'))
				.then((result)=>{
					console.log(result) // 30
				})

If you have choosen the second style of doing your program, 
you have become a good programmer by doing

Human Readable Term
- [x] Code that can be repeatedly used with little effort
- [x] Code that can be tested easily
- [x] Code that can express themself

Geek Term
- [x] DRY
- [x] Abstractions
- [x] Encapsulation


> Good Job! You are telling program **WHAT to do** instead of **HOW to do it**!!



### DEMO

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
	