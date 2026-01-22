import React from 'react';
import card1 from '../../../assets/Group 79.png';
import card2 from '../../../assets/Group 80.png';
import card3 from '../../../assets/Group 81.png';
import instractor from '../../../assets/images.jfif';
import students from '../../../assets/Black-College-Students-2014.jpg'

const Success = () => {

    const stats = [
        { value: "15K+", label: "Students" },
        { value: "75%", label: "Total success" },
        { value: "35", label: "Main questions" },
        { value: "26", label: "Chief experts" },
        { value: "16", label: "Years of experience" },
    ];

    return (
        <section className="w-full py-12">
            {/* Text Section */}
            <div className="container flex flex-col justify-center items-center font-sans px-4 lg:px-10 mx-auto">
                <h1 className="text-3xl font-bold text-center mb-4">Our Success</h1>

                <p className="max-w-3xl text-center  text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos quasi,
                    consectetur quam aspernatur nostrum accusamus corrupti deleniti. Ea possimus
                    earum ipsum doloribus? Vel culpa placeat repellendus odit fuga. Autem!
                </p>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-5 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                {stats.map((item, index) => (
                    <div key={index}>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#2BA6C4]">
                            {item.value}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mt-1">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
            {/* Text Section */}
            <div className="container flex flex-col justify-center items-center font-sans px-4 lg:px-10 mx-auto">
                <h1 className="text-3xl font-bold text-center mt-16 mb-4"><span className='text-blue-700'>All-in-One</span><span className='text-gray-400'>Cloud Software</span></h1>

                <p className="max-w-3xl text-center  text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos quasi,
                    consectetur quam aspernatur nostrum accusamus corrupti deleniti. Ea possimus
                    earum ipsum doloribus? Vel culpa placeat repellendus odit fuga. Autem!
                </p>
            </div>
            {/* Card Feature Section */}
            <div className="max-w-5xl mx-auto px-4 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-2xl p-7 text-center hover:shadow-xl transition-all duration-300">
                    <img src={card1} alt="Billing Icon" className="mx-auto mb-5 w-20 h-20" />
                    <h1 className="text-xl font-semibold mb-3 text-gray-800">
                        Online Billing, Invoicing, & Contracts
                    </h1>
                    <p className="text-gray-600">
                        Simple and secure control of your organization’s financial and legal
                        transactions. Send customized invoices and contracts.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-2xl p-7 text-center hover:shadow-xl transition-all duration-300">
                    <img src={card2} alt="Scheduling Icon" className="mx-auto mb-5 w-20 h-20" />
                    <h1 className="text-xl font-semibold mb-3 text-gray-800">
                        Easy Scheduling & Attendance Tracking
                    </h1>
                    <p className="text-gray-600">
                        Schedule and reserve classrooms at one campus or multiple campuses.
                        Keep detailed records of student attendance.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-2xl p-7 text-center hover:shadow-xl transition-all duration-300">
                    <img src={card3} alt="Customer Tracking Icon" className="mx-auto mb-5 w-20 h-20" />
                    <h1 className="text-xl font-semibold mb-3 text-gray-800">
                        Customer Tracking
                    </h1>
                    <p className="text-gray-600">
                        Automate and track emails to individuals or groups. Skilline’s built-in
                        system helps organize your organization.
                    </p>
                </div>

            </div>
            {/* What is TOTOC */}

            {/* Text Section */}
            <div className="container flex flex-col justify-center items-center font-sans px-4 lg:px-10 mx-auto">
                <h1 className="text-3xl font-bold text-center mt-16 mb-4"><span className='text-blue-700'>What is</span> <span className='text-gray-400'>TOTC</span></h1>

                <p className="max-w-3xl text-center  text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos quasi,
                    consectetur quam aspernatur nostrum accusamus corrupti deleniti. Ea possimus
                    earum ipsum doloribus? Vel culpa placeat repellendus odit fuga. Autem!
                </p>
            </div>
            {/* WHAT IS TOTC SECTION */}
            <div className="max-w-5xl mx-auto px-4 lg:px-10 py-10 
                grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                    <img
                        className="w-full h-72 object-cover"
                        src={instractor}
                        alt="Instructor"
                    />

                    <div
                        className="absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            flex flex-col items-center text-white gap-3">

                        <h1 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                            FOR INSTRUCTOR
                        </h1>

                        <button className="border border-white rounded-full px-8 py-2 
                               text-white font-semibold hover:bg-white 
                               hover:text-black transition">
                            Start a class today
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                    <img
                        className="w-full h-72 object-cover"
                        src={students}
                        alt="Instructor"
                    />

                    <div
                        className="absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            flex flex-col items-center text-white gap-3">

                        <h1 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                            FOR STUDENTS
                        </h1>

                        <button className="border border-white rounded-full px-8 py-2 
                               text-white font-semibold bg-gray-400 
                               hover:text-black transition">
                            Browse courses
                        </button>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default Success;
