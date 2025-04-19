    // Example rented items data (replace with backend data later)
    const rentedItems = [
        {
            name: "Canon DSLR Camera",
            image: "dslr.avif", // Ensure this path is correct
            rentedBy: "john@example.com",
            returnBy: "April 25, 2025"
        },
        {
            name: "Camping Tent",
            image: "tent.jpg", // Ensure this path is correct
            rentedBy: "jane@sample.com",
            returnBy: "April 30, 2025"
        },
        {
            name: "Mountain Bike",
            image: "bicycle.webp", // Ensure this path is correct
            rentedBy: "jane@sample.com",
            returnBy: "April 30, 2025"
        }
        ];
    
    // Get the container where items will be added
    const container = document.querySelector('.rented-items');
    
    // Loop through each item and create card elements
    rentedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
    
        card.innerHTML = `
        <img class="item-image" src="${item.image}" alt="${item.name}">
        <div class="item-details">
            <div class="item-name">${item.name}</div>
            <div class="item-status">Rented by: ${item.rentedBy}</div>
            <div class="item-status">Return by: ${item.returnBy}</div>
        </div>
        `;
    
        container.appendChild(card);
    });
    // Add event listeners to buttons