import { create } from "zustand";
import apiRequest from "./apiRequest";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    const res = await apiRequest("/users/notification");
    set({ number: res.data });
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
  setChats: (chats) => {
    set({ chats });
  },

  addChat: (newChat) => {
    set((state) => {
      const existingChatIndex = state.chats.findIndex(
        (chat) => chat.id === newChat.id
      );
      if (existingChatIndex !== -1) {
        const updatedChats = [...state.chats];
        updatedChats[existingChatIndex] = newChat;
        return { chats: updatedChats };
      } else {
        return { chats: [...state.chats, newChat] };
      }
    });
  },
}));
