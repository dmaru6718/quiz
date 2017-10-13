//答え
var ans=[4,4,4,2,1,1,3,3,1,1];

//得点
var s=0;

//クリック数
var ck=0;

//処理
var i=0;

        var qs=["大丸の血液型はなんでしょう？",
        "だいまるの 生まれ故郷はどこ？",
        "だいまるの 飼っているペットは？",
        "だいまるの 入っていたサークルは？",
        "だいまるの バイトしてたところは？",
        "だいまるの 好きなラーメン屋は？",
        "だいまるの 昨日の睡眠時間は？",
        "最近ほしいもの",
        "憧れている職業",
        "javascript楽しかったです！"
];

//回答
var toi=[
    ["A型","B型","o型","AB型"],
    ["茨城県","埼玉県","神奈川県","岩手県"],
    ["トカゲ","熊","蛇","ハムスタ-"],
    ["バスケ部","よさこい","卓球部","テ二ス部"],
    ["和食チェーン店","ホストクラブ","ラーメン","無職"],
    ["厚木家","吉村家","魂心家","sugakiya"],
    ["3時間","5時間","7時間","30分"],
    ["服","mac book","ハンドスピナー","猫"],
    ["youtuber","音楽家","ラーメン屋","教師"],
    ["山崎先生","小菅先生","ホントに","ありがとうございました！"],
];
        
        var img=[
    ["<img src='images/agata.png'>","<img src='images/bgata.png'>","<img src='images/CAG57RiV_400x400.png'>","<img src='images/ab.jpg'>"],
    ['<img src="images/ibaraki.png" >','<img src="images/saitama.png">','<img src="images/kanagawa.png">','<img src="images/iwate.png">'],
    ['<img src="images/tokage.png">','<img src="images/kuma.png">','<img src="images/hebi.png">','<img src="images/hamu.png">'],
    ['<img src="images/basuke.png">','<img src="images/yosakoi.png">','<img src="images/takyu.png">','<img src="images/teniss.png">'],
    ['<img src="images/wa.png">','<img src="images/host.png">','<img src="images/ramen.png">','<img src="images/bgata.png">'],
    ['<img src="images/atugi.png">','<img src="images/yosimura.png">','<img src="images/konsin.png">','<img src="images/sugakiya.jpg">'],
    ['<img src="images/hard.png">','<img src="images/5.png">','<img src="images/7.png" >','<img src="images/tetuya.png">'],
    ['<img src="images/huku.png">','<img src="images/mac.png">','<img src="images/hand.png">','<img src="images/neko.png">'],
    ['<img src="images/hikakin.png">','<img src="images/music.png">','<img src="images/ramen.png">','<img src="images/sensei.png">'],
    ['<img src="images/zakiyama.png">','<img src="images/kosuge.png">','<img src="images/hana.png">','<img src="images/arigato.png">']
];
