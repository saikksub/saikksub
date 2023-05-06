<template>
  <section class="hidden lg:block">
    <div class="grid grid-cols-12 gap-0 h-[100vh]">
      <div class="col-span-12 lg:col-span-6 relative">
        <div
          class="z-40 absolute top-0 right-0 md:-right-[120px] bottom-0 left-0"
        >
          <div class="flex items-center h-full">
            <div>
              <h1
                class="text-left lg:text-5xl xl:text-7xl font-bold font-poppins text-indigo-900 leading-tight"
              >
                Inclusive Design &amp;<br />
                Full-stack Software Development
              </h1>

              <div class="w-full max-w-screen-sm space-y-4">
                <p class="mt-12 text-2xl mt-4 font-worksans leading-relaxed">
                  I'm a full-stack developer, freelancer, and managing director
                  of Xplorebits HQ from India.
                </p>
                <p class="mt-12 text-2xl mt-4 font-worksans leading-relaxed">
                  I work with companies and agencies around the globe, building
                  full-stack web applications and digital products using
                  JavaScript frameworks and technologies.
                </p>
                <p class="mt-12 text-2xl mt-4 font-worksans leading-relaxed">
                  <nuxt-link
                    class="underline"
                    to="https://upwork.com/fl/saikksub"
                    target="_blank"
                  >
                    Hire me
                  </nuxt-link>
                  at
                  <icon class="ml-1" name="logos:upwork" size="98" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block col-span-4 lg:col-span-6 bg-yellow-0">
        <div class="flex items-center justify-end h-full">
          <div
            class="relative w-[200px] h-[200px] lg:h-[400px] lg:w-[400px] xl:w-[512px] xl:h-[512px]"
          >
            <div class="z-5 absolute w-full h-full bg-gray-200 rotate-6" />
            <div
              class="z-10 absolute w-full h-full rotate-0 bg-no-repeat bg-cover bg-center shadow-2xl"
              style="
                background-image: url('https://res.cloudinary.com/do8ksgdgc/image/upload/v1681195700/IMG_2403-2_gmc4rf.jpg');
              "
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile section -->
  <section class="block lg:hidden space-y-6">
    <div
      class="block mx-auto w-64 h-64 rounded-full bg-no-repeat bg-cover bg-center border-2 border-black"
      style="
        background-image: url('https://res.cloudinary.com/do8ksgdgc/image/upload/v1681195700/IMG_2403-2_gmc4rf.jpg');
      "
    />
    <h1
      class="text-2xl md:text-5xl text-center font-bold font-poppins text-indigo-900 leading-tight"
    >
      Inclusive Design &amp;<br />
      Full-stack Software Development
    </h1>

    <p
      class="text-xl text-left md:text-center md:px-24 font-worksans leading-relaxed"
    >
      I'm a full-stack developer, freelancer, and managing director of
      Xplorebits HQ from India.
    </p>
    <p
      class="text-xl text-left md:text-center md:px-24 font-worksans leading-relaxed"
    >
      I work with companies and agencies around the globe, building full-stack
      web applications and digital products using JavaScript frameworks and
      technologies.
    </p>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "xplore",
});
</script>
