<template>
  <div>
    <div class="headContainer clearfix">
      <div class="headTitle">
        真北公益计划
        <div class="headBtn">
          <el-button size="default">删除</el-button>
          <el-button type="primary" size="default">编辑</el-button>
        </div>
      </div>
      <div class="headText">
        <span>所属领域：基础教育</span>
        <span>发布时间：2021-07-01 12:00</span>
      </div>
    </div>
    <div class="app-container">
      <div class="mainContainer">
        <div class="mainTitle">项目动态</div>
        <el-table>
          <el-table-column label="主标题"> </el-table-column>
          <el-table-column label="内容类别"> </el-table-column>
          <el-table-column label="关联项目"> </el-table-column>
          <el-table-column label="封面图片">
            <template v-slot="{ row }">
              <img
                :src="row.imgUrl"
                alt=""
                style="width: 120px; height: 80px"
              />
            </template>
          </el-table-column>
          <el-table-column label="发布时间"> </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button
                type="text"
                @click="$router.push({ name: 'ItemDetail' })"
                >查看</el-button
              >
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
export default {};
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