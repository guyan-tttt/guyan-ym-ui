<script lang="ts" setup>
import { reactive, ref } from "vue";
import { YmMessage } from "guyan-ym-ui";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});

const options = ref([
  { value: "beijing", label: "北京" },
  { value: "shanghai", label: "上海" },
]);

const onSubmit = () => {
  YmMessage.success("submit!");
};
</script>

<template>
  <ym-form :model="form">
    <ym-form-item label="输入框">
      <ym-input v-model="form.name" />
    </ym-form-item>
    <ym-form-item label="选择框">
      <ym-select
        v-model="form.region"
        placeholder="请选择"
        :options="options"
      />
    </ym-form-item>
    <ym-form-item label="开关">
      <ym-switch v-model="form.delivery" />
    </ym-form-item>
    <ym-form-item label="文本域">
      <ym-input v-model="form.desc" type="textarea" />
    </ym-form-item>
    <ym-form-item>
      <ym-button type="primary" @click="onSubmit">提交</ym-button>
      <ym-button>取消</ym-button>
    </ym-form-item>
  </ym-form>
</template>
