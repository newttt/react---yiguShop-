import Loadable from "react-loadable";
import Loading from "@common/loading";


const Home  = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Find  = Loadable({
    loader:()=>import("./find"),
    loading:Loading
})

const Order  = Loadable({
    loader:()=>import("./order"),
    loading:Loading
})

const Mine  = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Login  = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const ClassIfy = Loadable({
    loader:()=>import("./classIfy"),
    loading:Loading
})

const Category = Loadable({
    loader:()=>import("./category"),
    loading:Loading
})

const Regiter = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

const ModifyPic = Loadable({
    loader:()=>import("./mine/children/modifyPic"),
    loading:Loading
})

export {
    Home,
    Find,
    Order,
    Mine,
    Login,
    ClassIfy,
    Category,
    Regiter,
    ModifyPic
 
}
