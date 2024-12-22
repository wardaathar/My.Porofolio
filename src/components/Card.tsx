import React from 'react';
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
    return (
        <div 
            className="border border-accent rounded-lg overflow-hidden w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300" 
            data-aos="zoom-in-left"
        >
            {/* Image Section */}
            <div className="relative w-full h-56 sm:h-64 md:h-72">
                <Image
                    className="object-cover"
                    src={img}
                    fill
                    alt={title}
                />
            </div>

            {/* Content Section */}
            <div className="p-4 space-y-4 bg-gray-800">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-100">{title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((el) => (
                        <span
                            className="tags px-3 py-1 bg-accent text-gray-100 text-xs sm:text-sm rounded-lg"
                            key={el}
                        >
                            {el}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
