import React, { useState } from "react";

function Sport() {
  const [display, setDisplay] = useState("div-info");

  const closeCard = () => {
    setDisplay("div-info-hidden");
  };

  const openCard = () => {
    setDisplay("div-info");
  };

  return (
    <div>
      <h2 className="title-text">Факти спорту</h2>
      <ul className="flex div-info-gap">
        <li>
          <div className={display}>
            <h3 className="title-content">Тренери</h3>
            <p className="text">
              Чи знаєте ви, що тренери поплескують по плечу своїх підопічних не
              просто так? І плавці перед виступом плескають себе по плечах. Цей
              маневр покращує циркуляцію крові та знімає нервову напругу.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Олімпійські кільця</h3>
            <p className="text">
              Олімпійські кільця символізують п'ять континентів. Кольори їх
              невипадкові — саме червоний, синій, чорний, зелений і жовтий
              зустрічаються найчастіше в символіці держав світу.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Баскетбол</h3>
            <p className="text">
              Першими в баскетбол почали грати американські студенти. Вони
              закидали м'яч у кошик з-під персиків. Кошик мав дно, тому студенти
              змушені були щоразу залазити на драбину, щоб дістати з кошика м'яч
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Йохан Риндт</h3>
            <p className="text">
              Австрієць Йохан Риндт в 1970 році став чемпіоном світу в гонках
              Формули-1… посмертно. Лідируючи в загальній таблиці, вір розбився
              під час Гран-прі Італії, за чотири етапи до кінця сезону. Але
              зараблених балів вистачило для отримання чемпіонського  титула.
            </p>
          </div>
        </li>
      </ul>
      <ul className="flex div-info-gap">
        <li>
          <div className={display}>
            <h3 className="title-content">плавці-синхроністи</h3>
            <p className="text">
              Для того, щоб плавці-синхроністи чули музику під час виступу, в
              басейн під водою вбудовані спеціальні динаміки.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Фізична культура</h3>
            <p className="text">
              Витоки фізичної культури і спорту виявлені ще в 5-4 тисячоліттях
              до нашої ери. Найпершими спортивними заняттями були такі: стрільба
              з лука, фехтування, кулачний бій, скачки верхи, метання списа,
              гонки на колісницях і так далі.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Ендорфіни – ключові гравці</h3>
            <p className="text">
              Одним з головних факторів, які впливають на наше емоційне
              становище під час занять спортом, є ендорфіни. Ці “гормони щастя”
              виробляються організмом під час фізичної активності та допомагають
              покращити настрій та знизити рівень стресу.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Валерій Лях</h3>
            <p className="text">
              У 1972 році український гімнаст Валерій Лях виконав унікальний
              трюк – потрійну обертову сальто зі збереженням позиції стоячи. Цей
              феноменальний вчинок досі залишається безпрецедентним у світі
              гімнастики.
            </p>
          </div>
        </li>
      </ul>
      <div className="flex div-btn">
        <button onClick={closeCard} className="btn">
          Закрити
        </button>
        <button onClick={openCard} className="btn">
          Відкрити
        </button>
      </div>
    </div>
  );
}

export default Sport;
