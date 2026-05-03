export default function AdminPlaceholder({ title }: { title: string }) {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-black">{title}</h1>
      <div className="glass rounded-xl p-16 text-center text-muted-foreground">
        {title} management interface — coming soon.
      </div>
    </div>
  );
}
