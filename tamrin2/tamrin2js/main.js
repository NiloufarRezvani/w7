

  function FetchUrl(url) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("Request timed out."));
      }, 5000);
  
      fetch(url)
        .then((res) => {
          clearTimeout(timeoutId);
  
          if (!res.ok) {
            reject(new Error(`Failed to fetch data. Status: ${res.status}`));
            return;
          }
  
          res.json().then((data) => {
            resolve(data);
          });
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  }
  
  const apiURL = prompt("Please enter the URL:");
  
  if (apiURL) {
    FetchUrl(apiURL)
      .then((data) => {
        console.log("Data:", data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }
  
