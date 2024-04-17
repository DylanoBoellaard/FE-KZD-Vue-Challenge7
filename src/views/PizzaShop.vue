<template>
  <main>
    <div class="container">
      <div class="introduction">
        <h1 id="pageTitle">Menu</h1>
        <p id="pageDescription">
          Unique wood fired pizzas or be tempted by our pasta, antipasto, focaccias, salads and
          Brushetta dishes Relax in the friendly ambience as you enjoy the aromas of the wood ovens
          or sit al fresco and soak up the Mildura sunshine.
        </p>
      </div>
      <div class="pizzaContainer">
        <div class="pizza" id="pizza1">
          <img src="../assets/img/hawaii.jpg" alt="Pizza Hawaiian" />
          <div class="information">
            <h3 class="title">Hawaiian</h3>
            <p class="description">Tomato sauce, mozzarella, ham & pineapple</p>
            <p class="price">$16.8</p>
            <a href="#" class="button">View</a>
          </div>
        </div>
        <div class="pizza" id="pizza2">
          <img src="../assets/img/chicken.jpg" alt="Pizza Hawaiian" />
          <div class="information">
            <h3 class="title">Chicken</h3>
            <p class="description">Tomato sauce, mozzarella, chicken, pineapple* & bbq sauce</p>
            <p class="price">$17.75</p>
            <a href="#" class="button">View</a>
          </div>
        </div>
        <div class="pizza" id="pizza3">
          <img src="../assets/img/salami.jpg" alt="Pizza Hawaiian" />
          <div class="information">
            <h3 class="title">Salami</h3>
            <p class="description">Tomato sauce, mozzarella & mild salami</p>
            <p class="price">$15.55</p>
            <a href="#" class="button">View</a>
          </div>
        </div>
        <div class="pizza" id="pizza4">
          <img src="../assets/img/original.jpg" alt="Pizza Original" />
          <div class="information">
            <h3 class="title">Original</h3>
            <p class="description">Tomato sauce, mozzarella & oregano</p>
            <p class="price">$18.95</p>
            <a href="#" class="button">View</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
/* Colours */
$lightPurple: rgb(150, 102, 246);

/* Roboto */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@media (min-width: 1024px) {
  body {
    font-family: 'Open Sans';
    background-color: wheat;
    .container {
      .introduction {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1,
        h3 {
          font-family: 'Roboto';
        }

        h1#pageTitle {
          color: $lightPurple;
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
        }

        p#pageDescription {
          width: 40vw;
        }
      }

      .pizzaContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem 2rem;
        margin-top: 2rem;

        .pizza {
          display: flex;
          flex-direction: row;
          max-width: 40vw;

          img {
            width: 50%;
            object-fit: contain;
          }

          .information {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 2rem;

            h3.title {
              font-size: 1.75rem;
            }

            p {
              font-size: 1.35rem;
            }

            p.price {
              color: $lightPurple;
              margin-left: 0.5rem;
            }
            a.button {
                margin-bottom: 0.5rem;
                border: solid 2px lightgrey;
                width: 30%;
                text-align: center;
                color: var(--color-text);
            }
          }
        }
      }
    }
  }
}
</style>
