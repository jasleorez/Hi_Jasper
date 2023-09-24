    document.addEventListener('DOMContentLoaded', () => {
        const appointmentForm = document.querySelector('form');
        const confirmationContainer = document.getElementById('confirmation-container');
        const confirmationMessage = document.getElementById('confirmation-message');

        appointmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const service = document.getElementById('service').value;

            const appointmentData = {
                date,
                time,
                service
            };

            try {
                const response = await fetch('/api/appointments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(appointmentData)
                });

                if (response.ok) {
                    // Hide the form
                    appointmentForm.style.display = 'none';

                    // Show confirmation message
                    confirmationMessage.textContent = 'Appointment booked successfully!';
                    confirmationContainer.style.display = 'block';
                } else {
                    alert('Failed to book appointment.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while booking the appointment.');
            }
        });
    });
