import { DataTable } from "@/shared/ui/DataTable/data-table";
import React from "react";
import { columns } from "./columns/columns";
import { getAllManufacturersForDataTable } from "../model/services/getAllManufacturersForDataTable";

export default async function AdminDashboard() {
  const data = await getAllManufacturersForDataTable();

  return (
    <div className="w-[1440px] mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
