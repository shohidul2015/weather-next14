import { NextRequest, NextResponse } from "next/server";

//localhost:3000/api/weather
export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  /* const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon"); */ 
  
  let url = "";
  const latitude = 23.78200975318151; // Replace with actual latitude
  const longitude = 90.40936718594091; // Replace with actual longitude 
  const apiKey = 'c03e6192fc684d592ad5a7f69553cfb9';
 /*  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=" +
      "c03e6192fc684d592ad5a7f69553cfb9";
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c03e6192fc684d592ad5a7f69553cfb9`;
  } */

    if (address) {
        url =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          address +
          "&appid=" +
          "c03e6192fc684d592ad5a7f69553cfb9";
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      }
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  return NextResponse.json({ data });
}

//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}