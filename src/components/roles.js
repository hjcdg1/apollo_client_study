import './components.css';

function Roles() {
  function AsideItems() {
    return <div></div>;
  }

  function MainContents() {
    return <div></div>;
  }

  return (
    <div className="component" id="roles">
      <aside>
        {AsideItems()}
      </aside>
      <section className="contents">
        {MainContents()}
      </section>
    </div>
  );
}

export default Roles;
