import './components.css';

function Teams() {
  function AsideItems() {
    return <div></div>;
  }

  function MainContents() {
    return <div></div>;
  }

  return (
    <div className="component" id="teams">
      <aside>
        {AsideItems()}
      </aside>
      <section className="contents">
        {MainContents()}
      </section>
    </div>
  );
}

export default Teams;
