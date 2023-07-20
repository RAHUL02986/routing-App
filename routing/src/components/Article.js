import { Link} from "react-router-dom";

function Article(props) {
  return (
    <>
    <div>
      <Link to="/articles">
        <h4 style={{ marginBottom: "1rem" }}>
          <span role="img" aria-label="Finger Point">
            👈{" "}
          </span>
          Go back to articles
        </h4>
      </Link>
      <h1>
        The slug of the article is::: <b>{props.matches.slug}</b>!
      </h1>
      </div>
    </>
  );
}

export default Article; 
