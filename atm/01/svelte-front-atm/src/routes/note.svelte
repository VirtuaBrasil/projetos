<script>

    export let quantity
    export let notetype

    let  noteImg = {
        "10_reais": 10,
        "20_reais": 20,
        "50_reais": 50,
        "100_reais": 100,
    }

</script>

{#each Object.entries(noteImg) as [key, value]}
    <div class="card">
        {#if notetype == value && quantity !== 0}
            <div class="money-qtd">
               x {quantity}
            </div>
            <img class="note-img" src="../../src/assets/{key}.png" alt="" />
        {/if}

    </div>
{/each}