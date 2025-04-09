import { router } from "./router.ts";

// Cette fonction reset la couleur rouge sur les inputs (class incorrect) lorsque l'user ecrit a nouveau dans un input precedemment faux.
function resetErrors(): void {
    const nicknameInput = document.getElementById("nickname-input");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const repeatPasswordInput = document.getElementById("repeat-password-input");
    const errElement = document.getElementById("error-message");

    const allInputs = [nicknameInput, emailInput, passwordInput, repeatPasswordInput];

    allInputs.forEach(input => {
        input?.addEventListener("input", () => {
            if (input.parentElement?.classList.contains("incorrect"))
            {
                input.parentElement.classList.remove("incorrect");
                if (errElement)
                    errElement.innerText = "";
            }
        })
    })
}

// Verifie les inputs un par un. Retourne un array de strings qui contient les erreurs a afficher dans le form.
// Ajouter ici pour des verifications plus poussees.
function verifyInputs(data: {[k: string]: FormDataEntryValue}) {
    let errors = [];

    if (data.nickname === "" || data.nickname == null)
    {
        const nicknameInput = document.getElementById("nickname-input");

        errors.push("Nickname is required");
        nicknameInput?.parentElement?.classList.add("incorrect");
    }

    if (data.email === "" || data.email == null)
    {
        const emailInput = document.getElementById("email-input");

        errors.push("Email is required");
        emailInput?.parentElement?.classList.add("incorrect");
    }

    if (data.password === "" || data.password == null)
    {
        const passwordInput = document.getElementById("password-input");

        errors.push("Password is required");
        passwordInput?.parentElement?.classList.add("incorrect");
    }
    if (data.password !== data.repeatpassword)
    {
        const repeatPasswordInput = document.getElementById("repeat-password-input");

        errors.push("Password does not match repeated password");
        repeatPasswordInput?.parentElement?.classList.add("incorrect");
    }

    return (errors);
}

export function signupEvents(): void {
    const form = document.getElementById("signup-form");
    const errElement = document.getElementById("error-message")

    resetErrors();

    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("SIGNUP Button clicked");

        const formData = new FormData(form as HTMLFormElement);
        const data = Object.fromEntries(formData);
        console.log(data);

        let errors = verifyInputs(data);

        //Si il y a des erreurs dans les inputs
        if (errors.length > 0)
        {
            if (errElement)
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
                if (errElement)
                    errElement.innerText = "Something went wrong with backend";
            }
            else
            {
                //Ici on gere si le register est valide.
                const responseData = await res.json();
                console.log("Reponse du serveur:", responseData);

                //Juste pour test un comportement, a changer plus tard
                if (errElement)
                    errElement.innerText = "Register successfull, you can now login";
                setTimeout(() => {
                    window.history.pushState(null, "", "/login");
                    router();
                }, 2000);
            }
        }
    })
}
