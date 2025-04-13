"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerCustom() {
  const [date, setDate] = useState();
  return (
    <DatePicker
      customInput={
        <input
          className="active:border-none outline-0 text-gray-700"
          placeholder="when are you going"
        />
      }
      placeholderText="when are you going"
      selected={date}
      onChange={(date) => setDate(date)}
    />
  );
}
