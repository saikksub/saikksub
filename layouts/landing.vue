<template>
  <div class="bg-white dark:bg-black h-screen overflow-y-auto">
    <div class="dark:text-gray-200 mx-auto block w-full max-w-screen-lg px-3 md:px-0">
      <appbar class="sticky top-0" />
      <div class="grid grid-cols-12 gap-6 py-2">
        <div class="col-span-3">
          <div class="sticky top-[52px]">
            <div class="border border-gray-300 dark:border-gray-800 rounded-md p-4">
              <div class="flex justify-center">
                <img
                  class="inline-block h-24 w-24 rounded-full"
                  src="https://avatars.githubusercontent.com/u/35134207?v=4"
                  alt="Kiran Sai Subramanyam K"
                />
              </div>

              <p class="text-center font-meidum text-base mt-3 text-black dark:text-white">
                Kiran Sai Subramanyam K
              </p>
              <p class="text-center font-meidum text-base mt-3 text-gray-600 dark:text-gray-400">
                Vue, React, JavaScript
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-9">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
