class Log{
    static printLog(){
    var d = new Date();
    var yy = d.getFullYear();
    var mm = d.getMonth()+1;
    var dd = d.getDate();
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

    // static WriteToFile() {

    //     var fso = new ActiveXObject("Scripting.FileSystemObject");
    //     var a = fso.CreateTextFile("app.log", true);
    //     a.WriteLine(`[${string}]`,"INFO: ","This is an information about something.");
    //     a.Close();
    //  }
}

Log.printLog();
// Log.WriteToFile();

class Cipher{
    constructor(string,password){
        this.string = string
        this.password = password
        this.isEncrypt= false
    }

    encrypt(passwordnya){
        if(passwordnya !== this.password){
            console.log("password salah");
        }else if (this.isEncrypt === true) {
            console.log("Pesan sudah ter enkripsi");
        }else {
            let temp = []
            for (let index = 0; index < this.string.length; index++) {
                temp[index] = this.string.charCodeAt(index);
                temp[index] = temp[index] + index;
                temp[index] = String.fromCharCode(temp[index]);
            }
            temp = temp.join('');
            this.string = temp
            this.isEncrypt = true
            console.log(this.string);
        }
    }

    decrypt(passwordnya){
        if(passwordnya !== this.password){
            console.log("password salah");
        }else if (this.isEncrypt === false) {
            console.log("pesan belum di enkripsi");
        }else {
            let temp = []
            for (let index = 0; index < this.string.length; index++) {
                temp[index] = this.string.charCodeAt(index);
                temp[index] = temp[index] - index;
                temp[index] = String.fromCharCode(temp[index]);
            }
            temp = temp.join('');
            this.string = temp
            console.log(this.string);
        }
    }
}

let cipher = new Cipher("ini pesan rahasia","luwak white cofee")
cipher.encrypt("luwak white cofee")
cipher.encrypt("luwak white cofee")
cipher.decrypt("luwak white cofee")

class Cart{
    constructor(){
        this.item = []
        this.discount = 0
    }

    addItem({id, harga, jumlah}){
        this.item.push({id, harga, jumlah})
    }

    removeItem(){
        
    }
}