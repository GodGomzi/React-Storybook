import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const inputStyles = cva(
  'w-full rounded-md border focus:outline-none focus:ring-2 transition-colors',
  {
    variants: {
      variant: {
        filled: 'bg-gray-100 border-transparent focus:bg-white',
        outlined: 'bg-white border-gray-300',
        ghost: 'bg-transparent border-transparent hover:bg-gray-100',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      invalid: {
        true: 'border-red-500 focus:ring-red-500',
        false: 'focus:ring-blue-500 focus:border-blue-500',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md',
      invalid: false,
    },
  }
);

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputStyles> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  loading?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, helperText, errorMessage, loading, className, variant, size, invalid, ...props }, ref) => {

    const isDisabled = props.disabled || loading;
    const isInvalid = !!invalid;

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label htmlFor={props.id || props.name} className="mb-1 text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={props.id || props.name}
            className={clsx(
              inputStyles({ variant, size, invalid }),
              { 'opacity-50 cursor-not-allowed': isDisabled },
              className
            )}
            disabled={isDisabled}
            aria-invalid={isInvalid ? 'true' : 'false'}
            {...props}
          />
        </div>
        {helperText && !isInvalid && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
        {errorMessage && isInvalid && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';