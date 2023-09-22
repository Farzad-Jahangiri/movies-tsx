import React from "react";
import Image from "next/image";
import NotFound from "@/app/not-found";

interface move {
  id: number;
  title: string;
  poster: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  awards: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  imdb_id: string;
  type: string;
  genres: string[];
  images: string[];
}

const getData = async (id: number) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });
  return data.json();
};

const page = async (props: any) => {
  const data:move = await getData(props.params.id);

  if(!data.id){
    return <NotFound />
  }

  return (
    <main className=" container mx-auto _font-bold text-white flex flex-col gap-4">
      <section className="rounded-lg  bg-zinc-600 p-8 flex justify-between items-start">
        <div className=" flex flex-col gap-8">
          <div className=" flex flex-col gap-4">
            <h1 className="text-3xl text-slate-200">{data.title}</h1>
            <div>سال ساخت : {data.year}</div>
            <div>زمان : {data.runtime}</div>
            <div>کارگردان : {data.director}</div>
            <div className="flex gap-2">
              <span>نمره IMDB :</span>
              <span>{data.imdb_rating}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-start gap-3 flex-wrap w-full">
              <div>دسته بندی:</div>
              <div dir="ltr" className="flex gap-2">
                {data.genres.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
            <div>
              <div>خلاصه فیلم:</div>
              <div dir="ltr">{data.plot}</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-xl"
            width={200}
            height={200}
            alt="imge"
            src={data.poster}
            priority={true}
          />
        </div>
      </section>
      <div className="flex justify-center items-center">
        <div className=" w-[60rem] flex justify-center items-start flex-wrap">
            {data.images.map((img,index)=><Image key={index} width={300} height={250} alt="image" src={img} />)}
        </div>
      </div>
    </main>
  );
};

export default page;
