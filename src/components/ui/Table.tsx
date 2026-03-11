interface Column<T> {
  key: keyof T;
  header: string;
  className?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export default function Table<T extends Record<string, unknown>>({ columns, data }: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`text-left px-4 py-3 font-medium text-[var(--color-text-muted)] ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg-card-hover)] transition-colors"
            >
              {columns.map((col) => (
                <td key={String(col.key)} className={`px-4 py-3 ${col.className || ""}`}>
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
