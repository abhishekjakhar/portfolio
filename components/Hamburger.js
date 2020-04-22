const Hamburger = ({ value, toggleHandler }) => (
  <button
    className={`menu ${value && 'collapsed'}`.trim()}
    onClick={() => toggleHandler(!value)}>
    <div className="menu-bar"></div>
    <div className="menu-bar"></div>
    <div className="menu-bar"></div>
    <style jsx>{`
      .menu {
        outline: none;
        border: none;
        background-color: var(--color-white);
      }

      .menu-bar + .menu-bar {
        margin-top: 6px;
      }

      .menu.collapsed .menu-bar {
        width: 25px;
        transform: rotate(0) translate(0) !important;
        opacity: 1 !important;
      }

      .menu-bar {
        transition: all 0.2s ease-out;
        width: 30px;
        background-color: var(--text-color-darkest);
        height: 2px;
        border-radius: 1px;
        display: block;
      }

      .menu-bar:first-child {
        transform: rotate(45deg) translate(8px, 6px);
      }

      .menu-bar:nth-child(2) {
        opacity: 0;
      }

      .menu-bar:last-child {
        transform: rotate(-45deg) translate(5px, -4px);
      }
    `}</style>
  </button>
)

export default Hamburger
