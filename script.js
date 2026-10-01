/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

    }

}



/* =====================================================
   MENU FILTER
===================================================== */

const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".menu-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {

            button.classList.remove("active");

        });

        filter.classList.add("active");

        const category =
            filter.dataset.category;


        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(3,3,3,.95)";

    } else {

        navbar.style.background =
            "rgba(5,5,5,.7)";

    }

});



/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".menu-card, .story-content, .story-image, .gallery-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});
