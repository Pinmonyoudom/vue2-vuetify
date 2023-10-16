<!-- <template>
  <div class="align-center d-flex justify-center">
    <div v-if="showContent" ref="printableArea">
      <h1>Hello World</h1>
      <p>This is a sample content.</p>
    </div>
    <v-btn @click="generatePdf">Generate PDF</v-btn>
  </div>
</template> -->
<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="12" class="text-center">
        <div v-if="showContent" ref="printableArea">
          <h1 class="header">CK PLUS</h1>
          <h2 class="sub-header">SUPPLIER</h2>
          <div class="section">
            <h3>TEST</h3>
            <p>Test Café & Tea</p>
            <p>Phnom Penh 12051</p>
            <p>Cambodia</p>
          </div>
          <!-- ... other sections here ... -->
        </div>
        <v-btn @click="generatePdf">Generate PDF</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    async generatePdf() {
      this.showContent = true;
      await this.$nextTick();
      let content = this.$refs.printableArea;
      let opt = {
        margin: 10,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf().from(content).set(opt).save();
      this.showContent = false;
    },
  },
};
</script>
<style scoped>
.header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.sub-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.section {
  margin-bottom: 20px;
}

/* You can expand upon these styles to match the exact design in the image. */
</style>