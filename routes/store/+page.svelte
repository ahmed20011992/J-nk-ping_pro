<!-- StorePage.svelte -->
<script>
    import { onMount } from 'svelte';
    
    // Declare a variable to hold the list of stores
    let stores = [];

  
    // Fetch the list of stores when the component mounts
    onMount(async () => {
      try {
        const response = await fetch('http://localhost:80/stores');
        const data = await response.json();
        stores = data; // Assign the fetched data to the stores variable
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    });

  </script>
  
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Jönköping Marknad</h1>
          <a href="/" class="btn btn-ghost btn-xs">
          <i class="fa fa-home"></i>
          Home
        </a>
      </div>
    </div>

  
  <div class="divider"></div> 


  <div class="w-full max-w-2xl mx-auto">

  {#if stores.length === 0}
    <p>Loading...</p>
  {:else}
  <table class="table">
    <thead>
      <tr>
        <th>Name
            
        </th>
        <th>District</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      <!-- Iterate over the stores array and display each store's name -->
      {#each stores as store}
      <tr class="hover">
        <td>{store.name}</td>
        <td>{store.district || 'N/A'}</td>
        <td>
          <a href="https://{store.url}" target="_blank">Visit Store</a>
        </td>
      </tr>
    {/each}
</tbody>
</table>
  {/if}

  </div>
