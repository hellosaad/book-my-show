import React from "react";

//COMPONENTS
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
const HomePage= () =>{
    return (<>

    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3"> The Best Of Entertainment</h1>
        <EntertainmentCardSlider />
    </div>
    </>);
};
export default HomePage;