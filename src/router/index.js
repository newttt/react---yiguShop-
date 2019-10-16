import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    ClassIfy,
    Category,
    Regiter,
    ModifyPic
} from "@pages"



export const layoutRoutes = [
    {
        key: "/home",
        path: "/home",
        name: "首页",
        icon: "\ue628",
        component: Home,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/find",
        path: "/find",
        name: "发现",
        icon: "\ue663",
        component: Find,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/order",
        path: "/order",
        name: "订单",
        icon: "\ue737",
        component: Order,
        exact: true,
        meta: {
            requireAuth: true,
            flag:true
        }
    },
    {
        key: "/mine",
        path: "/mine",
        name: "我的",
        icon: "\ue617",
        component: Mine,
        exact: true,
        meta: {
            requireAuth: true,
            flag:true
        }
    },

]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key: "/register",
        path: "/register",
        name: "注册",
        icon: "",
        component: Regiter,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key:"/classify",
        path:"/classify",
        name:"分类",
        icon:"",
        component:ClassIfy,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key:"/category",
        path:"/category/:id",
        name:"列表",
        icon:"",
        component:Category,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key:"/ModifyPic",
        path:"/ModifyPic",
        name:"修改头像",
        icon:"",
        component:ModifyPic,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
    
    
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);