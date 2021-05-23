export const processEmployeeData = (data) => {
  let updatedList = [];
  if (data) {
    const entries = Object.entries(data);
    for (const [key, values] of entries) {
      if (key == "data") {
        updatedList = [
          ...values.data.map((value, index) => {
            return { ...value.attributes, id: index };
          }),
        ];
      }
    }
    return updatedList;
  }
};

export const getInitials = (managerData) => {
  const firstChar = managerData.firstName.charAt(0);
  const secondChar = managerData.lastName.charAt(0);
  const initial = `${firstChar}${secondChar}`;
  return `${initial.toUpperCase()}`;
};
