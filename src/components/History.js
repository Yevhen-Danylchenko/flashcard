import React, { useState } from "react";

function History() {
  const [display, setDisplay] = useState("div-info");

  const closeCard = () => {
    setDisplay("div-info-hidden");
  };

  const openCard = () => {
    setDisplay("div-info");
  };

  return (
    <div>
      <h2 className="title-text">Факти з історії</h2>
      <ul className="flex div-info-gap">
        <li>
          <div className={display}>
            <h3 className="title-content">Війна бродячої собаки</h3>
            <p className="text">
              1925 року собака перебіг через грецько-болгарський кордон, його
              господар, грецький солдат, пішов забрати пса і був застрелений. У
              відповідь на це Греція напала на Болгарію. Цей конфлікт називають
              «Війною бродячої собаки».
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Місто людей кіммерійських</h3>
            <p className="text">
              Городище, відоме під назвою «Дикий сад», існувало на території
              сучасного Миколаєва приблизно у 1250–925 рр. до н. е. Це було
              укріплене місто та порт, де працювали гончарні, металургійні
              майстерні, розбудовували житлові й культові споруди. Згадане в
              «Одіссеї» Гомера.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">
              Найстаріше місто на території України
            </h3>
            <p className="text">
              Білгород-Дністровський — це містечко на Одещині функціонує та є
              постійно заселеним вже щонайменше 2500 років. У античні часи воно
              називалося Тіра і було давньогрецькою колонією.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">
              Першим князем Русі, що мав слов’янське ім’я, був
            </h3>
            <p className="text">
              Святослав Хоробрий — перший князь Русі, який мав слов’янське ім’я.
              Імена його попередників — Ольга, Ігор, Олег, Аскольд — були
              скандинавського походження
            </p>
          </div>
        </li>
      </ul>
      <ul className="flex div-info-gap">
        <li>
          <div className={display}>
            <h3 className="title-content">Тризуб</h3>
            <p className="text">
              Зображення тризуба було особистим знаком князя Володимира
              Великого. Тризуб зображували на печатках князя та монетах.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Хто збудував першу Запорізьку Січ</h3>
            <p className="text">
              У 1551 р. польський король Сигізмунд ІІ надав князю Дмитру
              Вишневецькому посаду канівського та черкаського старости,
              довіривши йому охорону південного кордону держави. Дмитро
              Вишневецький об’єднав розрізнені козацькі загони та збудував
              укріплення за Дніпровими порогами на острові Мала Хортиця, яке і
              вважається першою Запорізькою Січчю.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">Як спершу називали чумаків</h3>
            <p className="text">
              Соленики — так спочатку називали чумаків, адже основою цього
              промислу, який існував на теренах України понад 350 років, було
              транспортування солі з Півдня, теренів Прикарпаття та Донеччини до
              центральних регіонів країни. Партачами називали нецехових
              ремісників. Товмачами — перекладачів у Війську Запорозькому.
              Харцизниками кликали розбійників.
            </p>
          </div>
        </li>
        <li>
          <div className={display}>
            <h3 className="title-content">
              Коли було вперше виконано гімн України
            </h3>
            <p className="text">
              Сербські друзі Павла Чубинського заспівали свою патріотичну пісню.
              Він того ж вечора написав вірш «Ще не вмерла Україна». Через рік,
              у 1863 р., композитор отець Михайло Вербицький написав до нього
              музику. А вже 10 березня 1865 р. на дні пам’яті Тараса Шевченка у
              м. Перемишль відбулося перше виконання гімну.
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

export default History;
