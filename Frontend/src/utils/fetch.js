export const getData = async (url, setState, uuid) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(uuid),
    });
    const data = await response.json();
    setState(data);
    console.log("fetched-data:", data);
  } catch (err) {
    console.log(err);
  }
};
