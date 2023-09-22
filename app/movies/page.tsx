"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import loading from "../loading";

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

const getData = async (url:string) => {
  const data = await fetch(url, {
    cache: "no-store",
  });
  return data.json();
};

const Movies =  () => {
  const [data, setData] = useState({data:[]})
  const [page, setPage] = useState(1)
  const [_loading, _setLoading] = useState(false)

  useEffect(()=>{
    _setLoading(true)
    getData(`https://moviesapi.ir/api/v1/movies?page=${page}`).then(res=>{
      console.log(res)
      setData(res)
      _setLoading(false)
    })
  },[page])

  return (
    <main className=" flex flex-col gap-4 container mx-auto">
      <div className="flex justify-center items-center flex-wrap gap-2">
        {data?data.data.map((move: move) => (
          _loading?<></>:<Link
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
              <div className="px-3 py-1 bg-blue-600 rounded-md">
                {move.year}
              </div>
              <div className="px-3 py-1 bg-blue-600 rounded-md">
                {move.country}
              </div>
            </div>
          </Link>
        )):null}
      </div>
      <div className="join grid-cols-2 flex justify-between">
        <button onClick={()=>{
          setPage(prev=>prev+1)
        }} className="join-item btn btn-outline w-1/3">Next</button>
        <button className="join-item btn btn-outline w-1/3">Previous page</button>
      </div>
    </main>

  );
};

export default Movies;
