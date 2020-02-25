
 function runEvent (e) {
 var headChange = document.querySelector('h3');
 headChange.style.fontFamily = 'Century Gothic';
 headChange.style.color = 'white';
 headChange.textContent = 'Analogue Clock';
 let hourHandChange = document.querySelector('.hour-hand');

 
 var now = new Date();
 const day = document.querySelector('.day');
 day.innerHTML = now.getDate();
 var month = document.querySelector('.month');
 month.innerText = now.getMonth() + 1;
 const year = document.querySelector('.year');
 year.textContent = now.getFullYear();
 var date2 = document.querySelector('#date2');
 let day2 = now.getDate();
 let month2 = now.getMonth() + 1;
 let year2 = now.getFullYear();



var now = new Date;
var month = now.getMonth() + 1;
 
switch (month) {
 	case 1: document.querySelector('.month').innerHTML = 'January';
	break;
	case 2: document.querySelector('.month').innerHTML = 'February';
	break;
	case 3: document.querySelector('.month').innerHTML = 'March';
	break;
	case 4: document.querySelector('.month').innerHTML = 'April';
	break;
	case 5: document.querySelector('.month').innerHTML = 'May';
	break;
	case 6: document.querySelector('.month').innerHTML = 'June';
	break;
	case 7: document.querySelector('.month').innerHTML = 'July';
	break;
	case 8: document.querySelector('.month').innerHTML = 'August';
	break;
	case 9: document.querySelector('.month').innerHTML = 'September';
	break;
	case 10: document.querySelector('.month').innerHTML = 'October';
	break;
	case 11: document.querySelector('.month').innerHTML = 'November';
	break;
	default: document.querySelector('.month').innerHTML = 'December';
}
 
}

const setDate = () => {
		
		var now = new Date();
		const seconds = now.getSeconds();
		let secondsDegrees = ((seconds / 60) * 360 + 90);
		let secondHand = document.querySelector('.second-hand');
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		secondHand.style.backgroundColor = 'red';
		console.log(seconds)
		console.log(secondsDegrees);

		const hour = now.getHours();
		const hourDegrees = ((hour / 12) * 360 + 90);
		const hourHand = document.querySelector('.hour_of_hand');
		hourHand.style.transform = `rotate(${hourDegrees}deg)`;
		hourHand.style.backgroundColor = 'white';
		console.log(hour);
		console.log(hourDegrees);

		const minutes = now.getMinutes();
		const minDegrees = ((minutes / 60) * 360 + 90);
		let minutesHand = document.querySelector('.min-hand');
		minutesHand.style.transform = `rotate(${minDegrees}deg)`;
		minutesHand.style.backgroundColor = 'white';
		console.log(minutes);

}
setInterval(setDate, 1000)


