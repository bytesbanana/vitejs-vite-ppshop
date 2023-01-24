<script setup></script>

<template>
  <form class="p-2">
    <h1 class="text-xl font-semibold text-center">ระบบแจ้งชำระเงินผ่านสลิป</h1>
    <!-- ผู้ชำระเงิน -->
    <fieldset>
      <label for="name" class="label"> ชื่อผู้ชำระเงิน </label>
      <input
        type="text"
        id="name"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
        "
        placeholder="ตัวอย่าง. นายสมหมาย ตามหา"
        required
      />
    </fieldset>
    <!-- เบอร์โทรศัพท์ -->
    <fieldset>
      <label for="telno" class="label"> เบอร์โทรศัพท์ </label>
      <input
        type="tel"
        id="telno"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
        "
        placeholder="ตัวอย่าง. นายสมหมาย ตามหา"
        required
      />
    </fieldset>
    <!-- สลิปโอนเงิน -->
    <fieldset>
      <label for="slipImg" class="label"> สลิปโอนเงิน </label>
      <input
        type="file"
        id="slipImg"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
        "
        placeholder="ตัวอย่าง. นายสมหมาย ตามหา"
        required
      />
    </fieldset>
    <!-- Actions -->
    <div class="flex justify-center">
      <button
        type="submit"
        class="
          border
          px-4
          py-1
          bg-green-500
          rounded-lg
          text-white
          hover:bg-green-700
          transition
        "
      >
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
