import { useState } from "react";
import { sunIcon, sunOffIcon, moonIcon, blueSun, tailwindIcon } from "./tablerIcons";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleToggleDark = () => {
    setIsDark(!isDark);
    console.log("Darkmode: ", !isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white text-slate-700 dark:bg-slate-900 font-sans dark:text-slate-400">
      {/* <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <img src="/public/images/bakcgroundImg.png" className="w-[71.75rem] flex-none max-w-none dark:hidden"/>
          <img src="/public/images/bakcgroundImgDark.png" className="w-[90rem] flex-none max-w-none hidden dark:block"/>
        </div>
      </div> */}
      <header className="sticky top-0 z-40 w-full backdrop-blur py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
        <div className="realtive flex items-center">
          <a href="/" className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto">{tailwindIcon}</a>
          <div className="relative lg:flex items-center ml-auto cursor-pointer dark:text-white">
                    <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-8">
            <li className="hover:text-sky-500 dark:hover:text-sky-400">Hem</li>
            <li className="hover:text-sky-500 dark:hover:text-sky-400">Om Oss</li>
            <li className="hover:text-sky-500 dark:hover:text-sky-400">Kontakt</li>
            <li className="hover:text-sky-500 dark:hover:text-sky-400">Wut</li>
          </ul>
        </nav>
            <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800" onClick={handleToggleDark}>{isDark ? moonIcon : blueSun}</div>
          </div>
        </div>

      </header>
      <div className="h-screen p-5">
        <p className="text-m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          lacinia risus nec leo efficitur, at posuere ex finibus. Etiam nunc
          sapien, posuere at gravida sed, euismod et arcu. Integer pharetra
          blandit neque in volutpat. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Phasellus at nisl nisi. Nam et suscipit turpis. Quisque in ligula mi.
          Etiam vel quam quis lectus auctor semper ut fringilla purus. Duis id
          elit purus. Donec et sem vel neque fringilla lacinia nec vitae neque.
          Praesent et augue fringilla, pharetra nisi id, eleifend nibh. Integer
          in tempor massa. Etiam feugiat efficitur erat eu tincidunt. Cras
          egestas lectus leo, nec convallis est imperdiet quis. Praesent et
          hendrerit lectus. In at dui quis lacus convallis hendrerit. Ut dictum
          malesuada neque, et sagittis nibh malesuada a. Praesent porttitor eros
          augue, sed eleifend augue blandit elementum. Suspendisse luctus, eros
          vel sodales feugiat, mauris nulla luctus ligula, nec rutrum enim
          libero in dolor. Donec ut varius eros. Suspendisse feugiat ullamcorper
          vehicula. Quisque nulla velit, aliquam tempus ultricies at, tristique
          at nunc. Sed rutrum elit a pretium sodales. Pellentesque porttitor mi
          et iaculis scelerisque. Maecenas eleifend nulla in condimentum
          accumsan. Mauris vitae accumsan ex. Vestibulum bibendum ipsum sed erat
          posuere egestas et vel nibh. Quisque vel auctor nibh, ac tristique
          diam. Pellentesque vel iaculis nunc. Nulla pretium nibh ac cursus
          auctor. Integer varius mi at urna faucibus finibus. Morbi tincidunt,
          metus quis pretium pulvinar, purus mauris finibus lectus, quis
          consequat augue elit sed turpis. Duis ultricies, nisl sit amet
          sollicitudin aliquam, sem lorem laoreet tellus, a consequat tellus
          ligula ac mauris. Ut viverra tincidunt ante. Vivamus ornare sem at
          libero accumsan pretium. Morbi vel odio diam. Nulla lobortis libero
          sed augue feugiat posuere. Praesent commodo massa lorem, at accumsan
          neque pharetra ac. Mauris commodo tincidunt felis egestas gravida. Sed
          commodo vitae sapien ac iaculis. Ut sagittis condimentum posuere.
          Etiam laoreet ac tortor sed ullamcorper. Nullam ornare nec mauris id
          placerat. Sed vel tortor erat. Aliquam quis tortor augue. Proin porta,
          elit vitae vehicula fermentum, augue lacus consequat sapien, quis
          vulputate lacus ex et nibh. Vivamus consequat purus at tempus luctus.
        </p>
      </div>
    </div>
      </div>
  );
}

export default App;
