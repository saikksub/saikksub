<template>
  <div class="w-full max-w-screen-xl mx-auto block transition-all ease-in-out">
    <div class="px-8 xl:px-0">
      <page-header />
    </div>

    <div class="px-8 xl:p-0">
      <div class="grid grid-cols-12 gap-x-12">
        <div class="hidden md:block col-span-3 md:col-span-0 pt-2">
          <div class="w-full bg-white rounded-md border">
            <div
              class="h-[98px] bg-no-repeat bg-center bg-cover rounded-tl-md rounded-tr-md"
              style="
                background-image: url(https://pbs.twimg.com/profile_banners/2536484682/1554901301/1500x500);
              "
            />
            <div class="space-y-2 -mt-14 p-4">
              <img
                class="block mx-auto w-20 h-20 rounded-full border border-black"
                src="https://pbs.twimg.com/profile_images/1538719492284370944/gsum4zrg_400x400.jpg"
              />

              <p class="font-poppins text-sm text-center font-medium">
                Kiran Sai Subramanyam K
              </p>

              <p class="text-xs text-center space-y-1">
                Top Rated Plus Freelancer<br />
                Full-stack Developer<br />
                JavaScript Ninja<br />
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-9 pt-2">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
