
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const form = ref({
    name: "",
    telno: "",
    slip: "",

})


const onSubmit = function (e) {
    e.preventDefault()
    console.log(form.value)
    router.push("/result")
}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};


const handleInputChange = async (e) => {

    const inputType = e.target.type
    form.value = {
        ...form.value,
        [e.target.name]: inputType === "file" ? await convertBase64(e.target.files[0]) : e.target.value
    }
}




</script>

<template>
    <form class="p-2" v-on:submit="onSubmit" enctype="multipart/form-data">
        <h1 class="text-xl font-semibold text-center">ระบบแจ้งชำระเงินผ่านสลิป</h1>
        <!-- ผู้ชำระเงิน -->
        <fieldset>
            <label for="name" class="label"> ชื่อผู้ชำระเงิน </label>
            <input type="text" id="name" class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
        " placeholder="ตัวอย่าง. นายสมหมาย ตามหา" required :value="form.name" name="name"
                @change="handleInputChange" />
        </fieldset>
        <!-- เบอร์โทรศัพท์ -->
        <fieldset>
            <label for="telno" class="label"> เบอร์โทรศัพท์ </label>
            <input type="tel" id="telno" class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
        " placeholder="ตัวอย่าง. นายสมหมาย ตามหา" required :value="form.telno" name="telno"
                @change="handleInputChange" />
        </fieldset>
        <!-- สลิปโอนเงิน -->
        <fieldset>
            <label for="slip" class="label"> สลิปโอนเงิน </label>
            <input type="file" id="slip" class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
        " placeholder="ตัวอย่าง. นายสมหมาย ตามหา" required name="slip" @change="handleInputChange" />
            <div id="preview" class="flex w-100 justify-center">
                <img class=" max-w-[150px] flex justify-center border border-solid=[2px]" :src="form.slip" />
            </div>
        </fieldset>
        <!-- Actions -->
        <div class="flex justify-center">
            <button type="submit" class="
          border
          px-4
          py-1
          bg-green-500
          rounded-lg
          text-white
          hover:bg-green-700
          transition
        ">
                บันทึก
            </button>
        </div>
    </form>
</template>

<style scoped>
form * {
    margin-top: 0.3rem;
}
</style>
