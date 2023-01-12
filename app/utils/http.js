import axios from "axios";


config ={
    baseURL:'http://13.235.250.119/v2/',
    url:'restaurants/fetch_result/',
    method:'get',
    headers:{
        'token': 'cb907b4856fdfe', 
    },
    params:{

    }
}


axios(config)
    .then(function (response) {
     console.log(response.data)
    });


