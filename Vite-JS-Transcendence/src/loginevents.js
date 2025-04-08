import { router } from "./router";

// Cette fonction reset la couleur rouge sur les inputs (class incorrect) lorsque l'user ecrit a nouveau dans un input precedemment faux.
function resetErrors() {
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const errElement = document.getElementById("error-message")

    const allInputs = [emailInput, passwordInput];

    allInputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.parentElement.classList.contains("incorrect"))
            {
                input.parentElement.classList.remove("incorrect");
                errElement.innerText = "";
            }
        })
    })
}

// Verifie les inputs un par un. Retourne un array de strings qui contient les erreurs a afficher dans le form.
// Ajouter ici pour des verifications plus poussees.
function verifyInputs(data) {
    let errors = [];

    if (data.email === "" || data.email == null)
    {
        const emailInput = document.getElementById("email-input");

        errors.push("Email is required");
        emailInput.parentElement.classList.add("incorrect");
    }

    if (data.password === "" || data.password == null)
    {
        const passwordInput = document.getElementById("password-input");

        errors.push("Password is required");
        passwordInput.parentElement.classList.add("incorrect");
    }
    return (errors);
}

export function loginEvents() {
    const form = document.getElementById("login-form");
    const errElement = document.getElementById("error-message")

    resetErrors();

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("LOGIN Button clicked");

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);

        let errors = verifyInputs(data);

        //Si il y a des erreurs dans les inputs
        if (errors.length > 0)
        {
            errElement.innerText = errors.join(". ");
            console.log("Form is INVALID");
        }

        //Si pas d'erreurs on envoie les datas du form au backend
        else
        {
            console.log("Form is VALID");
            const res = await fetch ("https://reqres.in/api/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok)
            {
                //On peut ajouter ici une autre gestion si le serveur envoie un reject
                //const error = await res.text();
                //console.log(error);
                errElement.innerText = "Something went wrong with backend";
            }
            else
            {
                //Ici on gere si le login est valide.
                const responseData = await res.json();
                console.log("Reponse du serveur:", responseData);

                //Juste pour test un comportement, a changer plus tard
                errElement.innerText = "Login successfull";
                setTimeout(() => {
                    window.history.pushState(null, "", "/dashboard");
                    router();
                }, 1500);
            }
        }
    })
}
