function submitQuiz() {
    // Get user's answers
    const q1Answer = document.querySelector('input[name="q1"]:checked').value;
    const q2Answer = document.querySelector('input[name="q2"]:checked').value;
	const q3Answer = document.querySelector('input[name="q3"]:checked').value;
    const q4Answer = document.querySelector('input[name="q4"]:checked').value;
	const q5Answer = document.querySelector('input[name="q5"]:checked').value;
	// Check answers and display result
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
	const resultContainer2 = document.getElementById('result-container2');
    const resultText2 = document.getElementById('result-text2');
	let cc1 = 0;
	let cc2 = 0;
	let cc3 = 0;
    if (q1Answer === 'rivers') {
		cc1+=1;
        
    } else if (q1Answer === 'groundwater'){
        cc2+=1;
    }
	else {
		cc3+=1;
	}
	if (q2Answer === 'time1') {
		cc1+=1;
        
    } else if (q2Answer === 'time2'){
        cc2+=1;
    }
	else {
		cc3+=1;
	}
	if (q3Answer === 'notaste') {
		cc1+=1;
        
    } else if (q3Answer === 'mettalictaste'){
        cc2+=1;
    }
	else {
		cc3+=1;
	}
	if (q4Answer === 'transparent') {
		cc1+=1;
        
    } else if (q4Answer === 'tranculescent'){
        cc2+=1;
    }
	else {
		cc3+=1;
	}
	if (q5Answer === 'yearly') {
		cc1+=1;
        
    } else if (q5Answer === 'yearly2'){
        cc2+=1;
    }
	else {
		cc3+=1;
	}
	if (cc1 === 5){	
	resultText.textContent = '100% clean';
    resultText2.textContent = 'Water testing not needed';
	}
	else if (cc2 === 5){
	resultText.textContent = '75% clean';	
	resultText2.textContent = 'Water testing preffered but not needed';
	}
	else{
	resultText.textContent = '50% clean';	
	resultText2.textContent = 'Water testing needed';
	}
	// Show result container
    resultContainer.style.display = 'block';
	resultContainer2.style.display = 'block';
}
