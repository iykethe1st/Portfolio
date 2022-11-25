const Recommendations = () => {
  const testimonials = [
    {
      id: 0,
      name: "_Chukky Emeka",
      company: "BlockchainHub Africa",
      words: `"We have the pleasure of working with Iyke on a regular basis.
      Every single project is done in a timely fashion and is delivered
      exactly as outlined. Beyond that, his ability to learn new things very fast makes him an 
      invaluable part of our process. We absolutely
      offer our highest recommendation on his behalf."`,
      title: "Great Quality",
    },
    {
      id: 1,
      name: "__Munachi Peter",
      company: "DoubleDice Official",
      words: `"Ikenna has been a real pleasure to work with and we look forward to 
      working with him again. He’s definitely the kind of engineer you can trust 
      with a project from start to finish.”`,
      title: "Great Energy",
    },
    {
      id: 2,
      name: "Uriel Ukwueji",
      company: "Stratifi NG",
      words: `"Ikenna has done a fantastic job overall. Not only did he take the job 
      on short notice, the code is very clean and slick. Love the way he achieves 
      his objectives."`,
      title: "Clean Codes",
    },
  ];
  return (
    <section className="py-8 px-[5rem] grid grid-cols-1 lg:flex items-center justify-items-center lg:justify-around gap-8 lg:gap-2">
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="flex flex-col p-8 shadow-md shadow-black w-[20rem] h-[24rem] rounded-lg border-4 border-[#000c24]"
          data-aos="flip-left"
        >
          <img src="../images/five-star-yellow-icon.svg" className="h-8" />
          <h1 className="font-bold text-[1.5rem] text-[#f44336]">
            {item.title}
          </h1>
          <span className="text-slate-700 mt-2">{item.words}</span>
          <div className="mt-8 text-slate-800">
            <span>{item.name}, </span>
            <em className="font-bold">{item.company}</em>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Recommendations;
