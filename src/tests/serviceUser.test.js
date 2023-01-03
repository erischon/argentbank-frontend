import { describe, expect, it } from "vitest";

import {
  userLogin,
  userSignup,
  getUserProfile,
  updateUserProfile,
} from "../services/serviceUser";

describe("Testing user login", () => {
  const payload = {
    email: "tony@stark.com",
    password: "password123",
  };

  const payload2 = {
    email: "tony@stark.com",
    password: "password12",
  };

  it("should have a status of 200", async () => {
    const data = await userLogin(payload);

    expect(data?.status).toBe(200);
  });

  it("should return a error if the payload doesn't match", async () => {
    const data = await userLogin(payload2);

    expect(data?.status).toBe(400);
  });

  it("should return a token string", async () => {
    const data = await userLogin(payload);

    expect(typeof data?.body?.token).toBe("string");
  });
});

describe("Testing user signup", () => {
  const payload = {
    email: "toto@gmail.com",
    password: "password123",
    firstName: "toto",
    lastName: "litoto",
  };

  const payload2 = {
    email: "toto@gmail.com",
    password: "",
    firstName: "toto",
    lastName: "litoto",
  };

  it("should have a status of 200", async () => {
    const data = await userSignup(payload);

    expect(data?.status).toBe(200);
  });

  it("should have a status of 400 on invalids fields", async () => {
    const data = await userSignup(payload2);

    expect(data?.status).toBe(400);
  });
});

describe("Testing getting user profile", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGVlZjMyNWM3M2JkNTIwODg5ZGU2MSIsImlhdCI6MTY3MjcyODUwMCwiZXhwIjoxNjcyODE0OTAwfQ.yYf8fhhVceChPiOG_z84TSpZMxJymoAGFbzJVklBbzs";

  const token2 = "";

  it("should have a status of 200", async () => {
    const data = await getUserProfile(token);

    expect(data?.status).toBe(200);
  });

  it("should have a status of 401 with wrong token", async () => {
    const data = await getUserProfile(token2);

    expect(data?.status).toBe(401);
  });
});

describe("Testing updating user profile", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGVlZjMyNWM3M2JkNTIwODg5ZGU2MSIsImlhdCI6MTY3MjcyODUwMCwiZXhwIjoxNjcyODE0OTAwfQ.yYf8fhhVceChPiOG_z84TSpZMxJymoAGFbzJVklBbzs";
  const token2 = "";
  const payload = {
    firstName: "value 1",
    lastName: "value 2",
  };

  it("should have a status of 200", async () => {
    const data = await updateUserProfile(token);

    expect(data?.status).toBe(200);
  });

  it("should have a status of 401 with wrong token", async () => {
    const data = await updateUserProfile(token2);

    expect(data?.status).toBe(401);
  });
});
