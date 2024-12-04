<script lang="ts" setup>
import { reactive, ref } from "vue";
import { YmMessage, type FormInstance } from "guyan-ym-ui";

const formRef = ref<FormInstance>();
const form = reactive({
  name: "",
  password: "",
  passwordConfirm: "",
});

const rules: any = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
  passwordConfirm: [
    {
      required: true,
      trigger: "blur",
      message: "请再次输入密码",
    },
    {
      validator: (_: typeof rules, value: string) => value === form.password,
      trigger: "blur",
      message: "两个密码必须相同",
    },
  ],
});

const onSubmit = async (instance?: FormInstance) => {
  const valid = await instance?.validate();
  if (!valid) return;
  YmMessage.success("submit!");
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <ym-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-position="top"
    @submit.prevent="onSubmit(formRef)"
  >
    <ym-form-item label="用户名" prop="name">
      <ym-input v-model="form.name" />
    </ym-form-item>
    <ym-form-item label="密码" prop="password">
      <ym-input v-model="form.password" type="password" />
    </ym-form-item>
    <ym-form-item label="确认密码" prop="passwordConfirm">
      <ym-input v-model="form.passwordConfirm" type="password" />
    </ym-form-item>
    <ym-form-item>
      <ym-button type="primary" native-type="submit">提交</ym-button>
      <ym-button @click="onReset">重置</ym-button>
    </ym-form-item>
  </ym-form>
</template>
