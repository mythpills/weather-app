import React, { useState, Fragment } from "react";
import CustomInputSelect from "./components/CustomInputSelect";
import { processEmployeeData } from "./utils/index";
import {useGetManagers} from './CustomHooks/useGetManagers'
import "./App.scss";

const App = () => {
  const [formData, setFormData] = useState({
    managerInput: {
      value: "",
      error: "",
    },
  });

  const { isLoading, isError, error, employeeData } = useGetManagers();
  const updatedData = processEmployeeData(employeeData);
  const changeHandler = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        error: value !== "" ? "" : prev[name].error,
      },
    }));
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Fragment>
      <header>
        <h1>Peakon Challenge - Manager Live Search</h1>
      </header>
      <div className="container">
        <CustomInputSelect
          label="Manager"
          searchPlaceholder="Search"
          data={updatedData}
          value={formData.managerInput.value}
          onChange={changeHandler}
          error={formData.managerInput.error}
          name="managerInput"
        />
      </div>
    </Fragment>
  );
};

export default App;
