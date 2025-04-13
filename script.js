loggedin = false
function loadNavBar() {
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
        attachNavEvents();
    })
    .catch(error => console.error("Navbar load failed:", error));
}

function attachNavEvents() {
    const navStudent = document.getElementById("nav_student");
    const navTeacher = document.getElementById("nav_teacher");

    navStudent.addEventListener("click", () => {
        if (loggedin) {
            navStudent.setAttribute("href", "student_dashboard.html");
        } else {
            alert("Please Log in first!");
        }
    });

    navTeacher.addEventListener("click", () => {
        if (loggedin) {
            navTeacher.setAttribute("href", "student_dashboard.html");
        } else {
            alert("Please Log in first!");
        }
    });
}