let canceledAppointments = JSON.parse(localStorage.getItem('canceledAppointments')) || [];
    
            document.addEventListener("DOMContentLoaded", () => {
                hideCanceledAppointments();
            });