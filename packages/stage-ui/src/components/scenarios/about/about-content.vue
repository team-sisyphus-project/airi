<script setup lang="ts">
import type { AboutBuildInfo, AboutLink, AboutQuickStartStep } from './types'

import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  highlight?: string
  subtitle?: string
  /** Optional paragraph describing the project's purpose and scope shown beneath the title. */
  description?: string
  /** Optional ordered list of onboarding steps rendered above the links section. */
  quickStart?: AboutQuickStartStep[]
  buildInfo?: AboutBuildInfo
  links?: AboutLink[]
}>(), {
  title: 'Project',
  highlight: 'AIRI',
  subtitle: '',
  links: () => ([
    { label: 'Home', href: 'https://airi.moeru.ai/docs/', icon: 'i-solar:home-smile-outline' },
    { label: 'Documentations', href: 'https://airi.moeru.ai/docs/en/docs/overview/', icon: 'i-solar:document-add-outline' },
    { label: 'GitHub', href: 'https://github.com/moeru-ai/airi', icon: 'i-simple-icons:github' },
  ]),
})

const hasBuildInfo = computed(() => {
  const info = props.buildInfo
  if (!info)
    return false

  return Boolean(info.branch || info.commit || info.builtOn || info.version)
})
</script>

<template>
  <div :class="['max-w-[min(960px,calc(100%-2rem))]', 'mx-auto', 'h-full', 'flex', 'flex-col', 'pt-14']">
    <div class="mb-14 text-center font-sans-rounded">
      <div class="text-5xl">
        <span class="text-neutral-400 dark:text-neutral-100/65">{{ title }}</span>
        <span class="text-pink-400 dark:text-pink-300/90">&nbsp;{{ highlight }}</span>
      </div>
      <div v-if="subtitle" class="mt-2 text-base text-neutral-500 dark:text-neutral-400">
        {{ subtitle }}
      </div>
    </div>

    <p
      v-if="description"
      :class="[
        'mb-10',
        'text-center text-sm leading-relaxed',
        'text-neutral-600 dark:text-neutral-400',
        'max-w-prose mx-auto',
      ]"
    >
      {{ description }}
    </p>

    <slot name="before-build-info" />

    <div v-if="hasBuildInfo" :class="['flex-1']">
      <div :class="['text-neutral-500 dark:text-neutral-400']">
        Application build information
      </div>
      <div :class="['mt-4', 'grid grid-cols-[120px_1fr]', 'gap-2', 'text-sm']">
        <template v-if="buildInfo?.version">
          <div :class="['text-neutral-500 dark:text-neutral-400']">
            Version
          </div>
          <div :class="['font-mono']">
            {{ buildInfo.version }}
          </div>
        </template>
        <template v-if="buildInfo?.branch">
          <div :class="['text-neutral-500 dark:text-neutral-400']">
            Branch
          </div>
          <div :class="['font-mono']">
            {{ buildInfo.branch }}
          </div>
        </template>
        <template v-if="buildInfo?.commit">
          <div :class="['text-neutral-500 dark:text-neutral-400']">
            Commit
          </div>
          <div :class="['font-mono']">
            {{ buildInfo.commit }}
          </div>
        </template>
        <template v-if="buildInfo?.builtOn">
          <div :class="['text-neutral-500 dark:text-neutral-400']">
            Built on
          </div>
          <div :class="['font-mono']">
            {{ buildInfo.builtOn }}
          </div>
        </template>
      </div>
    </div>

    <slot name="after-build-info" />

    <div v-if="quickStart && quickStart.length > 0" :class="['mb-10']">
      <div :class="['text-neutral-500 dark:text-neutral-400']">
        Getting started
      </div>
      <ol :class="['mt-4 flex flex-col gap-3']">
        <li
          v-for="(step, index) in quickStart"
          :key="step.title"
          :class="[
            'flex items-start gap-3',
            'rounded-xl',
            'px-3 py-3',
            'lg:px-5 lg:py-4',
            'text-sm md:text-base',
            'bg-black/4 dark:bg-black/10',
          ]"
        >
          <!-- Step number badge -->
          <span
            :class="[
              'mt-0.5 shrink-0',
              'flex items-center justify-center',
              'h-6 w-6 rounded-full',
              'text-xs font-semibold',
              'bg-pink-100 text-pink-600',
              'dark:bg-pink-900/40 dark:text-pink-300',
            ]"
          >{{ index + 1 }}</span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <div v-if="step.icon" :class="[step.icon, 'shrink-0 text-neutral-500 dark:text-neutral-400']" />
              <span class="font-medium text-slate-700 dark:text-slate-100">{{ step.title }}</span>
            </div>
            <p class="mt-1 text-neutral-500 dark:text-neutral-400">
              {{ step.body }}
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div :class="['my-10']">
      <div :class="['text-neutral-500 dark:text-neutral-400']">
        About
      </div>
      <div :class="['mt-4 flex flex-col gap-2']">
        <a
          v-for="link in links"
          :key="link.href"
          :class="[
            'block',
            'flex items-center gap-2',
            'rounded-xl',
            'px-3 py-2',
            'lg:px-5 lg:py-3',
            'outline-none',
            'backdrop-blur-md',
            'active:scale-98',
            'focus:outline-none',
            'text-nowrap',
            'text-sm md:text-base',
            'text-slate-700 dark:text-slate-100',
            'bg-black/4',
            'transition-colors transition-transform duration-200 ease-in-out',
            'hover:bg-black/6',
            'dark:bg-black/10 dark:hover:bg-white/20',
          ]"
          :href="link.href"
          target="_blank"
        >
          <div :class="link.icon" />
          <div>{{ link.label }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
