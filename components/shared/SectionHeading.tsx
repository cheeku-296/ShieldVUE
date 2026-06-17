interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {badge && (
        <div
          className="
          mb-5
          inline-flex
          rounded-full
          border
          border-violet-500/20
          bg-violet-500/10
          px-4
          py-1
          text-sm
          font-medium
          text-violet-300
        "
        >
          {badge}
        </div>
      )}

      <h2
        className="
        text-4xl
        font-bold
        tracking-tight
        text-white

        md:text-5xl
      "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-6
          text-lg
          leading-8
          text-slate-400
        "
        >
          {description}
        </p>
      )}
    </div>
  );
}