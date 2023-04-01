<template>
  <div class="m-auto mb-28">
    <h2 class="mb-4 text-2xl">Select your product</h2>

    <div class="w-1/4 m-auto border-2 rounded p-4">
      <div class="w-6 h-6 bg-blue-500 mb-4 m-auto rounded-full"></div>
      <Flicking ref="flicking" :options="{ moveType: 'freeScroll' }">
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍉 Watermelon</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🥝 Kiwi</p>
        <p class="bg-slate-200 rounded p-4 mr-2">🍎 Adivdivle</p>
      </Flicking>
      <div class="mt-5">
        <button class="bg-slate-100 px-4 py-2 rounded mr-7" @click="prev1">
          Prev
        </button>
        <button class="bg-slate-100 px-4 py-2 rounded mr-7" @click="next1">
          Next
        </button>
        <button class="bg-slate-100 px-4 py-2 rounded" @click="moveTolast">
          Move to last
        </button>
      </div>
    </div>

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
    next1() {
      this.$refs.flicking.next();

      let wew = this.$refs.flicking.visiblePanels;
      let wews = wew[wew.length - 1];

      if (wews._index == this.$refs.flicking.panelCount - 1) {
        alert("وين تريد تروح بعد");
      }
    },
    prev1() {
      this.$refs.flicking.prev();
    },
    moveTolast() {
      this.$refs.flicking.moveTo(this.$refs.flicking.panelCount - 1);
    },
  },
};
</script>
