document.addEventListener('DOMContentLoaded', () => {
    const meteo = document.getElementById('meteo');
    const dataVisualizzata = document.getElementById('dataVisualizzata');
    const mainNavbar = document.querySelector('.main-navbar');
    const secondaryNav = document.querySelector('.secondary-nav');
    const wrapper = document.querySelector('.buttons-wrapper');


    //funzione per cambiare la scritta meteo
    function ottieniScritta() {
        return '20° Mantova';
    }

    function rimuoviScritta() {
        return '20°';
    }

    function aggiornaScrittaVisualizzata() {
        const larghezzaSchermo = window.innerWidth;
        if (larghezzaSchermo < 1000) {
            meteo.textContent = rimuoviScritta();
        } else {
            meteo.textContent = ottieniScritta();
        }
    }


    //funzione per cambiare il format della data
    function ottieniDataLunga() {
        return 'mercoledì, 01 maggio 2024';
    }

    function ottieniDataBreve() {
        return '01/05/2024';
    }

    function aggiornaDataVisualizzata() {
        const larghezzaSchermo = window.innerWidth;
        if (larghezzaSchermo < 830) {
            dataVisualizzata.style.display = 'none';
        } else if (larghezzaSchermo < 1060) {
            dataVisualizzata.style.display = 'block';
            dataVisualizzata.textContent = ottieniDataBreve();
        } else {
            dataVisualizzata.style.display = 'block';
            dataVisualizzata.textContent = ottieniDataLunga();
            dataVisualizzata.classList.toggle('nowrap');
        }
    }


    //funzione per scorrere i bottoni dell'header
    function scrollLeft() {
        if (wrapper) {
            wrapper.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    }

    function scrollRight() {
        if (wrapper) {
            wrapper.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    }

    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');

    if (leftButton) {
        leftButton.addEventListener('click', scrollLeft);
    }

    if (rightButton) {
        rightButton.addEventListener('click', scrollRight);
    }


    //funzione per cambiare la formattazione della navbar
    function navChanges() {
        const larghezzaSchermo = window.innerWidth;
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        if (larghezzaSchermo < 1060) {
            // Gestione per schermi piccoli
            mainNavbar.classList.add('nav-shown');
            mainNavbar.classList.add('nav-shown1');
            secondaryNav.style.display = 'flex';
            secondaryNav.style.top = '0';
            mainNavbar.style.top = '50px';

            if (scrollPosition > 50) { // Nascondi la secondaryNav quando si scorre

                mainNavbar.style.top = '0';
                mainNavbar.style.position = 'fixed';
            }
        } else {
            // Gestione per schermi grandi
            mainNavbar.classList.remove('nav-shown');
            mainNavbar.classList.remove('nav-shown1');
            mainNavbar.style.position = 'fixed';
            mainNavbar.style.top = '0'; // Posiziona la mainNavbar in cima
            secondaryNav.style.display = 'none'; // Nascondi la secondaryNav
        }
    }


    function handleResize() {
        const showLarge = document.getElementById('showLarge');
        const showCarousel = document.getElementById('showCarousel');

        if (window.matchMedia("(max-width: 576px)").matches) {
            showLarge.style.display = 'none';
            showCarousel.style.display = 'block';
        } else {
            showLarge.style.display = 'block';
            showCarousel.style.display = 'none';
        }
    }



    window.addEventListener('resize', () => {
        aggiornaScrittaVisualizzata();
        aggiornaDataVisualizzata();
        navChanges();
        scrollLeft();
        scrollRight();
        handleResize();
    });


        aggiornaScrittaVisualizzata();
        aggiornaDataVisualizzata();
        navChanges();
        handleResize();

    window.addEventListener('scroll', navChanges);

   window.addEventListener('load', navChanges);
});