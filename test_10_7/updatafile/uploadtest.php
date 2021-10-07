<?php

    move_uploaded_file($_FILES['avatar']['tmp_name'],'./upload/test001.jpg');
    $arr = array(
        "message"=>"请求接收到了，但是数据不一定接收到了",
        "data"=>$_POST,
        "files"=>$_FILES,
        "url"=>'./upload/test001.jpg'
    );
    echo json_encode($arr);
?>