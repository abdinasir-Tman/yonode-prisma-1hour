import prisma from "../../prisma/client.js";

export const registerWorld = async (req, res) => {
  try {
    const body = req.body;

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    res.json({ status: true, user });
  } catch (error) {
    console.log("error at register ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const readWorld = async (req, res) => {
  try {
    const body = req.body;

    const user = await prisma.user.findMany();

    res.json({ status: true, user });
  } catch (error) {
    console.log("error at register ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const updateWorld = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const user = await prisma.user.update({
      data: {
        email: body.email,
        password: body.password,
      },
      where: { id },
    });

    res.json({ status: true, user });
  } catch (error) {
    console.log("error at register ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const deleteWorld = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.delete({
      where: { id },
    });

    res.json({ status: true, user });
  } catch (error) {
    console.log("error at delete ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
