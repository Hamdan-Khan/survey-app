import { create } from "zustand";

const useStore = create((set) => ({
  formState: "one",
  setFormState: (newState) => set((state) => ({ formState: newState })),
  work: "",
  setWork: (newState) => set((state) => ({ work: newState })),
  source: "",
  setSource: (newState) => set((state) => ({ source: newState })),
  hours: 0,
  setHours: (newState) => set((state) => ({ hours: newState })),
  platform: "",
  setPlatform: (newState) => set((state) => ({ platform: newState })),
  reliable: "",
  setReliable: (newState) => set((state) => ({ reliable: newState })),
  method: "",
  setMethod: (newState) => set((state) => ({ method: newState })),
  osource: "sel",
  setOsource: (newState) => set((state) => ({ osource: newState })),
  satisf: "",
  setSatisf: (newState) => set((state) => ({ satisf: newState })),
  challenge: "",
  setChallenge: (newState) => set((state) => ({ challenge: newState })),
  benefits: "",
  setBenefits: (newState) => set((state) => ({ benefits: newState })),
  drawbacks: "",
  setDrawbacks: (newState) => set((state) => ({ drawbacks: newState })),
  advice: "",
  setAdvice: (newState) => set((state) => ({ advice: newState })),
  formStatus: "one",
  setFormStatus: (newState) => set((state) => ({ formStatus: newState })),
}));

export default useStore;
