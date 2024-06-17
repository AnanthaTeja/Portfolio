import { education } from "../../data/Education.json"; // Ensure you have the education data in JSON format

function Education() {
  return (
    <div className="educationCont w-full h-auto relative top-[50px] p-10px flex flex-col items-center justify-center mb-[50px]">
      <div className="w-full flex flex-row items-center justify-center">
        <span
          data-aos="zoom-in"
          className="w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]"
        ></span>
        <p data-aos="fade-up" className="text-white-200 text-[15px]">
          Education Timeline
        </p>
        <span
          data-aos="zoom-in"
          className="w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]"
        ></span>
      </div>

      <div className="educationTimeline w-full h-auto p-3 flex flex-col items-start justify-start mb-[50px] relative">
        {education.length > 0 &&
          education.map((item, i) => (
            <div data-aos="fade-up" key={i} className="timelineItem">
              <div className="timelineMarker"></div>
              <div className="timelineLine"></div>
              <div className="timelineContent">
                <img
                  src={item.img}
                  alt={item.school}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="educationInfo">
                  <p className="text-[15px]">{item.school}</p>
                  <small className="text-[12px]">{item.date}</small>
                  <p className="text-[14px] mt-[5px]">{item.degree}</p>
                  <p className="text-[14px] mt-[5px]">{item.grade}</p>
                  <p className="text-[12px] desc mt-[10px]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Education;
