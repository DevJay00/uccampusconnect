
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const submitBtn = document.getElementById('submitBtn');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        // 1. Prevent the default page reload
        e.preventDefault();

        // 2. Button feedback (change text to "Sending...")
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // 3. Collect Data (Optional: Log to console to see it works)
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Form Data:', data);

        // 4. Simulate sending data to a backend (2 second delay)
        setTimeout(() => {
            // Reset button
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;

            // Show Success Message
            messageDiv.textContent = 'Thank you! Your feedback has been received.';
            messageDiv.className = 'success';
            messageDiv.classList.remove('hidden');

            // Reset the form fields
            form.reset();

            // Hide the message after 3 seconds
            setTimeout(() => {
                messageDiv.classList.add('hidden');
            }, 3000);

        }, 2000);
    });
});
