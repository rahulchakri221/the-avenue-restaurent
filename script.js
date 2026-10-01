/* ========================= style.css ========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {

    --black: #050505;
    --black2: #0b0b0b;

    --gold: #d4af37;
    --gold2: #f5d878;

    --red: #b30d19;
    --red2: #ef2735;

    --white: #fff;
    --gray: #999;

}

html {
    scroll-behavior: smooth;
}

body {

    background: var(--black);

    color: white;

    font-family: Inter, sans-serif;

    overflow-x: hidden;

}

a {
    text-decoration: none;
}

button {
    font-family: inherit;
}


/* ================= LOADER ================= */

.loader {

    position: fixed;

    inset: 0;

    z-index: 99999;

    background: #030303;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    animation: loaderExit 1s ease 3s forwards;

}

.loader-logo {

    width: 100px;
    height: 100px;

    border: 1px solid var(--gold);

    border-radius: 50%;

    display: flex;

    align-items: center;
    justify-content: center;

    font-family: Cinzel;

    font-size: 28px;

    color: var(--gold);

    animation: logoReveal 2s ease;

}

.loader-line {

    width: 0;

    height: 1px;

    background: var(--gold);

    margin: 25px 0;

    animation: line 2s ease forwards;

}

.loader h3 {

    font-family: Cinzel;

    letter-spacing: 5px;

}

.loader p {

    color: var(--red2);

    letter-spacing: 4px;

    font-size: 9px;

    margin-top: 8px;

}

@keyframes logoReveal {

    from {
        transform: scale(.5);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }

}

@keyframes line {

    to {
        width: 200px;
    }

}

@keyframes loaderExit {

    to {
        opacity: 0;
        visibility: hidden;
    }

}


/* ================= NAVBAR ================= */

.navbar {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 90px;

    padding: 0 6%;

    z-index: 1000;

    display: flex;

    align-items: center;

    justify-content: space-between;

    background: rgba(0,0,0,.7);

    backdrop-filter: blur(18px);

    border-bottom: 1px solid rgba(212,175,55,.15);

}

.logo-area {

    display: flex;

    align-items: center;

    gap: 12px;

    color: white;

}

.logo {

    width: 48px;
    height: 48px;

    border: 1px solid var(--gold);

    border-radius: 50%;

    display: flex;

    justify-content: center;

    align-items: center;

    color: var(--gold);

    font-family: Cinzel;

}

.logo-area strong {

    display: block;

    font-family: Cinzel;

    font-size: 13px;

    letter-spacing: 2px;

}

.logo-area small {

    display: block;

    color: var(--red2);

    font-size: 7px;

    letter-spacing: 2px;

    margin-top: 3px;

}

.navbar nav {

    display: flex;

    gap: 32px;

}

.navbar nav a {

    color: #ddd;

    font-size: 10px;

    letter-spacing: 2px;

    transition: .3s;

}

.navbar nav a:hover {

    color: var(--gold);

}

.nav-order {

    padding: 14px 22px;

    border: 1px solid var(--gold);

    color: var(--gold);

    font-size: 9px;

    letter-spacing: 2px;

}

.nav-order:hover {

    background: var(--gold);

    color: #000;

}

.mobile-button {

    display: none;

    background: none;

    border: 0;

    color: white;

    font-size: 26px;

}


/* ================= MOBILE MENU ================= */

.mobile-menu {

    position: fixed;

    top: 90px;

    width: 100%;

    z-index: 999;

    background: #050505;

    padding: 30px;

    display: none;

    flex-direction: column;

    gap: 25px;

    border-bottom: 1px solid var(--gold);

}

.mobile-menu a {

    color: white;

    font-family: Cinzel;

}


/* ================= HERO ================= */

.hero {

    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    padding: 120px 7% 70px;

    overflow: hidden;

    background:

        radial-gradient(
            circle at 75% 45%,
            rgba(212,175,55,.16),
            transparent 28%
        ),

        radial-gradient(
            circle at 20% 90%,
            rgba(179,13,25,.15),
            transparent 30%
        ),

        #050505;

}

.hero-bg {

    position: absolute;

    inset: 0;

    background:

        linear-gradient(
            90deg,
            #050505 0%,
            rgba(5,5,5,.9) 40%,
            rgba(5,5,5,.2) 100%
        );

}

.hero-glow {

    position: absolute;

    width: 600px;
    height: 600px;

    right: 5%;
    top: 15%;

    border-radius: 50%;

    background: rgba(212,175,55,.13);

    filter: blur(120px);

}


