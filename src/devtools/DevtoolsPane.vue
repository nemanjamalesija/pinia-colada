<script setup lang="ts">
import { onMounted, ref } from 'vue'

const queryCacheData = ref([])

const channel = new BroadcastChannel('my_channel')

onMounted(() => {
  const id = 'pinia-colada-devtools'
  window.top?.postMessage({ id, type: 'FROM_DEVTOOLS', payload: 'Hello from devtools' })

  channel.onmessage = (event) => {
    if (event.data.type === 'queryCache') {
      queryCacheData.value = event.data.data
      console.log('queryCacheData:', queryCacheData.value)
      console.log('window.location.pathname in devtools panel', window.location.pathname)
    }
  }
})
</script>

<template>
  <!-- // tailwind not working bg red not applied ? -->
  <div class="Devtools h-full w-full flex flex-col items-center justify-center bg-red-500">
    <h1>Hello dev tools</h1>
    <main class="Devtools-main">
      <ul class="Devtools-queryList">
        <li v-for="(queryData, index) in queryCacheData" :key="index" class="Devtools-queryListItem">
          <button class="Devtools-queryKey">
            <span class="Devtools-queryCounter">{{ index + 1 }}</span>
            <span class="Devtools-queryKeyText">{{ queryData.key }}</span>
          </button>
        </li>
      </ul>
      <aside class="Devtools-queryDetailedView">
        <h2>Detailed data</h2>
      </aside>
    </main>
  </div>
</template>

<style scoped>
.btn {
  background-color: #4c51bf;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}
.Devtools-queryListItem {
  border: 1px solid #d1d5dc;
  border-right: none;
  background-color: #f1f1fa;
  display:flex;
}
.Devtools-queryCounter {
  background-color: #FEDF89cc;
  color: #93370D;
  padding: 5px 10px;

}
.Devtools-queryKey {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
}
.Devtools-queryKeyText {
  color : #4a5565;
}
.Devtools-main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.Devtools-queryDetailedView {
  border-left: 1px solid #d1d5dc;
}
</style>
