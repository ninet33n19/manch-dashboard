import Image from "next/image";

interface ArbitratorCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const ArbitratorCard = ({
  name,
  description,
  imageUrl,
}: ArbitratorCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-start items-start bg-[#ECECEA] p-8 rounded-3xl max-w-2xs gap-4">
        <h6 className="font-inter font-medium text-xl">{name}</h6>
        <p className="font-inter font-normal text-[16px]">{description}</p>
      </div>
      <div className="rounded-3xl">
        <Image src={imageUrl} alt={name} width={288} height={420} />
      </div>
    </div>
  );
};

export default ArbitratorCard;
