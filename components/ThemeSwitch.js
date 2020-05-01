import { useEffect } from 'react'

import * as gtag from '../lib/gtag'

const ThemeSwitch = () => {
  let body = ''
  useEffect(() => {
    body = window.document.body
  })

  const handleThemeChange = e => {
    const isChecked = event.target.checked
    let eventLabel = ''
    if (isChecked) {
      body.classList.remove('light')
      body.classList.add('dark')
      eventLabel = 'Dark'
    } else {
      body.classList.remove('dark')
      body.classList.add('light')
      eventLabel = 'Light'
    }
    gtag.event({
      action: 'theme_change',
      category: 'Theme',
      label: eventLabel,
    })
  }

  return (
    <div className="switch">
      <input
        className="switch__input"
        type="checkbox"
        id="switch"
        onChange={handleThemeChange}
      />
      <label
        aria-hidden="true"
        className="switch__label"
        htmlFor="switch"></label>
      <div aria-hidden="true" className="switch__marker"></div>
      <style jsx>
        {`
          --switch-width: 44px;
          --switch-height: 22px;
          --switch-padding: 2px;
          --switch-animation-duration: 0.2s;

          .switch {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            position: relative;
            width: var(--switch-width);
            height: var(--switch-height);
            border-radius: 50em;
            padding: var(--switch-padding) 0;
          }

          .switch__input,
          .switch__label {
            position: absolute;
            left: 0;
            top: 0;
          }

          .switch__input {
            margin: 0;
            padding: 0;
            opacity: 0;
            height: 0;
            width: 0;
            pointer-events: none;
          }

          .switch__input:checked + .switch__label {
            background-color: var(--color-black);
          }

          .switch__input:checked + .switch__label + .switch__marker {
            left: calc(100% - var(--switch-height) + var(--switch-padding));
          }

          .switch__label {
            width: 100%;
            height: 100%;
            color: transparent;
            user-select: none;
            background-color: var(--color-black);
            border-radius: inherit;
            z-index: 1;
            transition: background var(--switch-animation-duration);
          }

          .switch__marker {
            position: relative;
            background-color: var(--color-white);
            width: calc(var(--switch-height) - var(--switch-padding) * 2);
            height: calc(var(--switch-height) - var(--switch-padding) * 2);
            border-radius: 50%;
            z-index: 2;
            pointer-events: none;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
            left: var(--switch-padding);
            transition: left var(--switch-animation-duration);
            will-change: left;
          }
        `}
      </style>
    </div>
  )
}

export default ThemeSwitch
