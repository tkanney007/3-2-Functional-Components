import "bootstrap/dist/css/bootstrap.css";
import Movie from "./Movie.js";

export default function Genre({
  name,
  description,
  movieTitle1,
  movieDesc1,
  movieYear1,
  movieImg1,
  movieTitle2,
  movieDesc2,
  movieYear2,
  movieImg2,
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="card-group">
        <Movie
          title={movieTitle1}
          description={movieDesc1}
          year={movieYear1}
          image={movieImg1}
        ></Movie>
        <Movie
          title={movieTitle2}
          description={movieDesc2}
          year={movieYear2}
          image={movieImg2}
        ></Movie>
      </div>
    </>
  );
}
