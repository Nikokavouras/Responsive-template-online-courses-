// Responsive menu
let open_icon_button = document.getElementById('open-icon-button');
let navigation = document.querySelector('nav');
let close_icon_button = document.getElementById('close-icon-button');

open_icon_button.addEventListener('click', () => {
    navigation.classList.add("mobile-navigation");
    open_icon_button.style.display = "none";
    close_icon_button.style.display = "block";
});

close_icon_button.addEventListener('click', () => {
    navigation.classList.remove("mobile-navigation");
    close_icon_button.style.display = "none";
    open_icon_button.style.display = "block";
});


// Accordion menu
let buttons = document.querySelectorAll("#accordion-div button")
buttons.forEach(button => {

    let content = button.nextElementSibling
    button.addEventListener("click", (event) => {
        if (button.classList.contains("active")) {
            button.classList.remove("active")
            button.setAttribute("aria-expanded", false)
            content.style.maxHeight = null;
            content.setAttribute("aria-hidden", true)
        }
        else {
            button.classList.add("active")
            content.style.maxHeight = content.scrollHeight + "px";
            content.setAttribute("aria-hidden", false)
            button.setAttribute("aria-expanded", true)
        }
    })
});




