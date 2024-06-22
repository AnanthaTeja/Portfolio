import { experiences } from "../../data/Experience.json";

function Experiences() {
  return (
    <div className="experienceCont w-full h-auto relative top-12 p-4 flex flex-col items-center justify-center mb-12">
      <div className="w-full flex flex-row items-center justify-center mb-8">
        <span
          data-aos="zoom-in"
          className="w-24 h-1 rounded-full bg-green-200 mx-4"
        ></span>
        <p data-aos="fade-up" className="text-white text-lg">
          Work Experience
        </p>
        <span
          data-aos="zoom-in"
          className="w-24 h-1 rounded-full bg-green-200 mx-4"
        ></span>
      </div>

      <div className="w-full grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center">
        {experiences.length > 0 &&
          experiences.map((exp, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="box w-full h-auto bg-dark-200 rounded-[5px] relative top-[50px] transition-all mb-[50px] mr-[5px] opacity-[.7] md:w-[250px] md:ml-0 hover:opacity-[1] flex flex-col"
            >
              <div
                className="imgCont w-full h-[190px] rounded-[5px] bg-cover bg-center mb-[10px]"
                style={{
                  backgroundImage: `url(${
                    exp.img || "https://via.placeholder.com/150"
                  })`,
                }}
              ></div>
              <div className="w-full p-[10px] flex-1">
                <div className="w-full h-auto">
                  <p className="text-[15px] text-white-200">
                    {exp.role || "Job Role"}
                  </p>
                  <br />
                  <small className="text-white-200">
                    {exp.desc ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                  </small>
                </div>
              </div>
              <div className="flex items-start justify-start m-2 ">
                {exp.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-[10px] py-[3px] px-[9px] bg-dark-100 mr-[2px] rounded-[2px] text-white-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experiences;
