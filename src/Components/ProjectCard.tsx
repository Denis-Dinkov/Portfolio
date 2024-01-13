export default function ProjectCard({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <img 
        className="h-52 md:h-72 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></img>
      <div className="text-white rounded-b-xl"></div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
