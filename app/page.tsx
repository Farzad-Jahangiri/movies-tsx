import Image from "next/image";
import Link from "next/link";

interface move {
  id: number;
  title: string;
  poster: string;
  year: number;
  country: string;
  imdb_rating: number;
  genres: [];
  images: [];
}

const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}", {
    cache: "no-store",
  });
  return data.json();
};

export default async function Home() {
  const data = await getData();
  return (
    <main className=" flex flex-col gap-4 container mx-auto">
      <div className="text-center text-2xl _font-heavy">صفحه اصلی</div>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {data.data.map((move: move) => (
          <Link
          href={`/movies/${move.id}`}
            key={move.id}
            className=" relative h-[28rem] my-4 w-72 border-2 border-zinc-300 rounded-2xl p-4 flex flex-col gap-4"
          >
            <div className=" flex justify-center items-center">
              <Image
                className=" rounded-md"
                width={200}
                height={260}
                alt="image"
                src={move.poster}
              />
            </div>
            <h3 className="text-center">{move.title}</h3>
            <div className="absolute bottom-1 right-2 left-2 flex items-center justify-between gap-2 _font-bold text-white">
              <div className="px-3 py-1 bg-blue-600 rounded-md">{move.year}</div>
              <div className="px-3 py-1 bg-blue-600 rounded-md">{move.country}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
