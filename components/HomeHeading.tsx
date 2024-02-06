import React from 'react'
import Twemoji from './Twemoji'

const HomeHeading = () => {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">Quang Huy Tran</span> - a passionate Software Engineer in
      <span className="hidden font-medium">Ha Noi, VN</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-vietnam" />
      </span>
    </h1>
  )
}

export default HomeHeading
