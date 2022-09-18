<template>
  <button :class="className">{{ title }}</button>
</template>

<script>
export default {
  props: ["title", "className"],
};
</script>

<style lang="scss">
button {
  width: 100%;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  padding: 7px 15px;
  text-align: center;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  border-radius: 4px;
  height: 42px;
  border: 0px;
  min-width: 72px;
  min-width: fit-content;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}
.cancel {
  border: 0px;
  color: black;
  background: #efeff0;
}
.create {
  background-color: #999a9b;
  color: #fff;
}
.pry {
  background: #555658;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
}
.disabled {
  border: 0px;
  color: #fff;
  background: #b7bcc3;
  &:hover {
    cursor: not-allowed;
  }
}
.sec {
  background-color: transparent;
  border: 1px solid #b7bcc3;
}
</style>
