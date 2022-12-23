const langBtn = document.querySelector(".indicatorContainer"),
    indicator = document.querySelector(".indicator");
let prefLang = localStorage.getItem("prefLang"),
    langIta = true;

window.addEventListener("load", () => {
    if (prefLang == "ita") {
        ChangeLanguage(false)
    } else {
        indicator.classList.toggle("right");
        ChangeLanguage(true)
    }
})

langBtn.addEventListener("click", () => {
    indicator.classList.toggle("right");
    if (!langIta) {
        ChangeLanguage(false)
        localStorage.setItem("prefLang", "ita")
    } else {
        ChangeLanguage(true)
        localStorage.setItem("prefLang", "eng")
    }
})

function ChangeLanguage(lang) {
    const pageId = document.getElementById("pageId").value;
    if (!lang) {
        NavBarIta();

        switch (pageId) {
            case "home":
                HomeIta();
                break;
            case "infoContactUs":
                InfoContactUsIta();
                break;
            case "enviroments":
                EnviromentsIta();
                break;
        }
        langIta = true;

        //Italian
    } else {
        NavBarEng();

        switch (pageId) {
            case "home":
                HomeEng();
                break;
            case "infoContactUs":
                InfoContactUsEng();
                break;
            case "enviroments":
                EnviromentsEng();
                break;
        }
        langIta = false;

        //English
    }
}

function NavBarIta() {
    const navElements = document.querySelectorAll(".navLink");
    navElements[0].innerHTML = "Montagna";
    navElements[1].innerHTML = "Foresta";
    navElements[2].innerHTML = "Oceano";
    navElements[3].innerHTML = "Città";
    navElements[4].innerHTML = "Info";
}

function NavBarEng() {
    const navElements = document.querySelectorAll(".navLink");
    navElements[0].innerHTML = "&nbspMountain&nbsp";
    navElements[1].innerHTML = "&nbspForest&nbsp";
    navElements[2].innerHTML = "&nbspOcean&nbsp";
    navElements[3].innerHTML = "&nbspCity&nbsp";
    navElements[4].innerHTML = "Info";
}

function HomeIta() {
    const mainArgs = document.querySelectorAll(".mainArgs");
    mainArgs[0].innerHTML = "Fotografia";
    mainArgs[1].innerHTML = "Animali";
    mainArgs[2].innerHTML = "Natura";
    document.querySelector(".mainWelcome").innerHTML = "Benvenuto nel sito!"
}

function HomeEng() {
    const mainArgs = document.querySelectorAll(".mainArgs");
    mainArgs[0].innerHTML = "Photography";
    mainArgs[1].innerHTML = "Animals";
    mainArgs[2].innerHTML = "Nature";
    document.querySelector(".mainWelcome").innerHTML = "Welcome to the website!"
}

function InfoContactUsIta() {
    const titles = document.querySelectorAll(".infoTitle");
    titles[0].innerHTML = "Più su di noi";
    titles[1].innerHTML = "<br>Collaborazioni";
    const args = document.querySelectorAll(".infoArgs");
    args[0].innerHTML = "Se sei qui, ti sarai sicuramente chiesto chi siamo e cosa facciamo di preciso, bene in questa pagina troverai tutte le informazioni che cerchi. <br> Partiamo subito dal dire che noi siamo un gruppo di persone che ama molto viaggiare tra gli ambienti naturali, " +
        "e che ancora di più ama la fotografia; in pratica, quello che stiamo cercando di fare è creare un lavoro da questo nostro hobby che ci collega tutti.<br>Abbiamo scelto il nome " +
        "NatureLand per il semplice motivo che quando qualcuno entra nel nostro sito, quello che vogliamo rappresentare è una landa di natura in cui ci si può immergere e esplorare, questo lo " +
        "facciamo attraverso la fotografia: mettendo in mostra le foto di varie specie di animali in giro per il mondo, diamo una scelta di ambienti così da poter soddisfare tutti.<br><br>Il nostro obiettivo è farti innamorare del mondo che ci circonda con le nostre immagini.";
    args[1].innerHTML = "Siamo molto aperti a collaborazioni, infatti, attualmente collaboriamo con il negozio, \"Foto de angelis\", da cui abbiamo ricevuto alcuni degli accessori fotografici da noi in uso." +
        "  Volevamo anche aggiungere, che potete usare il codice" +
        " \"NaturaPerTutti\" per ottenere uno sconto del 10% sugli aquisti online fatti nel loro" +
        " <a href=\"http://www.fotodeangelis.it/\" target=\"_new\">sito</a>!";
    const inputs = document.querySelectorAll("input")
    inputs[1].placeholder = "Mario"
    inputs[2].placeholder = "mario@gmail.com"
    document.getElementById("name").innerHTML = "Nome"
    const textArea = document.querySelector("textarea")
    textArea.placeholder = "Scrivici qualcosa!"
    const subBtn = document.querySelector(".btnText")
    subBtn.innerHTML = "Invia"
}

function InfoContactUsEng() {
    const titles = document.querySelectorAll(".infoTitle");
    titles[0].innerHTML = "More About Us";
    titles[1].innerHTML = "<br>Collaborations";
    const args = document.querySelectorAll(".infoArgs");
    args[0].innerHTML = "If you are here, for sure you asked yourself who we are and what we precisely do, good, in this page you will find all the informations you are looking for. <br>Starting by saying that we are a group of people that loves to travel in the <b>natural enviroments</b>, " +
        "and loves even more the <b>photography</b>; practically, what we are trying to do is make a job out of this hobby that connect us all. <br> We chose the name <b>NatureLand</b> because when someone enters our site, what we want to represent " +
        "is a land of nature where you can dive into and explore, we do this with the photography: showing off the photos of various species of animals around the world, we give a choice of enviroments so we can satisfy everyone. <br> <br> Our objective is to " +
        "make you fall in love with the world around us with our photos."
    args[1].innerHTML = "We are really open to collaborations, in fact, we are actually collaborating with the store, \"Foto de angelis\", from which we recieved some of the photographic accessories that we use. <br> <br> We wanted to add that, you can use the code" +
        "<b>\"NaturaPerTutti\"</b> to get a 10% discount on the purchases done in their <a href=\"http://www.fotodeangelis.it/\" target=\"_new\">site</a>!"
    const inputs = document.querySelectorAll("input")
    inputs[1].placeholder = "Steven"
    inputs[2].placeholder = "steven@gmail.com"
    document.getElementById("name").innerHTML = "Name"
    const textArea = document.querySelector("textarea")
    textArea.placeholder = "Write something to us!"
    const subBtn = document.querySelector(".btnText")
    subBtn.innerHTML = "Submit"
}

function EnviromentsIta() {
    const titles = document.querySelectorAll(".sectionTitle");
    titles[0].innerHTML = "Montagna";
    titles[1].innerHTML = "Foresta";
    titles[2].innerHTML = "Oceano";
    titles[3].innerHTML = "Città";
    const btns = document.querySelectorAll(".galleryBtn");
    btns.forEach(btn => {
        btn.textContent = "Vedi galleria";
    })
}

function EnviromentsEng() {
    const titles = document.querySelectorAll(".sectionTitle");
    titles[0].innerHTML = "Mountain";
    titles[1].innerHTML = "Forest";
    titles[2].innerHTML = "Ocean";
    titles[3].innerHTML = "City";
    const btns = document.querySelectorAll(".galleryBtn");
    btns.forEach(btn => {
        btn.textContent = "See gallery";
    })
}