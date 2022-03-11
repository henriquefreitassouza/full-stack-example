import React, { useState, useEffect } from "react";
import { getApod } from "../../api";

function Home({ onLogout }) {
  const [apod, setApod] = useState([]);

  useEffect(async () => {
    const apodResult = await getApod();

    setApod([apodResult]);
  });

  return (
    <div>
      <button type="button" onClick={onLogout}>Sair</button>
      <h1>Olá!</h1>
      <p>Mensagem APOD de hoje</p>
      { apod.map((a) => {
        const {
          copyright,
          date,
          explanation,
          hdurl,
          media_type,
          service_version,
          title,
          url
        } = a;

        return (
          <div key={title}>
            <strong>{title}</strong>
            <img src={url} alt={title} />
            <time>{date}</time>
            <p>{explanation}</p>
          </div>
        )
      }) }
    </div>
  )
}

export default Home;
