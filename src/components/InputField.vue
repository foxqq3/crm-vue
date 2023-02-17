<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String
  }
}
</script>

<template>
  <div class="input">
    <label for="password" class="input__label">Password</label>
    <div class="input__input-container">
      <input type="password" id="password" class="input__entry-field" placeholder="Start typing…" required
        minlength="8" maxlength="20" />
      <div class="input__append-slot">
        <span class="app-icon">
          <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 2C13.75 2 12.5833 2.32292 11.5 2.96875C10.4375 3.59374 9.58332 4.44791 8.93749 5.53125C8.3125 6.59374 8 7.75001 8 9V12H5V28H25V12H22V9C22 7.75001 21.6771 6.59374 21.0313 5.53125C20.4063 4.44791 19.5521 3.59374 18.4687 2.96875C17.4063 2.32292 16.25 2 15 2ZM15 4C15.8958 4 16.7292 4.22917 17.5 4.6875C18.2708 5.125 18.875 5.72917 19.3125 6.5C19.7708 7.27083 20 8.10416 20 9V12H10V9C10 8.10416 10.2188 7.27083 10.6562 6.5C11.1146 5.72917 11.7292 5.125 12.5 4.6875C13.2708 4.22917 14.1042 4 15 4ZM7 14H23V26H7V14Z"
              fill="currentColor" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  gap: spacing(2);

  &__label {
    @include font-size-half('small');
    color: color('waterloo');
  }

  &__input-container {
    display: flex;
    border-bottom: 1px solid;
    border-color: color('athens-gray');
  }

  &__entry-field {
    @include font-size-half('small');
    width: 100%;
    padding: 0 spacing(1) spacing(5) 0;
    font-weight: f-weight('bold');
    border: none;

    &::placeholder {
      color: color('waterloo');
    }

    &:focus {
      outline: none;
      background-color: color('howkes-blue');
    }
  }

  &__prepend-slot {
    font-size: spacing(5);
    color: color('waterloo');
  }

  &__append-slot {
    font-size: spacing(5);
    color: color('waterloo');
  }

  // &__message{

  // }
}
</style>