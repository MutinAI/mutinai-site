import Image from "next/image";

export default function RopeDivider() {
  return (
    <div className="flex justify-center my-12">
      <Image
        src="/assets/rope.png"
        alt=""
        width={400}
        height={12}
        className="h-3 w-full max-w-md object-cover"
      />
    </div>
  );
}
