import { create } from 'zustand';

// Define the state and actions types
interface ErrorState {
  errorMessage: string | null;
  setErrorMessage: (message: string) => void;
  clearErrorMessage: () => void;
}

// Create the store
const useErrorStore = create<ErrorState>((set) => ({
  errorMessage: null,
  setErrorMessage: (message) => set({ errorMessage: message }),
  clearErrorMessage: () => set({ errorMessage: null }),
}));

export default useErrorStore;