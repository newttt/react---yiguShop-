import http from '@utils/http';
export const week_choice = (city_id,page)=>http.get("/api/hub/home/v1/web/week_choice.json",{
    city_id:city_id,
    page:page
})


export const  week_classify = (city_id=140,is_new_local)=>http.get("/api/hub/home/v1/virtual/category.json",{
    city_id:city_id,
    is_new_local:true
})

export const goodsList = (category_id,sort,city_id,page=0)=>http.get("/api/4/tab/category_product_list.json",{
    category_id:category_id,
    sort:sort,
    from_id:0,
    city_id:city_id,
    page:page
})
