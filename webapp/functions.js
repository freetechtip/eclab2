function alert_change_color() {
    var r_input = document.getElementById("red_input").value;
    var g_input = document.getElementById("green_input").value;
    var b_input = document.getElementById("blue_input").value;
    var element = document.getElementById("element").value;
    var border_width = document.getElementById("border_width_input").value;

    var tag = document.getElementById("paragraph");
    switch (element) {
        case "border":
            tag.style.borderColor = `rgb(${r_input},${g_input},${b_input})`;
            break;
        case "background":
            tag.style.backgroundColor = `rgb(${r_input},${g_input},${b_input})`;
            break;
        case "text":
            tag.style.color = `rgb(${r_input},${g_input},${b_input})`;
            break;
    }
    tag.style.borderWidth = border_width
}

function validate_passwords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 != password2) {
        alert("Passwords don't match!");
    } else if (password1.length < 8) {
        alert("Password is less than 8 characters!")
    } else {
        alert("All good!")
    }
}