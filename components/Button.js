import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, website }) => (
  <button
    type="button"
    className="btn btn-cta"
    href={website}
    target="_blank"
    rel="noopener noreferrer">
    {children}
    <style jsx>{`
      .btn {
        width: auto;
        white-space: nowrap;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        outline: 0;
        border: 0;
      }

      .btn:not(:last-child) {
        margin-right: 2rem;
      }

      @media only screen and (max-width: 37.5em) {
        .btn:not(:last-child) {
          margin-right: 0;
          margin-bottom: 1.2rem;
        }
      }

      .btn-cta {
        line-height: 1;
        min-width: 12rem;
        padding: 1.4rem 2.2rem;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 1.2px;
        color: var(--text-color-darkest);
        background-color: var(--color-link);
        border-radius: 4px;
        opacity: 0.8;
        transition: all 250ms;
      }

      .btn-cta:hover {
        opacity: 1;
      }
    `}</style>
  </button>
)

Button.propType = {
  children: PropTypes.element.isRequired,
  website: PropTypes.string.isRequired,
}

export default Button
