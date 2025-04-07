import { router } from "./router.js";

// On utilise l'event delegation pour catch tout les events click , meme ceux qui seront injectes plus tard.
function listenAllClicks() {
    let body = document.querySelector("body");
    console.log(body);

    body.addEventListener("click", (e) => {
        const target = e.target;

        console.log("Click event Target = " + target);
        if (target.matches("a"))
        {
            e.preventDefault();
            window.history.pushState(null, "", e.target.href);
            router();
        }
    })
}

listenAllClicks();
router();
