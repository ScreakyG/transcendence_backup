import { router } from "./router.js";

//On ajoute des event listener sur tout les boutons.
export function handleLinks() {
    const links = document.querySelectorAll("a");
    console.log(links);

    for (let idx = 0; idx < links.length; idx++)
    {
        links[idx].addEventListener("click", (event) => {
            event.preventDefault();
            console.log(event.target.href)
            window.history.pushState({}, "", event.target.href);
            router ();
        })
    }
}

// handleLinks();
router();
