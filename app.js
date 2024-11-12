let pos = document.documentElement;
            let x = 0, y = 0;

            function updateMousePosition(e) {
                x = e.clientX;
                y = e.clientY;
            }

            function animate() {
                pos.style.setProperty('--x', x + 'px');
                pos.style.setProperty('--y', y + 'px');
                requestAnimationFrame(animate);
            }

            document.addEventListener('mousemove', updateMousePosition);
            requestAnimationFrame(animate);


