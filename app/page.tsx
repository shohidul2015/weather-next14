"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './page.module.css';


function getCurrentDate(){

}

export default function Home() {

  const date = getCurrentDate();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("dhaka");

  async function fetchData(cityName:string) {

    try {
      const response = await fetch("http://localhost:3000/api/weather?address=" +cityName);

      const jsonData = (await response.json()).data;
      setWeatherData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    fetchData("dhaka");
  }, []);

  return (
    <main className={styles.main}>
      <article className={styles.widget}>

        <h1>{weatherData?.name}</h1>
      </article>

    </main>
  );
}
