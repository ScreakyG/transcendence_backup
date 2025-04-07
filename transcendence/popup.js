export function registerPopup() {
    let form = document.getElementById("popup-form");
    let registerBtn = document.getElementById("registerBtn");

    console.log(form);
    console.log(registerBtn);

    registerBtn.addEventListener("click", () => {
        console.log("Register Clicked");
        form.classList.add("active");
        closePopup();
    })
}

export function closePopup() {
    let form = document.getElementById("popup-form");
    let submitBtn = document.getElementById("register-submit");

    submitBtn.addEventListener("click", () => {
        form.classList.remove("active");
    })
}
