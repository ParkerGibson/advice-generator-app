
export const getAdvice = () => { 
	fetch('https://api.adviceslip.com/advice')
	.then(response => response.json());
			
	};
