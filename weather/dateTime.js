
export default class DateTime{
    constructor(timezone){
        this.timezone = timezone ;
    }

    getLocalTime(){
        const now = new Date();
        const utc = now.getTime()+ now.getTimezoneOffset()* 60000 ;
        const localTime = new Date(utc + this.timezone * 1000) ;
        return localTime.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
    }

    getLocalDate(){
        const now = new Date();
        const utc = now.getTime()+ now.getTimezoneOffset()*60000 ;
        const localDate = new Date(utc + this.timezone *1000);
        return localDate.toDateString();
    }

    getTimestamp(timestamp){
        if(!timestamp)return "-";
        const date = new Date((timestamp + this.timezone) *1000);
        const hours = date.getUTCHours().toString().padStart(2,"0");
        const minutes = date.getUTCMinutes().toString().padStart(2,"0");
        return`${hours}:${minutes}`
    }
}
