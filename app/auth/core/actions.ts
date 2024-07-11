import { api } from "@/lib/axios";
import { APIError } from "@/lib/handle-api-errors";
import { createRoute } from "@/lib/routes";
import { registerSchema } from "./form";
import { z } from "zod";
import {
  LoginAdminRequest,
  LoginAdminResponse,
  SendOTPRequest,
  SendOTPResponse,
  VerifyOTPRequest,
  VerifyOTPResponse,
} from "../types";

export const loginAccount = async (values: LoginAdminRequest) => {
  let error;
  let response: LoginAdminResponse | undefined;
  try {
    response = await api.post(
      createRoute({
        prefix: "admin",
        route: "/loginAdmin",
      }),
      values
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response };
};

type RegisterAdminResponse = {
  message: string;
  isSuccess: boolean;
};

export const registerAccount = async (
  values: Omit<z.infer<typeof registerSchema>, "confirmPassword">
) => {
  let error;
  let response: RegisterAdminResponse | undefined;
  try {
    response = await api.post(
      createRoute({
        prefix: "admin",
        route: "/registerAdmin",
      }),
      values
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response };
};

export const sendOTP = async (values: SendOTPRequest) => {
  let error;
  let response: SendOTPResponse | undefined;
  try {
    response = await api.post(
      createRoute({
        prefix: "otp",
        route: "/sendOTP",
      }),
      values
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response };
};

export const verifyOTP = async (values: VerifyOTPRequest) => {
  let error;
  let response: VerifyOTPResponse | undefined;
  try {
    response = await api.post(
      createRoute({
        prefix: "otp",
        route: "/verifyOTP",
      }),
      values
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response };
};
