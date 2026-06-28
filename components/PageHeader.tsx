type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h2 className="mb-2 text-4xl font-bold">{title}</h2>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}