import React from 'react';
import Image from 'next/image';
import { BsCupHot } from 'react-icons/bs';

const Menu3 = () => {
  const menu = [
    {
      title: 'Fig and lemon cake ',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '32$',
      highlighted: false,
    },
    {
      title: 'Creamy mascarpone cake',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio',
      calories: '700 CAL',
      price: '43$',
      highlighted: true,
    },
    {
      title: 'Pastry, blueberries, lemon juice',
      description: 'Ground cumin, avocados, peeled and cubed',
      calories: '1000 CAL',
      price: '14$',
      highlighted: false,
    },
    {
      title: 'Pain au chocolat',
      description: 'Spreadable cream cheese, crumbled blue cheese',
      calories: '560 CAL',
      price: '35$',
      highlighted: false,
    },
  ]
  return (
    <div className="min-h-screen mt-12 md:mt-16  gap-24 space-y-28 flex flex-col md:flex-row items-center justify-center bg-gray-50 px-8 md:px-24">
      <div className="w-full md:w-1/2 md:mt-0 flex justify-center">
        <Image
          src="/images/menu3.png"
          alt="Menu"
          width={448}
          height={626}
          className=" shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-3/4 md:mt-0">
        <div className="items-center mb-4">
          <BsCupHot size={36} className="text-[#FF9F0D] mb-4 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">Deserts</h2>
        </div>
        <div className="space-y-8">
          {menu.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3
                  className={`text-xl font-bold ${
                    item.highlighted ? 'text-[#FF9F0D]' : 'text-gray-800'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-600">{item.calories}</p>
              </div>
              <span className="text-xl font-bold text-[#FF9F0D]">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu3;
