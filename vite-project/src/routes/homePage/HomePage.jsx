import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Tìm Bất Động Sản Tại DoanGroup</h1>
          <p>
            <span>T</span>ập đoàn DoanGroup được thành lập vào năm 2004, khi thị
            trường bất động sản Việt Nam bắt đầu mở cửa và phát triển mạnh mẽ.
            Với một nhóm nhỏ những người đam mê và có kinh nghiệm trong lĩnh vực
            bất động sản, công ty đã đặt ra mục tiêu mang lại giá trị thực sự
            cho khách hàng thông qua những sản phẩm và dịch vụ chất lượng.
          </p>
          <SearchBar />
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
              <h2>Tài sản </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
