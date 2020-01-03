import {debounce} from './utils'
export const itemImageListener = {
  data() {
    return {
      imgListener:null,
      newRefresh:null,
      isShow: false,
      isTabfixed: false,
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh,100)
    this.imgListener=()=>{
      this.newRefresh()
    };
    this.$bus.$on('itemImgLoad',this.imgListener);
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    showBack(position) {
      this.isShow = (-position.y) > 1000
      this.isTabfixed = (-position.y) > this.tabOffset;
    }
  },
} 