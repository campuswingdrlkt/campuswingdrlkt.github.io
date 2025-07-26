import CardComponent from "./components/CardComponent";
export default function UpdateSection() {
  const cardDetails = [
    {
      title: "calligraphy competition",
      desc: "A competition to showcase your calligraphy skills.",
      image: "calligraphy.jpg",
      link: "/events/calligraphy",
    },
    {
      title: "quiz competition",
      desc: "Test your knowledge in our fun quiz event.",
      image: "quiz.jpg",
      link: "/events/quiz",
    },
  ];
  return (
    <>
      <div id="updates" className="mx-auto max-w-prose text-center ">
        <h1 className="text-2xl my-10 font-bold text-gray-900 sm:text-3xl dark:text-white">
          Updates and
          <strong className="text-indigo-600"> announcements </strong>
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-3  max-w-[1200px] mx-auto">
        {cardDetails.map((item) => {
          return (
            <CardComponent
              title={item.title}
              desc={item.desc}
              image={item.image}
              link={item.link}
            ></CardComponent>
          );
        })}
      </div>
    </>
  );
}
