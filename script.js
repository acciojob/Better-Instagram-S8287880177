const gridItems = document.querySelectorAll('.grid-item');

let draggedItem = null;

gridItems.forEach(item => {
    // When dragging starts
    item.addEventListener('dragstart', (e) => {
        draggedItem = item;
        setTimeout(() => {
            item.classList.add('dragging');
        }, 0);
    });

    // When dragging ends
    item.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
    });

    // When an item is over another
    item.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necessary to allow drop
    });

    // When an item is dropped on another
    item.addEventListener('drop', () => {
        if (draggedItem !== item) {
            // Swap background images
            const temp = item.style.backgroundImage;
            item.style.backgroundImage = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = temp;
        }
    });
});
