<template>
  <div class="w-1/3 m-auto mb-28">
    <Flicking ref="flicking" :options="{ circular: true }">
      <div>
        <span class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</span>
        <span class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</span>
        <span class="bg-slate-200 rounded p-4 mr-2">🍎 Apple</span>
        <span class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</span>
        <span class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</span>
      </div>
      <div><span class="bg-slate-200 rounded p-4 mr-2">🍎 Apple</span></div>
      <div><span class="bg-slate-200 rounded p-4 mr-2">🍎 Apple</span></div>
      <div><span class="bg-slate-200 rounded p-4 mr-2">🍎 Apple</span></div>
    </Flicking>

    <div class="mt-10">
      <Flicking
        ref="flicking2"
        class="flex flex-row w-1/2 m-auto h-32 rounded"
        :options="{ circular: true }"
      >
        <div class="bg-orange-100 w-full">Card 1</div>
        <div class="bg-orange-200 w-full">Card 2</div>
        <div class="bg-orange-300 w-full">Card 3</div>
        <div class="bg-orange-400 w-full">Card 4</div>
        <div class="bg-orange-500 w-full">Card 5</div>
      </Flicking>
      <div class="mt-5">
        <button class="bg-slate-100 px-4 py-2 rounded mr-7" @click="prev">
          Prev
        </button>
        <button class="bg-slate-100 px-4 py-2 rounded" @click="next">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },

  methods: {
    next() {
      this.$refs.flicking2.next();
    },
    prev() {
      this.$refs.flicking2.prev();
    },
  },
};
</script>
