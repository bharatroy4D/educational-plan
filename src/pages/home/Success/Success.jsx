import React from 'react';

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

                <p className="max-w-3xl text-center font-semibold text-gray-600">
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
        </section>
    );
};

export default Success;
