import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, website }) => (
  <a
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
        border: 1px solid #e1e3e6;
        -webkit-transition: opacity 400ms;
        -o-transition: opacity 400ms;
        transition: opacity 400ms;
      }
    `}</style>
  </a>
)

Button.propType = {
  children: PropTypes.element.isRequired,
  website: PropTypes.string.isRequired,
}

export default Button
