import './components.css';

function People() {
  function AsideItems() {
    return <div></div>;
  }

  function MainContents() {
    return <div></div>;
  }

  return (
    <div className="component" id="people">
      <aside>
        {AsideItems()}
      </aside>
      <section className="contents">
        {MainContents()}
      </section>
    </div>
  );
}

export default People;
