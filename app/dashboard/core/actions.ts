import { APIError } from "@/lib/handle-api-errors";
import {
  AdminDashboardDetailsResponse,
  GetCustomerDetailsResponse,
  GetPaymentDetailsResponse,
  GetRoomDetailsResponse,
  GetRoomsResponse,
} from "../types";
import { api } from "@/lib/axios";
import { createRoute } from "@/lib/routes";

export const getAdminDashboardDetails = async () => {
  let error;
  let response: AdminDashboardDetailsResponse | undefined;
  try {
    response = await api.get(
      createRoute({
        prefix: "admin",
        route: "/getDashboardDetails",
      })
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response };
};

export const getCustomerDetails = async (email: string) => {
  let error;
  let response: GetCustomerDetailsResponse | undefined;
  console.log(decodeURIComponent(email));
  try {
    response = await api.get(
      createRoute({ prefix: "customers", route: "/getCustomerDetails" }),
      { params: { email: decodeURIComponent(email) } }
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response };
};

export const getPaymentDetails = async (id: string) => {
  let error;
  let response: GetPaymentDetailsResponse | undefined;
  try {
    response = await api.get(
      createRoute({ prefix: "payments", route: "/getPaymentDetails" }),
      { params: { id } }
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response: response?.paymentDetails };
};

export const getRoomDetails = async (roomNo: string) => {
  let error;
  let response: GetRoomDetailsResponse | undefined;
  try {
    response = await api.get(
      createRoute({ prefix: "rooms", route: "/getRoomDetails" }),
      { params: { roomNo } }
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response: response?.room };
};

export const getRooms = async () => {
  let error;
  let response: GetRoomsResponse | undefined;
  try {
    response = await api.get(
      createRoute({ prefix: "rooms", route: "/listRooms" })
    );
  } catch (err) {
    if (err instanceof APIError) {
      error = err;
    }
  }
  return { error, response };
};
