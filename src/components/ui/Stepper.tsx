import { Check } from "lucide-react";

interface Step {
  /** Step label. */
  label: string;
  /** Optional description shown below the label. */
  description?: string;
}

/** Multi-step progress indicator for wizards, onboarding, and checkout flows. */
interface StepperProps {
  /** Ordered list of steps. */
  steps: Step[];
  /** Current active step (0-indexed). */
  currentStep: number;
  /** Orientation. @default "horizontal" */
  orientation?: "horizontal" | "vertical";
}

export default function Stepper({ steps, currentStep, orientation = "horizontal" }: StepperProps) {
  if (orientation === "vertical") {
    return (
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => {
          const completed = i < currentStep;
          const active = i === currentStep;
          return (
            <div key={step.label} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0 ${
                    completed
                      ? "bg-[var(--color-accent)] text-white"
                      : active
                        ? "border-2 border-[var(--color-accent)] text-[var(--color-accent)]"
                        : "bg-[var(--color-border)] text-[var(--color-text-muted)]"
                  }`}
                >
                  {completed ? <Check size={16} /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 min-h-8 ${
                      completed ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
                    }`}
                  />
                )}
              </div>
              <div className="pb-8">
                <p
                  className={`text-sm font-medium ${
                    active
                      ? "text-[var(--color-accent-light)]"
                      : completed
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{step.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => {
        const completed = i < currentStep;
        const active = i === currentStep;
        return (
          <div key={step.label} className={`flex items-center ${i < steps.length - 1 ? "flex-1" : ""}`}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0 ${
                  completed
                    ? "bg-[var(--color-accent)] text-white"
                    : active
                      ? "border-2 border-[var(--color-accent)] text-[var(--color-accent)]"
                      : "bg-[var(--color-border)] text-[var(--color-text-muted)]"
                }`}
              >
                {completed ? <Check size={16} /> : i + 1}
              </div>
              <div className="text-center">
                <p
                  className={`text-xs font-medium ${
                    active
                      ? "text-[var(--color-accent-light)]"
                      : completed
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-3 ${
                  completed ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
