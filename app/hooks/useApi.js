import axios from 'axios'

var config = {
  method: 'get',
  url: 'http://13.235.250.119/v2/restaurants/fetch_result/5',
  headers: { 
    'token': 'cb907b4856fdfe', 
  },
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
