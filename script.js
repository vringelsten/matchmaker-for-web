document.getElementById('compatibilityForm').addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
});

function validate() {
    const questions = ['question1', 'question2', 'question3', 'question4', 'question5'];
    let totalScore = 0;

    for (const question of questions) {
        const userAnswer = parseInt(document.getElementById(question).value);
        if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 5) {
            alert('Please select an option.');
            return;
        }

        let desiredAnswer;
        switch (question) {
            case 'question1':
                desiredAnswer = 4;
                break;
            case 'question2':
                desiredAnswer = 2;
                break;
            case 'question3':
                desiredAnswer = 5;
                break;
            case 'question4':
                desiredAnswer = 2;
                break;
            case 'question5':
                desiredAnswer = 5;
                break;
        }

        const compatibilityScore = Math.abs(userAnswer - desiredAnswer);
        totalScore += compatibilityScore;
        document.getElementById('results').innerHTML += `<p>Question ${question.charAt(question.length - 1)} Compatibility Score: ${compatibilityScore}</p>`;
    }

    const compatibilityPercentage = 100 - (totalScore * 5);
    document.getElementById('results').innerHTML += `<p>Total Compatibility Score: ${compatibilityPercentage}%</p>`;

    let remark = '';
    if (compatibilityPercentage >= 80) {
        remark = 'Tolerable I Guess';
    } else if (compatibilityPercentage >= 60) {
        remark = 'Ill Allow it';
    } else {
        remark = 'You are my least favorite person....';
    }
    document.getElementById('results').innerHTML += `<p>${remark}</p>`;
}

document.getElementById('resetButton').addEventListener('click', function() {
    resetResults();
});

function resetResults() {
    document.getElementById('results').innerHTML = '';
}
