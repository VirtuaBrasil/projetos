<script>

export let atmData
let  noteImg = {
        "10": "10_reais",
        "20": "20_reais",
        "50": "50_reais",
        "100": "100_reais",
    }

</script>

<div class="money-counter">
    {#each Object.entries(noteImg) as [key, value]}
        {#each Object.entries(atmData) as [note, quantity]}
            {#if note == key}
                <div class="counter-card">      
           
                    <div class="money-qtd">  Qtd: {quantity}  </div>
                    <img class="cash-img" src="../../src/assets/{value}.png" alt="" />
            
                </div>
            {/if}
        {/each}
    {/each}
    </div>