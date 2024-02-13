import React from "react";
import { AdminOrders } from "../features/admin/components/AdminOrders";
import NavBar from "../features/navbar/Navbar";

export function AdminOrdersPage(props) {
  return (
    <>
      <NavBar>
        <AdminOrders> </AdminOrders>
      </NavBar>
    </>
  );
}
