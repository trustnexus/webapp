"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroSection",
        start: "top 0%",
        end: "bottom 90%",
        scrub: 1,
        markers: true,
      },
    });

    tl.from(".heroText", {
      x: -160,
      duration: 1,
      opacity: 0,
    });

    tl.from(".heroImage", {
      x: 60,
      opacity: 0,
    });
  }, []);

  return (
    <div>
      <div className="heroSection border-2 flex h-screen items-center gap-10 justify-center max-w-[1320px] mx-auto">
        <div className="max-w-[500px] heroText border-2 text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Numquam aspernatur modi
          quaerat libero maiores perspiciatis sed exercitationem, cum deleniti
          autem odio, quidem minus, in rem rerum tempora adipisci. Sed ea
          praesentium sequi facilis asperiores provident fugit suscipit dolor
          magnam beatae eum cum similique distinctio ullam, delectus in quaerat
          repellendus nihil placeat modi hic amet qui. Aperiam possimus nesciunt
          molestias quo necessitatibus sunt velit minus sint, sed ad officiis
          doloremque reiciendis aliquid molestiae officia, odio modi quaerat nam
          magni illum esse expedita nobis amet? Vel eius repellat, cum rerum
          ullam accusamus deserunt id. Natus odit suscipit reiciendis libero
          corporis saepe debitis.
        </div>
        <div className="heroImage border-2">
          <img src="/web-logo.png" alt="Hero Logo" />
        </div>
      </div>
    </div>
  );
}
