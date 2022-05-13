import React from "react";
import styles from "./PromoText.module.css";

function PromoText() {
  return (
    <section className={styles["promo-text"]}>
      <h2>Онлайн Суши Ресторан Япона Кухня</h2>
      <p>
        Япона Кухня - это онлайн суши-ресторан,вкотором любимые сушиисашими,
        роллыи другие блюда национальной японской кухни делает команда
        профессиональных поваров
      </p>
      <p>
        Быстрая работаикачественная продукция,атакже самые настоящие компоненты
        придают хороший вкус блюдам, дарят наслаждение от трапезы.
      </p>
    </section>
  );
}

export default PromoText;
