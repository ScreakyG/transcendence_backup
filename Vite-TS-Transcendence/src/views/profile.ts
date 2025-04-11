export function profileView(): string {
    return /*html*/`
    <div id="profile-content" class="gap-3 h-full flex flex-col justify-center items-center bg-violet-950">
        <div class="profile-infos w-3/4 flex justify-evenly items-center bg-violet-200 rounded-3xl">
            <img width="200px" src="images/default_avatar.png" alt="Default user avatar">
            <ul>
                <li>Nickname :</li>
                <li>Email : </li>
            </ul>
        </div>
        <div class="profile-subpart w-3/4 h-3/4 gap-3 flex justify-center bg-violet-950">
            <div class="avatar-selection w-full flex flex-wrap justify-center items-center bg-violet-200 rounded-3xl">
                <img class="w-30 h-30" src="images/default_avatar.png" alt="Default user avatar">
                <img class="w-30 h-30" src="images/woman_avatar.png" alt="Woman user avatar">
                <img class="w-30 h-30" src="images/alien_avatar.png" alt="Alien user avatar">
                <img class="w-30 h-30" src="images/detective_avatar.png" alt="Detective user avatar">
            </div>
            <div class="avatar-selection w-full flex justify-center items-center bg-violet-200 rounded-3xl">
                <h1>PROFILE VIEW</h1>
                <p>This is blabl albal vlal vlavl alvla vlalval vla lvalvalvalva</p>
            </div>
        </div>
    </div>
    `
}
