import client from '../../assets/imgguide.png';
import testimg from '../../assets/campingPlan.png';
import testimg2 from '../../assets/camper.jpg'
import testimg3 from '../../assets/tent.png'
import camping from '../../assets/camping1.jpg'
import camping2 from '../../assets/camping_2.jpg'

export default function Component() {
  return (
    <section className="bg-gray-100 py-20  lg:w-full relative lg:top-0 -top-[300px] w-[500px] ">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">

          <div className="flex flex-shrink-0 space-x-2 ">
            <img
              alt="Client photo 1"
              className="w-24 h-24 transform rotate-12 shadow-lg relative lg:left-[150px]"
              height={100}
              src={camping}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
            <img
              alt="Client photo 2"
              className="w-24 h-24 transform -rotate-12 shadow-lg   relative lg:left-[160px]"
              height={100}
              src={camping2}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
          </div>
          <div className="text-center  relative lg:left-[4px] ">
            <span className="text-2xl font-semibold uppercase text-orange">Promotion</span>
            <h2 className="text-4xl font-bold text-secondaire mt-10 mb-20">See What Our Clients Say About Us</h2>
            <div className="relative mx-auto w-full  max-w-xl px-8 py-4 bg-white rounded-lg shadow ">
              <div className="rounded-full bg-gray-200 w-[120px] h-[120px] relative lg:left-[200px] left-[150px] -top-[70px] shadow-2xl border-4 border-white">
                <img
                  alt="Client"
                  className="rounded-full w-full h-full "
                  height={40}
                  src={client}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width={40}
                />
              </div>

              <blockquote className="text-center relative -top-6">
                <p className="text-lg italic text-gray-600">
                  {`"I booked a camel trekking tour in the Sahara through this website, 
                  and it was a once-in-a-lifetime experience. 
                  The site provided all the necessary details,
                   and the actual trip was even better than described.
                    The guides were friendly and professional. Five stars!"`}
                </p>

              </blockquote>
              <footer className="mb-4  ">
                <div className="flex items-center justify-center">

                  <div className="ml-2 lg:text-sm text-lg font-medium">
                    <div className='text-gray-500 font-bold'>Christina</div>
                    <div className="text-gray-500 font-bold">CEO at TechCompany</div>
                  </div>
                </div>
              </footer>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 space-x-2">
            <img
              alt="Client photo 1"
              className="w-24 h-24 transform rotate-12 shadow-lg  relative lg:right-[150px] "
              height={100}
              src={testimg}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
            <img
              alt="Client photo 2"
              className="w-24 h-24 transform -rotate-12 shadow-lg  relative lg:right-[140px] "
              height={100}
              src={testimg2}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
