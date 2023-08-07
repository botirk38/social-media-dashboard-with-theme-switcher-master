import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";


import "../App.css";

import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

import { useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";



export default function Dashboard() {

  const {darkMode, setDarkMode} = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
    

  const handleSliderChange = (e) => {
    setDarkMode(e.target.value === '1'); 
  };


  return (
    <main className="font-body container flex-col min-w-full ps-4 pe-7 dark:bg-dark-very-dark-blue-bg min-h-screen ">
      <section className="container grid grid-rows-2 grid-cols-1 divide-y dark:divide-dark-dark-desaturated-blue-card-bg sm:grid-cols-2 grid-rows-1 mr-0">
        <div className="container flex-col sm:flex pt-6 pb-4 min-h-max">
          <h1 className="font-bold text-2xl dark:text-dark-white-text">Social Media Dashboard</h1>
          <p className="text-light-dark-grayish-blue-text font-bold dark:text-dark-desaturated-blue-text">Total Followers: 23,004</p>
        </div>

        <div className="container flex justify-between py-6 sm:justify-end ">
          <span className="text-light-dark-grayish-blue-text font-bold dark:text-dark-desaturated-blue-text sm:px-4">Dark Mode</span>
          <input 
            type="range" 
            min="0" 
            max="1" 
            value={darkMode ? '1' : '0'} 
            className={darkMode ? 'slider-input slider-input-dark' : 'slider-input'}
            onChange={handleSliderChange}
          />
        </div>

      </section>

      <section className="grid  grid-cols-1 grid-rows-4 gap-10 my-6 place-items-center min-h-max sm:grid-cols-3 sm:grid-rows-2 gap-6">
        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-full  border-t-facebook border-t-4 shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex my-2 ">
            <img src={facebookIcon} alt="Facebook Icon" className="mx-2" />
            <p className="font-bold text-light-dark-grayish-blue-text">@nathanf</p>
          </div>
          <h1 className="text-6xl font-bold mt-3 text-light-very-dark-blue-text mb-1 dark:text-dark-white-text">1987</h1>
          <p className="tracking-widest text-light-dark-grayish-blue-text mb-2 dark:dark-desaturated-blue-text">FOLLOWERS</p>

          <div className=" flex my-2">
            <img src={iconUp} alt="Icon Up" className="w-min-content mr-1 object-scale-down" />
            <p className="text-sm text-lime-green font-semibold">12 Today</p>
          </div>
        </div>

        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-full  border-t-twitter border-t-4 shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex my-2">
            <img src={twitterIcon} alt="Twitter Icon" />
            <p className="font-bold text-light-dark-grayish-blue-text ml-1">@nathanf</p>
          </div>

          <h1 className="text-6xl font-bold mt-3 text-light-very-dark-blue-text mb-1 dark:text-dark-white-text">1044</h1>
          <p className="tracking-widest text-light-dark-grayish-blue-text mb-2 dark:dark-desaturated-blue-text">FOLLOWERS</p>

          <div className="flex my-2">
            <img src={iconUp} alt="Icon Up" className="w-min-content mr-1 object-scale-down" />
            <p className="text-sm text-lime-green font-semibold">99 Today</p>
          </div>

        </div>

        <div className="insta-div grid place-items-center bg-light-light-gray w-full max-w-sm min-h-full  shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex my-2">
            <img src={instagramIcon} alt="Instagram Icon" />
            <p className="font-bold text-light-dark-grayish-blue-text ml-1">@nathanf</p>
          </div>

          <h1 className="text-6xl font-bold mt-3 text-light-very-dark-blue-text mb-1 dark:text-dark-white-text">11k</h1>
          <p className="tracking-widest text-light-dark-grayish-blue-text mb-2 dark:dark-desaturated-blue-text">FOLLOWERS</p>

          <div className="flex my-2">
            <img src={iconUp} alt="Icon Up" className="w-min-content mr-1 object-scale-down" />
            <p className="text-sm text-lime-green font-semibold">1099 Today</p>
          </div>

        </div>

        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-full border-t-youtube border-t-4  shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex my-2">
            <img src={youtubeIcon} alt="Youtube Icon" />
            <p className="font-bold text-light-dark-grayish-blue-text ml-1 ">@nathanf</p>
          </div>

          <h1 className="text-6xl font-bold mt-3 text-light-very-dark-blue-text mb-1 dark:text-dark-white-text">8239</h1>
          <p className="tracking-widest text-light-dark-grayish-blue-text mb-2 dark:dark-desaturated-blue-text">SUBSCRIBERS</p>

          <div className="flex my-2"> 
            <img src={iconDown} alt="Icon Down" className="w-min-content mr-1 object-scale-down" />
            <p className="text-sm text-bright-red font-semibold">144 Today</p>
          </div>
        </div>
      </section>
      

      <h1 className="text-light-dark-grayish-blue-text text-2xl font-bold p-2 dark:text-dark-white-text"> Overview - Today </h1>

      <section className="grid grid-rows-auto gap-10 my-6 place-items-center min-h-max max w-full sm:grid-cols-3 ">
        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-full  border-t-facebook border-t-4 shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Page Views</p>
            <img src={facebookIcon} alt="Facebook Icon" className="object-contain"/>
          </div>

          <div className="flex justify-between justify-items-start w-full ">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">87</h2>
            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-lime-green">3%</p>
              <img src={iconUp} alt="Icon Up" className="object-contain p-1" />
            </div>
          </div>
        </div>

        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-max-content  border-t-facebook border-t-4 shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Likes</p>
            <img src={facebookIcon} alt="Facebook Icon" className="object-contain" />
          </div>

          <div className="flex justify-between justify-items-start w-full">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">52</h2>

            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-bright-red">2%</p>
              <img src={iconDown} alt="Icon Up" className="object-contain p-1" />

            </div>
          </div>
        </div>

        <div className=" insta-div grid place-items-center bg-light-light-gray w-full max-w-sm min-h-full shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Likes</p>
            <img src={instagramIcon} alt="Instagram Icon" className="object-contain"/>
          </div>

          <div className="flex justify-between justify-items-start w-full">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">5462</h2>

            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-lime-green">2257%</p>
              <img src={iconUp} alt="Icon Up" className="object-contain p-1" />
            </div>

          </div>
        </div>

        <div className=" insta-div grid place-items-center bg-light-light-gray w-full max-w-sm min-h-max-content shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Profile Views</p>
            <img src={instagramIcon} alt="Instagram Icon" className="object-contain"/>
          </div>

          <div className="flex justify-between justify-items-start w-full">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">52k</h2>

            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-lime-green">1375%</p>
              <img src={iconUp} alt="Icon Up" className="object-contain p-1" />
            </div>

          </div>
        </div>

        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-max-content  border-t-twitter border-t-4 shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Retweets</p>
            <img src={twitterIcon} alt="Twitter Icon" className="object-contain" />
          </div>

          <div className="flex justify-between justify-items-start w-full">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">117</h2>

            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-lime-green">303%</p>
              <img src={iconUp} alt="Icon Up" className="object-contain p-1" />
            </div>
          </div>
        </div>


        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-max-content  border-t-twitter border-t-4 shadow-sm p-3  dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Likes</p>
            <img src={twitterIcon} alt="Twitter Icon"  className="object-contain"/>
          </div>

          <div className="flex justify-between justify-items-start w-full">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">507</h2>
            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-lime-green">553%</p>
              <img src={iconUp} alt="Icon Up" className="object-contain p-1" />
            </div>
          </div>
        </div>

        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-max-content  border-t-youtube border-t-4 shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Likes</p>
            <img src={youtubeIcon} alt="Youtube Icon " className="object-contain p-1" />
          </div>

          <div className="flex justify-between justify-items-start w-full">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">107</h2>
            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-bright-red">19%</p>
              <img src={iconDown} alt="Icon Down" className="object-contain p-1" />
            </div>
          </div>
        </div>

        <div className="grid place-items-center bg-light-light-gray w-full max-w-sm min-h-max-content  border-t-youtube border-t-4 shadow-sm p-3 dark:bg-dark-dark-desaturated-blue-card-bg">
          <div className="flex justify-between justify-items-start w-full">
            <p className="text-light-dark-grayish-blue-text text-lg font-bold p-1 dark:dark-desaturated-blue-text">Total Views</p>
            <img src={youtubeIcon} alt="Youtube Icon " className="object-contain p-1" />
          </div>

          <div className="flex justify-between justify-items-start w-full">
            <h2 className="text-4xl text-light-very-dark-blue-text font-bold dark:text-dark-white-text">1407</h2>
            <div className="grid place-content-center grid-cols-2 p-1">
              <p className="text-xs text-bright-red">12%</p>
              <img src={iconDown} alt="Icon Down" className="object-contain p-1" />
            </div>
          </div>
        </div>

      </section>

      </main>
  )
}