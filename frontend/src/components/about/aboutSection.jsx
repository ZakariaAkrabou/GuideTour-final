const About = () => {
 

  return (
    <>
     <div className="container mx-auto px-1 pt-15">
      <section className="flex items-center justify-center mb-3">
        <div className="pt-6 mr-6">
          <img
            src="/img_rectangle_19367.png"
            alt="Desert"
            className="h-[500px] rounded-2xl"
          />
        </div>
        <div className="w-1/2 ml-16">
          <h2 className="text-2xl mb-4 text-primary">Information</h2>
          <h3 className="text-4xl mt-8 font-Volkhov font-bold text-secondaire">
            What is “Journey Tour & Travel“?
          </h3>

          <p className="text-lg mb-4 text-justify">
            We believe interaction with the local people is what makes a trip memorable. No matter what cultural background, religion, race, or belief, there will always be overlapping interests. By interacting with locals, our perspectives on the world will broaden, a better understanding emerges, and friends will be made.
          </p>
          <button className="bg-primary rounded-full shadow h-12 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary">
            Read More
          </button>
        </div>
      </section>
     </div>
    
    </>
   
  );
};

export default About;