<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import liff from '@line/liff';

const router = useRouter();

onMounted(() => {
  router.push('/slip');
});

onBeforeMount(async () => {
  await liff.init({
    liffId: '1657838953-QPY6AODk',
  });
});
</script>
