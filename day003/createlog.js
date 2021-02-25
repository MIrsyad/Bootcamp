class Log{
    static printLog(){
    var d = new Date();
    var yy = d.getFullYear();
    var mm = d.getMonth();
    var dd = d.getDay();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var string = `${yy}-${mm}-${dd} ${hour}:${minute}`;

    console.log(`[${string}]`,"INFO: ","This is an information about something.");
    console.log(`[${string}]`,"ERROR: We can't divide any numbers by zero.");
    console.log(`[${string}]`,"NOTICE: Someone loves your status.");
    console.log(`[${string}]`,"WARNING: Insufficient funds.");
    console.log(`[${string}]`,"DEBUG: This is debug message.");
    console.log(`[${string}]`,"ALERT: Achtung! Achtung!.");
    console.log(`[${string}]`,"CRITICAL: Medic!! We've got critical damages.");
    console.log(`[${string}]`,"EMERGENCY: System  hung. Contact system administrator immediately!.");
    }
}

Log.printLog();