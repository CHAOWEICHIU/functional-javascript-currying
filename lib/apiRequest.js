const validateAppKey = (key)=>{
	if(key === 'good_key') return true
	return false
}
const validUser = (user)=>{
	if(user==='good_boy' || user === 'good_girl')return true
	return false
}

const makeRequest = (appKey) => (user) => (url) => {
	let msg = {
		statusCode: '',
		message: ''
	}
	if(!validateAppKey(appKey)){
		msg.statusCode = 401
		msg.message = 'App Not Authorized'
	}
	
	if(!validUser(user)){
		msg.statusCode = 401
		msg.message = 'User Not Authorized'
	}

	if(validateAppKey(appKey) && validUser(user)){
		msg.statusCode = 200
		msg.message = `you have made request to ${url}`	
	}
	
	return msg
}

const requestWithKey =  makeRequest('good_key')
	, requestWithUserAndKey = requestWithKey('good_boy')
console.log(requestWithUserAndKey('https://example.com'))