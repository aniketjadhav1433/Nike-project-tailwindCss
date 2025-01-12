import { truckFast,shieldTick,support } from "../assets/icons"


const FeatureCard  = ()=>{
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#FDFDFD]">

            <div className="bg-white shadow-2xl rounded-xl p-4 flex flex-col gap-4 items-start">
                <img src={truckFast} alt="" className="bg-red-500 rounded-full p-3"/>
                <h2>Free shipping</h2>
                <p>Enjoy seamless shopping with our complimentary shipping service.</p>
            </div>

            <div  className="bg-white shadow-2xl rounded-xl p-4 flex flex-col gap-4 items-start">
                <img src={shieldTick} alt="" className="bg-red-500 rounded-full p-3"/>
                <h2>Secure Payment</h2>
                <p>Experience worry-free transactions with our secure payment options.</p>
            </div>

            <div className="bg-white shadow-2xl rounded-xl p-4 flex flex-col gap-4 items-start">
                <img src={support} alt="" className="bg-red-500  rounded-full p-3"/>
                <h2>Love to help you</h2>
                <p>Our dedicated team is here to assist you every step of the way.</p>
            </div>

        </div>
    )
}


export default FeatureCard