<template>
  <div class="container">
    <div class="my-4">
      <b-form-input v-model="bankroll" placeholder="Enter title" />
    </div>
    <div class="my-4">
      <b-btn
        v-for="n in 10"
        :key="`btn` + n"
        class="mx-3"
        :class="n === currentVal ? `btn-success` : ``"
        @click="currentVal = n"
      >
        {{ n }}
      </b-btn>
    </div>
    <table class="table">
      <tr v-for="(val, key) in values" :key="val">
        <th>{{ key }}</th>
        <td>{{ val }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentVal: 5,
      bankroll: 400,
    };
  },
  computed: {
    values() {
      let n1 = this.currentVal;
      let n2 = this.currentVal;
      let nextTerm;
      let genVal = {};

      nextTerm = n1 + n2;
      let i = 0;
      while (i <= 8) {
        // print the next term
        const handName = 'Hand -> ' + (i + 2);
        genVal[handName] = nextTerm;
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        i++;
      }
      return genVal;
    },
  },
};
</script>
