const steps = ["Cart", "Delivery", "Payment", "Review"];

export default function Stepper({ current = 2 }: { current?: number }) {
  return (
    <ol className="flex items-center gap-2">
      {steps.map((label, i) => {
        const number = i + 1;
        const isActive = number === current;
        const isDone = number < current;

        // dairənin rəngi
        let circleStyle = "border-neutral-300 bg-white text-neutral-500";
        if (isActive) circleStyle = "border-black bg-black text-white";
        if (isDone) circleStyle = "border-neutral-400 bg-white text-neutral-600";

        return (
          <li key={label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <span className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm ${circleStyle}`}>
                {isDone ? "✓" : number}
              </span>
              <span className={`text-xs ${isActive ? "font-semibold" : "text-neutral-600"}`}>{label}</span>
            </div>
            {number < steps.length && <span className="mb-5 h-px w-8 bg-neutral-300 sm:w-12" />}
          </li>
        );
      })}
    </ol>
  );
}
