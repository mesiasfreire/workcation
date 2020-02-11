<template>
  <div id="app" class="bg-gray-200 antialiased">
    <header class="bg-gray-300 flex justify-between p-2 items-center">
      <a href="#">
        <img src="./assets/cdn/bare_code_colorida.svg" alt="alguma coisa" class="h-10 mx-auto" />
      </a>
      <button class="h-6 w-6">
        <font-awesome-icon icon="align-justify" />
      </button>
    </header>

    <section class="bg-gray-800 pl-3 flex justify-between items-center">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <font-awesome-icon icon="search" class="text-gray-500 font-thin md:ml-5" />
        </div>
        <input
          type="text"
          placeholder="Procure Aqui!"
          class="p-2 px-4 sm:px-3 md:px-32 lg:px-64 rounded-lg mt-3 mb-3 bg-gray-900 -ml-1 focus:outline-none focus:bg-white focus:text-gray-900 pl-8 text-gray-500"
        />
      </div>
      <button
        class="text-white py-2 px-3 md:px-20 bg-gray-700 rounded-lg mr-3 text-sm font-light hover:bg-gray-600 focus:outline-none focus:shadow-outline"
      >
        <font-awesome-icon icon="filter" class="mr-2" />Filtros
      </button>
    </section>

    <main class="px-4 py-4">
      <h2 class="text-gray-900 text-xl">Parintins</h2>
      <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nisi.</p>

      <div>
        <div>
          <div>
            <img
              class="rounded-lg shadow-md h-64 mx-auto"
              src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80"
              alt
            />
          </div>
          <div class="relative px-4 -mt-16">
            <div class="bg-white rounded-lg shadow-lg px-4 py-3">
              <div class="flex items-center">
                <span
                  class="bg-teal-200 text-teal-800 font-medium uppercase tracking-wide text-xs px-2 py-1 rounded-full"
                >Plus</span>
                <div
                  class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide"
                >3 Camas; 2 Banheiros</div>
              </div>

              <h4
                class="mt-2 text-center text-gray-900 font-semibold tracking-wider text-lg"
              >Lorem ipsum dolor sit.</h4>
              <span class="text-gray-900">R$1200,00</span>
              <span class="text-gray-600">/3 dias</span>
              <div class="flex items-center">
                <span class="text-teal-400">
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star" />
                  <font-awesome-icon icon="star-half" />
                </span>
                <p class="text-gray-600 text-sm">34 Avaliações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
