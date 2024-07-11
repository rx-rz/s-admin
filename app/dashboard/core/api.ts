import { api } from "@/lib/axios";
import { createRoute } from "@/lib/routes";
import useSWR from "swr";
import {
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
export const getRooms = async () => {
  const fetcher = (url: string): Promise<GetRoomsResponse> => {
    return api.get(url);
  };
  const {
    data,
    isLoading: roomsLoading,
    error: roomsError,
  } = useSWR<GetRoomsResponse>(
    createRoute({
      prefix: "rooms",
      route: "/listRooms",
    }),
    fetcher
  );
  return {
    rooms: data?.rooms,
    roomsLoading,
    roomsError,
    maxPageNo: data?.maxPageNo,
  };
};

export const getRoomTypes = async () => {
  const fetcher = (url: string): Promise<GetRoomTypesResponse> => {
    return api.get(url);
  };
};
