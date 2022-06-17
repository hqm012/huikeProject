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
          v-loading="addLoading"
        >
          <el-form-item label="项目名称">
            <el-input v-model="form.title" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="所属领域">
            <el-select
              v-model="form.type"
              placeholder="请选择活动区域"
              style="width: 300px"
            >
              <el-option label="基础教育" :value="0"></el-option>
              <el-option label="职业成长" :value="1"></el-option>
              <el-option label="企业公益" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="封面图片" size="normal">
            <el-upload
              class="avatar-uploader"
              :action="uploadAction"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :headers="headers"
            >
              <img v-if="form.image" :src="form.image" class="avatar" />
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
              v-model="form.description"
              resize="none"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="项目介绍" size="normal" class="quillFormItem">
            <quill-editor
              ref="myTextEditor"
              v-model="form.content"
              :options="editorOption"
              style="width: 600px; line-height: normal"
            ></quill-editor>
          </el-form-item>
          <el-form-item label="上下架" size="normal">
            <el-checkbox-group v-model="form.status">
              <el-checkbox :true-label="1" :false-label="0">开启</el-checkbox>
              <el-checkbox :true-label="0" :false-label="1">关闭</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addItem">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// 上传文件需要用到的token
import { getToken } from "@/utils/auth";

import api from "@/api";

export default {
  data() {
    return {
      form: {
        title: "",
        type: undefined,
        image: "",
        description: "",
        status: 1,
        content: "",
      },
      editorOption: {
        placeholder: "编辑文章内容",
      },
      // 控制提交时的加载画面
      addLoading: false,
    };
  },
  computed: {
    // el-upload上传时的地址和携带的请求头
    uploadAction() {
      return process.env.VUE_APP_BASE_API + "/file/upload";
    },
    headers() {
      return {
        authorization: `Bearer ` + getToken(),
      };
    },
  },
  methods: {
    // upload上传成功的钩子
    handleAvatarSuccess(res, file) {
      this.form.image = res.data.url;
    },
    // upload上传之前的钩子
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt100M = file.size / 1024 / 1024 < 100;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 或 PNG 格式!");
      }
      if (!isLt100M) {
        this.$message.error("上传头像图片大小不能超过 100MB!");
      }
      return isJPG && isLt100M;
    },

    // 提交处理
    async addItem() {
      this.addLoading = true;
      let res = await api.postProjectAdd({
        ...this.form,
        // sort: -214748364,
        sort: -1,
      });
      if (res.code == 200) {
        this.addLoading = false;
        this.$message({
          type: "success",
          message: "上传成功",
        });
      } else {
        console.log(res);
        this.addLoading = false;
      }
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

/* 重写富文本编辑器的宽度和高度 */
.quill-editor >>> .ql-container {
  height: 300px;
}
</style>