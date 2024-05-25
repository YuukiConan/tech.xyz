/* 
    Created with ❤ and 💪 by: I'm Rikka (YuukiC) 

    You must connect your computer/device to the Internet to load online Font Awesome CSS/Javascript. 
*/

function change() {
    var cbx = document.getElementById('checkbox');

    /* These are controls that want to change their theme */
    var header = document.querySelector('header');
    var navigationMenu = document.getElementById("navigationMenu");
    var menuButton = document.querySelectorAll(".menuButton");
    var input = document.querySelectorAll('input');
    var footer = document.querySelector('footer');
    var info = document.getElementsByClassName("animated-info-content");
    var darkmode_button = document.getElementById("darkmode-button");
    var dropdown_button = document.getElementsByClassName("dropdown-button");

    if (cbx.checked) {
        document.body.style.backgroundColor = "#141433"
        document.body.style.color = "white"
        header.style.backgroundColor = "#291752"
        navigationMenu.style.backgroundColor = "#291752"
        for (var a = 0; a < menuButton.length; a++) {
            menuButton[a].style.color = "white"
        }
        for (var b = 0; b < input.length; b++) {
            input[b].style.backgroundColor = "#3c2969"
            input[b].style.color = "white"
        }
        for (var b1 = 0; b1 < dropdown_button.length; b1++)
        {
            dropdown_button[b1].style.backgroundColor = "#3c2969";
            dropdown_button[b1].style.color = "white"
        }
        footer.style.backgroundColor = "#251a4b"
        for (var c = 0; c < info.length; c++) {
            info[c].style.backgroundColor = "transparent"
            info[c].style.color = "white"
            info[c].style.paddingLeft = "0px"
            info[c].style.paddingTop = "0px"
            info[c].style.border = "none"
        }
        darkmode_button.style.backgroundColor = "#351d6e";
        darkmode_button.style.color = "white"
    }
    else {
        document.body.style.backgroundColor = "#efefef"
        document.body.style.color = "black"
        header.style.backgroundColor = "#6a31aa"
        navigationMenu.style.backgroundColor = "white"
        for (var d = 0; d < menuButton.length; d++) {
            menuButton[d].style.color = "black";
        }
        for (var e = 0; e < input.length; e++) {
            input[e].style.backgroundColor = "#dddddd"
            input[e].style.color = "black"
        }
        for (var e1 = 0; e1 < dropdown_button.length; e1++)
        {
            dropdown_button[e1].style.backgroundColor = "#dddddd"
            dropdown_button[e1].style.color = "black"
        }
        footer.style.backgroundColor = "#6b31bb"
        footer.style.color = "white"
        for (var f = 0; f < info.length; f++) {
            info[f].style.backgroundColor = "#8747ff"
            info[f].style.paddingLeft = "6px"
            info[f].style.paddingTop = "0.2px"
            info[f].style.border = "1px solid #dfdfdf"
        }
        darkmode_button.style.backgroundColor = "#dddddd"
        darkmode_button.style.color = "black"
    }
}

function setState() 
{
    localStorage.setItem("item", document.body.innerHTML);
}

function saveState()
{
    let getHTMLItem = localStorage.getItem("item");
    if (document.body.innerHTML == null)
    {

        document.body.innerHTML = getHTMLItem;
    }
}

window.onload = async () => {

    setState();
    saveState();
    
    var errorContent = document.getElementById("errNoInternet-container");
    var loadingContent = document.getElementById("loading-container");
    var bodyContent = document.getElementById("body-content");
    var resErrorContent = document.getElementById("errRNS-container");

    // Gets the current year for id "year"
    let year = document.getElementById("year");
    var getYear = new Date();
    year.innerHTML = getYear.getFullYear();

    let online = window.navigator.onLine;

    loadingContent.style.animation = "opacity 2s";
    loadingContent.style.animationPlayState = "paused";
    bodyContent.style.display = "none";
    errorContent.style.display = "none";

    setTimeout(() => {
        if (online) {
            setTimeout(() => {
                loadingContent.style.animationPlayState = "running";
                loadingContent.style.display = "none";
                bodyContent.style.display = "block";
            }, 100);
            errorContent.style.display = 'none';
            resErrorContent.style.display = 'none';
        }
        else {
            bodyContent.style.display = 'none';
            setTimeout(() => {
                loadingContent.style.display = 'none';
                errorContent.style.display = 'block';
            }, 1000) // You can change the ms for debugging purposes.
        } 
    }, 10);

    // Refresh page
    const refresh = document.getElementById("refresh");
    refresh.addEventListener('click', () => {
        window.location.reload();
        saveState();
    });

    // Newsletter event
    var sendNews = document.getElementById("request-newsLetter");
    var emailText = document.getElementById("type-email");

    const showNotification = () => {
        sendNews.addEventListener("click", () => {
            if (emailText != null) {
                var email = new Notification("tech.xyz", {
                    icon: "/Icon/tech.xyz_whitetext-transparent.png",
                    body: "Subscribed!",
                    vibrate: true
                });

                setTimeout(() => {
                    email.close();
                }, 10000);
            }
            else {
                alert("Can't request the subscription");
            }
        });
    }

    let isGranted = false;

    if (Notification.permission === 'granted') {
        isGranted = true;
    }
    else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        isGranted = permission === 'granted' ? true : false;
    }

    isGranted ? showNotification() : showError();

    const showError = () => {
        alert("Can't show the notification");
    }

    // Navigation click event

    var navigation = document.getElementsByClassName("menuButton")

    for (let i = 0; i < navigation.length; i++)
    {
        navigation[i].addEventListener("click", () => {
            window.location.href = window.location.pathname + "#" + navigation.innerHTML;
        });

        if (i > 3)
        {
            navigation[i].addEventListener("click", () => {
                window.location.href = "/YC.com/home.html"
            })
        }
    }
}

window.onscroll = () => {
    // Back to top
    let bttButton = document.getElementById("back-to-top");

    if (document.documentElement.scrollTop > 430) {
        bttButton.style.display = 'block';
    }
    else {
        bttButton.style.display = 'none';
    }

    bttButton.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
}