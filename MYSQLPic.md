# My SQL 
    建立第一個資料表

*1. 建立一個新的資料庫,取名字為 website。

![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/create%20db.JPG "create db")

*2.在資料庫中,建立資料表,取名字為 user。資料表中必須包含以下欄位設定:
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/user.jpeg "create table")
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/user.jpeg "create table")

    資料表操作

*3.1使用 INSERT 指令新增一筆資料到 user 資料表中,這筆資料是 ply。接著繼續新增資料。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/insert.JPG "insert ply")
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/insert%20more.JPG "insert more")

*3.2使用 SELECT 指令取得所有在 user 資料表中的使用者資料。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/select%20user.JPG "select user")

*3.3 使用 SELECT 指令取得 user 資料表中總共有幾筆資料。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/count.JPG "countt user")

*3.4 使用 SELECT 指令取得所有在 user 資料表中資料,並按照 time 欄位,由近到遠排序
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/orderbytime.JPG "user orderbytime")

*3.5 使用 SELECT指令取得 user資料表中第 2 ~ 4 共三筆資料,並按照 time 欄位,由近到遠排序。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/orderbytime3.JPG "user orderbytime3")

*3.6 使用 SELECT 指令取得欄位 username 是 ply 的使用者資料。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/ply.JPG "ply")

*3.7 使用 SELECT 指令取得欄位 username 是 ply、且欄位 password 也是 ply 的資料。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/ply2.JPG "ply2")

*3.8 使用 UPDATE 指令更新欄位ply 的使用者資料,將資料中的 name 欄位改成【丁滿】。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/ply2.JPG "ply2")

*3.9 使用 DELETE 指令刪除所有在 user 資料表中的資料。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/delete.jpeg "delete")

    建立第二個資料表
    
*4.1 在資料庫中,建立新資料表,取名字為 message。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/create%20table2.JPG "create message")
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/create%20table2.1.JPG "create message2")

*4.2 使用 SELECT 搭配 JOIN 的語法,取得所有留言,資料中須包含留言會員的姓名。
![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/create%20table2.1.JPG "select message")

*4.3 使用 SELECT 搭配 JOIN 的語法,取得 user資料表中欄位 username 是 ply 的所有留言,資料中須包含留言會員的姓名。

![GITHUB]( https://github.com/ViolettWu5/code/blob/main/MySQL/plymessage.JPG "ply message")





