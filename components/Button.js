import React from 'react'

const Button = props => (
  <a
    className="btn btn-cta"
    href={props.website}
    target="_blank"
    rel="noopener noreferrer">
    {props.children}
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

      .btn-cta {
        min-width: 12rem;
        padding: 1rem 2.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: 1.2px;
        color: var(--color-white);
        background-color: var(--color-black);
        opacity: 0.8;
        -webkit-transition: opacity 400ms;
        -o-transition: opacity 400ms;
        transition: opacity 400ms;
      }

      .btn-cta:hover {
        opacity: 1;
      }
    `}</style>
  </a>
)

export default Button
