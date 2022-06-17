<template>
  <div>
    <div class="headContainer clearfix">
      <div class="headTitle">
        <span>{{ detailInfo[0] ? detailInfo[0].title : "default" }}</span>
        <div class="headBtn">
          <el-button size="default">删除</el-button>
          <el-button type="primary" size="default">编辑</el-button>
        </div>
      </div>
      <div class="headText">
        <span
          >所属领域：{{
            detailInfo[0] ? detailInfo[0].typeName : "default"
          }}</span
        >
        <span
          >发布时间：{{
            detailInfo[0] ? detailInfo[0].createdTime : "default"
          }}</span
        >
      </div>
    </div>
    <div class="app-container">
      <div class="mainContainer">
        <div class="mainTitle">项目动态</div>
        <el-table :data="detailInfo">
          <el-table-column label="主标题" prop="title"> </el-table-column>
          <el-table-column label="内容类别" prop="typeName"> </el-table-column>
          <el-table-column label="关联项目" prop="typeName"> </el-table-column>
          <el-table-column label="封面图片">
            <template v-slot="{ row }">
              <img :src="row.image" alt="" style="width: 120px; height: 80px" />
            </template>
          </el-table-column>
          <el-table-column label="发布时间" prop="createdTime">
          </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button type="text">查看</el-button>
              <el-button type="text" @click="dialogFormVisible = true"
                >编辑</el-button
              >
              <el-button type="text">删除</el-button>
              <el-button type="text">置顶</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailInfo: [],
    };
  },
  methods: {
    // 获取页面基础数据
    async pageInit() {
      let res = await this.$api.postProjectQueryById(
        {},
        {
          params: {
            projectId: this.$route.query.projectId,
          },
        }
      );
      if (res.code === 200) {
        // 因为返回的数据type是数字，所以进行一些处理
        let typeName;
        switch (res.data.type + "") {
          case "0":
            typeName = "基础教育";
            break;
          case "1":
            typeName = "职业成长";
            break;
          case "2":
            typeName = "企业公益";
            break;
          default:
            break;
        }
        res.data.typeName = typeName;
        this.detailInfo.push(res.data);
      }
    },
  },
  created() {
    this.pageInit();
  },
};
</script>

<style scoped>
.headContainer {
  height: 132px;
  background-color: white;
  padding: 24px;
}
.headTitle {
  font-size: 20px;
  font-weight: 500;
  display: flex;
  line-height: 40px;
  justify-content: space-between;
}
.headText {
  font-size: 14px;
  opacity: 0.9;
  color: #333;
  font-weight: 400;
  margin-top: 20px;
}
.headText span:nth-child(2) {
  margin-left: 180px;
}
.mainContainer {
  background-color: white;
  padding: 24px 50px;
}
.mainTitle {
  font-size: 20px;
  font-weight: 500;
}
</style>