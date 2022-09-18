<template>
  <div class="register">
    <div class="register-card">
      <div class="heading">
        <h2 class="text-3xl font-bold">Log in</h2>
        <p>
          If you have no account,
          <router-link to="/">Sign Up</router-link>
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-item">
          <label for="email"> Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Type here"
          />
          <p
            class="email-prompt"
            v-if="!regexEmail.test(email) && email.length > 1"
          >
            Wrong email format !
          </p>
        </div>
        <div class="form-item">
          <label for="password"> Password</label>
          <div class="input-wrapper">
            <input
              :type="returnType()"
              v-model="password"
              placeholder="Type here"
            />
            <p @click="handleTogglePassword">&nbsp;</p>
          </div>
        </div>
        <div
          class="button-wrapper"
          v-if="regexEmail.test(email) && password.length > 8"
        >
          <ButtonComponent title="Log in" className="pry" />
        </div>
      </form>
      <div
        class="button-wrapper"
        v-if="!regexEmail.test(email) || password.length < 8"
      >
        <ButtonComponent title="Log In" className="disabled" />
      </div>
    </div>
  </div>
</template>

<script>
// import store from "@/store";
import ButtonComponent from "../components/ButtonComponent.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      togglePassword: true,
      regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    };
  },
  methods: {
    // handleSubmit() {
    //   const user = {
    //     email: this.email,
    //     password: this.password,
    //   };
    //   store.dispatch("handleLogin", user);
    // },
    handleSubmit(){
        console.log("first")
    },
    handleTogglePassword() {
      this.togglePassword = !this.togglePassword;
    },
    returnType() {
      if (this.togglePassword) {
        return "password";
      } else {
        return "text";
      }
    },
  },
  components: {
    ButtonComponent,
  },
};
</script>
<style lang="scss" scoped>
.register {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .register-card {
    padding: 1.5% 2%;
    background: #fff;
    width: 46%;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    border-radius: 8px;
    align-items: center;
    border: 1px solid #f0f0f0;
    .heading {
      width: 100%;
      text-align: center;
      padding: 2.5px 0;
      box-sizing: border-box;
      h2 {
        color: #000;
      }
      p {
        color: #777;
        padding: 5px 0;
        font-size: 16px;
      }

      a {
        color: #004cbd;
        text-decoration: none;
      }
    }
    form {
      width: 100%;
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }
      .form-item {
        padding: 5px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        label {
          padding: 2.5px 0;
          text-align: left;
          color: #1a1a1a;
          font-weight: bold;
          font-size: 14px;
        }
        input {
          border: 1px solid #efeff0;
          border-radius: 4px;
          padding: 7.5px 12px;
          width: 100%;
          background-color: #fff;
          color: black;
          height: 36px;
          font-size: 14px;

          &:focus {
            outline: none;
            border: 1.5px solid #e1e1e1;
          }
        }
        .input-wrapper {
          border: 1px solid #efeff0;
          background-color: #fff;
          border-radius: 4px;
          width: 100%;
          display: flex;
          align-items: center;
          input {
            width: 97%;
            border: 0;
            display: flex;
          }
          p {
            background: url("../assets/img/Inside.svg") no-repeat center center;
            width: 4%;
            padding: 0 1px;
            height: 100%;
            color: transparent;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .email-prompt {
          color: #f41e10;
          font-size: 12px;
          padding: 5px 0;
        }
        ul {
          list-style-position: inside;
          text-align: left;
          list-style-type: circle;
          color: #999b9f;
          padding: 7.5px 0;
          font-size: 12px;
          li {
            padding: 1px 0;
          }
          .active {
            color: #07982f;
            list-style: disc;
            list-style-position: inside;
            text-align: left;
          }
        }
      }
      .button-wrapper {
        padding: 10px 0;
        width: 100%;
      }
    }
    .button-wrapper {
      padding: 10px 0;
      width: 100%;
    }
  }
}

</style>
