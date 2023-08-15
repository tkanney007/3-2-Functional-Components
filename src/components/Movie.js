import "bootstrap/dist/css/bootstrap.css";

export default function Movie({ image, title, description, year }) {
  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">{year}</small>
        </p>
      </div>
    </div>
  );
}
