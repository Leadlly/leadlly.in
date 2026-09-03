import Image from "next/image";

export function FeatureVisual({
  image,
  title,
  priority = false,
}: {
  image: string;
  title: string;
  priority?: boolean;
}) {
  return (
    <div className="flex justify-center">
      <div className="relative w-[230px] sm:w-[260px] lg:w-[280px]">
        <div
          aria-hidden
          className="absolute top-[18%] -right-[5px] h-10 w-[3px] rounded-r-full bg-[#2a2a2a]"
        />
        <div
          aria-hidden
          className="absolute top-[28%] -right-[5px] h-16 w-[3px] rounded-r-full bg-[#2a2a2a]"
        />
        <div
          aria-hidden
          className="absolute top-[22%] -left-[5px] h-12 w-[3px] rounded-l-full bg-[#2a2a2a]"
        />

        <div className="rounded-[2.6rem] bg-[#111] p-[10px] shadow-[0_28px_70px_rgba(26,16,48,0.28)]">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.05rem] bg-white">
            <Image
              src={image}
              alt={title}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 260px, 280px"
              className="object-cover object-top"
            />
            <div
              aria-hidden
              className="absolute top-2.5 left-1/2 z-10 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-[#111]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
