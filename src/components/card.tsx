import Heading from "./heading";

type CardProps = {
  title: string;
  description: string;
  link?: string;
};
export default function Card(props: CardProps) {
    const {title, description, link} = props
  return (
    <div className="p-4 border border-black/10">
      <h1 className="font-bold text-xl mb-4">{title}</h1>
      <Heading title={title}/>
      <p className="mb-8 font-medium">{description}</p>
      <a href={link ? link : "/"}>Learn More</a>
    </div>
  );
}