/* ================= HERO TEXT ================= */

.hero-content {

    position: relative;

    z-index: 10;

    width: 55%;

}

.eyebrow,
.label {

    color: var(--gold);

    letter-spacing: 5px;

    font-size: 10px;

}

.eyebrow {

    margin-bottom: 25px;

}

.hero h1 {

    font-family: Cinzel;

    font-size: clamp(55px, 8vw, 120px);

    line-height: .88;

    letter-spacing: -5px;

}

.hero h1 span {

    color: var(--gold);

}

.hero h2 {

    margin-top: 20px;

    font-family: Cinzel;

    font-size: clamp(20px, 3vw, 40px);

    letter-spacing: 2px;

    font-weight: 400;

}

.hero h2 b {

    color: var(--red2);

}

.hero-content > p {

    color: #aaa;

    margin-top: 25px;

    max-width: 450px;

    line-height: 1.7;

}


/* ================= BUTTONS ================= */

.hero-buttons {

    display: flex;

    gap: 15px;

    margin-top: 35px;

}

.gold-button,
.outline-button {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    padding: 17px 28px;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2px;

    transition: .4s;

}

.gold-button {

    background: var(--gold);

    color: #000;

}

.gold-button:hover {

    background: var(--gold2);

    transform: translateY(-4px);

}

.outline-button {

    color: white;

    border: 1px solid #666;

}

.outline-button:hover {

    border-color: var(--gold);

    color: var(--gold);

}


/* ================= CSS BIRIYANI ================= */

.hero-food {

    position: absolute;

    right: -2%;

    bottom: -3%;

    width: 55vw;

    height: 650px;

    z-index: 5;

}

.bowl-shadow {

    position: absolute;

    width: 550px;
    height: 100px;

    bottom: 70px;
    right: 90px;

    border-radius: 50%;

    background: #000;

    filter: blur(30px);

}

.biryani-bowl {

    position: absolute;

    right: 90px;
    bottom: 110px;

    width: 500px;
    height: 260px;

    border-radius: 0 0 50% 50%;

    background:

        linear-gradient(
            145deg,
            #292929,
            #050505 70%
        );

    border: 2px solid #383838;

    box-shadow:

        0 30px 50px #000,

        inset 0 10px 20px rgba(255,255,255,.1);

}

.rice {

    position: absolute;

    left: 35px;
    top: -80px;

    width: 430px;
    height: 180px;

    border-radius: 50%;

    background:

        radial-gradient(
            ellipse,
            #f4d47d 0%,
            #d9a832 45%,
            #8b5314 100%
        );

    box-shadow:

        inset 0 10px 20px rgba(255,255,255,.2),

        0 10px 30px rgba(0,0,0,.6);

}

.rice span {

    position: absolute;

    width: 30px;
    height: 8px;

    border-radius: 50%;

    background: #fff0a9;

    box-shadow: 0 0 8px #fff1a2;

}

.rice span:nth-child(1) {
    left: 40px;
    top: 50px;
}

.rice span:nth-child(2) {
    left: 90px;
    top: 25px;
}

.rice span:nth-child(3) {
    left: 145px;
    top: 65px;
}

.rice span:nth-child(4) {
    left: 200px;
    top: 35px;
}

.rice span:nth-child(5) {
    left: 255px;
    top: 70px;
}

.rice span:nth-child(6) {
    left: 310px;
    top: 30px;
}

.rice span:nth-child(7) {
    left: 350px;
    top: 80px;
}

.rice span:nth-child(8) {
    left: 120px;
    top: 100px;
}

.rice span:nth-child(9) {
    left: 220px;
    top: 105px;
}

.rice span:nth-child(10) {
    left: 290px;
    top: 115px;
}

.rice span:nth-child(11) {
    left: 65px;
    top: 120px;
}

.rice span:nth-child(12) {
    left: 175px;
    top: 15px;
}

.chicken {

    position: absolute;

    width: 90px;
    height: 55px;

    border-radius: 50%;

    background:

        linear-gradient(
            135deg,
            #8b260d,
            #c84a15,
            #57200c
        );

    box-shadow:
        inset 5px 5px 8px rgba(255,255,255,.2),
        0 5px 10px #55200d;

    z-index: 5;

}

.chicken1 {
    left: 100px;
    top: -30px;
    transform: rotate(-15deg);
}

