export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateForm(data: Record<string, string>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name?.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message?.trim()) {
    errors.message = "Message is required.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
