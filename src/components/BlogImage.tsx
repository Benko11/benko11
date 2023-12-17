interface BlogImageProps {
  link: string;
  description?: string;
  className: string;
}

export default function BlogImage({
  link,
  description,
  className,
}: BlogImageProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img
        src={link.includes("http") ? link : `/blog/${link}`}
        alt={description || ""}
        class={className || ""}
      />
      <div className="text-sm">{description}</div>
    </div>
  );
}
