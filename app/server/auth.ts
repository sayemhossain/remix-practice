import { createCookieSessionStorage, redirect } from "@remix-run/node";
import prisma from "./db";
import { compare, hash } from "bcrypt";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === "production",
    secrets: [process.env.SESSION_SECRET || "secret"],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: true,
  },
});

async function createUserSession(userId: string, redirectPath: string) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function getUserFromFromSession(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const userId = session.get("userId");
  if (!userId) return null;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user;
}

export async function signup(userData: any) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });
    if (existingUser) {
      return {
        status: 409,
        error: "User with this email already exists",
      };
    }

    const passwordHash = await hash(userData.password, 12);
    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: passwordHash,
      },
    });
    return createUserSession(user.id, "/");
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
}

export async function login(email: string, password: string) {
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return { error: "User not found" };
    }
    const passwordMatch = await compare(password, existingUser.password);
    if (!passwordMatch) {
      return { error: "Invalid password" };
    }

    return createUserSession(existingUser.id, "/");
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
}
