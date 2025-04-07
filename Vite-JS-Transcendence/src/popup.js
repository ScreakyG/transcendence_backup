export function registerPopup() {
    let form = document.getElementById("popup-form");
    let registerBtn = document.getElementById("registerBtn");

    console.log(form);
    console.log(registerBtn);

    registerBtn.addEventListener("click", () => {
        console.log("Register Clicked");
        form.classList.add("active");
        // closePopup();
    })
}

export function closePopup() {
    let form = document.getElementById("popup-form");
    let submitBtn = document.getElementById("register-submit");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let emailInput;
        let passwordInput;

        emailInput = document.getElementById("email").value;
        passwordInput = document.getElementById("password").value;

        if (emailInput && passwordInput)
        {
            console.log(emailInput);
            console.log(passwordInput);

            localStorage.setItem("userEmail", emailInput);
        }

        form.classList.remove("active");
    })
}
