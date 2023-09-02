function loadInfo() {
    placeinfoarray = [/*{
            x: 110.235002,
            y: 29.458382,
            title: '刘家坪红二方面军长征出发纪念馆',
            photo: "<img src='./images/place1/min.png'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>湖南省张家界市桑植县</b>",
            detail: "简介：位于桑植县刘家坪白族乡的中国工农红军第二方面军长征出发地纪念馆由中共中央、国务院批复同意，于2016年动工，占地约2200平方米，配套完善游客服务中心、旅游厕所、停车场和环形消防通道、园林绿化等公共设施…<a href='news1.html' style='text-decoration:none'>>>></a>"
        },*/
        {
            x: 110.168972,
            y: 29.473628,
            title: '贺龙纪念馆',
            photo: "<img src='./images/place2/min.png'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>湖南省张家界市桑植县</b>",
            detail: "简介：贺龙纪念馆坐落在张家界市桑植县，是全国唯一系统展示贺龙同志生平业绩的纪念场所。纪念馆共分为九大部分：桑之骄子；北伐名将；南昌起义总指挥；创建革命根据地；率部长征；威震抗日战场；征战大西北解放大西南；人民功臣…<a href='news6.html' style='text-decoration:none'>>>></a>"
        },
        {
            x: 110.537138,
            y: 29.119856,
            title: '湘鄂川黔革命根据地纪念馆',
            photo: "<img src='./images/place3/min.png'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>湖南省张家界市永定区</b>",
            detail: "简介：1935年，鉴于中央红军已经胜利到达陕北，为保存革命有生力量，红二、六军团突围长征，途中改称红二方面军，并胜利到达陕北。该馆为四合院建筑，东头是任弼时、贺龙、萧克旧居，南面是展览陈…<a href='news5.html' style='text-decoration:none'>>>></a>"
        },
        {
            x: 109.671416,
            y: 28.217772,
            title: '湘西州博物馆',
            photo: "<img src='./images/place4/min.png'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>湖南省湘西土家族自治州吉首市</b>",
            detail: "简介：湘西土家族苗族自治州博物馆(湘西州博物馆)，成立于1957年11月1日，是湖南省成立最早的地方综合性重点博物馆之一，也是唯一的少数民族地区级综合类国家三级博物馆,总占地面积8524.89平方米，总建筑面积37891.49平方米…<a href='news3.html' style='text-decoration:none'>>>></a>"
        },
        /*{
            x: 109.721193,
            y: 27.44901,
            title: "中国人民抗日战争胜利受降纪念馆",
            photo: "<img src='./images/place5/min.png'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>湖南省怀化市芷江县</b>",
            detail: "简介：中国人民抗日战争胜利受降纪念馆，是中国人民接受侵华日军投降旧址。1945年8月21—23日，侵华日军副总参谋长今井武夫奉冈村宁次之命，飞抵芷江请降。中国陆军总司令何应钦主持受降事宜…<a href='news5.html' style='text-decoration:none'>>>></a>"
        },*/
        {
            x: 113.00869,
            y: 28.067686,
            title: "长沙理工大学",
            photo: "<img src='./images/changli.jpg' style='height:90px;width:100px;'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>长沙理工大学云塘校区</b>",
            detail: "在此出发…"
        }, 
        /*{
            x: 111.613445,
            y: 26.420394,
            title: "永州",
            photo: "<img src='./images/place7/cl.png'style='height:90px;width:100px;'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>永州</b>",
            detail: "测试文字<a href='news6.html' style='text-decoration:none'>>>></a>  "
        },*/
        {
            x: 109.784412,
            y: 26.158054,
            title: "通道转兵纪念馆",
            photo: "<img src='./images/place2/xin1.jpg' style='height:90px;width:100px;'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>通道侗族自治县</b>",
            detail: "简介：湖南通道转兵纪念馆位于湖南省西南边陲通道侗族自治县，是为了更好地弘扬长征精神，保护革命文物，纪念通道会议而建设的纪念馆。1934年12月，中国工农红军长征途径湖南通道，召开了通道会议，决定转道贵州。2010年8月，红军长征通道会议旧址成功入列第二批全国红色经典景区开发项目。2014年12月12日，通道转兵纪念馆正式对外开放，吸引了众多“红军迷”前来参观。<a href='news1.html' style='text-decoration:none'>>>></a>  "
        },
        {
            x: 109.998488,
            y: 27.554978,
            title: "怀化博物馆",
            photo: "<img src='./images/place1/lunbo1.jpg' style='height:90px;width:100px;'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>怀化市</b>",
            detail: "简介：怀化博物馆，坐落于湖南省怀化市鹤城区，香州桥旁。 该馆为园林式仿古建筑外形及中国著名画家黄永玉先生所题写的馆名十分引人注目，被誉为怀化市政建设一大景观。怀化博物馆馆藏文物1.5万余件套，珍贵文物1330件套，多来自该区地下发掘和民间搜集。该馆曾出版《怀化博物馆简介》，还对本地区的革命史、少数民族史也作了有益的探究，在省级以上报刊发表各类学术文献数十篇。<a href='news1.html' style='text-decoration:none'>>>></a>  "
        },
        {
            x: 109.581072,
            y: 27.958062,
            title: "凤凰古城",
            photo: "<img src='./images/place4/lunbo2.jpg'style='height:90px;width:100px;'>",
            address: "<img src='./images/pos.png' style='height:16px;width:16px;position: relative;'><b>凤凰古城</b>",
            detail: "简介：凤凰古城，位于湖南省湘西土家族苗族自治州的西南部，占地面积约10平方千米，由苗族、汉族、土家族等28个民族组成，为典型的少数民族聚居区。凤凰古城建于清康熙四十三年，东门和北门古城楼尚在。城内青石板街道、江边木结构吊脚楼，以及朝阳宫、古城博物馆、杨家祠堂、沈从文故居、熊希龄故居、天王庙、大成殿、万寿宫等建筑，全都透着古城特色。 2001年，凤凰古城被授予国家历史文化名城称号，是中国历史文化名城，国家AAAA级景区，湖南十大文化遗产之一。2006年5月25日，凤凰古城堡被国务院公布为第六批全国重点文物保护单位。<a href='news4.html' style='text-decoration:none'>>>></a>  "
        },
    
    ];
    return placeinfoarray;
}