<script lang="ts" setup>
import { reactive, ref } from "vue";
import { YmMessage } from "guyan-ym-ui";
// import { YmForm, YmFormItem,YmInput,YmButton } from "../../components";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});

const options = ref([
  { value: "beijing", label: "Zone One" },
  { value: "shanghai", label: "Zone Two" },
]);

const onSubmit = () => {
formRef.value.validate((valid) => {
    if(valid) {
      YmMessage.success(String(valid));
    }
  })
  
};

const formRef = ref()
const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
});

</script>

<template>
  <ym-form :model="form" :rules="rules" ref="formRef">
    <ym-form-item label="Activity name" prop="name" required>
      <ym-input v-model="form.name" />
    </ym-form-item>
    <ym-form-item label="Activity form" prop="desc">
      <ym-input v-model="form.desc" type="textarea" />
    </ym-form-item>
    <ym-form-item>
      <ym-button type="primary" @click="onSubmit">Create</ym-button>
      <ym-button>Cancel</ym-button>
    </ym-form-item>
  </ym-form>
</template>
