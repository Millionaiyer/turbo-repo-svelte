<script lang="ts">
  let count = $state(0);

  function handleClick() {
    count += 1;
  }
</script>

<button class='bg-red-500 p-4 w-[150px]' onclick={handleClick}>
  clicks: {count}
</button>