.chicken2 {
    left: 220px;
    top: -20px;
    transform: rotate(10deg);
}

.chicken3 {
    left: 310px;
    top: 20px;
    transform: rotate(-20deg);
}

.onion {

    position: absolute;

    width: 70px;
    height: 12px;

    border-radius: 50%;

    background: #e2a3b3;

    transform: rotate(30deg);

    z-index: 8;

}

.onion1 {
    left: 170px;
    top: 35px;
}

.onion2 {
    left: 270px;
    top: 80px;
}

.mint {

    position: absolute;

    width: 30px;
    height: 15px;

    background: #417b32;

    border-radius: 100% 0;

    z-index: 8;

}

.mint1 {
    left: 150px;
    top: 70px;
}

.mint2 {
    left: 330px;
    top: 60px;
}


/* ================= STEAM ================= */

.steam {

    position: absolute;

    width: 35px;
    height: 160px;

    border-left: 4px solid rgba(255,255,255,.15);

    border-radius: 50%;

    filter: blur(3px);

    animation: steam 4s ease-in-out infinite;

}

.steam1 {
    left: 45%;
    bottom: 370px;
}

.steam2 {
    left: 55%;
    bottom: 360px;
    animation-delay: 1s;
}

.steam3 {
    left: 65%;
    bottom: 350px;
    animation-delay: 2s;
}

@keyframes steam {

    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateY(-80px);
    }

}

.scroll {

    position: absolute;

    bottom: 25px;
    left: 7%;

    color: #777;

    font-size: 8px;

    letter-spacing: 3px;

}

.scroll span {

    display: block;

    color: var(--gold);

    font-size: 20px;

    margin-top: 5px;

}


/* ================= STRIP ================= */

.strip {

    min-height: 70px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 25px;

    background: var(--red);

    font-size: 9px;

    letter-spacing: 3px;

}

.strip b {
    color: var(--gold2);
}


/* ================= SECTIONS ================= */

.section {

    padding: 120px 7%;

}


/* ================= ABOUT ================= */

.about {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 90px;

    align-items: center;

    background: #080808;

}

.about-image {

    min-height: 500px;

    display: flex;

    align-items: center;

    justify-content: center;

    background:

        radial-gradient(
            circle,
            #34230b,
            #0a0a0a 65%
        );

    overflow: hidden;

}

.food-poster {

    position: relative;

    width: 430px;

    height: 400px;

}

.poster-bowl {

    position: absolute;

    width: 400px;
    height: 190px;

    left: 15px;
    bottom: 40px;

    border-radius: 0 0 50% 50%;

    background: #111;

    border: 2px solid #333;

}

.poster-rice {

    position: absolute;

    width: 350px;
    height: 130px;

    top: -60px;
    left: 23px;

    border-radius: 50%;

    background:
        radial-gradient(
            ellipse,
            #f4d477,
            #a86617
        );

}

.poster-chicken {

    position: absolute;

    width: 75px;
    height: 50px;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #dc5c1c,
            #5e1c08
        );

    top: -35px;
    left: 90px;

}

.poster-chicken.second {

    left: 180px;
    top: -50px;

}

.poster-chicken.third {

    left: 250px;
    top: -20px;

}

.poster-steam {

    position: absolute;

    width: 100px;
    height: 230px;

    left: 160px;
    top: 0;

    border-left: 5px solid rgba(255,255,255,.12);

    border-radius: 50%;

    filter: blur(5px);

    animation: steam 4s infinite;

}

.about-content h2 {

    margin-top: 20px;

    font-family: Cinzel;

    font-size: clamp(35px,5vw,65px);

    line-height: 1.05;

}

.about-content h2 span,
.heading h2 span {

    color: var(--red2);

}

.about-content > p {

    color: #999;

    line-height: 1.8;

    margin-top: 25px;

}

.stats {

    display: flex;

    gap: 50px;

    margin-top: 45px;

}

.stats strong {

    display: block;

    color: var(--gold);

    font-family: Cinzel;

    font-size: 30px;

}

.stats small {

    color: #777;

    font-size: 8px;

    letter-spacing: 2px;

}


/* ================= SIGNATURE ================= */

.signature {

    position: relative;

    min-height: 650px;

    display: flex;

    align-items: center;

    padding: 100px 7%;

    overflow: hidden;

    background:

        radial-gradient(
            circle at 70% 50%,
            #331d07,
            #050505 45%
        );

}

