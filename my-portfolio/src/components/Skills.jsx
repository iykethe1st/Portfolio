const Skills = () => {
  const headers = [
    {
      id: 0,
      head: "Languages",
    },
    {
      id: 0,
      head: "Frameworks",
    },
    {
      id: 0,
      head: "Extra Skills",
    },
  ];

  const skills = [
    {
      id: 0,
      skill: "JavaScript",
      percent: "90%",
      class: "bg-[#000c24] h-1 mx-1 rounded javascript-skill",
    },
    {
      id: 0,
      skill: "HTML/CSS",
      percent: "92%",
      class: "bg-[#000c24] h-1 mx-1 rounded html-skill",
    },
    {
      id: 0,
      skill: "Python",
      percent: "89%",
      class: "bg-[#000c24] h-1 mx-1 rounded python-skill",
    },
    {
      id: 0,
      skill: "C",
      percent: "86%",
      class: "bg-[#000c24] h-1 mx-1 rounded c-skill",
    },
    {
      id: 0,
      skill: "Solidity",
      percent: "88%",
      class: "bg-[#000c24] h-1 mx-1 rounded solidity-skill",
    },
  ];

  return (
    <div className="bg-[#000c24] shadow-lg shadow-slate-800 grid grid-cols-1 lg:flex lg:justify-around py-4">
      {headers.map((headerItem) => (
        <div className="flex flex-col px-11">
          <h1 className="border-b-2">{headerItem.head}</h1>

          {skills.map((item) => (
            <div key={item.id} className="pb-4">
              <div className="flex justify-between">
                <h2 className="pl-2">{item.skill}</h2>
                <h2 className="pr-2">{item.percent}</h2>
              </div>
              <div className="bg-[#f44336] h-2 lg:w-[15rem] flex flex-col justify-center rounded">
                <div className={item.class}></div>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div>
        <h1 className="border-b-2">Frameworks</h1>
      </div>
      <div>
        <h1 className="border-b-2">Extra Skills</h1>
      </div>
    </div>
  );
};

export default Skills;
