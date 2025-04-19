const rentalList = document.getElementById('rental-list');
    const rentals = JSON.parse(localStorage.getItem("myRentals")) || [];
  
    if (rentals.length === 0) {
      rentalList.innerHTML = "<p>You haven't rented anything yet.</p>";
    } else {
      rentals.forEach(rental => {
        const div = document.createElement('div');
        div.className = "rental-item";
        div.innerHTML = `
          <div class="rental-info">
            <h3>${rental.item}</h3>
            <p>Rented by: ${rental.name}</p>
            <p>Rented on: ${rental.date}</p>
            <p>Duration: ${rental.duration} days</p>
          </div>
          <div class="rental-actions">
            <button onclick="alert('Feature coming soon!')">View Details</button>
          </div>
        `;
        rentalList.appendChild(div);
      });
    }