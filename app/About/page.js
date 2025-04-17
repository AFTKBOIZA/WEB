import './About.css';

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
        <img src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa3yX714zDAL4seyhRriCkh6JlrBZKtC29lBZEqFNl7YEhKWSetqS.jpg" alt="pond" />
        <img src="https://static.naewna.com/uploads/files2017/images/k1tchyq_1714037294_3353910373605990487_56939444746.gif" alt="lake" />
        <img src="https://s359.kapook.com/pagebuilder/b1c77da8-83a9-4cc4-ac0f-a3fe4e67f394.jpg" alt="farm" />
        <img src="https://s359.kapook.com/pagebuilder/b1c77da8-83a9-4cc4-ac0f-a3fe4e67f394.jpg" alt="farm" />
        <img src="https://s359.kapook.com/pagebuilder/b1c77da8-83a9-4cc4-ac0f-a3fe4e67f394.jpg" alt="farm" />
        <img src="https://yomorio.com/cdn/shop/files/sexy-kimono-robes-japanese-style-cosplay-lingerie-with-apron-pink-chiffon-yukata_7.jpg?v=1727401823" alt="lake" />
        <img src="https://i.ebayimg.com/images/g/5OkAAOSwTnpmC4Xb/s-l1200.jpg" alt="lake" />
        <img src="https://static.naewna.com/uploads/files2017/images/k1tchyq_1714037294_3353910373605990487_56939444746.gif" alt="lake" />
        <img src="https://static.naewna.com/uploads/files2017/images/k1tchyq_1714037294_3353910373605990487_56939444746.gif" alt="lake" />
        <img src="https://i.ebayimg.com/images/g/5OkAAOSwTnpmC4Xb/s-l1200.jpg" alt="lake" />
        <img src="https://i.ebayimg.com/images/g/5OkAAOSwTnpmC4Xb/s-l1200.jpg" alt="lake" />
        <img src="https://cdn.discordapp.com/attachments/642688524130451457/1358830663305924770/image.png?ex=6801cb6b&is=680079eb&hm=2b31509f24f707eed9d2f4564f6b133909cbbda97e3a707dbea9a4315ffe693b&" alt="lake" />


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
