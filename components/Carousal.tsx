"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFetch } from "@/hooks/useFetch";
import { Banner } from "@/types/types";
import useAppStore from "@/store/store";
import Image from "next/image";

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const { banners, setBanners } = useAppStore();
  const total = banners?.length;

  const { data, isLoading } = useFetch<{ data: Banner[] }>(
    "banners",
    "/banners"
  );
  useEffect(() => {
    if (data && data.data) {
      const filteredBanners = data.data.filter(
        (banner) => banner.category.toLowerCase() === "homepage"
      );
      console.log(
        "Filtered Banner URLs:",
        filteredBanners.map((b) => b.media_type)
      );
      setBanners(filteredBanners);
    }
  }, [data]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {banners?.map((banner, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {banner.media_type === "video" && (
            <video
              src={banner.media_url || "/web-logo.png"}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          )}
          {banner.media_type === "image" && (
            <Image
              src={banner.media_url || "./web-logo.png"}
              alt={banner.media_type}
              fill
              className="object-cover w-full h-full"
            />
          )}

          <div className="absolute inset-0 bg-black bg-opacity-50 z-[100] flex px-4">
            <div className="absolute top-[40%] left-8 md:left-34 text-white max-w-[90%] sm:max-w-[70%] lg:max-w-[60%]">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                {banner.heading}
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                {banner.description}
              </p>

              <Link
                style={{ textDecoration: "none" }}
                href={
                  banner.route === "Get in Touch"
                    ? "/contact-us"
                    : "/learn-more"
                }
                className="bg-white text-black text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-opacity-80 transition"
              >
                {banner.route === "Get in Touch"
                  ? "GET IN TOUCH"
                  : "Learn more"}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 z-[10] text-gray-500 cursor-pointer left-4 sm:left-10 transform -translate-y-1/2  bg-opacity-30 hover:bg-opacity-60 p-2 sm:p-3 rounded-full"
      >
        <ChevronLeft size={38} className="sm:size-30" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 z-[10] right-4 sm:right-10 transform cursor-pointer -translate-y-1/2 text-gray-500  bg-opacity-30 hover:bg-opacity-60 p-2 sm:p-3 rounded-full"
      >
        <ChevronRight size={38} className="sm:size-30" />
      </button>
    </div>
  );
}
