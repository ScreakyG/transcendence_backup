import { signupEvents } from "./signupevents.js";
import { dashboardView } from "./views/dashboard.js";
import { playView } from "./views/play.js";
import { profileView } from "./views/profile.js";
import { signupView } from "./views/signup.js";
import { loginView } from "./views/login.js";
import { loginEvents } from "./loginevents.js";

const routes = {
    index : "/",
    dashboard : "/dashboard",
    profile : "/profile",
    play : "/play",
    login : "/login",
    signup : "/signup"
}

// Gestion des boutons forward et backward
window.addEventListener("popstate", () => {
    router();
});

//On injecte le contenu selon le path sur lequel on se trouve.
export async function router() {
    //On injecte dans changingArea pour garder la navbar sur la gauche dans le body.
    const changingArea = document.getElementById("changingArea");

    console.log("Current path = " + location.pathname);
    switch (location.pathname) {
        case routes.index:
            changingArea.innerHTML = loginView();
            loginEvents();
            break;

        case routes.login:
            changingArea.innerHTML = loginView();
            loginEvents();
            break;

        case routes.signup:
            changingArea.innerHTML = signupView();
            signupEvents();
            break;

        case routes.dashboard:
            changingArea.innerHTML = dashboardView();
            break ;

        case routes.profile:
            changingArea.innerHTML = profileView();
            break ;

        case routes.play:
            changingArea.innerHTML = playView();
            break ;

        default:
            break ;
    }
}
