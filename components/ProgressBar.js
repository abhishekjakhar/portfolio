import NProgress from 'nprogress'
import Router from 'next/router'

let timeout

const start = () => {
  timeout = setTimeout(NProgress.start, 100)
}

const done = () => {
  clearTimeout(timeout)
  NProgress.done()
}

Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', done)
Router.events.on('routeChangeError', done)

export default function ProgressBar() {
  return (
    <style jsx global>
      {`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: rgb(87, 62, 222);
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px rgb(87, 62, 222), 0 0 5px rgb(87, 62, 222);
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
  )
}
