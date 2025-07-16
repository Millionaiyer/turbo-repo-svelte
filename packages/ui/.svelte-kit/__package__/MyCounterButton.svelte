<script lang="ts">
  let count = $state(0);

  function handleClick() {
    count += 1;
  }
</script>
<div class="flex flex-col gap-3">

  <button class='bg-yellow-500 ' onclick={handleClick}>
    clicks: {count}
  </button>
  <p class="bg-red-500 ">hello world</p>
</div>
