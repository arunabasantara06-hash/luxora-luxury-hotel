// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close Menu
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Hotel Booking
document.getElementById("bookingBtn").addEventListener("click", () => {

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (!checkin || !checkout) {
        alert("Please select your dates!");
        return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
        alert("Check-out date must be after check-in date!");
        return;
    }

    alert(
        "Welcome to LUXORA HOTEL!\n" +
        "Check-in: " + checkin +
        "\nCheck-out: " + checkout +
        "\nGuests: " + guests +
        "\n\nThis is a demo booking. No reservation has been made."
    );

});