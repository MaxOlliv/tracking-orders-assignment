import { useGetOrderByNumberQuery } from "../pages/api/orders";

export default function Order() {
  const {
    data: order,
    isLoading,
    error,
  } = useGetOrderByNumberQuery("UK1876YH08_2");

  return <>{JSON.stringify(order)}</>;
}
