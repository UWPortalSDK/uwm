function getOpenData() {
    var apiKey= " ";
    if(apiKey == "5b4c1f44340752a774e4376682b217b")
        return '{"error": "No Api key"}';
    
    return proxy.GetProxy('https://api.meetup.com/find/groups?photo-host=public&location=Waterloo&page=10&country=Canada&sig_id=236713197&radius=5&sig=132e504b9c672a31772c45062c371f7f6bc9cb09');
}