.signature-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            #050505,
            transparent
        );

}

.signature-content {

    position: relative;

    z-index: 10;

    max-width: 600px;

}

.signature h2 {

    font-family: Cinzel;

    font-size: clamp(50px,7vw,100px);

    line-height: .9;

    margin: 20px 0;

}

.signature h2 span {

    color: var(--red2);

}

.signature p {

    color: #aaa;

    line-height: 1.7;

    margin-bottom: 30px;

}


/* ================= LARGE BIRIYANI ================= */

.large-biryani {

    position: absolute;

    right: 3%;

    width: 55%;

    height: 600px;

}

.large-bowl {

    position: absolute;

    width: 570px;
    height: 260px;

    right: 40px;
    bottom: 80px;

    border-radius: 0 0 50% 50%;

    background:
        linear-gradient(
            145deg,
            #292929,
            #050505
        );

    border: 2px solid #333;

    box-shadow: 0 40px 80px #000;

}

.large-rice {

    position: absolute;

    width: 500px;
    height: 200px;

    left: 35px;
    top: -95px;

    border-radius: 50%;

    background:
        radial-gradient(
            ellipse,
            #ffe38b,
            #c17a20,
            #5e3008
        );

}

.large-chicken {

    position: absolute;

    width: 120px;
    height: 75px;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #e46722,
            #5a1b08
        );

    z-index: 4;

}

.large-chicken.a {
    left: 130px;
    top: -55px;
}

.large-chicken.b {
    left: 260px;
    top: -80px;
}

.large-chicken.c {
    left: 350px;
    top: -30px;
}

.large-onion {

    position: absolute;

    width: 100px;
    height: 15px;

    background: #e9a9b7;

    border-radius: 50%;

    top: 10px;
    left: 230px;

    transform: rotate(20deg);

}

.large-steam {

    position: absolute;

    right: 300px;
    top: 60px;

    width: 50px;
    height: 300px;

    border-left: 6px solid rgba(255,255,255,.1);

    border-radius: 50%;

    filter: blur(5px);

    animation: steam 4s infinite;

}


/* ================= MENU ================= */

.menu {

    background:

        radial-gradient(
            circle at center,
            #191207,
            #050505 65%
        );

}

.heading {

    text-align: center;

    max-width: 750px;

    margin: auto;

}

.heading h2 {

    font-family: Cinzel;

    font-size: clamp(35px,5vw,65px);

    margin-top: 20px;

}

.heading p {

    color: #777;

    margin-top: 20px;

}

.filters {

    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 10px;

    margin: 60px 0 45px;

}

.filter {

    background: transparent;

    border: 1px solid #333;

    color: #999;

    padding: 12px 20px;

    font-size: 9px;

    letter-spacing: 2px;

    cursor: pointer;

}

.filter.active,
.filter:hover {

    border-color: var(--gold);

    color: var(--gold);

}

.menu-grid {

    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 15px;

}

.menu-card {

    min-height: 190px;

    padding: 30px;

    background:

        linear-gradient(
            135deg,
            rgba(255,255,255,.06),
            rgba(255,255,255,.01)
        );

    border: 1px solid rgba(255,255,255,.08);

    transition: .4s;

}

.menu-card:hover {

    transform: translateY(-8px);

    border-color: var(--gold);

}

.menu-card small {

    color: #555;

}

.menu-card h3 {

    font-family: Cinzel;

    margin-top: 25px;

    font-size: 17px;

}

.menu-card p {

    color: #777;

    font-size: 11px;

    margin-top: 8px;

}

.menu-card strong {

    display: block;

    color: var(--gold);

    font-size: 20px;

    margin-top: 20px;

}


/* ================= ORDER ================= */

.order-section {

    text-align: center;

    padding: 120px 7%;

    background: #080808;

}

.order-section h2 {

    font-family: Cinzel;

    font-size: clamp(45px,6vw,80px);

    margin: 20px 0 50px;

}

.order-section h2 span {

    color: var(--red2);

}

.order-grid {

    max-width: 1000px;

    margin: auto;

    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 15px;

}

.order-card {

    min-height: 200px;

    padding: 35px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    background: #111;

    border: 1px solid #333;

    color: white;

    transition: .4s;

}

.order-card:hover {

    transform: translateY(-8px);

    border-color: var(--gold);

}

.order-card small {

    letter-spacing: 3px;

    color: #888;

}

.order-card strong {

    font-family: Cinzel;

    font-size: 30px;

    margin: 12px 0;

}

