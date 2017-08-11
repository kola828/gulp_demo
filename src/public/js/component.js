Vue.component('my-table',{
  props:['list'],
  data:function () {
    return {
      myData:[]
    }
  },
  mounted: function () {
    this.myData = this.list;
  },
  methods:{
    /**
     * description 删除信息
     * method del
     * @param index(number)
     */
      del: function (index) {
        if (index === -1) {
          this.myData = [];
          this.$emit('delete',this.myData);
        } else {
          this.myData.splice(index,1);
          this.$emit('delete',this.myData);
        }
      }
  },
  template:'<table class="table table-bordered table-hover" cellspacing="0" cellpadding="0" :class="myData.length!=0?\'text-muted\':\'\'">' +
  '    <thead>' +
  '    <tr>' +
  '      <th>序号</th>' +
  '      <th>名字</th>' +
  '      <th>年龄</th>' +
  '      <th>性别</th>' +
  '      <th>部门</th>' +
  '      <th>爱好</th>' +
  '      <th>操作</th>' +
  '    </tr>' +
  '    </thead>' +
  '    <tbody>' +
  '    <tr class="text-center" v-for="item,index in myData">' +
  '      <td>{{index+1}}</td>' +
  '      <td>{{item.name}}</td>' +
  '      <td>{{item.age}}</td>' +
  '     <td>{{item.sex}}</td>' +
  '     <td>{{item.department}}</td>' +
  '     <td><span v-for="key in item.like">{{key}}，</span></td>' +
  '      <td><input class="btn" type="button" value="删除"' +
  '                 @click="del(index)"></td>' +
  '    </tr>' +
  '    <tr class="text-right" v-if="myData.length != 0">' +
  '      <td colspan="7">\n' +
  '        <button class="btn btn-sm" @click="del(-1)">删除全部' +
  '        </button>' +
  '      </td>' +
  '    </tr>' +
  '    <tr v-else>' +
  '      <td colspan="7" class="text-center last" >' +
  '        <p>暂无数据...</p>' +
  '      </td>' +
  '    </tr>' +
  '    </tbody>' +
  '  </table>'
});