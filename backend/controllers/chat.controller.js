import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    for (const chat of chats) {
      const receiverId = chat.userIDs.find((id) => id !== tokenUserId);

      const receiver = await prisma.user.findUnique({
        where: {
          id: receiverId,
        },
        select: {
          id: true,
          username: true,
          avatar: true,
        },
      });
      chat.receiver = receiver;
    }

    res.status(200).json(chats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chats!" });
  }
};

export const getChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!chat.seenBy.includes(tokenUserId)) {
      await prisma.chat.update({
        where: {
          id: req.params.id,
        },
        data: {
          seenBy: {
            push: tokenUserId,
          },
        },
      });
    }
    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chat!" });
  }
};

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  const receiverId = req.body.receiverId;

  try {
    // Kiểm tra xem chat đã tồn tại chưa
    const existingChat = await prisma.chat.findFirst({
      where: {
        userIDs: {
          hasEvery: [tokenUserId, receiverId],
        },
      },
    });

    if (existingChat) {
      // Nếu chat đã tồn tại, cập nhật lastMessage
      const updatedChat = await prisma.chat.update({
        where: { id: existingChat.id },
        data: {
          lastMessage: "bạn và người ấy đang bắt đầu trò chuyện",
        },
      });

      // Tìm thông tin người nhận
      const receiver = await prisma.user.findUnique({
        where: { id: receiverId },
        select: {
          id: true,
          username: true,
          avatar: true,
        },
      });

      return res.status(200).json({
        ...updatedChat,
        receiver,
      });
    }

    // Nếu không tồn tại, tạo chat mới
    const newChat = await prisma.chat.create({
      data: {
        userIDs: [tokenUserId, receiverId],
        lastMessage: "bạn và người ấy đang bắt đầu trò chuyện",
      },
    });

    // Tìm thông tin người nhận
    const receiver = await prisma.user.findUnique({
      where: { id: receiverId },
      select: {
        id: true,
        username: true,
        avatar: true,
      },
    });

    // Trả về thông tin chat và người nhận
    res.status(200).json({
      ...newChat,
      receiver, // Thêm thông tin người nhận vào response
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add chat!" });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      data: {
        seenBy: {
          set: [tokenUserId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};
