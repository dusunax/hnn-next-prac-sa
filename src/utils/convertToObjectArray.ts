export function convertResponseObjectToArray(data: any) {
  const itemArray = [];

  for (const key in data) {
    if (key !== "success" && data.hasOwnProperty(key)) {
      itemArray.push(data[key]);
    }
  }

  return itemArray;
}
