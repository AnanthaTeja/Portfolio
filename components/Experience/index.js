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

      <div className="experiences w-full grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {experiences.length > 0 &&
          experiences.map((exp, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="experienceCard bg-dark-200 rounded-md shadow-lg p-4 flex flex-col items-center"
            >
              <div
                className="imgCont w-32 h-32 rounded-full bg-cover bg-center mb-4"
                style={{
                  backgroundImage: `url(${
                    exp.img || "https://via.placeholder.com/150"
                  })`,
                }}
              ></div>
              <div className="w-full text-center">
                <p className="text-white text-lg font-semibold mb-1">
                  {exp.role || "Job Role"}
                </p>
                <p className="text-gray-400 text-sm mb-1">
                  {exp.company || "Company Name"}
                </p>
                <p className="text-gray-400 text-sm mb-1">
                  {exp.date || "Job Duration"}
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  {exp.desc || "Job Description"}
                </p>
              </div>
              <div className="flex-grow flex flex-wrap items-end justify-center gap-2 mt-4">
                {exp.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="skill-tag bg-dark-100 py-1 px-3 rounded text-xs text-white"
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
