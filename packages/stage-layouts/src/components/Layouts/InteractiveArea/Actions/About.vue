<script setup lang="ts">
import type { AboutQuickStartStep } from '@proj-airi/stage-ui/components'

import { isStageCapacitor, isStageTamagotchi } from '@proj-airi/stage-shared'
import { AboutContent, AboutDialog } from '@proj-airi/stage-ui/components'
import { useBuildInfo } from '@proj-airi/stage-ui/composables'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const show = ref(false)
const buildInfo = useBuildInfo()

const aboutLinks = [
  { label: 'Home', href: 'https://airi.moeru.ai/docs/', icon: 'i-solar:home-smile-outline' },
  { label: 'Documentations', href: 'https://airi.moeru.ai/docs/en/docs/overview/', icon: 'i-solar:document-add-outline' },
  { label: 'GitHub', href: 'https://github.com/moeru-ai/airi', icon: 'i-simple-icons:github' },
]

/** One-sentence summary of the project shown beneath the title in the About dialog. */
const aboutDescription = 'AIRI is an open-source AI companion that gives you a customizable avatar, live conversation, and real-time voice — all running from your own device.'

/**
 * Four onboarding steps shown in order under "Getting started".
 * Titles are kept short so they scan quickly; body sentences give just enough
 * detail for a first-time user to take the next action confidently.
 */
const aboutQuickStart: AboutQuickStartStep[] = [
  {
    icon: 'i-solar:plug-circle-outline',
    title: 'Connect an AI provider',
    body: 'Open Settings → Providers and enter an API key for OpenAI, Ollama, or another supported service to power AIRI\'s responses.',
  },
  {
    icon: 'i-solar:chat-round-dots-outline',
    title: 'Start a conversation',
    body: 'Click the chat input at the bottom of the screen and type a message — AIRI will reply in real time.',
  },
  {
    icon: 'i-solar:user-rounded-outline',
    title: 'Adjust your avatar',
    body: 'Go to Settings → Avatar to load a VRM or Live2D model and fine-tune appearance, expressions, and motion.',
  },
  {
    icon: 'i-solar:settings-outline',
    title: 'Explore more settings',
    body: 'Discover voice synthesis, memory, plugins, and display preferences in the Settings panel to make AIRI truly yours.',
  },
]

const edition = isStageTamagotchi()
  ? t('base.edition.desktop')
  : isStageCapacitor()
    ? t('base.edition.mobile')
    : t('base.edition.web')
</script>

<template>
  <button
    title="About"
    :class="[
      'w-fit p-2',
      'flex justify-center md:items-center self-end',
      'border-2 border-solid border-neutral-100/60 dark:border-neutral-800/30',
      'bg-neutral-50/70 dark:bg-neutral-800/70',
      'backdrop-blur-md',
      'rounded-xl',
    ]"
    @click="show = !show"
  >
    <div i-solar:info-circle-outline class="size-5" text="neutral-500 dark:neutral-400" />
  </button>
  <AboutDialog v-model="show">
    <AboutContent
      :subtitle="edition"
      :description="aboutDescription"
      :quick-start="aboutQuickStart"
      :build-info="buildInfo"
      :links="aboutLinks"
    />
  </AboutDialog>
</template>
