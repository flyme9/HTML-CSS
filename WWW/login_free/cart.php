<?php

    session_start();
    // 用户没有登陆过，获取购物车列表失败
    if(!isset($_SESSION['login'])){
        $arr=array(
            "message"=>"获取购物车列表失败",
            "code"=>0
        );
        echo json_encode($arr);
        exit;
    }
    // 用户登录过，查询数据库数据返回给前端
    $arr=array(
        "message"=>"获取购物车列表成功",
        "code"=>1,
        "list"=>[1,2,3]
    );
    echo json_encode($arr);

?>