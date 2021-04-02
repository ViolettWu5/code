function hide(check){
    let hide = document.getElementById("pas")
    if (check == 0){
        hide.type = "password"                                 
    }
    else if(check == 1){
        document.getElementById("information").reset();        //將內容物清空
    }
    else if(check == 2){
        hide.type = "text"                                     //顯示
    }
}