
ip=`(ifconfig wlan0 | grep addr:)`

curl "https://oapi.dingtalk.com/robot/send?access_token=89b0dcfdb35c16ce66d000cf37dfe197f36e4bd3a2cc178936e99b93d3922133" \
   -H "Content-Type: application/json" \
   -d "{\"msgtype\": \"markdown\", \"markdown\": {\"title\":\"IP\",\"text\":\"### IP 地址: ### \n >$ip\"}}"
   
