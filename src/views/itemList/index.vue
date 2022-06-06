<template>
  <div>
    <div class="headContainer">
      <span>项目列表</span>
    </div>
    <div class="app-container">
      <div class="itemSelect">
        <el-form
          :model="selectForm"
          ref="selectForm"
          label-width="100px"
          :inline="true"
        >
          <el-form-item label="项目名称：" size="normal">
            <el-input
              v-model="selectForm.name"
              size="normal"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="所属领域：" size="normal">
            <el-select v-model="selectForm.region">
              <el-option value="默认值"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上下架：" size="normal">
            <el-select v-model="selectForm.region">
              <el-option value="默认值"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item size="normal">
            <el-button @click="resetForm('selectForm')">重置</el-button>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="itemShow">
        <el-table :data="tableData">
          <el-table-column label="项目名称" prop="name"> </el-table-column>
          <el-table-column label="所属领域" prop="region"> </el-table-column>
          <el-table-column label="封面图片">
            <template v-slot="{ row }">
              <img
                :src="row.imgUrl"
                alt=""
                style="width: 120px; height: 80px"
              />
            </template>
          </el-table-column>
          <el-table-column label="项目动态数量" prop="count"> </el-table-column>
          <el-table-column label="发布时间" prop="date"> </el-table-column>
          <el-table-column label="上下架">
            <template v-slot="{ row }">
              <el-switch v-model="row.isPutaway"> </el-switch>
            </template>
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
        <el-pagination
          style="margin-top: 32px"
          layout="->,prev, pager, next"
          :total="50"
        >
        </el-pagination>

        <el-dialog
          title="项目编辑"
          :visible.sync="dialogFormVisible"
          width="648px"
        >
          <el-form
            ref="form"
            :model="form"
            label-width="80px"
            label-position="top"
          >
            <el-form-item label="发布时间" size="normal">
              <el-date-picker
                v-model="form.dateValue1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
              <el-time-picker
                v-model="form.dateValue2"
                placeholder="任意时间点"
                style="margin-left: 36px"
              >
              </el-time-picker>
            </el-form-item>

            <el-form-item label="项目名称">
              <el-input v-model="form.name" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="所属领域">
              <el-select
                v-model="form.region"
                placeholder="请选择活动区域"
                style="width: 300px"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="封面图片" size="normal">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"
                  ><div>点击上传</div>
                </i>
              </el-upload>
            </el-form-item>
            <el-form-item label="内容摘要" size="normal">
              <el-input
                class="elTextarea"
                type="textarea"
                :rows="2"
                placeholder="摘要仅会在首页的卡片或列表页的卡片上显示，帮助读者快速了解内容，可从项目介绍中复制相关内容粘贴于此处"
                v-model="form.textarea"
                resize="none"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="项目介绍" size="normal" class="quillFormItem">
              <quill-editor
                ref="myTextEditor"
                v-model="content"
                :options="editorOption"
                style="width: 600px; line-height: normal"
              ></quill-editor>
            </el-form-item>
            <el-form-item label="上下架" size="normal">
              <el-checkbox-group v-model="form.isPutaway">
                <el-checkbox :true-label="1" :false-label="0">开启</el-checkbox>
                <el-checkbox :true-label="0" :false-label="1">关闭</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
            <el-button @click="dialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectForm: {
        name: "",
        region: "",
      },

      // table模拟数据
      tableData: [
        {
          name: "真北公益计划",
          region: "基础教育",
          imgUrl:
            "https://img.youxi369.com/article/contents/2021/05/06/small_20210506104757379.gif",
          count: "23",
          date: "2016-05-02",
          isPutaway: true,
        },
        {
          name: "真北公益计划",
          region: "基础教育",
          imgUrl:
            "https://img.youxi369.com/article/contents/2021/05/06/small_20210506104757168.gif",
          count: "23",
          date: "2016-05-04",
          isPutaway: true,
        },
      ],

      // 编辑弹窗
      dialogFormVisible: false,

      // 弹窗表单数据
      form: {
        dateValue1: "",
        dateValue2: "",
        name: "",
        region: "",
        imageUrl: "",
        textarea: "",
        isPutaway: 1,
      },

      // 富文本内容收集
      content: "",
      editorOption: {
        placeholder: "编辑文章内容",
      },
    };
  },
  methods: {
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // upload上传成功的钩子
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // upload上传之前的钩子
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style scoped>
.headContainer {
  background-color: white;
  height: 98px;
  line-height: 98px;
  padding-left: 24.5px;
}
.itemSelect,
.itemShow {
  background-color: white;
  padding: 24px 60px 29px;
  margin-bottom: 24px;
}

/* 清除select模块的默认下边距 */
.itemSelect .el-form >>> .el-form-item {
  margin-bottom: 0;
}

/* el-form-item_label样式改写 */
.el-dialog .el-form-item >>> .el-form-item__label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.el-dialog .el-form-item >>> .el-form--label-top .el-form-item__label {
  padding: 0 0 8px;
}

/* 重写富文本编辑器的宽度和高度 */
.quill-editor >>> .ql-container {
  height: 300px;
}
</style>