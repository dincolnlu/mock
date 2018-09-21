let Mock = require('mockjs');

module.exports = function() {
    var data = {
        getvcode: {code: 123},
        userInfo: {
            "id": 1,
            "name": "joeth",
            "token": "xxxxx-xxxx-xxx-xx-x"
        },
        userLogout: {},
        userLogin: {
            "id": 1,
            "name": "joeth",
            "token": "xxxxx-xxxx-xxx-xx-x"
        },
        brands: [
            {"id": 1, "cid": 1, "name": "星外星唱片", "logo": "/public/temp/brand-logo-1.jpg"},
            {"id": 2, "cid": 1, "name": "环球唱片", "logo": "/public/temp/brand-logo-1.jpg"},
            {"id": 3, "cid": 1, "name": "天娱传媒", "logo": "/public/temp/brand-logo-2.jpg"},
            {"id": 4, "cid": 1, "name": "金牌大风", "logo": "/public/temp/brand-logo-3.jpg"},
            {"id": 5, "cid": 1, "name": "滚石唱片", "logo": "/public/temp/brand-logo-4.jpg"},
            {"id": 6, "cid": 1, "name": "索尼音乐", "logo": "/public/temp/brand-logo-5.jpg"},
            {"id": 7, "cid": 1, "name": "华研国际", "logo": "/public/temp/brand-logo-6.jpg"},
            {"id": 11, "cid": 101, "name": "星外星唱片", "logo": "/public/temp/brand-logo-1.jpg"},
            {"id": 12, "cid": 102, "name": "环球唱片", "logo": "/public/temp/brand-logo-1.jpg"},
            {"id": 13, "cid": 103, "name": "天娱传媒", "logo": "/public/temp/brand-logo-2.jpg"},
            {"id": 14, "cid": 104, "name": "金牌大风", "logo": "/public/temp/brand-logo-3.jpg"},
            {"id": 15, "cid": 105, "name": "滚石唱片", "logo": "/public/temp/brand-logo-4.jpg"},
            {"id": 16, "cid": 106, "name": "索尼音乐", "logo": "/public/temp/brand-logo-5.jpg"},
            {"id": 24, "cid": 107, "name": "金牌大风", "logo": "/public/temp/brand-logo-3.jpg"},
            {"id": 21, "cid": 108, "name": "星外星唱片", "logo": "/public/temp/brand-logo-1.jpg"},
        ],
        categorys: [
            {"id": 1, "cid": 0, "name": "唱片"},
            {"id": 2, "cid": 0, "name": "音箱"},
            {"id": 3, "cid": 0, "name": "周边"},
            {"id": 4, "cid": 0, "name": "门票"},
            {"id": 5, "cid": 0, "name": "乐器"},

            {"id": 102, "cid": 1, "name": "摇滚"},
            {"id": 103, "cid": 1, "name": "黑胶"},
            {"id": 104, "cid": 1, "name": "独立音乐"},
            {"id": 105, "cid": 1, "name": "欧美"},
            {"id": 106, "cid": 1, "name": "中国音乐"},

            {"id": 201, "cid": 2, "name": "索尼"},
            {"id": 207, "cid": 2, "name": "惠普"},
            {"id": 208, "cid": 2, "name": "步步高"},

            {"id": 101, "cid": 3, "name": "流行"},
            {"id": 102, "cid": 3, "name": "摇滚"},
            {"id": 103, "cid": 3, "name": "黑胶"},
            {"id": 104, "cid": 3, "name": "独立音乐"},
            {"id": 105, "cid": 3, "name": "欧美"},

            {"id": 104, "cid": 4, "name": "独立音乐"},
            {"id": 105, "cid": 4, "name": "欧美"},
            {"id": 106, "cid": 4, "name": "中国音乐"},
            {"id": 107, "cid": 4, "name": "儿童"},
            {"id": 108, "cid": 4, "name": "民谣"},

        ],
        productList: {
            "totalPage": 10,
            "totalCount": 100,
            "datalist": []
        },
        products: [],
        

        //课程列表
        courseList:{
            "totalPage": 10,
            "totalCount": 1,
            "datalist": []
        },
        myCourseList: {
            "totalPage": 10,
            "totalCount": 1,
            "datalist": []
        },
        courseDetail: [],
        lessonList:{
            "totalPage": 10,
            "totalCount": 1,
            "datalist": []
        },
        playinfo:[],

        cartList:{
            "totalPage": 10,
            "totalCount": 1,
            "datalist": []
        }

    };

    let cover = ['/temp/cover1.jpg', '/temp/cover2.jpg', '/temp/cover3.jpg', '/temp/cover4.jpg', '/temp/cover5.jpg']
    let products = []

    for (var i = 0; i < 50; i++) {

        var bid = Mock.Random.integer(1, 6);
        var item = Mock.mock({
            "id": i, //商品ID
            "cid": Mock.Random.integer(1, 3), //分类ID
            // "cover": Mock.Random.image('400x400'), //商品图片
            "cover": cover[Mock.Random.integer(0, 4)], //商品图片
            "title": Mock.Random.cword(8, 20), //商品标题
            "price": Mock.Random.float(60, 200, 2, 2), //商品价格
            "bid": bid, //商品厂牌
            "brands": data.brands.find(n => n.id == bid), //商品厂牌
            "isNewest|1-2": true, //是否为最新商品
            "isDiscount|1-2": true, //是否为打折商品
            "isRecommend|1-2": true, //是否为推荐商品
        });
        products.push(item)
    }


    //模拟数据(课程)

    //课程列表
    var courseList = Mock.mock({
        "datalist|5": [{
            "id|1-10": 5,
            "title": "@ctitle(6)",
            "subtitle": "@ctitle(20)",
            "cover": "@image('200x200', '#894FC4', 'png', '@ctitle(1)')",
            "status|1-2": 1,
            "count|1-50": 10,
        }]
    });
    //console.log(courseList)
    data.courseList.totalCount = courseList.datalist.length;
    data.courseList.datalist = courseList.datalist;

    //我的课程列表
    var myCourseList = Mock.mock({
        "datalist|1-20": [{
            "id": "@id",
            "title": "@ctitle(6)",
            "subtitle": "@ctitle(20)",
            "cover": "@image('200x200', '#894FC4', 'png', '@ctitle(1)')",
            "status|1-2": 1,
            "count|1-50": 10,
            "historyPlay":{
                "duration|1-300": 10,
                "info": '@ctitle(6)',
            }
        }]
    });
    //console.log(courseList)
    data.myCourseList.totalCount = myCourseList.datalist.length;
    data.myCourseList.datalist = myCourseList.datalist;

    //课程详情
    const detail  = Mock.mock({
        "title": "@ctitle(6)",
        "cover": "@image('200x200')",  //封面 
        "price|1-99999": 100 , //价格 
        "status|1-2": 1,   //更新状态
        "count|1-50": 10,  //更新至
        "description":"@ctitle(100)" ,//课程介绍 
        //"isBought|1": "@boolean" ,  //是否已购买  
        "isBought": true,  //是否已购买  
        //"isBought": false,  //是否已购买  
        "isPlayable|1": "@boolean",   //播放
        "historyPlay" :{
            "id": "@id",  //播放ID 
            "info": "@ctitle(6)",  //播放信息 
            "duration|1-300": 10,//播放时长 
        } ,//播放历史 
        "audition":{
            "id": "@id"  //试听ID 
        }  //试听 

    });

    data.courseDetail = detail;

   //小课列表
    var lesson = Mock.mock({
        "datalist|1-20": [{
            "id": "@id",
            "title": "@ctitle(6)",
            "subtitle": "@ctitle(20)",
            "isPlayable|1": "@boolean",
            "duration|0-720":60,
            "history|0-720": 60,
            "updateTime": "@date",
            "playCount|0-10": 5,
        
        }]
    });



    //console.log(courseList)
    data.lessonList.totalCount = lesson.datalist.length;
    data.lessonList.datalist = lesson.datalist;


    //音频地址
    const playinfo = Mock.mock({
        "title": "@ctitle(6)",
        "playUrl":"../../../static/mp3/waybackintolove.mp3",
        "duration": '282',
        "playCount|1-10":5
    });
    //console.log(courseList)
    data.playinfo = playinfo;



    //购物车列表
    const cartList = Mock.mock({
        "datalist|1-3": [{
            "mainId": "@id",
            "shopName": "@ctitle(6)",
            "goodsList|1-5":[{
                "id": "@id",
                "title": "@ctitle(6)",
                "sku|1": "@ctitle(20)",
                "price|0-30000": 10000,
                "quantity|1-10":9,
                "cover": "@image('200x200', '#894FC4', 'png', '@ctitle(1)')",
            }]
        }]
    })

    data.cartList.datalist = cartList.datalist;




/*                                                                                            */

    data.products = products;
    // data.productList.result.totalPage = Math.ceil(products.length/10);
    data.productList.totalCount = products.length;
    data.productList.datalist = products.slice(0,5);



    return data
}
