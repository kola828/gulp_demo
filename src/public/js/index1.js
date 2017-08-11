
var vm = new Vue({
  el: '#index',
  data: {
    username: '',
    age: '',
    sex:'男',
    department:'技术部',
    departmentList:['技术部','后勤部','运营部','其他'],
    like:[],
    myData: [],
  },
  mounted: function () {

  },
  methods: {
    /**
     * description 新增信息
     * method add
     */
    add: function () {
      if (this.username !== '' && this.age !== '') {
        this.myData.push({
          name: this.username,
          age: this.age,
          sex: this.sex ,
          department:this.department,
          like:this.like,
        });
        this.username = '';
        this.age = '';
        this.sex ='';
        this.department='技术部';
        this.like=[]
      }
    },
    /**
     * description 删除信息
     * method add
     */
    del: function (index) {
      if (index === -1) {
        this.myData = [];
      } else {
        this.myData.splice(index, 1);
      }
    },
    /**
     * description 重置信息
     * method reset
     */
    reset: function () {
      this.username = '';
      this.age = '';
      this.sex ='';
      this.department='技术部';
      this.like=[]

    }
  },
  components: {

  }
});