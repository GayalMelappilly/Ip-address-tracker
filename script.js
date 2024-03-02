var apiKey = 'at_BtQbKnyJaXdbldU6j8OWwGM3S7OZS'

function getIp(){
    var ip = $('#ip-input').val()
    
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: apiKey, ipAddress: ip},
        success: (data)=>{
            console.log(data)
            console.log(data.ip, data.location.country+', '+data.location.region+', '+data.location.city, data.location.timezone, data.isp)
        }
    })
}