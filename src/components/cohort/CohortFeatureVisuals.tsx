import Image from "next/image";

export function FeatureVisual({
  image,
  title,
  width,
  height,
  priority = false,
}: {
  image: string;
  title: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div className="flex justify-center">
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        unoptimized
        priority={priority}
        className="h-auto max-w-full"
        style={{ width, height: "auto" }}
      />
    </div>
  );
}
