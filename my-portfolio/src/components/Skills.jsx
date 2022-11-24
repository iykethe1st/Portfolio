import { FaGithubAlt, FaLinux, FaDatabase, FaDocker } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      id: 0,
      skill: "JavaScript",
      percent: "90%",
      class: "bg-[#000c24] h-1 mx-1 rounded javascript-skill",
    },
    {
      id: 1,
      skill: "HTML/CSS",
      percent: "92%",
      class: "bg-[#000c24] h-1 mx-1 rounded html-skill",
    },
    {
      id: 2,
      skill: "Python",
      percent: "89%",
      class: "bg-[#000c24] h-1 mx-1 rounded python-skill",
    },
    {
      id: 3,
      skill: "C",
      percent: "86%",
      class: "bg-[#000c24] h-1 mx-1 rounded c-skill",
    },
    {
      id: 4,
      skill: "Solidity",
      percent: "88%",
      class: "bg-[#000c24] h-1 mx-1 rounded solidity-skill",
    },
  ];

  const frameworks = [
    {
      id: 0,
      skill: "React",
      percent: "91%",
      class: "bg-[#000c24] h-1 mx-1 rounded javascript-skill",
    },
    {
      id: 1,
      skill: "Node",
      percent: "88%",
      class: "bg-[#000c24] h-1 mx-1 rounded node-skill",
    },
    {
      id: 2,
      skill: "Angular",
      percent: "89%",
      class: "bg-[#000c24] h-1 mx-1 rounded python-skill",
    },
    {
      id: 3,
      skill: "Django",
      percent: "86%",
      class: "bg-[#000c24] h-1 mx-1 rounded c-skill",
    },
  ];

  const extraSkills = [
    {
      id: 0,
      skill: "Git",
      icon: <FaGithubAlt className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      id: 1,
      skill: "Redux",
      icon: <SiRedux className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      id: 2,
      skill: "Linux/Bash",
      icon: <FaLinux className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      id: 3,
      skill: "MySQL/MongoDB/PostgreSQL",
      icon: <FaDatabase className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      id: 4,
      skill: "Docker",
      icon: <FaDocker className="h-[1.5rem] w-[1.5rem]" />,
    },
  ];

  return (
    <div className="bg-[#000c24] shadow-lg shadow-slate-800 grid grid-cols-1 md:flex md:justify-around pb-[4rem] pt-4 lg:px-[10rem] skew-right lg:py-4">
      <div className="flex flex-col px-11" data-aos="flip-down">
        <h1 className="border-b-2">Languages</h1>

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

      <div className="flex flex-col px-11" data-aos="flip-down">
        <h1 className="border-b-2">Frameworks</h1>
        {frameworks.map((item) => (
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
      <div className="flex flex-col px-11" data-aos="flip-down">
        <h1 className="border-b-2">Extra Skills</h1>
        {extraSkills.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <div className="flex gap-4 items-center ">
              {item.icon}
              <h2 className="text-lg">{item.skill}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
