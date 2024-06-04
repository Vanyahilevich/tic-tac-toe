import clsx from 'clsx';

export function UiFieldLabel({
  label,
  required,
}: {
  label: string;
  required: boolean;
}) {
  return (
    <label
      htmlFor="example2"
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        'mb-1 block text-sm font-medium text-slate-900 after:ml-0.5'
      )}
    >
      {label}
    </label>
  );
}
