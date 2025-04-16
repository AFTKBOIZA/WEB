import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div className="main">
        <div className="main-text">
          <h1>อาหารสุดอร่อยแสนเท่และจ๊าบสำหรับชีวิตดีๆ ที่ลงตัวของคุณ</h1>
          <p className="kumkom">
            อร่อยแบบลึกซึ้ง ปอเต๊กตึ้งยืนรอ สูตรไม่ซ้ำ จำไม่ได้ว่าใส่อะไรบ้าง
            ทอดกรอบรสดี แถมฟรีไขมันพอกตับ สูตรอ่ะจำได้ แต่ไม่ใช้ มีผงชูรส 100%
          </p>
          <Link href="/About">
            <button className="red_btn">
              Visit Now <i className="fa-solid fa-arrow-right-long"></i>
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
            src="https://blog.hungryhub.com/wp-content/uploads/2022/07/fried-noodle-with-pork-soy-sauce-vegetable-1-1024x683.webp"
            alt="เมนูแนะนำ"
          />
          <h3>Food name</h3>
          <p>แม่งโคตรอร่อย</p>
          <Link href="/Menu">
            <button className="red_btn">See Menu</button>
          </Link>
        </div>
        <div className="re-menu">
          <img
            src="https://blog.hungryhub.com/wp-content/uploads/2022/07/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%97%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%A1-1024x683.webp"
            alt="เมนูแนะนำ"
          />
          <h3>Food name</h3>
          <p>แม่งโคตรอร่อย</p>
          <Link href="/Menu">
            <button className="red_btn">See Menu</button>
          </Link>
        </div>
        <div className="re-menu">
          <img
            src="https://static.thairath.co.th/media/Dtbezn3nNUxytg04ajW9XQOOLOr3FWkG3zrWdQ81AKnKm5.webp"
            alt="เมนูแนะนำ"
          />
          <h3>Food name</h3>
          <p>แม่งโคตรอร่อย</p>
          <Link href="/Menu">
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
            <p>Mon - Fri<br />10:00 am – 09:00 pm</p>
            <p>Saturday<br />10:00 am – 09:00 pm</p>
            <p>Sunday<br />10:00 am – 09:00 pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
