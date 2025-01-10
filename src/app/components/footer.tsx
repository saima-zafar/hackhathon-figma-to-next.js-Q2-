import React from 'react';
import Image from 'next/image';

interface Data {
    id: number
    img: string;
    title: string;
    date: string;
}

const Footer = () => {
    const data: Data[] = [
        {
            id: 1,
            img: "/images/footer.png",
            title: "Is fastfood good for your body?",
            date: "February 28,2022",
        },
        {
            id: 2,
            img: "/images/footer.png",
            title: "Change your food habit With organic food",
            date: "February 28,2022",
        },
        {
            id: 3,
            img: "/images/footer.png",
            title: "Do you like fastfood for your life?",
            date: "February 28,2022",
        },
    ];

    return (
        <div className="bg-[#000000]">
            {/* Upper Section */}
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 border-b-2 border-[#FF9F0D]">
                <div className="text-center md:text-left space-y-3 w-full md:w-1/2">
                    <h2 className="font-bold text-[32px] text-white">
                        <span className="font-bold text-[#FF9F0D]">St</span>ill You Need Our Support?
                    </h2>
                    <p className="text-white text-[16px] font-[400]">
                    Don’t wait make a smart & logical quote here. Its pretty easy.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="text-[#FFFFFF] bg-[#FF9F0D] p-4 rounded-sm w-full md:w-[304px]"
                    />
                    <button className="w-full md:w-[163px] text-[#FF9F0D] bg-white rounded-sm p-4">
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* Lower Section */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 p-4">
                {/* First Section */}
                <div className="space-y-6">
                    <h2 className="text-[20px] text-[#FFFFFF] font-bold">About Us.</h2>
                    <p className="text-[18px] text-[#FFFFFF]">
                        Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car services in major cities across the world.
                    </p>
                    <div className="flex gap-3 items-center">
                        <button className="w-[78px] h-[71px] rounded-[6px] bg-[#FF9F0D] p-4 text-[#ffffff]">
                            <Image src="/images/hero1.png" alt="icon" width={40} height={40} />
                        </button>
                        <p className="text-[#FFFFFF] text-[16px]">
                            Opening Hours <br />
                            <span className="text-[14px] opacity-70">Mon - Sat (8.00 - 6.00) <br /> Sunday - Closed</span>
                        </p>
                    </div>
                </div>

                {/* Second Section - Useful Links */}
                <div>
                    <ul className="space-y-4">
                        <li className="text-[20px] font-bold text-[#FFFFFF]">Useful Links</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">About</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">News</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Partners</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Team</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Menu</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Contact</li>
                    </ul>
                </div>

                {/* Third Section - Help Links */}
                <div>
                    <ul className="space-y-4">
                        <li className="text-[20px] font-bold text-[#FFFFFF]">Help?</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">FAQ</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Terms & Conditions</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Reporting</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Documentation</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Support Policy</li>
                        <li className="text-[20px] font-[700px] text-[#FFFFFF]">Privacy</li>
                    </ul>
                </div>

                {/* Fourth Section - Recent Posts */}
                <div className="space-y-6">
                    <h2 className="text-[20px] font-bold text-[#FFFFFF]">Recent Posts</h2>
                    {data.map((item) => (
                        <div className="flex flex-col md:flex-row gap-3" key={item.id}>
                            <Image src={item.img} alt={item.title} width={80} height={80} className="rounded-lg" />
                            <div>
                                <h2 className="text-[16px] text-[#FFFFFF] font-[400]">{item.title}</h2>
                                <p className="text-[14px] text-[#FFFFFF] opacity-70">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
