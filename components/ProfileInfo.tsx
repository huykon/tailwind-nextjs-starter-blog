'use client'
import { Backpack, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Twemoji } from './Twemoji'
import siteMetadata from '@/data/siteMetadata'
import XIcon from './social-icons/x.svg'

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 xl:block xl:px-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        Quang Huy (Mason) Tran
      </h3>
      <h5 className="py-2 text-gray-700 dark:text-gray-400">Learner | Builder</h5>
      <div className="mb-2 mt-4 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Backpack strokeWidth={1} size={20} />
          <p className="flex items-center space-x-1 px-2">
            <span>Frontend Engineer</span>
            <span>@</span>
            {/* <a
              target="_blank"
              href="https://weaverse.io"
              rel="noreferrer"
              className="hover:underline"
            >
              Weaverse
            </a> */}
            ShopStack
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <MapPin strokeWidth={1} size={20} />
          <p className="px-2">
            [::1]:443 - Ha Noi,
            <span className="absolute ml-1 inline-flex pt-px">
              <Twemoji emoji="flag-vietnam" />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Mail strokeWidth={1} size={20} />
          <a className="px-2" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
          <a
            target="_blank"
            href={siteMetadata.github}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-github"
          >
            <Github size={20} strokeWidth={1} />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.github}</span>
          </a>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <a
            target="_blank"
            href={siteMetadata.linkedin}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-linkedin"
          >
            <Linkedin size={20} strokeWidth={1} />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.linkedin}</span>
          </a>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <a
            target="_blank"
            href={siteMetadata.twitter}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-x"
          >
            <XIcon className="h-4 w-4" fill="#fff" viewBox="0 0 1200 1227" />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.twitter}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
