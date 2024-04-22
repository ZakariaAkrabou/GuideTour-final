const data1 = [
    {
      circleimage: "/img_ellipse_625.png",
      description:
        `<>Private guided tours<br /><br />No strangers on your tour.<br />It’s just you and your local host.</>`,
    },
    {
      circleimage: "/img_ellipse_626.png",
      description: `<>Responsible<br /><br />Our tours are designed with<br />people, places & the planet in mind</>`,
    },
    {
      circleimage: "/img_ellipse_627.png",
      description:
        `<>100% Customizable<br /><br />Let your local host tailor the tour<br />completely to your wishes.</>`,
    },
  ];
const About = () => {
  return (
    <>
    <div className="container mx-auto px-1 pt-15">
      <section className="flex items-center justify-center mb-3">
        <div className="pt-6 mr-6">
          <img
            src="/img_rectangle_19367.png"
            alt="Desert"
            className=" h-[500px] rounded-2xl"
          />
        </div>
        <div className="w-1/2 ml-16">
          <h2 className="text-2xl  mb-4 text-primary">Information</h2>
          <h3 className="text-4xl mt-8 font-Volkhov font-bold text-secondaire">
            What is “Journey Tour & Travel“?
          </h3>

          <br />
          <p className="text-lg mb-4 text-justify">
            We believe interaction with the local people is what makes a trip
            memorable. No matter what cultural background, religion, race or
            belief, there will always be overlapping interests. By interacting
            with locals, our perspectives on the world will broaden, a better
            understanding emerges and friends will be made.
          </p>
          <button className="bg-primary rounded-full shadow h-12 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary">
            Read More
          </button>
        </div>
      </section>
    </div>

    <div className="mt-[30px] flex flex-col items-center gap-[66px] self-stretch bg-gray-400_33 p-[54px] md:p-5 sm:gap-[33px]">
            <p size="4xl" className="mt-[42px] capitalize !text-black-900">
              Why you should book a ”our website name” tour
            </p>
            <div className="container-xs flex gap-[127px] md:flex-col">
              {data1.map((d, index) => (
                <div key={"listdescription" + index} className="flex w-full flex-col items-end gap-[83px] md:gap-[62px] sm:gap-[41px]">
                  <img src={d.circleimage} alt="circleimage" className="mr-[123px] h-[150px] w-[150px] rounded-[50%] md:mr-0"/>
                  <p size="2xl" className="text-center capitalize !text-black-900">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

    </>
    
    
  );
};

export default About;
