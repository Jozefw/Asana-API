const asana = new API_Request;

document.querySelector('.header__button').addEventListener('click',asanaConnect);

data1 = {
    redirect: "urn:ietf:wg:oauth:2.0:oob",
    client_id: "530466292080217",
    client_secret: "18d3a76c4653a3f5b322ff0f926f43ba",
    authorization_endpoint: "https://app.asana.com/-/oauth_authorize?response_type=code&client_id=530466292080217&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&state=<STATE_PARAM"
}

data = "hello";


function asanaConnect(){
    asana.post('"https://app.asana.com/-/oauth_authorize?client_id=530466292080217&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&state=<STATE_PARAM"', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

}