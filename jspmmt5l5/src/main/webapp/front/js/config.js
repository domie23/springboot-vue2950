
var projectName = '食品安全追溯系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '公司信息',
	url: './pages/gongsixinxi/list.jsp'
}, 
{
	name: '食品材料',
	url: './pages/shipincailiao/list.jsp'
}, 
{
	name: '加工工艺',
	url: './pages/jiagonggongyi/list.jsp'
}, 

{
	name: '新闻信息',
	url: './pages/news/list.jsp'
},
{
	name: '留言板',
	url: './pages/messages/list.jsp'
}
]

var adminurl =  "http://localhost:8080/jspmmt5l5/index.jsp";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","查看评论"],"menu":"公司信息","menuJump":"列表","tableName":"gongsixinxi"}],"menu":"公司信息管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除","查看评论"],"menu":"食品材料","menuJump":"列表","tableName":"shipincailiao"}],"menu":"食品材料管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"材料类型","menuJump":"列表","tableName":"cailiaoleixing"}],"menu":"材料类型管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除","查看评论"],"menu":"加工工艺","menuJump":"列表","tableName":"jiagonggongyi"}],"menu":"加工工艺管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"新闻信息","tableName":"news"},{"appFrontIcon":"cuIcon-service","buttons":["查看","修改","删除"],"menu":"在线客服","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"公司信息列表","menuJump":"列表","tableName":"gongsixinxi"}],"menu":"公司信息模块"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"食品材料列表","menuJump":"列表","tableName":"shipincailiao"}],"menu":"食品材料模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"加工工艺列表","menuJump":"列表","tableName":"jiagonggongyi"}],"menu":"加工工艺模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"公司信息列表","menuJump":"列表","tableName":"gongsixinxi"}],"menu":"公司信息模块"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"食品材料列表","menuJump":"列表","tableName":"shipincailiao"}],"menu":"食品材料模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"加工工艺列表","menuJump":"列表","tableName":"jiagonggongyi"}],"menu":"加工工艺模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
