import React from "react";
import girl from "../../../assets/lovely-teenage-girl.png";

const Banner = () => {
    return (
        <section className="w-full h-screen bg-[#49BBBD] flex items-center justify-between px-10 relative overflow-hidden">
            {/* Parent Container */}
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 relative">

                {/* Banner Content */}
                <div className="w-full md:w-2/5 flex flex-col justify-center gap-4 z-10">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                        <span className="text-[#F48C06]">Studying</span> Online is now much easier
                    </h1>

                    <p className="font-sans text-white/90 w-full md:w-96">
                        TOTC is an interesting platform that will teach you in a more interactive way
                    </p>

                    <div className="flex flex-wrap items-center gap-5 mt-6">
                        <button className="bg-gray-400 hover:bg-gray-500 transition rounded-full text-lg font-semibold px-6 py-2">
                            Join for Free
                        </button>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                            ▶
                        </div>
                        <p className="text-white text-lg">Watch how it works</p>
                    </div>
                </div>

                {/* Banner Image with Floating Cards */}
                <div className="w-[60%] md:w-3/5 relative flex justify-center">
                    <img src={girl} alt="girl" className="w-[400px] relative z-10" />

                    {/* Floating Card - Top Left */}
                    <div className="absolute top-40 left-10 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            📅
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">250k</h3>
                            <p className="text-gray-600 text-sm">Assisted Student</p>
                        </div>
                    </div>

                    {/* Floating Card - Middle Right */}
                    <div className="absolute z-20 top-1/2 right-20 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            ✉️
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Congratulations</h3>
                            <p className="text-gray-600 text-sm">Your admission completed</p>
                        </div>
                    </div>

                    {/* Floating Card - Bottom Left */}
                    <div className="absolute z-20 bottom-10 left-10 bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">

                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://i.pravatar.cc/50"
                                    className="w-12 h-12 rounded-full"
                                    alt="user"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">User Experience Class</h3>
                                    <p className="text-gray-600 text-sm">Today at 12.00 PM</p>
                                </div>
                            </div>
                            <button className="mt-3 bg-gray-400 text-white px-3 py-1 rounded-full text-sm">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;
