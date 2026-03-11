/** Column definition for the Table component. */
interface Column<T> {
  /** Key of the data object to display in this column. */
  key: keyof T;
  /** Header text shown in the table head. */
  header: string;
  /** Additional CSS classes for both th and td cells. */
  className?: string;
}

/** Generic data table with hover rows and themed borders. */
interface TableProps<T> {
  /** Column definitions. */
  columns: Column<T>[];
  /** Array of row data objects. */
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
