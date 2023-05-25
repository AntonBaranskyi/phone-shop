import React from "react";
import "./descr.scss";

export default function SinglePhoneDescr({ name, RAM, memory, camera }) {
  return (
    <div>
      <h4>Характеристики:</h4>
      <div className="descr">
        <ul>
          <li>Назва : {name}</li>
          <li>Оперативна пам'ять : {RAM}</li>
          <li>Пам'ять: {memory}</li>
          <li>Камера: {camera}</li>

          <li>Назва : {name}</li>
          <li>Оперативна пам'ять : {RAM}</li>
          <li>Пам'ять: {memory}</li>
          <li>Камера: {camera}</li>
        </ul>
      </div>
    </div>
  );
}
