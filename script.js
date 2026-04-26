<script>
        // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                shape.addEventListener('mouseover', () => {
                    shape.style.transform = 'scale(1.2)';
                    shape.style.transition = 'transform 0.3s ease';
                });
                shape.addEventListener('mouseout', () => {
                    shape.style.transform = 'scale(1)';
                });
            });
        });
    </script>