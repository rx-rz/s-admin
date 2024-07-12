import { api } from "@/lib/axios";
import { createRoute } from "@/lib/routes";
import useSWR from "swr";
import {
  GetBookingsResponse,
  GetCustomersResponse,
  GetRoomTypesResponse,
  GetRoomsResponse,
} from "../types";

export const getCustomers = () => {
  const fetcher = (url: string): Promise<GetCustomersResponse> => {
    return api.get(url);
  };
  const { data, isLoading: customersAreLoading } = useSWR(
    createRoute({
      prefix: "customers",
      route: "/listCustomers",
    }),
    fetcher
  );
  return { data, customersAreLoading };
};

export const getRooms = () => {
  const fetcher = (url: string): Promise<GetRoomsResponse> => {
    return api.get(url);
  };
  const { data, isLoading: roomsLoading } = useSWR(
    createRoute({
      prefix: "rooms",
      route: "/listRooms",
    }),
    fetcher
  );
  return {
    rooms: data?.rooms || [],
    maxPageNo: data?.maxPageNo || 0,
    roomsLoading,
  };
};

export const getBookings = () => {
  const fetcher = (url: string): Promise<GetBookingsResponse> => {
    return api.get(url);
  };

  const { data, isLoading: bookingsLoading } = useSWR(
    createRoute({
      prefix: "bookings",
      route: "/listBookings",
    }),
    fetcher
  );
  return {
    bookings: data?.bookings || [],
    maxPageNo: data?.maxPageNo || 0,
    bookingsLoading,
  };
};

export const getRoomTypes = () => {
  const fetcher = (url: string): Promise<GetRoomTypesResponse> => {
    return api.get(url);
  };

  const { data, isLoading: roomTypesLoading } = useSWR(
    createRoute({
      prefix: "roomtypes",
      route: "/getRoomTypes",
    }),
    fetcher
  );
  return {
    roomTypes: data?.roomTypes || [],
    roomTypesLoading,
  };
};