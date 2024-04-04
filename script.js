
:root {
    --color-primary: #123456;
    --color-secondary: #FFF;
    --azul-royal: #144480;
    --fundo-card-timer: rgba(20, 68, 128, 0.30);
    --lils: #B872FF;
    --linear-botes: linear-gradient(180deg, #B872FF 0%, #144480 100%);
}

[data-contexto="foco"] {
    --main-bg-color: linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%);
}

[data-contexto="descanso-curto"] {
    --main-bg-color: linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%);
}

[data-contexto="descanso-longo"] {
    --main-bg-color: linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%);
}

* {
    box-sizing: border-box;
    max-width: 100%;
}

html {
    background: var(--main-bg-color);
    min-height: 100vh;
    font-size: 10px;
}

body {
    min-height: 100vh;
    background: url("/imagens/pattern.png");
    background-size: cover;
    background-repeat: no-repeat;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Unbounded', cursive;
}

.app__logo-figure {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
}

.app__section-banner-container {
    width: 99rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    flex-wrap: wrap;
}

.app__title {
    line-height: 150%;
    font-size: 5.2rem;
    font-style: normal;
    color: var(--color-secondary);
    font-weight: 200;
    max-width: 46rem;
}

.app__title-strong {
    font-weight: 600;
}

.app__section-card-container {
    display: flex;
    justify-content: center;
}

.app__card {
    border-radius: 3.2rem;
    border: 0.2rem solid var(--azul-royal);
    background: var(--fundo-card-timer);
    padding: 2.4rem;
    margin: 8rem 0;
    width: 59rem;
    max-width: 90%;
}

.app__card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
}

.app__card-button {
    font-family: Montserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    background: none;
    padding: 0.8rem;
    color: var(--color-secondary);
    border: none;
    cursor: pointer;
    outline: inherit;
}

.app__card-button.active {
    border-radius: 0.8rem;
    background: var(--azul-royal);
    font-weight: 600;
}

.app__card-timer {
    color: var(--color-secondary);
    text-align: center;
    font-family: Unbounded;
    font-size: 12rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 3.2rem;
    text-align: center;
}

.app__card-list-label {
    color: var(--color-secondary);
    font-family: Montserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
}

.app__card-primary-button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.app__card-primary-button {
    padding: 0.8rem;
    width: 12rem;
    color: var(--color-secondary);
    border: none;
    cursor: pointer;
    outline: inherit;
    border-radius: 3.2rem;
    background: var(--linear-botes);
    margin-top: 3.2rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.app__footer {
    display: flex;
    width: 100%;
    padding: 2.8rem 6rem;
    justify-content: center;
    align-items: center;
    background: #010B15;
}

.app__footer-text {
    color: rgba(182, 182, 182, 0.8);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}

/* toggle */
.toggle {
    cursor: pointer;
    display: inline-block;
}

.toggle-switch {
    display: inline-block;
    background: #ccc;
    border-radius: 1.6rem;
    width: 5.8rem;
    height: 3.2rem;
    position: relative;
    vertical-align: middle;
    transition: background 0.25s;
}

.toggle-switch:before, .toggle-switch:after {
    content: "";
}

.toggle-switch:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    transition: left 0.25s;
}

.toggle:hover .toggle-switch:before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
}

.toggle-checkbox:checked + .toggle-switch {
    background: var(--lils);
}

.toggle-checkbox:checked + .toggle-switch:before {
    left: 3rem;
}

.toggle-checkbox {
    position: absolute;
    visibility: hidden;
}

/* fim - toggle */

/* Para Tablets */
@media (max-width: 1024px) and (min-width: 768px) {
    .app__section-banner-container {
        width: 48rem;
    }
}

/* Para Celulares */
@media (max-width: 767px) {
    .app__section-banner-container {
        width: 32rem;
    }

    .app__title {
        font-size: 2.6rem;
    }

    .app__card-timer {
        font-size: 6rem;
    }
}
