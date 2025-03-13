const fetch = require("node-fetch");

exports.handler = async (event) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const path = event.path.replace("/api/", "");
  const fullUrl = `${API_URL}/${path}`;
  const headers = { "Content-Type": "application/json" };

  try {
    const response = await fetch(fullUrl, {
      method: event.httpMethod,
      headers,
      body: event.body,
    });

    const data = await response.text();

    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json" },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
    };
  }
};
