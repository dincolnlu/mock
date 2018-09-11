module.exports = {
    "/api/": "/",
    "/getvcode": "/getvcode",
    "/user/info?token=:token": "/userInfo",
    "/user/login": "/userLogin",
    "/user/logout": "/userLogout",
    "/product/brands": "/brands", //所有品牌
    "/product/brands?cid=:id": "/brands", //所有品牌
    "/product/brands?fid=:id": "/brands", //所有品牌
    "/product/categorys": "/categorys", //所有分类
    "/product/categorys?cid=:id": "/categorys", //所有分类
    "/product/categorys?fid=:id": "/categorys", //所有分类
    "/product/lists": "/productList", //所有商品
    "/product/lists?page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=:id&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&page=:id": "/productList", //分类商品
    "/product/lists?bid=:id": "/productList", //分类商品
    "/product/lists?bid=:id&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id": "/productList", //分类商品
    "/product/lists?cid=:id&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isPriceUp": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isPriceUp&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isPriceDown": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isPriceDown&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isSalesUp": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isSalesUp&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isSalesDown": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isSalesDown&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isShelfUp": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isShelfUp&page=:id": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isShelfDown": "/productList", //分类商品
    "/product/lists?cid=:id&bid=:id&sort=isShelfDown&page=:id": "/productList", //分类商品
    "/product/lists?isNewest=:isNewest": "/products", //新品商品
    "/product/lists?isDiscount=:isDiscount": "/products", //打折商品
    "/product/lists?isRecommend=:isRecommend": "/products", //推荐商品
    "/product/details?id=:id": "/productList/:id", //商品详情

    //课程接口
    "course/list": "/courseList" ,//课程列表
    "course/mine":  "/courseList" ,//我的课程列表
    "course/detail": "/courseDetail" ,//课程详情
    "course/lesson": "/lessonList",//小课列表
    "course/playinfo": "/playinfo" //获取音频地址
}
