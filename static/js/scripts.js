function predictHeartDisease() {
    // Use the correct API URL for heart disease
    handlePrediction('heart-disease-form', '/predict/heart', 'result-heart');
}

function handlePrediction(formId, apiUrl, resultId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        document.getElementById(resultId).textContent = JSON.stringify(result, null, 2);
    })
    .catch(error => {
        document.getElementById(resultId).textContent = "Prediction failed: " + error.message;
        console.error("Error:", error);
    });
}
