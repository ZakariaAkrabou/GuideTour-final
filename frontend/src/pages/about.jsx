import saharaImage from '../assets/sahara-image.png';
import elipse from '../assets/Ellipse 626.png';
import bgstyle from '../assets/bg style.png';
import video_sahara from '../assets/sahara.mp4'
import image from '../assets/about-us-img-2 1.png';
import im1 from '../assets/im1.jpg'
import Oudlaw_Tetouan from '../assets/Oudlaw_Tetouan.jpg'
import Ozoud_waterfalls from '../assets/Ozoud_waterfalls.jpg'
import Ca_sahara from '../assets/Ca_sahara.png'
import agadir from '../assets/agadir.png'
import ifran from '../assets/ifran.jpg'
import Hercule_Crave from '../assets/Hercule_Crave.jpg'
import ait_Benhaddou from '../assets/ait_Benhaddou.jpg'
import Toubkal from '../assets/Toubkal.jpg'
import atlas_mountain from '../assets/atlas_mountain.jpg'
import Dakhla_Beach from '../assets/Dakhla_Beach.jpg'
import Group from '../assets/Group.png'




const About = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${saharaImage})`,
        backgroundSize: 'cover',

    };
    const backgroundImageStyle2 = {
        backgroundImage: `url(${elipse})`,
        backgroundSize: 'cover',

    };

    const bgAzrou = {
        backgroundImage: `url(${im1})`,
        backgroundSize: 'cover',

    };
    const bgOudlaw_Tetouan = {
        backgroundImage: `url(${Oudlaw_Tetouan})`,
        backgroundSize: 'cover',

    };
    const bgOzoud_waterfalls = {
        backgroundImage: `url(${Ozoud_waterfalls})`,
        backgroundSize: 'cover',

    };
    const bgCa_sahara = {
        backgroundImage: `url(${Ca_sahara})`,
        backgroundSize: 'cover',

    };
    const bgagadir = {
        backgroundImage: `url(${agadir})`,
        backgroundSize: 'cover',

    };
    const bgifran = {
        backgroundImage: `url(${ifran})`,
        backgroundSize: 'cover',

    };
    const bgHercule_Crave = {
        backgroundImage: `url(${Hercule_Crave})`,
        backgroundSize: 'cover',

    };
    const bgait_Benhaddou = {
        backgroundImage: `url(${ait_Benhaddou})`,
        backgroundSize: 'cover',

    };
    const bgToubkal = {
        backgroundImage: `url(${Toubkal})`,
        backgroundSize: 'cover',

    };
    const bgatlas_mountain = {
        backgroundImage: `url(${atlas_mountain})`,
        backgroundSize: 'cover',

    };
    const bgDakhla_Beach = {
        backgroundImage: `url(${Dakhla_Beach})`,
        backgroundSize: 'cover',

    };
  
    return (
        <>
            <div className="App">
                <div className=" text-white px-[450px] py-[200px]" style={backgroundImageStyle}>
                    <div className="max-w-xl">
                        <h3 className="text-center font-bold mb-8 uppercase">Read</h3>
                        <h1 className=" text-9xl font-['Yesteryear'] text-center capitalize">Abous us</h1>
                    </div>
                </div>

                <div className=' grid grid-cols-2 gap-8 '>
                    <div className="  px-36 py-[200px]">
                        <div className=' max-w-xl grid grid-cols-1 gap-8'>
                            <h3 className=" text-buttons font-bold  uppercase">Promotion</h3>
                            <h1 className=" text-3xl font-['Volkhov'] capitalize text-blue_fance">We Provide You Best Morocco Sightseeing Tours</h1>
                            <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium
                                a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae
                                in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                            <button className=" transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons py-3 px-6 text-white text-lg rounded-md w-48">View Packages</button>
                        </div>
                    </div>
                    <div className=' py-10 '>
<div className='py-20 px-20 rounded-full w-[600px] h-[600px] border-2 border-gray-300 '>
                        <div className=' w-[500px] h-[500px]  rounded-full ' style={backgroundImageStyle2}>
                            {/* <img className="  rounded-full border-2 border-rose-600 " src={elipse} alt="" /> */}

                            <img className=" w-[500px] h-[500px]  rounded-full   " src={bgstyle} alt="" />

                        </div>
                    </div>
                    </div>
                    

                </div>
                <div className='w-full  relative'>
                <video className=" py-2 h-full w-full object cover" src={video_sahara} autoPlay loop muted ></video>
               
                     {/* <div className='absolute top-0 w-full  flex flex-col justify-center text-whit py-[40px] '> */}
                    {/* <h3 className='absolute  w-full   z-30  text-black py-[30px] text-2xl '>SAHARA</h3> */}
                    <h3 className=' text-center font-[Yesteryear] absolute top-1/2 w-full  flex flex-col justify-center text-white py-[30px] text-8xl bg-transparent border-transparent shadow-none '>SAHARA</h3>
                     
                </div>
                     
            {/* </div>  */}


                <div className=' px-20 grid grid-cols-2 gap-[200px]'>
                    <div className=''>
                        <img className=' ' src={image} alt="" />
                    </div>
                    <div className='px-10 py-20'>
                        <div className=' max-w-sm grid grid-rows-2 gap-4'>
                            <h3 className=' text-buttons font-bold  uppercase'>Trend</h3>
                            <h1 className="text-3xl font-['Volkhov'] capitalize text-blue_fance">Our Popular Tour Plans</h1>
                            <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis
                                praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis
                                praesentium a laudantiumh.</p>
                                
                                <div className=' py-10 '>
                                <div className=''>
                        <img className='w-[350] h-[350]' src={Group} alt="" />
                    </div> 
                                </div>

                            
                        </div>

                    </div>

                </div>

                <div className='px-[500px] py-[100px]'>
                    <div className="text-center  max-w-xl">
                        <h3 className="text-buttons font-bold  uppercase">Explore more</h3>
                        <h1 className=" text-4xl font-['Volkhov'] capitalize text-blue_fance">Our  Camping Packages</h1>
                    </div>
                </div>


                <div className=" grid grid-cols-4 gap-8 ">

                    <div className="  grid grid-rows-3 gap-8 " >

                    <div className=" px-2 w-[350px] h-[350px]  ">
                            <div className=" bg-center h-full w-full" style={bgOudlaw_Tetouan}>
                                <div className='px-[70px] py-[300px]'>
                                    <div className='  w-[300px] grid grid-cols-2 gap-[100px] text-Poppins text-white  '>
                                        <div className='grid grid-cols-2 gap-8  '>
                                            <p>Oudlaw </p>
                                            <p>Tetouan</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className=" px-2 w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgait_Benhaddou}>
                                <div className='px-[70px] py-[300px]'>
                                    <div className='  w-[300px] grid grid-cols-2 gap-[100px] text-Poppins text-white '>
                                        <div className='grid grid-cols-2 gap-1 '>
                                            <p>Ait </p>
                                            <p>Benhaddou</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="px-2 w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgOzoud_waterfalls}>
                                <div className='px-[70px] py-[300px]'>
                                    <div className='  w-[300px] grid grid-cols-2 gap-[100px] text-Poppins text-white '>
                                        <div className='grid grid-cols-2 gap-8 '>
                                            <p>Ozoud </p>
                                            <p>Waterfalls</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-3 gap-8 '>
                    <div className="w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgCa_sahara}>
                                <div className='px-[70px] py-[300px]  '>
                                    <div className=' grid grid-cols-2 gap-[150px] text-Poppins text-white '>
                                    <p>Merzouga</p>
                                    <p>$840</p>
                                </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgHercule_Crave}>
                                <div className='px-[70px] py-[300px]'>
                                    <div className='  w-[300px] grid grid-cols-2 gap-[100px] text-Poppins text-white '>
                                        <div className='grid grid-cols-2 gap-8 '>
                                            <p>Hercule</p>
                                            <p>Crave</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className=" w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgAzrou}>
                              <div className='px-[70px] py-[300px]  '>
                                    <div className=' grid grid-cols-2 gap-[150px] text-Poppins text-white '>
                                    <p>Azrou</p>
                                    <p>$840</p>
                                    </div>
                             </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-8 '>
                    <div className="row-span-2 w-[350px]  ">
                            <div className=" bg-center h-full w-full" style={bgDakhla_Beach}>
                                <div className='px-[70px] py-[300px]'>
                                    <div className=' w-[300px] grid grid-cols-2 gap-[100px] text-Poppins text-white '>
                                        <div className='grid grid-cols-2 gap-8 '>
                                            <p>Dakhla </p>
                                            <p>Beach </p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgatlas_mountain}>
                                <div className=' px-[70px] py-[300px]'>
                                    <div className='  w-[300px] grid grid-cols-2 gap-[100px] text-Poppins text-white '>
                                        <div className='grid grid-cols-2 gap-8 '>
                                            <p>OZoud </p>
                                            <p>Waterfalls</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-3 gap-8 '>
                    <div className=" w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgToubkal}>
                                <div className='px-[70px] py-[300px] grid grid-cols-2 gap-[150px] text-Poppins text-white '>
                                    <p>Toubkal</p>
                                    <p>$840</p>
                                </div>
                            </div>


                        </div>

                        
                        <div className=" w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgifran}>
                                <div className='px-[70px] py-[300px] grid grid-cols-2 gap-[150px] text-Poppins text-white '>
                                    <p>Ifran</p>
                                    <p>$840</p>
                                </div>
                            </div>
                        </div>

                        <div className=" w-[350px] h-[350px] ">
                            <div className=" bg-center h-full w-full" style={bgagadir}>
                                <div className='px-[70px] py-[300px] grid grid-cols-2 gap-[150px] text-Poppins text-white '>
                                    <p>Agadir</p>
                                    <p>$840</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




            </div>

        </>

    );
}

export default About;
