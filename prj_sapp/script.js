document.addEventListener('DOMContentLoaded', function() {
    // Functionality for index.html
    var analyzeButton = document.getElementById('analyzeSymptoms');
    if (analyzeButton) {
        analyzeButton.addEventListener('click', goToRecordPage);
    }

    // Navigate to record.html
    function goToRecordPage() {
        window.location.href = 'record.html';
    }

    // Functionality for record.html
    var recordButton = document.getElementById('startRecording');
    var soundWaveImage = document.querySelector('.sound-waves');
    var timerElement = document.getElementById('timer');
    var timeElapsedElement = document.getElementById('timeElapsed');
    var timer;
    var elapsedTime = 0;
    var isRecording = false;

    if (recordButton && soundWaveImage && timerElement && timeElapsedElement) {
        recordButton.addEventListener('click', function() {
            if (!isRecording) {
                // Start recording
                recordButton.textContent = 'Stop Recording';
                soundWaveImage.classList.add('animate-wave');
                startTimer();
                isRecording = true;
            } else {
                // Stop recording
                recordButton.textContent = 'Start Recording';
                soundWaveImage.classList.remove('animate-wave');
                stopTimer();
                isRecording = false;
                setTimeout(function() {
                    window.location.href = 'results.html';
                }, 2000);
            }
        });
    }

    function startTimer() {
        clearInterval(timer); // Clear any existing timer
        elapsedTime = 0; // Reset elapsed time
        timeElapsedElement.textContent = elapsedTime; // Reset the timer display
        timerElement.style.display = "block"; // Show the timer

        timer = setInterval(function() {
            elapsedTime++;
            timeElapsedElement.textContent = elapsedTime;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer); // Stop the timer
        timerElement.style.display = "none"; // Optionally hide the timer
    }
});