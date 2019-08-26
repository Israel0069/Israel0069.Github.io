const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = ['I am Good my darling', 'Great so whats next',
'Please speak clearly OK!'];
const answer1 = ['My name is Angel, How about you?', 'Huh, My name is Angel, How about you?',
'Hey, My name is Angel, How about you?'];
const answer2 = ['Secret heehheehheeheeheeheehe can you be my boyfriend? are you single? available?'];
const answer3 = ['Simple Question', 'Go research please!', 'hahays,I\'m so tired you know'];
const answer4 = ['Simple Question', 'Blaaah, Blaaah! Blaah!', 'Figure it your self'];
const answer5 = ['I\'m so sleepy can you come back later or never'];
const answer6 = ['Nice name', 'So cute', 'Wow nice', 'Love it'];
const answer7 = ['Yeah', 'Yeees', 'hehehe'];
const answer8 = ['2', '2 OK', '2'];
const answer9 = ['maybe', 'I dont like it kassie', 'Yes, Because I dont like it kasi'];
const answer10 = ['I hate youuu', 'I hate youuu nahh', 'I hate you huh huh huh you make me cry you know'];
const answer11 = ['I said I hate you', 'I said I hate yoou nahh', 'I said! I hate you huhuuh you make me cry you know'];
const answer12 = ['I\'m eighteen years old', 'I\'m eighteen years old', 'I\'m eighteen years old you know'];
const answer13 = ['Thank you', 'Thank you very much', 'I know thank you'];
const answer14 = ['Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way. She had met Carrie on her first day at her new school\', \'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way - one she didn\'t want to attend. She had her dad to thank for that.\'Why have we got to move?\' Sherry had asked him.\'Because I\'ve got a new job,\' her father answered with a look of superiority - a look he usually adopted when he thought he was right. He was never right as far as Sherry was concerned.   to be continue,  come back next year. can you?', 'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way. She had met Carrie on her first day at her new school\', \'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way - one she didn\'t want to attend. She had her dad to thank for that.\'Why have we got to move?\' Sherry had asked him.\'Because I\'ve got a new job,\' her father answered with a look of superiority - a look he usually adopted when he thought he was right. He was never right as far as Sherry was concerned.   to be continue,  come back next year. can you?', 'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way. She had met Carrie on her first day at her new school\', \'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way - one she didn\'t want to attend. She had her dad to thank for that.\'Why have we got to move?\' Sherry had asked him.\'Because I\'ve got a new job,\' her father answered with a look of superiority - a look he usually adopted when he thought he was right. He was never right as far as Sherry was concerned.   to be continue,  come back next year. can you?'];
const SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition || andriod.SpeechRecognition ;
const recognition = new SpeechRecognition();
recognition.onstart = function() {
	console.log('voice is activated, you can speak to microphone');
};
recognition.onresult = function(event) {	
	const current = event.resultIndex;
	
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutloud(transcript);
};

btn.addEventListener('click', () => {
	recognition.start();
});
function readOutloud(message){
	const speech = new SpeechSynthesisUtterance();
	speech.text = 'I dont understant, Speak clearly pleeasse';
	
	if(message.includes('how are you')) {
		const finalText =
		greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}
	if(message.includes('your name')) {
		const finalText =
		answer1[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}
	if(message.includes('are you single')) {
		const finalText =
		answer4[Math.floor(Math.random() * answer4.length)];
		speech.text = finalText;
	}
	if(message.includes('have a boyfriend')) {
		const finalText =
		answer2[Math.floor(Math.random() * answer2.length)];
		speech.text = finalText;
	}
	if(message.includes('my name is')) {
		const finalText =
		answer6[Math.floor(Math.random() * answer6.length)];
		speech.text = finalText;
	}
	if(message.includes('is that all')) {
		const finalText =
		answer7[Math.floor(Math.random() * answer7.length)];
		speech.text = finalText;
	}
	if(message.includes('don\'t know math')) {
		const finalText =
		answer9[Math.floor(Math.random() * answer9.length)];
		speech.text = finalText;
	}
	if(message.includes('don\'t know mathematics')) {
		const finalText =
		answer9[Math.floor(Math.random() * answer9.length)];
		speech.text = finalText;
	}
	if(message.includes('i thought you know')) {
		const finalText =
		answer10[Math.floor(Math.random() * answer10.length)];
		speech.text = finalText;
	}
	if(message.includes('what did you say')) {
		const finalText =
		answer11[Math.floor(Math.random() * answer11.length)];
		speech.text = finalText;
	}
	if(message.includes('how old are you')) {
		const finalText =
		answer12[Math.floor(Math.random() * answer12.length)];
		speech.text = finalText;
	}
	if(message.includes('you are beautiful')) {
		const finalText =
		answer13[Math.floor(Math.random() * answer13.length)];
		speech.text = finalText;
	}
	if(message.includes('tell a story')) {
		const finalText =
		answer14[Math.floor(Math.random() * answer14.length)];
		speech.text = finalText;
	}
	
	
	speech.volume = 1;
	speech.rate = .75;
	speech.pitch = 3;
	
	window.speechSynthesis.speak(speech);
}