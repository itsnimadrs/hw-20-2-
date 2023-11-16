import React, { useState } from "react";
import axios from "axios";

export default function Body() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherData = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });

      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("City not found. Please enter a valid city.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData();
  };

  return (
    <div className="bg-[#343D4B] w-full h-screen">
      <div className="flex ">
        <input
          onSubmit={handleSubmit}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-4/6 text-white flex justify-center h-auto ml-[10rem] mt-10 p-4 rounded-md bg-[#343D4B] border"
          type="text"
          placeholder="search city"
        />
        <button
          className="rounded-md  ml-4 p-4 bg-slate-400 mt-10"
          type="submit"
        >
          Get Weather
        </button>
      </div>
      <div className="flex mt-16 ml-[10rem]">
        {weatherData && (
          <div className="w-[25rem] h-[30rem] ">
            <img
              className="w-[25rem] h-[30rem]"
              src="/Rectangle 2 (1).png"
              alt="sky"
            />
            <div className="flex flex-col text-white -mt-[29rem] ml-4">
              <h3 className="font-bold text-3xl">{weatherData.name}</h3>
              <p>{new Date().toDateString()}</p>
              <div className="flex mt-4 ">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.15625 11.25C8.15625 8.29873 10.5487 5.90625 13.5 5.90625C16.4513 5.90625 18.8437 8.29873 18.8437 11.25C18.8437 14.2013 16.4513 16.5938 13.5 16.5938C10.5487 16.5938 8.15625 14.2013 8.15625 11.25ZM13.5 7.59375C11.4807 7.59375 9.84375 9.23071 9.84375 11.25C9.84375 13.2693 11.4807 14.9062 13.5 14.9062C15.5193 14.9062 17.1562 13.2693 17.1562 11.25C17.1562 9.23071 15.5193 7.59375 13.5 7.59375Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.96491 9.96396C4.36352 5.12802 8.4047 1.40625 13.257 1.40625H13.743C18.5953 1.40625 22.6365 5.12802 23.0351 9.96396C23.2492 12.5617 22.4468 15.1413 20.7968 17.1591L15.4046 23.7537C14.4202 24.9575 12.5798 24.9575 11.5954 23.7537L6.20321 17.1591C4.55322 15.1413 3.75077 12.5617 3.96491 9.96396ZM13.257 3.09375C9.28293 3.09375 5.97317 6.14191 5.6467 10.1026C5.46849 12.2647 6.13634 14.4115 7.50958 16.091L12.9018 22.6855C13.211 23.0636 13.789 23.0636 14.0982 22.6855L19.4904 16.091C20.8637 14.4115 21.5315 12.2647 21.3533 10.1026C21.0268 6.14191 17.7171 3.09375 13.743 3.09375H13.257Z"
                    fill="white"
                  />
                </svg>
                <p>{`${weatherData.name}, ${weatherData.sys.country}`}</p>
              </div>
            </div>
            <div className="ml-4 mt-[8rem]">
              <svg
                width="95"
                height="95"
                viewBox="0 0 95 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.5 4.94792C49.1396 4.94792 50.4687 6.27707 50.4687 7.91667V11.875C50.4687 13.5146 49.1396 14.8438 47.5 14.8438C45.8604 14.8438 44.5312 13.5146 44.5312 11.875V7.91667C44.5312 6.27707 45.8604 4.94792 47.5 4.94792Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.7395 47.5C24.7395 34.9298 34.9297 24.7396 47.5 24.7396C60.0702 24.7396 70.2604 34.9298 70.2604 47.5C70.2604 60.0702 60.0702 70.2604 47.5 70.2604C34.9297 70.2604 24.7395 60.0702 24.7395 47.5ZM47.5 30.6771C38.2089 30.6771 30.677 38.209 30.677 47.5C30.677 56.791 38.2089 64.3229 47.5 64.3229C56.791 64.3229 64.3229 56.791 64.3229 47.5C64.3229 38.209 56.791 30.6771 47.5 30.6771Z"
                  fill="white"
                />
                <path
                  d="M21.6096 17.4112C20.4502 16.2519 18.5705 16.2519 17.4111 17.4112C16.2518 18.5706 16.2518 20.4503 17.4111 21.6097L20.2101 24.4086C21.3695 25.568 23.2492 25.568 24.4086 24.4086C25.5679 23.2493 25.5679 21.3696 24.4086 20.2102L21.6096 17.4112Z"
                  fill="white"
                />
                <path
                  d="M90.052 47.5C90.052 49.1396 88.7229 50.4688 87.0833 50.4688H83.125C81.4854 50.4688 80.1562 49.1396 80.1562 47.5C80.1562 45.8604 81.4854 44.5312 83.125 44.5312H87.0833C88.7229 44.5312 90.052 45.8604 90.052 47.5Z"
                  fill="white"
                />
                <path
                  d="M77.5887 21.6096C78.7481 20.4503 78.7481 18.5706 77.5887 17.4112C76.4294 16.2518 74.5497 16.2518 73.3903 17.4112L70.5913 20.2102C69.432 21.3695 69.432 23.2492 70.5913 24.4086C71.7507 25.568 73.6304 25.568 74.7898 24.4086L77.5887 21.6096Z"
                  fill="white"
                />
                <path
                  d="M47.5 80.1562C49.1396 80.1562 50.4687 81.4854 50.4687 83.125V87.0833C50.4687 88.7229 49.1396 90.0521 47.5 90.0521C45.8604 90.0521 44.5312 88.7229 44.5312 87.0833V83.125C44.5312 81.4854 45.8604 80.1562 47.5 80.1562Z"
                  fill="white"
                />
                <path
                  d="M74.79 70.5914C73.6307 69.4321 71.751 69.4321 70.5916 70.5914C69.4322 71.7508 69.4322 73.6305 70.5916 74.7899L73.3905 77.5888C74.5499 78.7482 76.4296 78.7482 77.589 77.5888C78.7484 76.4295 78.7484 74.5498 77.589 73.3904L74.79 70.5914Z"
                  fill="white"
                />
                <path
                  d="M14.8437 47.5C14.8437 49.1396 13.5146 50.4688 11.875 50.4688H7.91663C6.27703 50.4688 4.94788 49.1396 4.94788 47.5C4.94788 45.8604 6.27703 44.5312 7.91663 44.5312H11.875C13.5146 44.5312 14.8437 45.8604 14.8437 47.5Z"
                  fill="white"
                />
                <path
                  d="M24.4083 74.7898C25.5677 73.6305 25.5677 71.7508 24.4083 70.5914C23.2489 69.432 21.3692 69.432 20.2098 70.5914L17.4109 73.3903C16.2515 74.5497 16.2515 76.4294 17.4109 77.5888C18.5703 78.7482 20.45 78.7482 21.6093 77.5888L24.4083 74.7898Z"
                  fill="white"
                />
              </svg>
              <div className="text-3xl text-white ml-2 font-bold">
                {weatherData.main.temp} °C
              </div>
              <p className="text-3xl text-white ml-2 font-bold">
                {" "}
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>
        )}
        <div className="bg-[#222831] w-[22rem] h-[29rem] mt-2 rounded-sm text-white">
          <div className="flex ml-2 mt-4 font-bold text-xl">
            <h1>PRECIPITATION</h1>
            <p className="ml-[10rem]">0%</p>
          </div>
          <div className="flex ml-2 mt-4 font-bold text-xl">
            <h1>HUMIDITY</h1>
            <p className="ml-[10rem]">42%</p>
          </div>
          <div className="flex ml-2 mt-4 font-bold text-xl">
            <h1>WIND</h1>
            <p className="ml-[10rem]">3 km/h</p>
          </div>
          <div className="bg-white w-[6rem] h-[11rem] rounded-lg m-10">
            <div className="flex flex-col p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
              >
                <path
                  d="M27.5 2.86458C28.4492 2.86458 29.2187 3.63409 29.2187 4.58333V6.875C29.2187 7.82424 28.4492 8.59375 27.5 8.59375C26.5508 8.59375 25.7812 7.82424 25.7812 6.875V4.58333C25.7812 3.63409 26.5508 2.86458 27.5 2.86458Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3229 27.5C14.3229 20.2225 20.2225 14.3229 27.5 14.3229C34.7775 14.3229 40.6771 20.2225 40.6771 27.5C40.6771 34.7775 34.7775 40.6771 27.5 40.6771C20.2225 40.6771 14.3229 34.7775 14.3229 27.5ZM27.5 17.7604C22.121 17.7604 17.7604 22.121 17.7604 27.5C17.7604 32.879 22.121 37.2396 27.5 37.2396C32.879 37.2396 37.2396 32.879 37.2396 27.5C37.2396 22.121 32.879 17.7604 27.5 17.7604Z"
                  fill="black"
                />
                <path
                  d="M12.5108 10.0802C11.8396 9.40897 10.7514 9.40897 10.0802 10.0802C9.40895 10.7514 9.40895 11.8396 10.0802 12.5109L11.7006 14.1313C12.3718 14.8025 13.4601 14.8025 14.1313 14.1313C14.8025 13.4601 14.8025 12.3718 14.1313 11.7006L12.5108 10.0802Z"
                  fill="black"
                />
                <path
                  d="M52.1354 27.5C52.1354 28.4492 51.3659 29.2187 50.4167 29.2187H48.125C47.1758 29.2187 46.4062 28.4492 46.4062 27.5C46.4062 26.5508 47.1758 25.7812 48.125 25.7812H50.4167C51.3659 25.7812 52.1354 26.5508 52.1354 27.5Z"
                  fill="black"
                />
                <path
                  d="M44.9198 12.5108C45.591 11.8396 45.591 10.7514 44.9198 10.0802C44.2486 9.40895 43.1604 9.40895 42.4891 10.0802L40.8687 11.7006C40.1975 12.3718 40.1975 13.4601 40.8687 14.1313C41.5399 14.8025 42.6281 14.8025 43.2994 14.1313L44.9198 12.5108Z"
                  fill="black"
                />
                <path
                  d="M27.5 46.4062C28.4492 46.4062 29.2187 47.1758 29.2187 48.125V50.4167C29.2187 51.3659 28.4492 52.1354 27.5 52.1354C26.5508 52.1354 25.7812 51.3659 25.7812 50.4167V48.125C25.7812 47.1758 26.5508 46.4062 27.5 46.4062Z"
                  fill="black"
                />
                <path
                  d="M43.2995 40.8687C42.6283 40.1975 41.54 40.1975 40.8688 40.8687C40.1976 41.5399 40.1976 42.6282 40.8688 43.2994L42.4893 44.9198C43.1605 45.5911 44.2488 45.5911 44.92 44.9198C45.5912 44.2486 45.5912 43.1604 44.92 42.4892L43.2995 40.8687Z"
                  fill="black"
                />
                <path
                  d="M8.59375 27.5C8.59375 28.4492 7.82424 29.2187 6.875 29.2187H4.58333C3.63409 29.2187 2.86458 28.4492 2.86458 27.5C2.86458 26.5508 3.63409 25.7812 4.58333 25.7812H6.875C7.82424 25.7812 8.59375 26.5508 8.59375 27.5Z"
                  fill="black"
                />
                <path
                  d="M14.1311 43.2994C14.8024 42.6282 14.8024 41.5399 14.1311 40.8687C13.4599 40.1975 12.3717 40.1975 11.7005 40.8687L10.08 42.4891C9.40879 43.1604 9.40879 44.2486 10.08 44.9198C10.7512 45.591 11.8395 45.591 12.5107 44.9198L14.1311 43.2994Z"
                  fill="black"
                />
              </svg>
              <p className="text-black  mt-4 px-2">Tue</p>
              <p className="text-black mt-4 px-2">30 °C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
