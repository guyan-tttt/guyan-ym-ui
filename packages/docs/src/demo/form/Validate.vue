<script lang="ts" setup>
import { reactive, ref } from "vue";
import { YmMessage, type FormInstance } from "guyan-ym-ui";

const formRef = ref<FormInstance>();
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

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
});

const onSubmit = () => {
  formRef.value?.validate().then((valid: boolean) => {
    if (valid) {
      YmMessage.success("submit!");
    }
  });
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <ym-form ref="formRef" :model="form" :rules="rules">
    <ym-form-item label="输入框" prop="name">
      <ym-input v-model="form.name" />
    </ym-form-item>
    <ym-form-item label="选择框" prop="region">
      <ym-select
        v-model="form.region"
        placeholder="请选择"
        :options="options"
      />
    </ym-form-item>
    <ym-form-item label="开关" >
      <ym-switch v-model="form.delivery" />
    </ym-form-item>
    <ym-form-item label="文本域" prop="desc">
      <ym-input v-model="form.desc" type="textarea" />
    </ym-form-item>
    <ym-form-item>
      <ym-button type="primary" @click="onSubmit">提交</ym-button>
      <ym-button @click="onReset">重置</ym-button>
    </ym-form-item>
  </ym-form>
</template>
