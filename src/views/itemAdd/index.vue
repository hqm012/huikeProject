<template>
  <div>
    <div class="headContainer">
      <span>创建新项目</span>
    </div>
    <div class="app-container">
      <div class="formContainer">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          label-position="top"
        >
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
          <el-form-item label="项目介绍" size="normal">
            <quill-editor
              ref="myTextEditor"
              v-model="content"
              :options="editorOption"
              style="width: 600px; height: 300px"
            ></quill-editor>
          </el-form-item>
          <el-form-item label="上下架" size="normal">
            <el-checkbox-group v-model="form.isPutaway">
              <el-checkbox :true-label="1" :false-label="0">开启</el-checkbox>
              <el-checkbox :true-label="0" :false-label="1">关闭</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        imageUrl: "",
        textarea: "",
        isPutaway: 1,
      },
      content: "",
      editorOption: {
        placeholder: "编辑文章内容",
      },
    };
  },
  methods: {
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
/* 两个白底容器的样式 */
.headContainer {
  background-color: white;
  height: 98px;
  line-height: 98px;
  padding-left: 24.5px;
}
.headContainer span {
  font-size: 20px;
  font-weight: 500;
}
.formContainer {
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 24px 0;
  border-radius: 3px;
}

/* elbutton样式重写 */
.el-form-item >>> .el-button {
  width: 120px;
  height: 40px;
}

/* el-form-item_label样式改写 */
.el-form-item >>> .el-form-item__label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.el-form-item >>> .el-form--label-top .el-form-item__label {
  padding: 0 0 8px;
}
</style>