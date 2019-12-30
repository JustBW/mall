import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}
export class Goods{
  constructor(ItemInfo, columns,services){
    this.title=ItemInfo.title,
    this.desc = ItemInfo.desc,
    this.newPrice =ItemInfo.price,
    this.oldPrice = ItemInfo.oldPrice,
    this.columns = columns,
    this.services = services,
    this.realPrice = ItemInfo.lowNowPrice,
    this.discount = ItemInfo.discountDesc
  }
}
export class Shop{
  constructor(ShopInfo){
    this.logo = ShopInfo.shopLogo,
    this.name = ShopInfo.name,
    this.fans = ShopInfo.cFans,
    this.sells = ShopInfo.cSells,
    this.score = ShopInfo.score,
    this.goodsCount = ShopInfo.cGoods
  }
}
export class GoodsParams{
  constructor(info,rule){
    this.image=info.images?info.images[0]:'';
    //images里可能没有值
    this.infos =info.set;
    this.sizes = rule.tables;
  }
}

