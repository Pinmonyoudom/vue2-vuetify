<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3>#P07</h3>
          <v-spacer></v-spacer>
          <v-btn text>Reopen purchase order</v-btn>
          <v-btn text>Duplicate</v-btn>
          <v-btn text>More actions</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title>Supplier</v-card-title>
            <v-card-text>
              TEST<br />
              Test Café & Tea, Phnom Penh
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title>Destination</v-card-title>
            <v-card-text>
              CKPlus<br />
              OCIC, Phnom Penh
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Payment terms</v-card-title>
            <div class="custom-progress">
              <div class="progress-green"></div>
              <div class="progress-striped"></div>
            </div>
            <div class="d-flex align-center justify-space-between">
              <div class="ml-md-auto">Total received: 40 of 40</div>
              <v-btn small icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
            <v-card-text>
              <v-row>
                <v-col cols="3">Net 30</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="my-3">
        <v-col cols="12"> </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Shipment details</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <strong>Estimated arrival:</strong><br />
                  Sep 30, 2023
                </v-col>
                <v-col cols="4">
                  <strong>Shipping carrier:</strong><br />
                  Amazon Logistics UK
                </v-col>
                <v-col cols="4">
                  <strong>Tracking number:</strong><br />
                  12321323
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Ordered products</v-card-title>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Supplier SKU</th>
                      <th>Received</th>
                      <th>Cost</th>
                      <th>Tax</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>KONIMAG 7ml 1x30sach</td>
                      <td></td>

                      <td>15 of 10</td>
                      <td>$2.00</td>
                      <td>10%</td>
                      <td>$22.00</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PurchaseOrder",
  data() {
    return {
      
    };
  },
};
</script>

<style>
.custom-progress {
  height: 15px;
  background-color: lightgray;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  .progress-green {
    width: 70%;
    height: 100%;
    background-color: green;
    position: absolute;
    top: 0;
    left: 0;
  }

  .progress-striped {
    width: 30%;
    height: 100%;
    background: repeating-linear-gradient(
      -45deg,
      white,
      white 10px,
      red 10px,
      red 20px
    );
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
