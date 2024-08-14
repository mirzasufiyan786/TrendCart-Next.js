export default function footerA() {
  return (
    <main className="rounded-xl h-[120px] md:w-[1180px] w-[100%] md:mx-20 bg-cover flex items-center justify-between p-6"
    style={{
      backgroundImage:"url('/quotesbg.png')"
    }}
    >
     <div className="text-white ">
      <p className="md:text-[24px] text-[16px] font-semibold text-white">Supper discount on more then 100 USD</p>
      <p className="text-[16px] font-light">Have you ever finally just write dummy info</p>
     </div>
     <div>
      <button className="block  w-[108px] h-[40px] bg-orange rounded-lg text-white mid ">Shop now</button>
     </div>
    </main>
  );
}
