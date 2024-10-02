import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  message: [],
  addMessage: (message) => set({message}),
}));

export default useConversation;
