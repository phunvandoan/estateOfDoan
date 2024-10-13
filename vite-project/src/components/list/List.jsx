import "./list.scss";
import Card from "../card/Card";
import PropTypes from "prop-types";

function List({ posts }) {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
List.propTypes = {
  posts: PropTypes.array,
};

export default List;
