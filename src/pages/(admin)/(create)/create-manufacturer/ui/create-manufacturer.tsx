import { CreateManufacturerForm } from "@/features/(admin)/create-manufacturer-form";
import React from "react";
import { actionCreateManufacturer } from "../actions/action-create-manufacturer";

export default function CreateManufacturer() {
  return (
    <div className="flex items-center justify-center size-full">
      <CreateManufacturerForm action={actionCreateManufacturer} />
    </div>
  );
}
