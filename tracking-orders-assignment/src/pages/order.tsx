import styles from "@/styles/Order.module.css";

import { useGetOrderByNumberQuery } from "../pages/api/orders";

export default function Order() {
  const {
    data: order,
    isLoading,
    error,
  } = useGetOrderByNumberQuery("UK1876YH08_2");

  console.log("Data", order);

  return (
    <>
      <h1>Order info</h1>

      <div className={styles.container}>
        <ul className={styles.list_container}>
          <li>
            <span>Order ID:</span>
            <span>{order?.id.toString()}</span>
          </li>
          <li>
            <span>First Name:</span>
            <span>{order?.first_name}</span>
          </li>
          <li>
            <span>Last Name:</span>
            <span>{order?.last_name}</span>
          </li>
          {/* <li>
            <span>Trackers:</span>
            <span>{order?.}</span>
          </li> */}
        </ul>
      </div>
    </>
  );
}
