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

    var medImage = document.getElementById('medImage');
    if (medImage) {
        medImage.addEventListener('click', redirectToDeliveryOptions);
    }; 
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

    
    function redirectToDeliveryOptions() {
        window.location.href = 'delivery-options.html'; // Replace with the actual URL of your delivery options page
    };

    var options = document.querySelectorAll('.delivery-option');

    options.forEach(function(option) {
        option.addEventListener('click', function(event) {
            var clickedOption = event.currentTarget.id; // Get the id of the clicked element
            window.location.href = 'delivery-message.html?option=' + clickedOption; // Redirect with the selected option as a URL parameter
        });
    });

/*    function redirectToDeliveryMessage(event) {
    var clickedOption = event.currentTarget.id; // Get the id of the clicked element
    window.location.href = 'delivery-message.html?deliveryOption==' + clickedOption;
    

    // Set a specific message based on the clicked option's id
    if(clickedOption === 'standardDelivery') {
        messageElement.textContent = 'Standard Delivery selected: the driver is going to ring in 3-5 hours.';
    } else if(clickedOption === 'expressDelivery') {
        messageElement.textContent = 'Express Delivery selected: the driver is going to ring in 1-2 hours.';
    } else if(clickedOption === 'sameDayDelivery') {
        messageElement.textContent = 'Immediate Delivery selected: the driver is going to ring asap!';
    } else {
        messageElement.textContent = 'Delivery on the way! Trust me, you\'ll feel better soon.';
    }
}*/
});