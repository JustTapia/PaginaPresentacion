document.addEventListener('DOMContentLoaded', init);

let elementoActualnum = 1;
let elementoActual = document.getElementById("stepperAboutId");
let actualWindowWidth = screen.width;

function init(){
    let btnAbout = document.getElementById("stepperAboutId");
    btnAbout.addEventListener("click", animacionA1);

    let btnPortfolio = document.getElementById("stepperPortfolioId");
    btnPortfolio.addEventListener("click", animacionA2);

    let btnResume = document.getElementById("stepperResumeId");
    btnResume.addEventListener("click", animacionA3);

    let btnInterests = document.getElementById("stepperInterestsId");
    btnInterests.addEventListener("click", animacionA4);

    let btnContact = document.getElementById("stepperContactId");
    btnContact.addEventListener("click", animacionA5);
    elementoActual = btnAbout;

    if(screen.width <= 992){
        cartas = document.getElementsByClassName("carta");
        Array.from(cartas).forEach(carta => {
            carta.classList.remove("hidden");
        });
    };
    window.onresize = () => {
        if(screen.width === actualWindowWidth){
            return;
        }else if(screen.width <= 992){
            cartas = document.getElementsByClassName("carta");
            Array.from(cartas).forEach(carta => {
                carta.classList.remove("hidden");
                carta.removeAttribute("style");
            });
            actualWindowWidth = screen.width;
        }else{
            cartas = document.getElementsByClassName("carta");
            Array.from(cartas).forEach(carta => {
                if(carta !== cartas[elementoActualnum-1]){
                    carta.classList.add("hidden");
                }else{
                    carta.style.animation = "fadein-bottom 0.5s linear 1 both";
                }
            });
            actualWindowWidth = screen.width;
        };
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return;
    }
};

function animacionA1(){
    if(animacion(1)){
        elementoActualnum = 1;
        let elementoNuevo = document.getElementById("stepperAboutId");
        elementoActual.getElementsByClassName("stepper_link")[0].classList.remove("stepper_link--active");
        elementoNuevo.getElementsByClassName("stepper_link")[0].classList.add("stepper_link--active");
        elementoActual = elementoNuevo;
    }
}

function animacionA2(){
    if(animacion(2)){
        elementoActualnum = 2;
        let elementoNuevo = document.getElementById("stepperPortfolioId");
        elementoActual.getElementsByClassName("stepper_link")[0].classList.remove("stepper_link--active");
        elementoNuevo.getElementsByClassName("stepper_link")[0].classList.add("stepper_link--active");
        elementoActual = elementoNuevo;
    }
}

function animacionA3(){
    if(animacion(3)){
        elementoActualnum = 3;
        let elementoNuevo = document.getElementById("stepperResumeId");
        elementoActual.getElementsByClassName("stepper_link")[0].classList.remove("stepper_link--active");
        elementoNuevo.getElementsByClassName("stepper_link")[0].classList.add("stepper_link--active");
        elementoActual = elementoNuevo;
    }
}

function animacionA4(){
    if(animacion(4)){
        elementoActualnum = 4;
        let elementoNuevo = document.getElementById("stepperInterestsId");
        elementoActual.getElementsByClassName("stepper_link")[0].classList.remove("stepper_link--active");
        elementoNuevo.getElementsByClassName("stepper_link")[0].classList.add("stepper_link--active");
        elementoActual = elementoNuevo;
    }
}

function animacionA5(){
    if(animacion(5)){
        elementoActualnum = 5;
        let elementoNuevo = document.getElementById("stepperContactId");
        elementoActual.getElementsByClassName("stepper_link")[0].classList.remove("stepper_link--active");
        elementoNuevo.getElementsByClassName("stepper_link")[0].classList.add("stepper_link--active");
        elementoActual = elementoNuevo;
    }
}


function animacion(elementoNuevoNum){
    if (elementoNuevoNum>elementoActualnum) {
        let actual = document.getElementById("carta"+ elementoActualnum);
        actual.style.animation = "fadeout-top 0.5s linear 1 both";
        let nuevo = document.getElementById("carta"+ elementoNuevoNum);
        nuevo.style.animation = "fadein-top 0.5s linear 1 both";
        setTimeout(hidden, 100, actual);
        setTimeout(display, 100, nuevo); 
        return true;

    } else if(elementoNuevoNum<elementoActualnum){
        let actual = document.getElementById("carta"+ elementoActualnum);
        actual.style.animation = "fadeout-bottom 0.5s linear 1 both";
        let nuevo = document.getElementById("carta"+ elementoNuevoNum);
        nuevo.style.animation = "fadein-bottom 0.5s linear 1 both";
        setTimeout(hidden, 100, actual);
        setTimeout(display, 100, nuevo); 
        return true;
    };
    return false;
};

function hidden(aEsconder){
    aEsconder.classList.add('hidden');
};

function display(aMostrar){
    aMostrar.classList.remove('hidden');
};