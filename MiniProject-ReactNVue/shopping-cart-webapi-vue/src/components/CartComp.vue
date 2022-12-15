<template>
  <div>
    <div className="container mt-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div
          v-for="product in products"
          :key="product.id"
          class="card"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            :src="`../../assets/images/${product.image}`"
            alt="Card image cap"
            style="height: 16rem;"
          />
          <div class="card-body">
            <p class="card-text">{{ product.id }}</p>
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.actualPrice }}</p>
            <p class="card-text">{{ product.discountedPrice }}</p>
            <!-- <button class="btn btn-info">Ship Product</button> -->
            <button
              class="btn btn-danger"
              @click="deleteSelectedProd(product.id)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import HTTP from "../axiosConfig";

export default {
  components: {},
  data() {
    return {
      products: [],
    };
  },

  methods: {
    //Get products list
    async fetchProducts() {
      try {
        let response = await HTTP.get("/ProductListCart");
        if (response.data.error) {
          let errMsg = response.data.message;
          console.log("errMsg", errMsg);
        } else {
          let resProducts = response.data.listproducts;
          this.products = resProducts;
          console.log("response.data.listproducts", response.data.listproducts);
          console.log("products", this.products);
        }
      } catch (err) {
        console.log("err", err);
      }
    },

    // delete the product
    async deleteSelectedProd(ID) {
      try {
        let response = await HTTP.delete(`/DeleteProduct/${ID}`);
        if (response.data.error) {
          let errMsg = response.data.message;
          console.log("errMsg", errMsg);
        } else {
          let resProducts = response.data.listproducts;
          this.products = resProducts;
          console.log("ID", ID);
          //   console.log("this.products",this.products);
          //   console.log("products", response.data.products);
          this.fetchProducts();
        }
      } catch (err) {
        console.log("err", err);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style></style>
