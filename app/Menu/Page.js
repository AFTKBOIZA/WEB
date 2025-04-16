import React from 'react';
import './Menu.css';

const MenuPage = () => {
  const foodItems = [
    {
      name: 'ต้มยำกุ้ง',
      description: 'รสจัดจ้านถึงใจ',
      price: 89,
      image: 'https://www.scb.co.th/content/media/personal-banking/stories/tips-for-you/thai-food/jcr.3acontent/par/wrappercomp/wrapper/rowcomp/col-1/storyinfocomp/par/image.img.jpg/1585568753910.jpg'
    },
    {
      name: 'ผัดไทย',
      description: 'กลิ่นหอมกระทะสุด ๆ',
      price: 79,
      image: 'https://www.central.co.th/e-shopping/wp-content/uploads/2020/12/spagethi_carbonara.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://freshfood.co.th/wp-content/uploads/2024/08/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food-1024x683.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    },
    {
      name: 'ข้าวหมูแดง',
      description: 'หมูนุ่ม น้ำราดเด็ด',
      price: 65,
      image: 'https://dtc.ac.th/wp-content/uploads/2023/10/3.jpg'
    }
  ];

  return (
    <div className="mainFoodmenu">
      <div className="menu-container">
        <h1 className="menu-text">Food Menu</h1>
        <div className="food-grid">
          {foodItems.map((item, index) => (
            <div className="food-card" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="food-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-columns">
          <div className="contact-box">
            <h3>Address</h3>
            <p>43 Rangsit-Nakhon Nayok 44 , Prachathipat</p>
            <p>Thanyaburi , Pathum Thani 12130</p>
          </div>

          <div className="contact-box">
            <h3>Contact</h3>
            <p>093-117-xxxx</p>
          </div>

          <div className="contact-box">
            <h3>Opening Hours</h3>
            <p>Mon - Fri<br />10:00 am – 09:00 pm</p>
            <p>Saturday<br />10:00 am – 09:00 pm</p>
            <p>Sunday<br />10:00 am – 09:00 pm</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default MenuPage;
