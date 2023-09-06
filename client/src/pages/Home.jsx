import React from "react";
import "../styles/home.css";
import BANNER from "../assets/banner.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="banner_container">
        <section class="banner">
          <div class="main_content">
            <h3>Como trabajar en casa...</h3>

            <p>
              En FS-BOOKING , entendemos que cada negocio es único y tiene
              necesidades específicas en cuanto a espacio de oficina . Es por
              eso que estamos comprometidos a proporcionar soluciones flexibles
              que se adapten a tu visión y a tu presupuesto. Ya seas un
              emprendedor en busca de un lugar acogedor para comenzar tu sueño
              empresarial o una empresa consolidada que busca expandirse,
              estamos aquí para ayudarte a encontrar el espacio perfecto.
            </p>
          </div>

          <img class="img" src={BANNER} alt="banner office booking" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
