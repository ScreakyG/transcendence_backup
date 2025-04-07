export function registerPopup() {
    let form = document.getElementById("popup-form");
    let registerBtn = document.getElementById("registerBtn");
    let submitBtn = document.getElementById("register-submit");

    console.log(form);
    console.log(registerBtn);
    console.log(submitBtn);

    registerBtn.addEventListener("click", () => {
        console.log("Register Clicked");
        form.classList.add("active");
    })

    submitBtn.addEventListener("click", (e) => {
        console.log("Submit button clicked");
        e.preventDefault();
        form.classList.remove("active");
    })
}
