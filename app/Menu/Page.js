import React from 'react';
import './menu.css';

const MenuPage = () => {
  const foodItems = [
    {
      "name": "ข้าวผัดกะเพราไก่ไข่ดาว",
      "description": "ข้าวสวยร้อน ๆ ราดด้วยผัดกะเพราไก่หอมเครื่องเทศ เสิร์ฟพร้อมไข่ดาวกรอบนอกนุ่มใน เพิ่มความจัดจ้านด้วยพริกขี้หนูสวน",
      "price": 55,
      "image": "https://fit-d.com/uploads/food/afb2ccb7050c6a64d52b7e3736d3a6f8.jpg"
  },
  {
      "name": "ผัดไทยกุ้งสด",
      "description": "เส้นจันท์เหนียวนุ่ม ผัดกับซอสผัดไทยสูตรเข้มข้น ใส่กุ้งสดตัวโต โรยด้วยถั่วลิสงและใบกุยช่าย",
      "price": 70,
      "image": "https://img.wongnai.com/p/1968x0/2019/05/04/15a588ebc226426f8ae18e2a6bc955f8.jpg"
  },
  {
      "name": "ต้มยำกุ้ง",
      "description": "ซุปต้มยำรสแซ่บ หอมกลิ่นสมุนไพรไทย พร้อมกุ้งสดเด้ง ๆ น้ำซุปเข้มข้นเผ็ดเปรี้ยวกลมกล่อม",
      "price": 90,
      "image": "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/04/24/5608757681874e1ea5df1aa41d5b2e3d_How_To_Make_Tom_Yam_Kung_The_Epitome_Of_Delicious_And_Nutritious_Thai_Cuisine3.jpg"
  },
  {
      "name": "แกงเขียวหวานไก่",
      "description": "แกงเขียวหวานเนื้อไก่นุ่ม ๆ กับมะเขือเปราะ ใบโหระพาหอม ๆ ในน้ำแกงหอมกะทิเข้มข้น",
      "price": 75,
      "image": "https://s359.kapook.com/pagebuilder/450ce031-784b-49ac-8d00-79ba05156ca9.jpg"
  },
  {
      "name": "ข้าวมันไก่",
      "description": "ข้าวมันหอมกลิ่นขิงกระเทียม เสิร์ฟพร้อมไก่ต้มเนื้อนุ่ม น้ำจิ้มเต้าเจี้ยวรสเด็ด และซุปใสร้อน ๆ",
      "price": 50,
      "image": "https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSEmAUm74bI2EL8Sb34rOSLQkKjXQF.jpg"
  },
  {
      "name": "ส้มตำไทย",
      "description": "มะละกอสับสด ๆ คลุกเคล้ากับพริก มะนาว กุ้งแห้ง และถั่วลิสง รสเปรี้ยวหวานเผ็ดกำลังดี",
      "price": 45,
      "image": "https://s359.kapook.com/pagebuilder/868b7d1b-32fe-4cf7-852b-777427ca6dae.jpg"
  },
  {
      "name": "ลาบหมู",
      "description": "หมูสับปรุงรสด้วยน้ำมะนาว น้ำปลา ข้าวคั่ว และสมุนไพร รสจัดจ้าน ทานคู่กับผักสด",
      "price": 60,
      "image": "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/red-meats-&-red-meat-dishes/%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%B9/%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%B9_header.jpg"
  },
  {
      "name": "ขนมจีนน้ำยา",
      "description": "ขนมจีนนุ่ม ๆ ราดด้วยน้ำยาปลาสูตรเข้มข้น ใส่กระชายและเครื่องแกงหอม ๆ เสิร์ฟพร้อมผักเคียง",
      "price": 55,
      "image": "https://recipe.ajinomoto.co.th/_next/image?url=https%3A%2F%2Fwww.ajinomoto.co.th%2Fstorage%2Fphotos%2Fshares%2FRecipe%2FMenu%2F3-04kanomnamyapa%2F61a8ed0ec61e2.jpeg&w=3840&q=75"
  },
  {
      "name": "ไข่เจียวหมูสับ",
      "description": "ไข่ฟูกรอบนอกนุ่มใน ผสมหมูสับปรุงรส หอมอร่อย ทานคู่กับข้าวสวยร้อน ๆ",
      "price": 40,
      "image": "https://img.wongnai.com/p/1920x0/2017/12/11/311685d0d8254968bd2dfa16501ab1f3.jpg"
  },
  {
      "name": "ปีกไก่ทอดกระเทียม",
      "description": "ปีกไก่หมักเครื่องทอดจนกรอบ คลุกกระเทียมเจียวหอม ๆ ทานเป็นกับข้าวหรือของว่างก็อร่อย",
      "price": 65,
      "image": "https://i.ytimg.com/vi/BPjymoPH0e0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqzmNDy11o3jbihPAIFXfAv2p2eQ"
  },
  {
      "name": "ข้าวต้มปลา",
      "description": "ข้าวต้มปลากะพงเนื้อแน่นในน้ำซุปร้อน ๆ ปรุงด้วยขิง พริกไทย และต้นหอม",
      "price": 60,
      "image": "https://s359.kapook.com/pagebuilder/b7d969d3-0ed8-4260-ac07-afaded101c4c.jpg"
  },
  {
      "name": "ก๋วยเตี๋ยวเรือหมู",
      "description": "เส้นก๋วยเตี๋ยวเหนียวนุ่มในน้ำซุปเข้มข้นหอมเครื่องพะโล้ ใส่หมูสด หมูตุ๋น และลูกชิ้น",
      "price": 45,
      "image": "https://img.wongnai.com/p/1920x0/2020/01/20/0e4c6a1ca489437985a9636f29bec582.jpg"
  },
  {
      "name": "หมูปิ้งกับข้าวเหนียว",
      "description": "หมูหมักนุ่ม ๆ ย่างหอม ๆ เสิร์ฟคู่ข้าวเหนียวนุ่ม อิ่มอร่อยในชุดเดียว",
      "price": 30,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OIiQeqfmyh2BCDle5cS1GEEl0YGb0Klhqw&s"
  },
  {
      "name": "นมชมพู",
      "description": "นมสดรสหวานมัน หอมกลิ่นวนิลา เสิร์ฟเย็น ๆ ชื่นใจ",
      "price": 40,
      "image": "https://www.nestleprofessional.co.th/sites/default/files/styles/np_wysiwyg_image_big/public/2023-03/BANNER_%E0%B8%99%E0%B8%A1%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9%20540x400%20px.webp?itok=1iP6cO5U"
  },
  {
      "name": "นมมะพร้าว ชาไทย",
      "description": "นมมะพรร้าวหอม ๆ ราดด้วยชาไทยเข้มข้น หอมหวานมันกลมกล่อม",
      "price": 75,
      "image": "https://www.nestleprofessional.co.th/sites/default/files/styles/np_wysiwyg_image_big/public/2023-03/BANNER_%E0%B8%99%E0%B8%A1%E0%B8%A1%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7%20%E0%B8%8A%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A2%20540x400%20px.webp?itok=5WrygReD"
  },
  {
      "name": "เอสเพรสโซ่เย็น",
      "description": "กาแฟเอสเพรสโซ่เข้มข้น ราดด้วยนมสดเย็น ๆ หอมมันกลมกล่อม",
      "price": 65,
      "image": "https://www.nestleprofessional.co.th/sites/default/files/styles/np_wysiwyg_image_big/public/2023-03/BANNER_%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B9%88%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99%20540x400%20px.webp?itok=HtX4Q5Lk"
  }
]

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
