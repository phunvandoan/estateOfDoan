import "./aboutPage.scss";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Khám Phá Thế Giới Bất Động Sản Tại DoanGroup
          </h1>
          <p>
            <span>T</span>ập đoàn DoanGroup được thành lập vào năm 2004, với mục
            tiêu mang đến giá trị bền vững trong lĩnh vực bất động sản. Từ những
            ngày đầu thành lập, chúng tôi đã tập trung vào việc cung cấp dịch vụ
            chất lượng cao và phát triển mối quan hệ bền vững với khách hàng.
          </p>
          <p>
            Qua nhiều năm hoạt động, DoanGroup đã mở rộng quy mô và phạm vi dịch
            vụ, phục vụ nhu cầu ngày càng đa dạng của khách hàng trong lĩnh vực
            bất động sản. Chúng tôi không ngừng nâng cao năng lực và mở rộng
            mạng lưới để đáp ứng tốt nhất yêu cầu của thị trường.
          </p>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Năm kinh nghiệm</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Giải thưởng đạt được</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Tài sản giao dịch</h2>
            </div>
          </div>
          <h2>Thành tựu nổi bật</h2>
          <ul>
            <li>
              Giải thưởng Doanh nghiệp xuất sắc trong ngành bất động sản năm
              2020.
            </li>
            <li>Phát triển hơn 50 dự án bất động sản tại các thành phố lớn.</li>
            <li>
              Xây dựng mối quan hệ hợp tác với hơn 100 đối tác trong và ngoài
              nước.
            </li>
          </ul>
          <h2>Dịch vụ của chúng tôi</h2>
          <p>Chúng tôi cung cấp đa dạng các dịch vụ bao gồm:</p>
          <ul>
            <li>Đầu tư và phát triển bất động sản.</li>
            <li>Cho thuê và quản lý tài sản bất động sản.</li>
            <li>
              Tư vấn và hỗ trợ khách hàng trong việc tìm kiếm bất động sản.
            </li>
            <li>
              Đào tạo và phát triển nguồn nhân lực trong ngành bất động sản.
            </li>
          </ul>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Bất động sản" />
      </div>
    </div>
  );
}

export default AboutPage;
