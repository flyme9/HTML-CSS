<?php

    $avatar=$_FILES['avatar'];
    $newName='/upload/'.'avatar-'.time().rand(10000,99999).'.'. 'jpg';
    // print_r(pathinfo);
    move_uploaded_file($avatar['tmp_name'],'.'.$newName);
    $arr = array(
        "message"=>"文件上传成功",
        "url"=>"http://127.0.0.1/upload/".$newName
    );
    echo json_encode($arr);
?>