import React from "react";
import { render } from "react-dom";

export function Component() {
  return (
   <div class="flex flex-col items-start px-2 md:px-8 xl:px-0">
      <svg
        width="236"
        height="68"
        viewBox="0 0 236 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden md:block"
      >
        <path
          d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
          stroke="url(#paint0_linear)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear"
            gradientUnits="userSpaceOnUse"
            x1="-43.379999999999654"
            y1="0"
            x2="-25.425499999999545"
            y2="7.4500000000000455"
          >
            <stop stop-color="#2EB9DF" stop-opacity="0"></stop>
            <stop stop-color="#2EB9DF"></stop>
            <stop offset="1" stop-color="#9E00FF" stop-opacity="0"></stop>
          </linearGradient>
        </defs></svg
      ><button
        class="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6 text-neutral-700 dark:text-neutral-200 inline-block w-fit mb-4"
      >
        <span class="absolute inset-0 overflow-hidden rounded-full"
          ><span
            class="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></span
        ></span>
        <div
          class="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1 px-4 ring-1 ring-white/10"
        >
          <span>Introducing Portfolio Template</span
          ><svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        </div>
        <span
          class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"
        ></span>
      </button>
      <h1
        class="relative mb-6 max-w-4xl text-left text-4xl font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
      >
        <span
          data-br="«r3»"
          data-brr="1"
          style="
            display: inline-block;
            vertical-align: top;
            text-decoration: inherit;
            text-wrap: balance;
          "
          ><div class="inline-block">
            Make your websites look <br />10x
            <span
              class="relative inline-block bg-neutral-100 px-1 text-black lg:hidden dark:bg-neutral-800 dark:text-white"
              style="opacity: 0"
              ><div
                class="pointer-events-none absolute -top-[2px] -right-[2px] size-1 rounded-full bg-neutral-400 opacity-20 md:size-2 dark:bg-neutral-700"
                style="opacity: 0"
              ></div>
              <div
                class="pointer-events-none absolute -top-[2px] -left-[2px] size-1 rounded-full bg-neutral-400 opacity-20 md:size-2 dark:bg-neutral-700"
                style="opacity: 0"
              ></div>
              <div
                class="pointer-events-none absolute -right-[2px] -bottom-[2px] size-1 rounded-full bg-neutral-400 opacity-20 md:size-2 dark:bg-neutral-700"
                style="opacity: 0"
              ></div>
              <div
                class="pointer-events-none absolute -bottom-[2px] -left-[2px] size-1 rounded-full bg-neutral-400 opacity-20 md:size-2 dark:bg-neutral-700"
                style="opacity: 0"
              ></div>
              beautiful</span
            >
            <div
              class="relative hidden rounded-lg py-2 text-center text-4xl font-bold text-black md:text-7xl lg:inline-block dark:text-white [background:linear-gradient(to_bottom,var(--color-gray-100),var(--color-gray-200))] shadow-[inset_0_-1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-gray-300),_0_4px_8px_var(--color-gray-300)] dark:[background:linear-gradient(to_bottom,var(--color-neutral-700),var(--color-neutral-800))] dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]"
              style="opacity: 1; width: 30px"
            >
              <div class="inline-block" style="opacity: 1">
                <div class="inline-block">
                  <span style="opacity: 1; filter: blur(0px)">m</span
                  ><span style="opacity: 1; filter: blur(0px)">o</span
                  ><span style="opacity: 1; filter: blur(0px)">d</span
                  ><span style="opacity: 1; filter: blur(0px)">e</span
                  ><span style="opacity: 1; filter: blur(0px)">r</span
                  ><span style="opacity: 1; filter: blur(0px)">n</span>
                </div>
              </div>
            </div>
          </div></span
        >
        <script>
          self.__wrap_n =
            self.__wrap_n ||
            (self.CSS && CSS.supports("text-wrap", "balance") ? 1 : 2);
          self.__wrap_b = (e, t, r) => {
            let n =
              null ==
              (r = r || document.querySelector('[data-br="'.concat(e, '"]')))
                ? void 0
                : r.parentElement;
            if (!n) return;
            let a = (e) => (r.style.maxWidth = e + "px");
            r.style.maxWidth = "";
            let o = n.clientWidth,
              s = n.clientHeight,
              i = o / 2 - 0.25,
              l = o + 0.5,
              u;
            if (o) {
              for (a(i), i = Math.max(r.scrollWidth, i); i + 1 < l; )
                a((u = Math.round((i + l) / 2))),
                  n.clientHeight === s ? (l = u) : (i = u);
              a(l * t + o * (1 - t));
            }
            r.__wrap_o ||
              ("undefined" != typeof ResizeObserver &&
                (r.__wrap_o = new ResizeObserver(() => {
                  self.__wrap_b(0, +r.dataset.brr, r);
                })).observe(n));
          };
          self.__wrap_n != 1 && self.__wrap_b("«r3»", 1);
        </script>
      </h1>
      <h2
        class="relative mb-8 max-w-2xl text-left text-sm tracking-wide text-zinc-500 antialiased sm:text-xl dark:text-zinc-300"
      >
        Copy paste the most trending components and use them in your websites
        without having to worry about styling and animations.
      </h2>
      <div
        class="relative mb-4 flex w-full flex-col justify-center space-y-2 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4"
      >
        <a
          class="bg-slate-900 dark:bg-white dark:text-black no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sm sm:w-52"
          href="/components"
          >Browse Components</a
        ><a
          class="flex h-14 w-full items-center justify-center rounded-2xl border border-transparent bg-white text-sm text-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:shadow-lg sm:w-52 dark:border-neutral-600 dark:bg-black dark:text-white"
          href="/pricing"
          >Custom Components</a
        >
      </div>
      <div class="relative mt-10">
        <div
          class="absolute right-0 z-40 block h-full w-20 bg-white [mask-image:linear-gradient(to_left,white,transparent)] sm:hidden dark:bg-black"
        ></div>
        <div
          class="no-visible-scrollbar relative z-20 mb-4 flex items-center justify-start overflow-x-auto"
          style="scrollbar-width: none"
        >
          <div class="mr-4 flex items-center gap-2">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
              >
                <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                <path d="M15 12v-3"></path></svg></span
            ><span class="shrink-0 text-sm font-semibold text-neutral-500"
              >Next.js</span
            >
          </div>
          <div class="mr-4 flex items-center gap-2">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
              >
                <path
                  d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"
                ></path>
                <path
                  d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"
                ></path>
                <path
                  d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"
                ></path>
                <path
                  d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"
                ></path>
                <path
                  d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"
                ></path>
                <path
                  d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"
                ></path>
                <path
                  d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"
                ></path></svg></span
            ><span class="shrink-0 text-sm font-semibold text-neutral-500"
              >React</span
            >
          </div>
          <div class="mr-4 flex items-center gap-2">
            <span
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="h-4 w-4 shrink-0 stroke-[0.5px] text-neutral-500 md:h-10 md:w-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
                ></path></svg></span
            ><span class="shrink-0 text-sm font-semibold text-neutral-500"
              >TailwindCSS</span
            >
          </div>
          <div class="mr-4 flex items-center gap-2">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
              >
                <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                <path d="M20 12l-8 8l-4 -4"></path></svg></span
            ><span class="shrink-0 text-sm font-semibold text-neutral-500"
              >Framer Motion</span
            >
          </div>
          <div class="mr-4 flex items-center gap-2">
            <span
              ><svg
                height="24"
                viewBox="0 0 659 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-14 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-14"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                  fill="url(#paint0_linear)"
                ></path>
                <path
                  d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                  fill="url(#paint1_linear)"
                ></path>
                <path
                  d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                  fill="url(#paint2_linear)"
                ></path>
                <path
                  d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                  fill="url(#paint3_linear)"
                ></path>
                <path
                  d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                  fill="currentColor"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="591.052"
                    y1="47.1035"
                    x2="591.052"
                    y2="161.28"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="currentColor"></stop>
                    <stop
                      offset="1"
                      stop-color="currentColor"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="203.19"
                    y1="44.0317"
                    x2="203.19"
                    y2="164.352"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="currentColor"></stop>
                    <stop
                      offset="1"
                      stop-color="currentColor"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="368.744"
                    y1="44.0317"
                    x2="368.744"
                    y2="161.28"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="currentColor"></stop>
                    <stop
                      offset="1"
                      stop-color="currentColor"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="499.172"
                    y1="0"
                    x2="499.172"
                    y2="161.28"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="currentColor"></stop>
                    <stop
                      offset="1"
                      stop-color="currentColor"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs></svg
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

render(<Component />, document.getElementById("root"));
