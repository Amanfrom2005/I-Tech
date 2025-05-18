function PagesTitle({ title, paragraph }) {
  return (
    <section className="page-title">
      <div className="p-t-container">
        <h1 className="p-t-h1">
          <span>#</span> {title}
        </h1>
        <p className="p-t-p">{paragraph}</p>
      </div>
    </section>
  );
}

export default PagesTitle;
