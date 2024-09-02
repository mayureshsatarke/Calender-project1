document.addEventListener('DOMContentLoaded', () => {
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const monthYearElement = document.getElementById('monthYear');
    const calendarBody = document.getElementById('calendarBody');

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    function renderCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay();
        
        const dates = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startDay; i++) {
            dates.push('');
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            dates.push(day);
        }
        
        // Render calendar
        calendarBody.innerHTML = '';
        dates.forEach(date => {
            const dateElement = document.createElement('div');
            dateElement.className = 'date';
            dateElement.textContent = date;
            calendarBody.appendChild(dateElement);
        });
        
        // Update month and year in the header
        const options = { year: 'numeric', month: 'long' };
        monthYearElement.textContent = new Date(year, month).toLocaleDateString(undefined, options);
    }

    prevMonthButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    nextMonthButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    // Initial render
    renderCalendar(currentYear, currentMonth);
});
