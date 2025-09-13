import Image from "next/image";
import HighlightedText from "../ui/highlighted-text";

const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <div className="flex flex-col gap-4 p-6 rounded-3xl transition-shadow duration-300 max-w-80">
    <Image src={image} alt={title} width={320} height={500} />
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function ServicesSection() {
  return (
    <div className="flex flex-col mt-56 gap-20 justify-center items-center mx-36 ">
      <h1 className="text-5xl font-inter font-medium text-center leading-tight w-full">
        The Opportunity for Justice in a{" "}
        <HighlightedText>virtual world.</HighlightedText>
      </h1>
      <div className="flex gap-4">
        <Card
          title="Sports Disputes"
          description="Resolve sports-related conflicts efficiently through a neutral forum"
          image="/assests/sports.png"
        />
        <Card
          title="E-commerce Disputes"
          description="Designed to address consumer complaints, product issues & refund failures."
          image="/assests/ecommerce.png"
        />
        <Card
          title="Art Disputes"
          description="Address issues of authenticity, ownership, provenance, copyright & exhibition agreements."
          image="/assests/art.png"
        />
      </div>
    </div>
  );
}
