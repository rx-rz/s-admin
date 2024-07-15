export type AdminDashboardDetailsResponse = {
  bookingsPerMonth: {
    name: string;
    value: number;
  }[];
  lastFiveCustomers: {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    address: string | null;
    phoneNo: string | null;
    zip: string | null;
    createdAt: string | null;
  }[];
  lastFivePayments: {
    id: string;
    paymentReference: string;
    status: string;
    payedAt: string;
    amount: string;
    customerEmail: string;
    createdAt: string | null;
    bookingId: string;
  }[];
  noOfAvailableRooms: number;
  totalProfit: string;
  isSuccess: boolean;
};

export type GetCustomerDetailsResponse = {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string | null;
    id: string;
    phoneNo: string | null;
    address: string | null;
    zip: string | null;
    bookings: {
      createdAt: string | null;
      id: string;
      customerEmail: string;
      amount: string;
      roomNo: number;
      status: "pending" | "active" | "cancelled" | "done";
      startDate: string;
      endDate: string;
    }[];
    payments: {
      createdAt: string | null;
      id: string;
      customerEmail: string;
      amount: string;
      roomNo: number;
      status: "pending" | "confirmed" | "failed";
      payedAt: string | null;
      reference: string;
      bookingId: string;
    }[];
  };
  isSuccess: boolean;
};

export type GetBookingDetailsResponse = {
  booking: {
    payment:
      | {
          customerEmail: string;
          roomNo: number;
          amount: string;
          id: string;
          createdAt: string | null;
          status: "pending" | "confirmed" | "failed";
          payedAt: string | null;
          reference: string;
          bookingId: string;
        }
      | undefined;
    customerEmail: string;
    endDate: string;
    roomNo: number;
    startDate: string;
    amount: string;
    id: string;
    createdAt: string | null;
    status: "pending" | "active" | "cancelled" | "done";
    customers: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
    room: {
      roomNo: number;
      createdAt: string | null;
      status: "available" | "pending" | "booked" | null;
      typeId: number;
      noOfTimesBooked: number | null;
    };
  };
  isSuccess: boolean;
};

export type GetPaymentDetailsResponse = {
  paymentDetails: {
    status: "pending" | "confirmed" | "failed";
    createdAt: string | null;
    id: string;
    customerEmail: string;
    amount: string;
    roomNo: number;
    payedAt: string | null;
    reference: string;
    bookingId: string;
    customer: {
      firstName: string;
      lastName: string;
      email: string;
      zip: string | null;
      phoneNo: string | null;
      address: string | null;
      createdAt: string | null;
      id: string;
    };
    booking: {
      status: "pending" | "active" | "cancelled" | "done";
      createdAt: string | null;
      id: string;
      customerEmail: string;
      amount: string;
      roomNo: number;
      startDate: string;
      endDate: string;
    };
  };
  isSuccess: boolean;
};

export type GetRoomDetailsResponse = {
  room: {
    typeId: number;
    status: "pending" | "booked" | "available" | null;
    roomNo: number;
    createdAt: string | null;
    noOfTimesBooked: number | null;
    bookings: {
      status: "pending" | "active" | "cancelled" | "done";
      roomNo: number;
      createdAt: string | null;
      id: string;
      customerEmail: string;
      amount: string;
      startDate: string;
      endDate: string;
    }[];
    roomType: {
      createdAt: string | null;
      name: string;
      price: string;
      id: number;
      description: string | null;
      roomImageURLS: string[] | null;
      features: string[] | null;
      imageFileNames: string[] | null;
    };
  };
  isSuccess: boolean;
};

export type ListRoomQueries = {
  limit: number;
  pageNo: number;
  orderBy:
    | "roomNo"
    | "createdAt"
    | "status"
    | "name"
    | "price"
    | "typeId"
    | "noOfTimesBooked";
  ascOrDesc: "asc" | "desc";
  searchBy?:
    | {
        value: string | number;
        key:
          | "roomNo"
          | "createdAt"
          | "status"
          | "name"
          | "price"
          | "typeId"
          | "noOfTimesBooked";
      }[]
    | undefined;
};
export type GetRoomsResponse = {
  rooms: {
    typeId: number;
    roomNo: number;
    status: "pending" | "booked" | "available" | null;
    noOfTimesBooked: number | null;
    createdAt: string | null;
    name: string | null;
    price: string | null;
    description: string | null;
  }[];
  maxPageNo: number;
  isSuccess: boolean;
};

export type GetCustomersResponse = {
  customers: {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    address: string | null;
    phoneNo: string | null;
    zip: string | null;
    createdAt: string | null;
  }[];
  noOfCustomers: number;
  maxPageNo: number;
  isSuccess: boolean;
};

export type GetRoomTypesResponse = {
  roomTypes: {
    name: string;
    price: string;
    roomImageURLS: string[] | null;
    imageFileNames: string[] | null;
    id: number;
    features: string[] | null;
    description: string | null;
  }[];
  isSuccess: boolean;
};

export type GetBookingsResponse = {
  bookings: {
    customerEmail: string | null;
    id: string;
    startDate: string;
    endDate: string;
    status: "pending" | "active" | "cancelled" | "done";
    createdAt: string | null;
    roomNo: number;
    amount: string;
  }[];
  maxPageNo: number;
  isSuccess: boolean;
};

export type GetRoomTypeDetailsResponse = {
  roomTypeDetails: {
    id: number;
    name: string;
    createdAt: string | null;
    description: string | null;
    price: string;
    roomImageURLS: string[] | null;
    features: string[] | null;
    imageFileNames: string[] | null;
    rooms: {
      createdAt: string | null;
      roomNo: number;
      typeId: number;
      status: "available" | "pending" | "booked" | null;
      noOfTimesBooked: number | null;
    }[];
  };
  isSuccess: boolean;
};
