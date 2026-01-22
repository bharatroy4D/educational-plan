import React from 'react';
import card1 from '../../../assets/Group 79.png';
import card2 from '../../../assets/Group 80.png';
import card3 from '../../../assets/Group 81.png';
import instractor from '../../../assets/images.jfif';
import teaching from '../../../assets/education.png'
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
        <section className="w-full bg-base-200 py-12">

            {/* ---------- Success Text ---------- */}
            <div className="container mx-auto px-4 lg:px-10 text-center">
                <h1 className="text-3xl font-bold mb-4">Our Success</h1>
                <p className="max-w-3xl mx-auto text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos quasi,
                    consectetur quam aspernatur nostrum accusamus corrupti deleniti.
                </p>
            </div>

            {/* ---------- Stats Box ---------- */}
            <div className="container mx-auto px-5 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
                {stats.map((item, index) => (
                    <div key={index}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2BA6C4]">{item.value}</h2>
                        <p className="text-gray-600 text-sm md:text-base">{item.label}</p>
                    </div>
                ))}
            </div>


            {/* ---------- All-in-one Text ---------- */}
            <div className="container mx-auto px-4 lg:px-10 text-center mt-20">
                <h1 className="text-3xl font-bold mb-4">
                    <span className="text-blue-700">All-in-One </span>
                    <span className="text-gray-400">Cloud Software</span>
                </h1>
                <p className="max-w-3xl mx-auto text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>


            {/* ---------- Card Features ---------- */}
            <div className="max-w-6xl mx-auto px-4 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-2xl p-7 text-center hover:shadow-xl transition duration-300">
                    <img src={card1} className="mx-auto mb-5 w-20 h-20" alt="" />
                    <h1 className="text-xl font-semibold mb-3">Online Billing, Invoicing, & Contracts</h1>
                    <p className="text-gray-600">
                        Secure control of your organization's financial and legal transactions.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-2xl p-7 text-center hover:shadow-xl transition duration-300">
                    <img src={card2} className="mx-auto mb-5 w-20 h-20" alt="" />
                    <h1 className="text-xl font-semibold mb-3">Easy Scheduling & Attendance Tracking</h1>
                    <p className="text-gray-600">
                        Manage campus reservations & keep attendance records easily.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md rounded-2xl p-7 text-center hover:shadow-xl transition duration-300">
                    <img src={card3} className="mx-auto mb-5 w-20 h-20" alt="" />
                    <h1 className="text-xl font-semibold mb-3">Customer Tracking</h1>
                    <p className="text-gray-600">
                        Automate and track communication across your organization.
                    </p>
                </div>

            </div>


            {/* ---------- What is TOTC Text ---------- */}
            <div className="container mx-auto px-4 lg:px-10 text-center mt-16">
                <h1 className="text-3xl font-bold mb-4">
                    <span className="text-blue-700">What is </span>
                    <span className="text-gray-400">TOTC</span>
                </h1>
                <p className="max-w-3xl mx-auto text-gray-600">
                    TOTC helps online and physical schools manage scheduling, payments and attendance.
                </p>
            </div>


            {/* ---------- Two Big Cards (Instructor/Students) ---------- */}
            <div className="max-w-6xl mx-auto px-4 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Instructor Card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={instractor} className="w-full h-72 object-cover" alt="" />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h1 className="text-2xl md:text-3xl font-bold">FOR INSTRUCTOR</h1>
                        <button className="mt-3 border border-white rounded-full px-8 py-2 hover:bg-white hover:text-black transition">
                            Start a class today
                        </button>
                    </div>
                </div>

                {/* Students Card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={students} className="w-full h-72 object-cover" alt="" />

                    <div className="absolute inset-0 bg-black/30"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h1 className="text-2xl md:text-3xl font-bold">FOR STUDENTS</h1>
                        <button className="mt-3 bg-gray-300 text-black rounded-full px-8 py-2 hover:bg-white transition">
                            Browse courses
                        </button>
                    </div>
                </div>
            </div>


            {/* ---------- Final Text/Image Section ---------- */}
            <div className="max-w-6xl mx-auto px-4 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Text */}
                <div className="font-sans relative">
                    <h1 className="text-2xl font-semibold leading-snug">
                        Everything you can do in a physical classroom,
                        <span className="text-gray-400"> you can do with TOTC</span>
                    </h1>

                    <p className="py-4 text-gray-600">
                        TOTC helps both traditional and online schools manage scheduling,
                        attendance, payments, and virtual classrooms all in one secure
                        system.
                        TOTC helps both traditional and online schools manage scheduling,
                        attendance, payments, and virtual classrooms all in one secure
                        system.
                    </p>

                    <button className="underline text-blue-600">Learn more</button>

                    <div className="absolute top-1 -left-3 -z-10 bg-green-400 w-7 h-7 rounded-full"></div>
                </div>

                {/* Image with shapes */}
                <div className="relative">
                    <img src={teaching} className="w-full h-64 object-cover rounded-lg z-20 relative" alt="" />

                    <div className="absolute -top-2 -left-2 w-12 h-12 bg-blue-400 rounded-lg"></div>
                    <div className="absolute bottom-0 -right-2 w-16 h-16 bg-green-400 rounded-lg"></div>
                </div>
            </div>

        </section>
    );
};

export default Success;
