import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="main">
      <div className="main-text">
        <h1>อาหารสุดอร่อยแสนเท่และจ๊าบสำหรับชีวิตดีๆ ที่ลงตัวของคุณ</h1>
        <p className="kumkom">
          อร่อยแบบลึกซึ้ง ปอเต๊กตึ้งยืนรอ สูตรไม่ซ้ำ จำไม่ได้ว่าใส่อะไรบ้าง
          ทอดกรอบรสดี แถมฟรีไขมันพอกตับ สูตรอ่ะจำได้ แต่ไม่ใช้ มีผงชูรส 100%
        </p>
        <Link href="/Menu">
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
  );
};

export default HomePage;
