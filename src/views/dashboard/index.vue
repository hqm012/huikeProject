<template>
  <div class="dashboard-container">
    <div class="dashboard-title">网站访问量</div>
    <div class="dateData">
      <div class="dateDataItem">
        <p class="text">今日</p>
        <p class="num">{{ day }}</p>
      </div>
      <div class="dateDataItem">
        <p class="text">本周</p>
        <p class="num">{{ week }}</p>
      </div>
      <div class="dateDataItem">
        <p class="text">本月</p>
        <p class="num">{{ month }}</p>
      </div>
      <div class="dateDataItem">
        <p class="text">总访问量</p>
        <p class="num">{{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      day: 23,
      week: 233,
      month: 2333,
      total: 23333,
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    background-color: white;
    padding: 24px;
  }
  &-title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
  }
}
.dateData {
  display: flex;
  justify-content: space-around;

  .text {
    font-size: 14px;
  }
  .num {
    font-size: 40px;
    font-weight: 500;
  }
}
</style>
