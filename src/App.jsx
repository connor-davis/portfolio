function App() {
  return (
    <div class="flex flex-col justify-center items-center w-screen h-screen text-lime-400 bg-gray-900 space-y-52">
      <div class="flex flex-col text-center">
        <div class="font-bold text-2xl text-white">LoneWolf Software</div>
        <div class="text-lg text-gray-400 max-w-[500px]">
          Hi, my name is Connor Davis and I go by the name LoneWolf Software
          when doing business with my clients.
        </div>
      </div>
      <div>
        <ul class="relative -skew-y-[15deg]">
          <li class="relative list-none w-64 bg-gray-800 text-gray-400 hover:text-white group p-3 uppercase cursor-pointer before:hover:content-['&nbsp;'] before:absolute before:-top-5 before:left-[-40px] before:w-10 before:h-full before:p-3 before:skew-y-[45deg] before:bg-gray-800 after:hover:content-['&nbsp;'] after:absolute after:-top-[40px] after:-left-5 after:w-full after:h-10 after:skew-x-[45deg] after:bg-gray-800 hover:bg-lime-400 before:hover:bg-lime-400 after:hover:bg-lime-400 z-[3] hover:translate-x-[-50px] duration-300 ease-in-out transition-transform">
            About
          </li>
          <li class="relative list-none w-64 bg-gray-800 text-gray-400 hover:text-white group p-3 uppercase cursor-pointer before:hover:content-['&nbsp;'] before:absolute before:-top-5 before:left-[-40px] before:w-10 before:h-full before:p-3 before:skew-y-[45deg] before:bg-gray-800 after:hover:content-['&nbsp;'] after:absolute after:-top-[40px] after:-left-5 after:w-full after:h-10 after:skew-x-[45deg] after:bg-gray-800 hover:bg-lime-400 before:hover:bg-lime-400 after:hover:bg-lime-400 z-[2] hover:translate-x-[-50px] duration-300 ease-in-out transition-transform">
            Portfolio
          </li>
          <li class="relative list-none w-64 bg-gray-800 text-gray-400 hover:text-white group p-3 uppercase cursor-pointer before:hover:content-['&nbsp;'] before:absolute before:-top-5 before:left-[-40px] before:w-10 before:h-full before:p-3 before:skew-y-[45deg] before:bg-gray-800 after:hover:content-['&nbsp;'] after:absolute after:-top-[40px] after:-left-5 after:w-full after:h-10 after:skew-x-[45deg] after:bg-gray-800 hover:bg-lime-400 before:hover:bg-lime-400 after:hover:bg-lime-400 z-[1] hover:translate-x-[-50px] duration-300 ease-in-out transition-transform">
            Portfolio
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
