import Header from "../assets/header-tour.jpeg";

const Tour = () => {

    const baheadertour = {
        backgroundImage: `url(${Header})`,
        backgroundSize: 'cover',

    };
    return (
        <div className="App">
        <div className="w-[500px] h-full text-white px-[450px] py-[200px]" style={baheadertour}>
            <div className=" max-w-xl">
                <h3 className=" text-center font-bold mb-8 uppercase">search tour</h3>
                <h1 className="  text-8xl font-['Yesteryear'] text-center capitalize">travel white us</h1>
            </div>
        </div>
        /</div>
    );
}

export default Tour;
