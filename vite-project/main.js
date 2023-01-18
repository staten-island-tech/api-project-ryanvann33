const URL = "https://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data.content);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
