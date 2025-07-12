import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function Collage() {
  const items = [
    {
      title: "The Narrator 2",
      
      image:"/h.jpg",
      className: "absolute top-40 ", //left-[25%] rotate-[-7deg]
    },
    {
      title: "The Narrator",
      
      image:"/c.jpg",
      className: "absolute top-40 ", //left-[25%] rotate-[-7deg]
    },
    {
      title: "Iceland",
      
      image:"/i.jpg",
      className: "absolute top-5 ", //left-[40%] rotate-[8deg]
    },
    
    {
      title: "lorem",
      
      image:"/fff.jpg",
      className: "absolute top-32 ", //left-[55%] rotate-[10deg]
    },

  
    
    {
      title: "Canada",
      
      image:"/boat_man.jpg",
      className: "absolute top-8", // left-[30%] rotate-[4deg]
    },
      {
      title: "Norway",
      
      image:"/birdsNboat.jpg",
      className: "absolute top-20 ", //right-[35%] rotate-[2deg]
    },
    {
      title: "Japan",
      
      image:"/o.jpg",
      className: "absolute top-32 ", //left-[55%] rotate-[10deg]
    },
     
    {
      title: "New Zealand",
      
      image:"/monotonous_road_.jpg",
      className: "absolute top-24 ", //left-[45%] rotate-[-7deg]
    },
    {
      title: "A child's monochrome dreams",
      image:"/child.jpg",
      className: "absolute top-10 ", //left-[20%] rotate-[-5deg]
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[30rem] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Art will survive, artists won't.     </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-40 w-80 object-cover"
          />
          <h3 className="mt-1 mb-1 text-center text-xs font-medium text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
