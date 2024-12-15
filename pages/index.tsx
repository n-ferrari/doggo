import Image from "next/image";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f6db98]">
      <Image
        src="/doggo.jpg"
        alt="Logo de cachorro e gato felizes"
        width={650}
        height={520}
      />
    </div>
  );
}

export default Home;
