document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var option = params.get('option'); // Get the option from URL parameters
    setTimeout(function() {
        
        var messageElement = document.getElementById('deliveryMessage');
        
            
        

        if(option === 'standardDelivery') {
            messageElement.textContent = 'Standard Delivery selected: the driver will be at your doorstep in 3-5 hours.';
        } else if(option === 'expressDelivery') {
            messageElement.textContent = 'Express Delivery selected: the driver will be at your doorstep within 1-2 hours.';
        } else if(option === 'sameDayDelivery') {
            messageElement.textContent = 'Immediate Delivery selected: the driver will be at your doorstep asap';
        } else {
            messageElement.textContent = 'Please select a delivery option.';
        }
    }, 1500);
});