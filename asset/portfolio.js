document.addEventListener('DOMContentLoaded', function() {
    // Remove old secondary nav JavaScript
    
    // Performance Chart initialization remains the same
    const chartCanvas = document.getElementById('performanceChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        
        const performanceChart = new Chart(ctx, {
        });
    }
});


    // Performance Chart
    const chartCanvas = document.getElementById('performanceChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        
        const performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Portfolio Value (Millions)',
                    data: [12, 18, 25, 32, 42],
                    backgroundColor: 'rgba(26, 60, 52, 0.2)',
                    borderColor: 'rgba(26, 60, 52, 1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true,
                    pointBackgroundColor: '#FFD700',
                    pointBorderColor: '#00493a',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.parsed.y}M`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 10,
                        max: 45,
                        ticks: {
                            callback: function(value) {
                                return `$${value}M`;
                            },
                            color: '#00493a',
                            font: {
                                weight: 'bold'
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#00493a',
                            font: {
                                weight: 'bold'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
            backToTopButton.classList.remove('invisible');
            backToTopButton.classList.remove('opacity-0');
        } else {
            backToTopButton.classList.remove('visible');
            backToTopButton.classList.add('invisible');
            backToTopButton.classList.add('opacity-0');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});