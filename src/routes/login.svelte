<script>
import { signIn } from "$lib/store/auth.store";
import { _ } from 'svelte-i18n';

let email = '';
let password = '';

const submitForm = (e) => {
    e.preventDefault();
    const request = {
        email, password
    }

   signIn(request);
}

</script>

<svelte:head>
	<title>Login</title>
</svelte:head>



<div class="main">
    <div class="container">
      <div class="sign-form-wrap">
        <h1>{$_('SignIn')} </h1>

        <form
          class="sign-form mt-6">
          <div class="my-5 text-sm">
              <label for="email" class="block text-black">Email</label>
              <input type="email" 
                bind:value={email}
                autofocus 
                id="email" 
                name="email"
                class="" 
                placeholder="Email" />
          </div>

          <div class="my-5 text-sm">
            <label for="password" class="block text-black">Password</label>
            <input type="password" 
              bind:value={password}
              id="password"
              name="password"
              class="" 
              placeholder="Password" />
        </div>

          <button
            on:click={(e) => submitForm(e)}
            type="submit"
            class=""
            color="primary">
            {$_('SignIn')}
          </button>
        </form>
        <!-- <a href="" class="signup-link">
         {$_('SignUp')}
        </a> -->
        <!-- <div *ngIf="(sendRequestSub$ | async)">
         <span class="sign-success" *ngIf="(user$ | async)">
         {$_('SIGNIN_SUCCESS')}
         </span>
       </div> -->
      </div>
    </div>
  </div>

<style>
    .title {
        text-align: center;
    }
  .sign-form-wrap {
    margin: 15px auto;
    max-width: 500px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: #fff;
    padding: 15px;
    position: relative;
  }

  .sign-success {
    color: var(--success-color);
  }

  .sign-form {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .sign-field {
    width: 100%;
  }

  .signup-link {
    color: #222;
  }
</style>