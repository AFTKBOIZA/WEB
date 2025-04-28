import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <div className="main">
        <div className="main-text">
          <h1>อาหารสุดอร่อยแสนเท่และจ๊าบสำหรับชีวิตดีๆ ที่ลงตัวของคุณ</h1>
          <p className="kumkom">
            อร่อยแบบลึกซึ้ง ปอเต๊กตึ้งยืนรอ สูตรไม่ซ้ำ จำไม่ได้ว่าใส่อะไรบ้าง
            ทอดกรอบรสดี แถมฟรีไขมันพอกตับ สูตรอ่ะจำได้ แต่ไม่ใช้ มีผงชูรส 100%
          </p>
          <Link href="/about2">
            <button className="red_btn">
              Visit Now <i className="visit_btn"></i>
            </button>
          </Link>
        </div>

        <div className="image">
          <img
            className="img"
            src="https://images.aws.nestle.recipes/original/94731a8be2b546c4415533acee5f09cb_artboard_3.jpg"
            alt="อาหาร"
          />
        </div>
      </div>

      <div className="recommend-menu">
        <div className="re-menu">
          <img
            src="https://fit-d.com/uploads/food/afb2ccb7050c6a64d52b7e3736d3a6f8.jpg"
            alt="เมนูแนะนำ"
          />
          <h3>ข้าวผัดกะเพราไก่ไข่ดาว</h3>
          <p>ข้าวสวยร้อน ๆ ราดด้วยผัดกะเพราไก่หอมเครื่องเทศ เสิร์ฟพร้อมไข่ดาวกรอบนอกนุ่มใน</p>
          <Link href="/menu1">
            <button className="red_btn">See Menu</button>
          </Link>
        </div>
        <div className="re-menu">
          <img
            src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSEmAUm74bI2EL8Sb34rOSLQkKjXQF.jpg"
            alt="เมนูแนะนำ"
          />
          <h3>ข้าวมันไก่</h3>
          <p>ข้าวมันหอมกลิ่นขิงกระเทียม เสิร์ฟพร้อมไก่ต้มเนื้อนุ่ม น้ำจิ้มเต้าเจี้ยวรสเด็ด และซุปใสร้อน ๆ</p>
          <Link href="/menu1">
            <button className="red_btn">See Menu</button>
          </Link>
        </div>
        <div className="re-menu">
          <img
            src="https://i.ytimg.com/vi/BPjymoPH0e0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqzmNDy11o3jbihPAIFXfAv2p2eQ"
            alt="เมนูแนะนำ"
          />
          <h3>ปีกไก่ทอดกระเทียม</h3>
          <p>ปีกไก่หมักเครื่องทอดจนกรอบ คลุกกระเทียมเจียวหอม ๆ ทานเป็นกับข้าวหรือของว่างก็อร่อย</p>
          <Link href="/menu1">
            <button className="red_btn">See Menu</button>
          </Link>
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
            <p>Mon - Fri<br />10:00 am - 09:00 pm</p>
            <p>Saturday<br />10:00 am - 09:00 pm</p>
            <p>Sunday<br />10:00 am - 09:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
