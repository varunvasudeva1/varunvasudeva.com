import Card from "./Card";

const Project = ({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link?: string;
  image?: string;
}) => {
  return (
    <Card className="flex-col items-start justify-center w-3/4">
      {image && (
        <img className="w-1/2" src={image} alt={title + ": " + description} />
      )}
      <h1 className="font-sans text-2xl font-bold text-white mb-2">{title}</h1>
      <p className="font-sans text-lg text-white">{description}</p>
      {link && (
        <a
          className="font-mono bg-purple-300 text-purple-900 text-sm font-semibold p-4 rounded-full flex text-center items-center justify-center self-center"
          href={link}
        >
          Learn More
        </a>
      )}
    </Card>
  );
};

export default Project;