.order-card span {

    color: #777;

    font-size: 10px;

}

.order-card.zomato {

    background: #21080b;

    border-color: #68131b;

}

.order-card.whatsapp {

    background: #071c12;

    border-color: #155c3b;

}


/* ================= GALLERY ================= */

.gallery {

    background: #050505;

}

.gallery-grid {

    max-width: 1200px;

    margin: 60px auto 0;

    display: grid;

    grid-template-columns: 2fr 1fr;

    grid-template-rows: 250px 250px;

    gap: 15px;

}

.gallery-box {

    position: relative;

    overflow: hidden;

    background:

        radial-gradient(
            circle,
            #432609,
            #090909
        );

    border: 1px solid #222;

}

.gallery-box.big {

    grid-row: span 2;

}

.gallery-box h3 {

    position: absolute;

    left: 25px;
    bottom: 20px;

    font-family: Cinzel;

    letter-spacing: 2px;

    z-index: 10;

}

.gallery-biryani {

    position: absolute;

    width: 420px;
    height: 200px;

    left: 50%;
    top: 45%;

    transform: translate(-50%,-50%);

}

.gb-rice {

    position: absolute;

    width: 400px;
    height: 160px;

    border-radius: 50%;

    background:
        radial-gradient(
            ellipse,
            #ffe08b,
            #b96c15,
            #5b2908
        );

}

.gb-chicken {

    position: absolute;

    width: 80px;
    height: 55px;

    background: #a33a10;

    border-radius: 50%;

    z-index: 5;

}

.gb-chicken.one {
    left: 90px;
    top: 50px;
}

.gb-chicken.two {
    left: 180px;
    top: 30px;
}

.gb-chicken.three {
    left: 260px;
    top: 65px;
}

.fake-noodles {

    position: absolute;

    inset: 40px;

}

.fake-noodles span {

    position: absolute;

    width: 220px;
    height: 7px;

    background: #d99b29;

    border-radius: 50%;

    transform: rotate(
        calc(var(--r) * 1deg)
    );

}

.fake-noodles span:nth-child(1) {
    top: 20px;
    left: 20px;
    transform: rotate(10deg);
}

.fake-noodles span:nth-child(2) {
    top: 55px;
    left: 40px;
    transform: rotate(-7deg);
}

.fake-noodles span:nth-child(3) {
    top: 90px;
    left: 15px;
    transform: rotate(8deg);
}

.fake-noodles span:nth-child(4) {
    top: 125px;
    left: 45px;
    transform: rotate(-5deg);
}

.fake-noodles span:nth-child(5) {
    top: 160px;
    left: 20px;
    transform: rotate(8deg);
}

.fake-rice {

    position: absolute;

    width: 250px;
    height: 130px;

    border-radius: 50%;

    background:
        radial-gradient(
            ellipse,
            #f2d47a,
            #9b5d14
        );

    left: 50%;
    top: 45%;

    transform: translate(-50%,-50%);

}

.fake-rice span {

    position: absolute;

    width: 40px;
    height: 12px;

    border-radius: 50%;

    background: #fff0a5;

}

.fake-rice span:nth-child(1) {
    left: 40px;
    top: 35px;
}

.fake-rice span:nth-child(2) {
    left: 100px;
    top: 60px;
}

.fake-rice span:nth-child(3) {
    left: 160px;
    top: 30px;
}

.fake-rice span:nth-child(4) {
    left: 120px;
    top: 90px;
}


/* ================= LOCATION ================= */

.location {

    display: grid;

    grid-template-columns: 1fr 1fr;

    background: #090909;

}

.location-info {

    padding: 120px 10%;

}

.location-info h2 {

    font-family: Cinzel;

    font-size: clamp(50px,6vw,90px);

    line-height: .9;

    margin: 25px 0 50px;

}

.location-info h2 span {

    color: var(--red2);

}

.contact-item {

    padding: 20px 0;

    border-bottom: 1px solid #222;

}

.contact-item small {

    display: block;

    color: var(--gold);

    letter-spacing: 3px;

    font-size: 8px;

    margin-bottom: 8px;

}

.contact-item strong,
.contact-item a {

    color: #ddd;

    line-height: 1.6;

}

.contact-item a {

    font-size: 20px;

}

.contact-buttons {

    display: flex;

    gap: 15px;

    margin-top: 35px;

}

.map {

    position: relative;

    min-height: 600px;

}

