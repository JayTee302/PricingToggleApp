import React from 'react';
import './App.css';
import Card from './Card';

const App = () => {
  const iPhoneDescriptions = {
    iPhone13: 'The latest and greatest from Apple.',
    iPhone14: 'The next generation of iPhone.',
    iPhone15: 'The best iPhone that Apple has to offer.',
  };

  const iPhonePrices = {
    iPhone13: '$999',
    iPhone14: '$1,199',
    iPhone15: '$1,399',
  };

  const iPhonePlans = {
    iPhone13: 'Unlimited data',
    iPhone14: 'Unlimited data + 30GB hotspot',
    iPhone15: 'Unlimited data + 50GB hotspot',
  };

  const iPhoneImages = {
    iPhone13: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-mini-midnight?wid=465&hei=465&fmt=webp',
    iPhone14: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907_inline.jpg.large.jpg',
    iPhone15: 'https://phones.mintmobile.com/wp-content/uploads/2023/09/Apple_iPhone_15_Pro_Max_Black_Titanium_body_image_1.jpg',
  };

  const handleButtonClick = (title) => {
    alert(`The detailed description of the ${title} can be found here: https://www.apple.com/iphone/${title}`);
  };

  return (
    <div className="app">
      <Card
        title="iPhone 13"
        description={iPhoneDescriptions.iPhone13}
        price={iPhonePrices.iPhone13}
        plan={iPhonePlans.iPhone13}
        image={iPhoneImages.iPhone13}
        handleButtonClick={handleButtonClick}
      />
      <Card
        title="iPhone 14"
        description={iPhoneDescriptions.iPhone14}
        price={iPhonePrices.iPhone14}
        plan={iPhonePlans.iPhone14}
        image={iPhoneImages.iPhone14}
        handleButtonClick={handleButtonClick}
      />
      <Card
        title="iPhone 15"
        description={iPhoneDescriptions.iPhone15}
        price={iPhonePrices.iPhone15}
        plan={iPhonePlans.iPhone15}
        image={iPhoneImages.iPhone15}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default App;
