<template>
    <div>
        Result page
        <button @click="liff.closeWindow">Close</button>
    </div>
</template>

<script setup>
import liff from "@line/liff"
import { onMounted, onBeforeMount } from "vue";


onBeforeMount(async () => {

    liff.ready.then(async () => {
        if (liff.isInClient()) {
            //Do something
        }
    });
    await liff.init({
        liffId: '1657838953-QPY6AODk'
    })
})


</script>

<style lang="scss" scoped>

</style>