.map iframe {

    width: 100%;
    height: 100%;

    min-height: 600px;

    border: 0;

    filter: grayscale(.8) contrast(1.1);

}

.map > a {

    position: absolute;

    right: 20px;
    bottom: 20px;

    background: var(--gold);

    color: #000;

    padding: 14px 20px;

    font-size: 9px;

    letter-spacing: 2px;

}


/* ================= FINAL ================= */

.final {

    text-align: center;

    padding: 160px 7%;

    background:

        radial-gradient(
            circle,
            #300a0e,
            #050505 60%
        );

}

.final h2 {

    font-family: Cinzel;

    font-size: clamp(55px,9vw,120px);

    line-height: .9;

    margin: 25px 0 45px;

}

.final h2 span {

    color: var(--red2);

}


/* ================= FOOTER ================= */

footer {

    text-align: center;

    padding: 80px 7% 30px;

    background: #020202;

    border-top: 1px solid #222;

}

.footer-logo {

    width: 65px;
    height: 65px;

    border: 1px solid var(--gold);

    border-radius: 50%;

    margin: auto;

    display: flex;

    align-items: center;
    justify-content: center;

    font-family: Cinzel;

    color: var(--gold);

}

footer h3 {

    font-family: Cinzel;

    letter-spacing: 4px;

    margin-top: 20px;

}

footer > p {

    color: var(--red2);

    font-size: 9px;

    letter-spacing: 3px;

    margin-top: 8px;

}

.footer-links {

    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 30px;

    margin: 40px 0;

}

.footer-links a {

    color: #777;

    font-size: 9px;

    letter-spacing: 2px;

}

.designer {

    padding: 30px;

    border-top: 1px solid #1b1b1b;

    border-bottom: 1px solid #1b1b1b;

}

.designer small {

    display: block;

    color: #555;

    letter-spacing: 3px;

    font-size: 8px;

}

.designer strong {

    display: block;

    color: var(--gold);

    font-family: Cinzel;

    letter-spacing: 3px;

    margin-top: 10px;

}

.copyright {

    color: #444;

    font-size: 8px;

    margin-top: 30px;

}


/* ================= WHATSAPP ================= */

.floating-whatsapp {

    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 60px;
    height: 60px;

    border-radius: 50%;

    background: #16a05d;

    color: white;

    display: flex;

    align-items: center;
    justify-content: center;

    font-size: 10px;

    font-weight: bold;

    z-index: 999;

    box-shadow: 0 10px 30px #000;

}


/* ================= RESPONSIVE ================= */

@media(max-width:900px) {

    .navbar nav,
    .nav-order {

        display: none;

    }

    .mobile-button {

        display: block;

    }

    .hero-content {

        width: 100%;

    }

    .hero-food {

        opacity: .35;

        width: 700px;

        right: -300px;

    }

    .about {

        grid-template-columns: 1fr;

    }

    .menu-grid {

        grid-template-columns: repeat(2,1fr);

    }

    .order-grid {

        grid-template-columns: 1fr;

    }

    .location {

        grid-template-columns: 1fr;

    }

}

@media(max-width:600px) {

    .navbar {

        height: 75px;

        padding: 0 5%;

    }

    .mobile-menu {

        top: 75px;

    }

    .logo-area strong {

        font-size: 9px;

    }

    .logo-area small {

        font-size: 5px;

    }

    .hero {

        padding: 130px 6% 70px;

    }

    .hero h1 {

        font-size: 53px;

        letter-spacing: -3px;

    }

    .hero h2 {

        font-size: 20px;

    }

    .hero-food {

        width: 650px;

        right: -350px;

        bottom: 0;

        opacity: .3;

    }

    .hero-buttons {

        flex-direction: column;

        width: 220px;

    }

    .strip {

        flex-wrap: wrap;

        padding: 20px;

        gap: 12px;

        font-size: 7px;

    }

    .section {

        padding: 80px 6%;

    }

    .stats {

        gap: 20px;

    }

    .menu-grid {

        grid-template-columns: 1fr;

    }

    .gallery-grid {

        display: flex;

        flex-direction: column;

    }

    .gallery-box {

        min-height: 280px;

    }

    .large-biryani {

        opacity: .25;

        right: -250px;

    }

    .location-info {

        padding: 80px 6%;

    }

    .contact-buttons {

        flex-direction: column;

    }

    .map,
    .map iframe {

        min-height: 450px;

    }

}
