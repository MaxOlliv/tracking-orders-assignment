import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Order {
  object: String;
  id: Number;
  canceled: Boolean;
  custom_variables: {};
  email: String;
  first_name: String;
  language_code: String;
  last_name: String;
  merchant_id: String;
  mute_notifications: Boolean;
  order_number: String;
  ordered_at: Date;
  phone: String;
  uuid: String;
  created_at: Date;
  updated_at: Date;
  fulfillments: String;
  line_items: String;
  notifications: String;
  shipping_address: String;
}

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.shipup.co/v2/",
    prepareHeaders: (headers, { getState }) => {
      const token = "lnWvjqugGwUay3jKE8j31w";
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getOrderByNumber: builder.query<Order, string>({
      query: (orderNumber: String) => {
        return { url: `orders`, params: { order_number: orderNumber } };
      },
      transformResponse: (response: { data: Order[] }, meta, arg) =>
        response.data[0],
    }),
  }),
});

export const { useGetOrderByNumberQuery } = ordersApi;
