## DEMO

Raw Data

```javascript
let students = [
	{name: 'cw',    age: 27, gender:'M', allowance: 1000, department:'IT', 	  salary: 60000.56},
	{name: 'ken',   age: 31, gender:'M', allowance: 2000, department:'IT',    salary: 44000.32},
	{name: 'ck',    age: 35, gender:'M', allowance: 3000, department:'IT',    salary: 55000.11},
	{name: 'Ting',  age: 22, gender:'F', allowance: 4000, department:'sales', salary: 70000.85},
	{name: 'Linda', age: 27, gender:'F', allowance: 3000, department:'sales', salary: 40000.49}
]
```

Exercise 1 -> Get the average of students age


Imperative programming
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

Declarative programming
```javascript
whenDataLoaded
	.then(selectObjKeyOf('age'))
	.then(priceMethod('average'))
	.then((result)=>{
		console.log(result) // 28.4
	})
```
	
	