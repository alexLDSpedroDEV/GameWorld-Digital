"use client"

import React from "react";
import CarrocelComponts from "@/components/carrocel";
import Image from "next/image";


interface Slide {
  id: number;
  src: string;
  title: string;
  link: string;
  desc: string;
  value: any;
}



const Populares = () => {

    const slide: Slide[] = [
        {
            id: 0,
            src: "/popular/image1.jpg",
            title: "Counter-strike 2",
            link: "Empresa",
            desc: "Prince of Persia: The Lost Crown is an action-adventure game developed and published by Ubisoft, part of Prince of Persia series. It was released for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S on 18 January 2024, and received positive reviews from critics.",
            value: "Free",
            },
          {
            id: 1,
            src: "/popular/image2.jpg",
            title: "Valorant",
            link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj2xM7byoqFAxWIE60GHcOlDDwYABAAGgJwdg&ase=2&gclid=Cj0KCQjw-_mvBhDwARIsAA-Q0Q4zPJgupWUUv-FgtU2eru8lJuDeueXz3EYCmugix5QSJVEWV3aNq30aAo3NEALw_wcB&ohost=www.google.com&cid=CAESVuD2lOXiHN1xoFZY2WJDSp41QvvIGuka4PjXbUJEL0aMZozRiGxM6BIPTYCmBXxpjU-0Jmxv8Xpq4fdamfmC6RCHJYsi7nwS_kkkEN-krIyl5xaCjyfs&sig=AOD64_2takPhC7BFQSMg-G9VMmLZE2K1eg&q&nis=4&adurl&ved=2ahUKEwjM_r_byoqFAxUykJUCHS3uDdsQ0Qx6BAgHEAE",
            desc: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.",
            value: "Free",
          },
          {
            id: 2,
            src: "/popular/image3.jpg",
            title: "Call of Duty: Warzone 2.0",
            link: "https://www.callofduty.com/warzone",
            desc: "Call of Duty: Warzone is a free-to-play battle royale video game developed by Raven Software and Infinity Ward and published by Activision.",
            value: "Free",
          },
          {
            id: 3,
            src: "/popular/image4.jpg",
            title: "Overwatch 2",
            link: "https://overwatch.blizzard.com/",
            desc: "Overwatch 2 is a 2022 first-person shooter game developed and published by Blizzard Entertainment. As a sequel and replacement to the 2016 hero shooter Overwatch, the game intends a shared environment",
            value: 40,
          },
          {
            id: 4,
            src: "/popular/image4.jpg",
            title: "Overwatch 2",
            link: "https://overwatch.blizzard.com/",
            desc: "Overwatch 2 is a 2022 first-person shooter game developed and published by Blizzard Entertainment. As a sequel and replacement to the 2016 hero shooter Overwatch, the game intends a shared environment",
            value: 40,
          },
          {
            id: 0,
            src: "/popular/image1.jpg",
            title: "Counter-strike 2",
            link: "Empresa",
            desc: "Prince of Persia: The Lost Crown is an action-adventure game developed and published by Ubisoft, part of Prince of Persia series. It was released for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S on 18 January 2024, and received positive reviews from critics.",
            value: "Free",
            },
          {
            id: 1,
            src: "/popular/image2.jpg",
            title: "Valorant",
            link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj2xM7byoqFAxWIE60GHcOlDDwYABAAGgJwdg&ase=2&gclid=Cj0KCQjw-_mvBhDwARIsAA-Q0Q4zPJgupWUUv-FgtU2eru8lJuDeueXz3EYCmugix5QSJVEWV3aNq30aAo3NEALw_wcB&ohost=www.google.com&cid=CAESVuD2lOXiHN1xoFZY2WJDSp41QvvIGuka4PjXbUJEL0aMZozRiGxM6BIPTYCmBXxpjU-0Jmxv8Xpq4fdamfmC6RCHJYsi7nwS_kkkEN-krIyl5xaCjyfs&sig=AOD64_2takPhC7BFQSMg-G9VMmLZE2K1eg&q&nis=4&adurl&ved=2ahUKEwjM_r_byoqFAxUykJUCHS3uDdsQ0Qx6BAgHEAE",
            desc: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.",
            value: "Free",
          },
          {
            id: 2,
            src: "/popular/image3.jpg",
            title: "Call of Duty: Warzone 2.0",
            link: "https://www.callofduty.com/warzone",
            desc: "Call of Duty: Warzone is a free-to-play battle royale video game developed by Raven Software and Infinity Ward and published by Activision.",
            value: "Free",
          },
          {
            id: 3,
            src: "/popular/image4.jpg",
            title: "Overwatch 2",
            link: "https://overwatch.blizzard.com/",
            desc: "Overwatch 2 is a 2022 first-person shooter game developed and published by Blizzard Entertainment. As a sequel and replacement to the 2016 hero shooter Overwatch, the game intends a shared environment",
            value: 40,
          },
          {
            id: 4,
            src: "/popular/image4.jpg",
            title: "Overwatch 2",
            link: "https://overwatch.blizzard.com/",
            desc: "Overwatch 2 is a 2022 first-person shooter game developed and published by Blizzard Entertainment. As a sequel and replacement to the 2016 hero shooter Overwatch, the game intends a shared environment",
            value: 40,
          },
          
          
          
          
          
          

    ]

    return (
        <section className=" bg-black grid justify-center  grid mt-4  m-auto w-screen h-[600px]">
            <div className=" xl:max-w-[1200px] w-auto overflow-hidden">
                <div className="text-[2em] mb-10 pl-5 font-bold text-white ">Populares</div>
                <CarrocelComponts sliders={slide}/>
            </div>
        </section>
    );
};

export default Populares;