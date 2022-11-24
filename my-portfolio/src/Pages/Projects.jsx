import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Stratifi NG",
      bio: "Stratifi is an influencer marketplace that connects Brands to Influencers",
      link: "https://stratifi.vercel.app/",
      img: "../images/stratifi.png",
    },
    {
      id: 1,
      title: "Double Dice",
      bio: "Double Dice is a decentralized pooled predictions protocol. where gamers can play or open their own rooms",
      link: "https://doubledice.com/",
      img: "../images/dd.png",
    },

    {
      id: 2,
      title: "BlockchainHub Africa",
      bio: "BlockchainHub africa is a platform that advances Web3 adoption through talent acceleration and innovative blockchain-based solutions in Africa.",
      link: "https://blockchainhub.africa/",
      img: "../images/bhub.png",
    },
    {
      id: 3,
      title: "NDU",
      bio: "NDU is a platform that validates the authenticity of Medical supplies(Drugs).",
      link: "https://local-ndu.vercel.app/dashboard/user",
      img: "../images/ndu.png",
    },

    {
      id: 4,
      title: "Beima Suite",
      bio: "Beima is a smart contract development suite that lets you easily document and test your smart contracts",
      link: "https://www.beima.app/",
      img: "../images/beima.png",
    },
  ];

  return (
    <div className="flex flex-col ">
      <NavBar />
      <div className="flex flex-col items-center px-4 py-8">
        <h1 className="text-[#f44336] font-semibold">Portfolio</h1>
        <span className="text-lg lg:text-xl text-slate-700 pb-6 flex gap-2 items-center justify-center">
          <h2>
            Here are some projects I've worked on. To see more, visit my github
          </h2>
          <a href="https://github.com/iykethe1st" target="blank">
            <AiOutlineGithub className="w-[2rem] h-[2rem] hover:text-[#f44336] active:text-[#af504acf]" />
          </a>
        </span>

        <div className="bg-[#000c24] rounded-lg">
          {projects.map((item) => (
            <div
              className="grid grid-cols-1 md:flex p-8 gap-8 lg:gap-4"
              data-aos="flip-right"
            >
              <div className="flex flex-col items-start lg:w-[20rem] gap-4 text-base lg:text-lg border-t-2 md:border-b-2 border-slate-600">
                <h1>{item.title}</h1>
                <span>{item.bio}</span>
                <a
                  className="hover:scale-105 font-semibold"
                  href={item.link}
                  target="blank"
                >
                  <span className="text-[#f44336] ">View Project {" -->"}</span>
                </a>
              </div>
              <div className="flex flex-col items-center lg:w-[30rem] ">
                <img src={item.img} alt="" className="my-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
