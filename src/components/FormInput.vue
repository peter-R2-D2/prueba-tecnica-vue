<template>
  <div class="relative">
    <label class="block text-lg" :class="labelClass">
      {{ label }}
    </label>
    <input
      :id="props.name"
      v-model="value"
      :type="props.type"
      @blur="handleBlur"
      :class="inputClass"
      class="bg-gray-100 rounded-lg px-3 py-3 focus:outline-none w-full"
      @input="handleInput"
      @focus="showDropdown = true"
    />

    <ul
      v-if="showDropdown && filteredOptions.length > 0"
      class="absolute z-10 bg-white border border-gray-300 rounded mt-1 overflow-auto w-full max-h-[300px]"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        @click="selectOption(option)"
        class="p-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ option }}
      </li>
    </ul>

    <p v-if="errorMessage" class="block text-sm text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, computed, ref } from "vue";
import { useField } from "vee-validate";
import { toRef } from "vue";
import { StringSchema } from "yup";

interface Props {
  label: string;
  type?: "text" | "number";
  name: string;
  validator?: StringSchema<string> | undefined;
  initialValue?: string | null;
  validateOnChange?: boolean;
  options?: Array<string>;
  modelValue: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  validator: undefined,
  initialValue: null,
  validateOnChange: false,
});

const validateOnChange = toRef(props, "validateOnChange");

const { value, errorMessage, validate } = useField(
  props.name,
  props.validator,
  {
    initialValue: props.initialValue,
    validateOnValueUpdate: validateOnChange.value,
    syncVModel: true,
  }
);

const labelClass = ref("");
const inputClass = ref("");

async function handleBlur() {
  if (!validateOnChange.value) {
    const { valid } = await validate();
    if (valid) {
      labelClass.value = "text-green-700";
      inputClass.value = "border border-green-700";
    } else {
      labelClass.value = "text-red-500";
      inputClass.value = "border border-red-500";
    }
  }
}

const filteredOptions = computed(() => {
  if (!props.options || !props.modelValue) return props.options || [];
  return props.options.filter((option) =>
    option.toLowerCase().includes(props.modelValue.toString().toLowerCase())
  );
});

const showDropdown = ref<boolean>(false);

const handleInput = async () => {
  if (validateOnChange.value) {
    const { valid } = await validate();
    if (valid) {
      labelClass.value = "text-green-700";
      inputClass.value = "border border-green-700";
    } else {
      labelClass.value = "text-red-500";
      inputClass.value = "border border-red-500";
    }
  }
  showDropdown.value = true;
};

const emit = defineEmits(["update:modelValue"]);

const selectOption = (option: string) => {
  emit("update:modelValue", option);
  showDropdown.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  const dropdownElement = document.getElementById(props.name);
  if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
    showDropdown.value = false; // Oculta el desplegable
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
