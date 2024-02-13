<template>
    <div class="rating">
      <span v-for="n in 5" :key="n" class="stars">
        <template v-if="n <= value">
          <box-icon name='star' type='solid' color="#ff9e0c" class="star"></box-icon>
        </template>
        <template v-else-if="n - 0.5 === value">
          <box-icon name='star-half' type='solid' color="#ff9e0c" class="star"></box-icon>
        </template>
        <template v-else>
          <box-icon name='star' color="#ff9e0c" class="star"></box-icon>
        </template>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      }
    }
  };
  </script>
  