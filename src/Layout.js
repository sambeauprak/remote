function Layout(props) {
  return (
    <section className="game-section">
      <h2 className="line-title">trending games</h2>
      <div className="owl-carousel custom-carousel owl-theme flex">
        {props.children}
      </div>
    </section>
  );
}

export default Layout;
