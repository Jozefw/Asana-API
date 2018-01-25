
 class API_Request {
    // Make an HTTP GET Request 
    async get(url) {
      const response = await fetch(url, {
        mode : 'no-cors',
        method: 'GET',
        headers : {
          'Access-Control-Allow-Origin' : '*'
        }
      });
      const resData = await response.json();
      return resData;
    }
  
    // Make an HTTP POST Request
    async post(url, data) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const resData = await response.json();
      return resData;
     
    }
  
     // Make an HTTP PUT Request
     async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        mode: 'no-cors',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const resData = await response.json();
      return resData;
    }
  
    // Make an HTTP DELETE Request
    async delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
        mode: 'no-cors',
        headers: {
          'Content-type': 'application/json'
        }
      });
  
      const resData = await 'Resource Deleted...';
      return resData;
    }
  
   }