import saharaImage from '../assets/sahara-image.png';
import elipse from '../assets/Ellipse 626.png';
import bgstyle from '../assets/bg style.png';
import video_sahara from '../assets/sahara.mp4'
import image from '../assets/logoAbout.png';
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
                <div className="  justify-center flex w-full h-60 lg:h-screen " style={backgroundImageStyle}>
                    <div className=" flex items-center">
                        <h1  className=" text-white lg:text-9xl text-5xl font-year ">About us</h1>
                    </div>
                </div>

                <div className=' grid lg:grid-cols-2 p-4 lg:p-8'>
                    <div className=" flex justify-center items-center ">
                        <div className=' flex flex-col pb-4 gap-2 lg:gap-3'>
                            <h3 className=" text-buttons font-bold text-2xl text-primary">Promotion</h3>
                            <h1 className=" text-2xl lg:text-4xl font-['Volkhov'] font-bold text-secondaire">We Provide You Best Morocco Sightseeing Tours</h1>
                            <p >Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium
                                a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae
                                in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                        </div>
                    </div>
                    <div className=' flex justify-center '>
                    <div className='lg:py-10 py-10 px-0   flex-col justify-center rounded-full w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] border border-neutral-400'>
                        <div className='  w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]  rounded-full border border-neutral-400' style={backgroundImageStyle2}>

                            <img className=" lg:w-[700px] w-[500px] h-[500px] lg:h-[700px] -mt-20  rounded-full   " src={bgstyle} alt="" />

                        </div>
                    </div>
                    </div>
         

                </div>
                <div className='w-full flex justify-center items-center  '>
                <video className="lg:h-[500px] lg:w-full object-cover" src={video_sahara} autoPlay loop muted ></video>
                    <h3 className='  font-[Yesteryear] absolute  text-white text-6xl lg:text-9xl '>Sahara</h3>
                     
                </div>
                     

                <div className='grid lg:grid-cols-2 px-4 py-10 justify-center items-center '>
                    <div className=' flex justify-center pr-6 lg:w-full -mt-20'>
                        <img className=' lg:w-full h-full lg:rounded-l-[100px] pb-2 ' src={image} alt="" />
                    </div>
                        <div className=' flex  flex-col -mt-10 lg:-mt-0 lg:gap-3'>
                            <h3 className=' text-buttons font-bold  uppercase text-primary'>Trend</h3>
                            <h1 className="lg:text-4xl text-3xl text-secondaire font-bold font-['Volkhov'] capitalize">Our Popular Tour Plans</h1>
                            <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis
                                praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis
                                praesentium a laudantiumh.</p>
                                
                                <div className=' py-4 lg:py-8 '>
                                <div className=' flex justify-center'>
                        <img className='w-[400px] lg:w-[500px] h-full' src={Group} alt="" />
                                </div>


                    </div>

                </div>

            </div>

                <div className=' flex justify-center  lg:-mt-14'>
                    <div className="text-center  ">
                        <h3 className=" text-primary font-bold  uppercase">Explore more</h3>
                        <h1 className=" lg:text-4xl text-2xl font-bold font-['Volkhov'] text-secondaire capitalize pb-4 lg:pb-8">Our  Camping Packages</h1>
                    </div>
                </div>


            <div className=" grid grid-cols-1  gap-6  px-[35px]  lg:grid-cols-4 lg:gap-9  lg:px-8 ">

                <div className="  grid gap-6 lg:gap-9 " >

                    <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                    <div className="bg-center h-full w-full rounded-xl" style={bgOudlaw_Tetouan}>
                        <div className="flex flex-col justify-end h-full">
                            <div className="flex justify-between text-Poppins text-white p-4">
                                <div className="flex gap-2">
                                    <p>Oudlaw</p>
                                    <p>Tetouan</p>
                                </div>
                                <p>$840</p>
                            </div>
                        </div>
                    </div>
                        </div>

                        <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" bg-center h-full w-full rounded-xl" style={bgait_Benhaddou}>
                                <div className=' flex flex-col justify-end h-full'>
                                    <div className='flex justify-between p-4 text-Poppins text-white '>
                                        <div className=' flex gap-2'>
                                            <p>Ait </p>
                                            <p>Benhaddou</p>
                                        </div>

                                    <p>$840</p>
                                </div>
                            </div>


                            </div>
                        </div>
                        <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" bg-center h-full w-full rounded-xl" style={bgOzoud_waterfalls}>
                                <div className=' flex flex-col justify-end h-full'>
                                    <div className=' flex justify-between p-4 text-Poppins text-white '>
                                        <div className=' flex gap-2'>
                                            <p>Ozoud </p>
                                            <p>Waterfalls</p>
                                        </div>

                                    <p>$840</p>
                                </div>
                            </div>


                            </div>
                        </div>
                    </div>
                   <div className='grid grid-rows-3 gap-6 lg:gap-9'>
                     <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" bg-center h-full w-full rounded-xl" style={bgCa_sahara}>
                                <div className=' flex flex-col justify-end h-full'>
                                    <div className=' flex justify-between p-4 text-Poppins text-white '>
                                    <p>Merzouga</p>
                                    <p>$840</p>
                                </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" bg-center h-full w-full rounded-xl" style={bgHercule_Crave}>
                                <div className=' flex flex-col justify-end h-full'>
                                    <div className=' flex justify-between p-4 text-Poppins text-white '>
                                        <div className=' flex gap-2'>
                                            <p>Hercule</p>
                                            <p>Crave</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" bg-center h-full w-full rounded-xl" style={bgAzrou}>
                                <div className=' flex flex-col justify-end h-full'>
                                    <div className=' flex justify-between p-4 text-Poppins text-white '>
                                        <div className=' flex gap-2'>
                                            <p>Hercule</p>
                                            <p>Crave</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='grid grid-rows-2 gap-6 '>
                    <div className="row-span-2 w-full flex ">
                            <div className=" bg-center w-[300px] h-[300px] lg:h-full lg:w-full rounded-xl transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:rounded-xl hover:shadow-2xl" style={bgDakhla_Beach}>
                                <div className=' flex flex-col justify-end h-full'>
                                    <div className=' flex justify-between p-4 text-Poppins text-white '>
                                        <div className=' flex gap-2'>
                                            <p>Dakhla </p>
                                            <p>Beach </p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex ">
                            <div className=" bg-center h-full w-full rounded-xl transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl" style={bgatlas_mountain}>
                                <div className=' flex flex-col justify-end h-full'>
                                    <div className=' flex justify-between p-4 text-Poppins text-white '>
                                        <div className=' flex gap-2'>
                                            <p>OZoud </p>
                                            <p>Waterfalls</p>
                                        </div>

                                        <p>$840</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-3 gap-6 lg:gap-9'>
                    <div className="lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" flex flex-col justify-end bg-center h-full w-full rounded-xl" style={bgToubkal}>
                                <div className=' flex justify-between p-4 text-Poppins text-white '>
                                    <p>Toubkal</p>
                                    <p>$840</p>
                                </div>
                            </div>


                    </div>

                        
                        <div className=" lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" flex flex-col justify-end bg-center h-full w-full rounded-xl" style={bgifran}>
                                <div className=' flex justify-between p-4 text-Poppins text-white '>
                                    <p>Ifran</p>
                                    <p>$840</p>
                                </div>
                            </div>


                        </div>

                        <div className=" lg:w-full lg:h-[350px]  w-[300px] h-[300px] flex transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl">
                            <div className=" flex flex-col justify-end bg-center h-full w-full rounded-xl" style={bgagadir}>
                                <div className=' flex justify-between p-4 text-Poppins text-white '>
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
