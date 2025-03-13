exports.handler = async (event) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const path = event.path.replace("/api/", "");

  return {
    statusCode: 302,
    headers: {
      Location: `${API_URL}/${path}`,
    },
    body: "",
  };
};
