import "./ActorCard.css";

export default function ActorCard({ actor }) {
  return (
    <>
      <h2>{actor}</h2>
      <img
        style={{
          backgroundImage: "url(https://picsum.photos/200)",
          width: "200px",
          height: "200px",
        }}
      ></img>
    </>
  );
}
