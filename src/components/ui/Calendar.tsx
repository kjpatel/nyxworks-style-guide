"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarEvent {
  /** Event date. */
  date: Date;
  /** Dot color. @default "accent" */
  color?: "accent" | "success" | "warning" | "error" | "info";
}

/** Month-view calendar grid with date selection and event dots. */
interface CalendarProps {
  /** Initial month (1-12). @default current month */
  month?: number;
  /** Initial year. @default current year */
  year?: number;
  /** Currently selected date. */
  selected?: Date;
  /** Called when a date is clicked. */
  onSelect?: (date: Date) => void;
  /** Events to display as colored dots. */
  events?: CalendarEvent[];
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const dotColorMap: Record<string, string> = {
  accent: "bg-[var(--color-accent)]",
  success: "bg-[var(--color-success)]",
  warning: "bg-[var(--color-warning)]",
  error: "bg-[var(--color-error)]",
  info: "bg-[var(--color-info)]",
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month - 1, 1).getDay();
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function Calendar({ month, year, selected, onSelect, events = [] }: CalendarProps) {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(month ?? now.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(year ?? now.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfWeek(currentYear, currentMonth);
  const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

  const goBack = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goForward = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthName = new Date(currentYear, currentMonth - 1).toLocaleString("default", { month: "long" });

  // Build grid cells
  const cells: { day: number; inMonth: boolean; date: Date }[] = [];

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    cells.push({ day: d, inMonth: false, date: new Date(currentYear, currentMonth - 2, d) });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, date: new Date(currentYear, currentMonth - 1, d) });
  }

  // Next month leading days
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, inMonth: false, date: new Date(currentYear, currentMonth, d) });
  }

  const getEventsForDate = (date: Date) => events.filter((e) => isSameDay(e.date, date));

  return (
    <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-4 w-fit">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goBack}
          className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-sm font-semibold text-[var(--color-text-primary)]">
          {monthName} {currentYear}
        </span>
        <button
          onClick={goForward}
          className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-xs text-center font-medium text-[var(--color-text-muted)] py-1 w-10">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          const isToday = cell.inMonth && isSameDay(cell.date, now);
          const isSelected = selected && isSameDay(cell.date, selected);
          const dayEvents = getEventsForDate(cell.date);

          return (
            <div key={i} className="flex flex-col items-center py-0.5">
              <button
                onClick={() => onSelect?.(cell.date)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors ${
                  isSelected
                    ? "bg-[var(--color-accent)] text-white font-semibold"
                    : isToday
                      ? "font-semibold text-[var(--color-accent-light)] hover:bg-[var(--color-bg-card-hover)]"
                      : cell.inMonth
                        ? "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]"
                        : "text-[var(--color-text-muted)]/40"
                }`}
              >
                {cell.day}
              </button>
              {dayEvents.length > 0 && (
                <div className="flex gap-0.5 mt-0.5">
                  {dayEvents.slice(0, 3).map((e, j) => (
                    <span key={j} className={`w-1 h-1 rounded-full ${dotColorMap[e.color ?? "accent"]}`} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
