import './about1.css';

const AboutPage = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">Our Story</h1>
      <div className="about-text">
        <p>เปิดให้บริการทั้งมื้อเช้า กลางวัน และเย็น โดยนำเสนออาหารไทย ยุโรป และผสมผสานวัตถุดิบท้องถิ่นเข้ากับรสชาติระดับสากล</p>
        <p>ร้านแห่งนี้ก่อตั้งโดยคุณออมพล ซึ่งเป็นคนจังหวัดปทุมธานี โดยมีการคิดค้นอาหารขึ้นมาด้วยตัวเอง ลูกค้าจึงมั่นใจได้ว่า อาหารที่ได้มีคุณภาพ สะอาด และมีรสชาติอร่อยที่ไม่เหมือนใคร</p>
        <p>ร้านนี้ตั้งอยู่ในหมูบ้านฟ้าลากูล ท่ามกลางธรรมชาติที่โอบล้อมด้วยสวนไม้ผล เป็นบรรยากาศที่เงียบสงบ เหมาะสำหรับการพักผ่อนทั้งร่างกายและจิตใจ พร้อมที่จอดรถกว้างขวางและการบริการที่อบอุ่นเป็นกันเอง</p>
        <p>เราหวังว่าทุกครั้งที่คุณลูกค้าก้าวเข้ามาที่ร้านเราจะเป็นช่วงเวลาแห่งความสุข ความอิ่มอร่อย และประสบการณ์ที่น่าจดจำ</p>
      </div>

      <div className="about-gallery">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/86/ec/a5/spectrum-lounge-bar-at.jpg" alt="view" />
        <img src="https://static.trueplookpanya.com/tppy/member/m_545000_547500/546742/cms/images/2020/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%AA%E0%B8%A7%E0%B8%A2%20%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3%20%E0%B8%AA%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A3%E0%B9%8C-1.jpg" alt="view" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/4c/ba/a5/outdoor.jpg" alt="view" />
        <img src="https://promotions.co.th/wp-content/uploads/2022/08/Cielo-Sky-Bar-Restaurant.jpg" alt="view" />
        <img src="https://www.powerstainlesssteel.com/wp-content/uploads/2021/10/56-1024x683.jpg" alt="kitchen" />
        <img src="https://www.powerstainlesssteel.com/wp-content/uploads/2021/09/11-1024x683.jpg" alt="kitchen" />
        <img src="https://www.dailynews.co.th/wp-content/uploads/2024/11/427-1-1280x854.jpg" alt="poke" />
        <img src="https://www.technologychaoban.com/wp-content/uploads/2018/08/Kam-5.jpg" alt="shrimp" />
        <img src="https://f.ptcdn.info/151/066/000/pygzknf5838Et6QstsD-o.jpg" alt="ka-pao" />
        <img src="https://www.nestleprofessional.co.th/sites/default/files/2023-03/BANNER_%E0%B8%99%E0%B8%A1%E0%B8%A1%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7%20%E0%B8%8A%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A2%20540x400%20px.jpg" alt="drink" />
        <img src="https://www.nestleprofessional.co.th/sites/default/files/2023-03/BANNER_%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B9%88%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99%20540x400%20px.jpg" alt="drink" />
        <img src="https://www.nestleprofessional.co.th/sites/default/files/2023-03/BANNER_%E0%B8%99%E0%B8%A1%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9%20540x400%20px.jpg" alt="drink" />


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

export default AboutPage;
