document.addEventListener('DOMContentLoaded', () => {

    // Select all <svg> elements
    const svgs = document.querySelectorAll('svg');

    // Iterate over each <svg>
    svgs.forEach((svg) => {

        // Here it captures the <text> and <rect> elements that are inside the SVG
        const rectElement = svg.querySelector('rect');
        const textElement = svg.querySelector('text');
    
        // This is the value of the glass text inside <text>
        const percentage = textElement.textContent.trim();
    
        // Delete the percentage sign
        const numericValue = parseInt(percentage, 10);
    
        // Click event
        svg.addEventListener('click', () => {
            // Changes the width of the rectangle according to the arbitrary value that is already there
            // Multiply the percentage by 4, the reason is that 400 is the range I placed on it
            rectElement.style.width = `${numericValue * 4}px`;

            // If it is greater than 50, leave text one color, if not, leave text another color
            textElement.style.fill = numericValue > 50 ? '#ffc008' : '#ff5722';
        });
    });
});
