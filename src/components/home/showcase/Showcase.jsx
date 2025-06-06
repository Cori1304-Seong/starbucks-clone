import ShowcaseItem from "./ShowcaseItem";

function Showcase(props) {
  const { carouselItems, title } = props;
  return (
    <section className="px-5 my-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>
        {carouselItems.map((item) => (
          <ShowcaseItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Showcase;
