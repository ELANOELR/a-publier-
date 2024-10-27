// Animation des titres au défilement
        window.addEventListener('scroll', function() {
            const headings = document.querySelectorAll('h1, h2, h3');
            headings.forEach(heading => {
                const rect = heading.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    heading.classList.add('visible');
                }
            });
        });

        // Fonction pour afficher le message
        function showMessage() {
            const message = document.getElementById('message');
            message.style.display = 'block';
            message.style.animation = 'fadeIn 0.5s';
        }