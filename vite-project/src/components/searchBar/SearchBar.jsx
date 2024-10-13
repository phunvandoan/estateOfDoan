import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <select id="city" name="city" onChange={handleChange}>
          <option value="" defaultChecked>
            Thành Phố
          </option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        </select>
        <select id="minPrice" name="minPrice" onChange={handleChange}>
          <option value="" defaultChecked>
            khoảng giá từ
          </option>
          <option value="0">từ giá thấp nhất</option>
          <option value="500000000">từ 500 tr</option>
          <option value="3000000000">từ 3 tỷ</option>
          <option value="10000000000">từ 10 tỷ</option>
          <option value="50000000000">từ 50 tỷ</option>
        </select>
        <select id="maxPrice" name="maxPrice" onChange={handleChange}>
          <option value="" defaultChecked>
            khoảng giá đến
          </option>
          <option value="800000000">800 tr</option>
          <option value="2000000000">2 tỷ</option>
          <option value="17000000000">17 tỷ</option>
          <option value="40000000000">từ 40 tỷ</option>
          <option value="100000000000">100 tỷ</option>
        </select>

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
