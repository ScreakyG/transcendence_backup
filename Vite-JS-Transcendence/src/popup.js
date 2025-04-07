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

    form.addEventListener("submit", async (e) => {
        // L'evenement submit sera actif seulement si les champs input email et password on ete remplis correctement , ici on pourra modifier la validation plus tard si on le souhaite.

        const result = document.getElementById("result");

        console.log("Submit button clicked");
        e.preventDefault();

        //isFormValid(); Ici on pourrai check plus en details et ameliorer l'UX pour marquer les problemes.

        //Permet de recuperer les values d'un form simplement dans une classe.
        const formData = new FormData(form);
        //Creer un simple object JS avec les valeurs de formData
        const data = Object.fromEntries(formData);
        console.log("Form data :",data);

        try
        {
            const res = await fetch("https://reqres.in/api/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok)
            {
                //Ici on peut gerer si la registration n'aboutie pas.
                // const error = await res.text();
                // console.log(error);
                result.innerText = "Registration went wrong";
                // throw new Error(error);
            }

            const responseData = await res.json();
            console.log("Reponse du serveur:", responseData);
            //Ici on peut gerer si la registration est bonne.
            result.innerText = "Registration successfull";
            // form.classList.remove("active");
            // form.reset();
        }
        catch (err)
        {
            console.error("Erreur:", err);
        }
    })
}
 