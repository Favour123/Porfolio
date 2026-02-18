// Date formatting utilities
export const formatDateRange = (start: string, end: string | null): string => {
  return end ? `${start} – ${end}` : `${start} – present`;
};

// Copy to clipboard utility
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};