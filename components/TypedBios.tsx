'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from './Twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  const el = useRef<HTMLSpanElement>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I'm aliased as Mason at work.</li>
        <li>I'm a learner, builder, and freedom seeker.</li>
        <li>I live in Ha Noi, Viet Nam.</li>
        <li>I was born in the beautiful Thai Nguyen city.</li>
        <li>My first programming language I learned was Pascal.</li>
        <li>I love web development.</li>
        <li>I'm focusing on building eCommerce software.</li>
        <li>I work mostly with JS/TS technologies.</li>
        {/* <li>{tr.t('bio_9')}</li>
        <li>
          {tr.t('bio_10')} <Twemoji emoji="dog" />
        </li> */}
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="running-shoe" />
          </span>
        </li>
        <li>I love watching football.</li>
        <li>
          I love traveling & savouring delicious food. <Twemoji emoji="airplane-departure" /> &{' '}
          <Twemoji emoji="face-savouring-delicious-food" />
        </li>
        <li>I love Pop, Indie music.</li>
        <li>
          I love playing chess. <Twemoji emoji="chess-pawn" />
        </li>
        <li>
          I love watching the streamer play games. <Twemoji emoji="video-game" />.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
